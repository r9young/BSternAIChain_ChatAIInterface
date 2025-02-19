'use client'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import axios from 'axios'

// Динамический импорт, чтобы избежать проблем с SSR
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

interface DataPoint {
	x: number // timestamp в миллисекундах
	y: number // цена
}

interface CryptoChartProps {
	coinId?: string // ID монеты (если нужно загружать из API)
}

export default function CryptoChart({ coinId = 'bitcoin' }: CryptoChartProps) {
	const [chartData, setChartData] = useState<DataPoint[]>([])

	// Пример: загрузка данных CoinGecko (или другого API) за 7 дней
	useEffect(() => {
		async function fetchData() {
			try {
				const res = await axios.get(
					`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart`,
					{ params: { vs_currency: 'usd', days: 7 } }
				)
				// data.prices = [[timestamp, price], ...]
				const formatted = res.data.prices.map((item: [number, number]) => ({
					x: item[0], // timestamp в миллисекундах
					y: item[1], // цена
				}))
				setChartData(formatted)
			} catch (error) {
				console.error('Ошибка при загрузке данных для графика:', error)
			}
		}
		fetchData()
	}, [coinId])

	// Настройки ApexCharts
	const options = {
		chart: {
			type: 'line' as const,
			background: 'transparent', // чтобы фон был прозрачным (контейнер сам тёмный)
			foreColor: '#999', // цвет подписей осей, тултипов
			toolbar: { show: false }, // скрыть верхнюю панель инструментов
		},
		stroke: {
			curve: 'smooth' as const,
			width: 2,
			colors: ['#16a34a'], // зелёная линия
		},
		colors: ['#16a34a'], // для точек, если включены
		grid: {
			borderColor: '#333', // цвет сетки
			strokeDashArray: 3, // штриховка
		},
		xaxis: {
			type: 'datetime' as const,
			labels: {
				style: { colors: '#999' },
			},
			axisBorder: { color: '#444' },
			axisTicks: { color: '#444' },
		},
		yaxis: {
			opposite: true,
			labels: {
				// Функция форматирования для оси Y
				formatter: (val: number) => val.toFixed(2),
			},
		},
		tooltip: {
			theme: 'dark' as const,
			x: { format: 'yyyy/MM/dd HH:mm' },
			y: {
				// Форматирование значения в тултипе
				formatter: (val: number) => val.toFixed(2),
			},
		},
		legend: { show: false }, // скрыть легенду (если не нужна)
	}

	// series (одна линия "Price")
	const series = [
		{
			name: 'Price',
			data: chartData, // [{ x: timestamp, y: price }, ...]
		},
	]

	return (
		<div className='bg-[#0A0A0A] p-4'>
			<span className='cursor-pointer hover:text-white text-[14px] pl-3'>
				BTC/USDC
			</span>
			<div className='flex space-x-4 text-gray-400 mt-3 pl-3 text-[11px]'>
				<span className='cursor-pointer hover:text-white'>Time</span>
				<span className='cursor-pointer hover:text-white'>1s</span>
				<span className='cursor-pointer hover:text-white'>15m</span>
				<span className='cursor-pointer hover:text-white'>1H</span>
				<span className='cursor-pointer hover:text-white'>4H</span>
				<span className='cursor-pointer hover:text-white'>1D</span>
				<span className='cursor-pointer hover:text-white'>1W</span>
			</div>
			<div className='h-[300px]'>
				<Chart
					options={options}
					series={series}
					type='line'
					width='100%'
					height='100%'
				/>
			</div>
		</div>
	)
}
