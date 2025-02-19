'use client'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import axios from 'axios'

interface CryptoTreeMapProps {
	onSelectCoin: (coinSymbol: string) => void
}

// Динамический импорт ApexCharts
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

export default function CryptoTreeMap({ onSelectCoin }: CryptoTreeMapProps) {
	const [treemapData, setTreemapData] = useState<any[]>([])

	useEffect(() => {
		async function fetchData() {
			try {
				const res = await axios.get(
					'https://api.coingecko.com/api/v3/coins/markets',
					{
						params: {
							vs_currency: 'usd',
							order: 'market_cap_desc',
							per_page: 20,
							page: 1,
						},
					}
				)
				// y = market_cap => площадь
				// colorValue = price_change_percentage_24h => цвет
				const formatted = res.data.map((coin: any) => ({
					x: coin.symbol.toUpperCase(),
					y: coin.market_cap, // площадь
					colorValue: coin.price_change_percentage_24h,
					coinId: coin.id, // чтобы понимать, на какую монету кликнули
				}))
				setTreemapData(formatted)
			} catch (error) {
				console.error('Ошибка загрузки Treemap:', error)
			}
		}
		fetchData()
	}, [])

	const options = {
		chart: {
			type: 'treemap' as const,
			events: {
				dataPointSelection: (event: any, chartContext: any, config: any) => {
					const index = config.dataPointIndex
					if (index >= 0) {
						const coinId = treemapData[index].coinId
						onSelectCoin(coinId)
					}
				},
			},
		},
		plotOptions: {
			treemap: {
				enableShades: false,
				colorScale: {
					colorValue: 'colorValue',
					ranges: [
						{ from: -100, to: 0, color: '#dc2626' }, // красный
						{ from: 0, to: 100, color: '#16a34a' }, // зелёный
					],
				},
			},
		},
		title: {
			text: 'Crypto Market Overview',
			style: { color: '#fff' },
		},
	}

	const series = [
		{
			data: treemapData, // [{x, y, colorValue, coinId}, ...]
		},
	]

	return (
		<Chart
			options={options}
			series={series}
			type='treemap'
			width='100%'
			height='100%'
		/>
	)
}
