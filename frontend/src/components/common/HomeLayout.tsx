'use client'

import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import axios from 'axios'
import BtcUsdcBlock from './BtcUsdcBlock'
// Динамический импорт Treemap
const CryptoTreeMap = dynamic(() => import('./CryptoTreeMap'), { ssr: false })

// Динамический импорт Графика
const CryptoChart = dynamic(() => import('./CryptoChart'), { ssr: false })

export default function HomeLayout() {
	// Состояние выбранной монеты
	const [selectedCoin, setSelectedCoin] = useState('bitcoin')

	// Данные для графика (массив {x: Date, y: number})
	const [chartData, setChartData] = useState<any[]>([])

	const [coinData, setCoinData] = useState<any>(null)

	// Выбор монеты из тепловой карты
	function handleSelectCoin(coinId: string) {
		setSelectedCoin(coinId)
	}

	useEffect(() => {
		async function fetchCoinData() {
			const url = `https://api.coingecko.com/api/v3/coins/${selectedCoin}`
			const res = await fetch(url)
			const data = await res.json()
			setCoinData(data)
		}
		fetchCoinData()
	}, [selectedCoin])

	// Загружаем данные для графика (за 7 дней)
	useEffect(() => {
		async function fetchChartData() {
			try {
				const res = await axios.get(
					`https://api.coingecko.com/api/v3/coins/${selectedCoin}/market_chart`,
					{ params: { vs_currency: 'usd', days: 7 } }
				)
				// Преобразуем формат
				// res.data.prices = [[timestamp, price], [timestamp, price], ...]
				const formatted = res.data.prices.map((item: [number, number]) => ({
					x: new Date(item[0]),
					y: item[1],
				}))
				setChartData(formatted)
			} catch (error) {
				console.error('Ошибка при загрузке данных для графика:', error)
			}
		}
		fetchChartData()
	}, [selectedCoin])

	return (
		<div className='p-2 pl-20 space-y-4 w-full h-full'>
			<div className='h-full overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#515151] hover:scrollbar-thumb-gray-600'>
				{/* Левая часть (Market Map + BTC/USDC + График) */}
				<div className='flex-1 p-4 space-y-4'>
					{/* Верхняя строка: Market Map слева, BTC/USDC справа */}
					<div className='flex gap-8'>
						{/* Market Map (занимает все доступное пространство) */}
						<div className='flex-1 w-[42em]'>
							<div className='h-[34em]'>
								{/* Тепловая карта (передаем handleSelectCoin) */}
								<CryptoTreeMap onSelectCoin={handleSelectCoin} />
							</div>
							<div className='flex justify-end mt-2 space-x-12 text-[#838383] text-[12px]'>
								<span className='cursor-pointer hover:text-white'>DAILY</span>
								<span className='cursor-pointer hover:text-white'>WEEKLY</span>
								<span className='cursor-pointer hover:text-white'>MONTHLY</span>
								<span className='cursor-pointer hover:text-white'>
									THIS YEAR
								</span>
							</div>
						</div>

						{/* BTC/USDC */}
						<BtcUsdcBlock coinData={coinData} />
					</div>

					{/* Нижний блок: График */}

					{/* График, передаем chartData */}
					<CryptoChart coinId='bitcoin' />
				</div>
			</div>
		</div>
	)
}
