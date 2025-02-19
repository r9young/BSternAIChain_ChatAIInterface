'use client'
import React from 'react'
import Image from 'next/image'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'

interface BtcUsdcBlockProps {
	// Укажите точный тип, если у вас есть интерфейс coinData
	coinData: any | null
}

// Объявляем функцию форматирования
function formatNumber(num: number | undefined): string {
	if (!num || typeof num !== 'number') return '0'

	if (num >= 1e12) return (num / 1e12).toFixed(2) + 'T'
	if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B'
	if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M'
	if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K'
	return num.toString()
}

export default function BtcUsdcBlock({ coinData }: BtcUsdcBlockProps) {
	// Защита от null
	if (!coinData) {
		return (
			<div className='bg-[#101010] p-4 rounded-lg w-[300px] text-white flex flex-col items-center text-center'>
				<p className='text-gray-400'>Loading...</p>
			</div>
		)
	}

	// Извлекаем нужные поля
	const symbol = coinData.symbol?.toUpperCase() ?? 'BTC'
	const name = coinData.name ?? 'Bitcoin'
	const currentPrice = coinData.market_data?.current_price?.usd ?? 0
	const priceStr = currentPrice.toLocaleString() // форматируем
	const priceChange24h = coinData.market_data?.price_change_percentage_24h ?? 0

	// Если нужно отобразить стрелку ↑/↓
	const isPositive = priceChange24h >= 0

	// Доп. поля
	const liquidity = coinData.market_data?.total_volume?.usd ?? 0
	const fdv = coinData.market_data?.fully_diluted_valuation?.usd ?? 0
	const marketCap = coinData.market_data?.market_cap?.usd ?? 0

	// Для "PRICE USD" в карточке
	// Можете заменить на любые данные
	const priceUsd = currentPrice

	// Пример: «5m», «1H», «6H» не приходят напрямую из CoinGecko,
	// поэтому оставим заглушки (или дополните своей логикой)
	const change5m = coinData?.change_5m ?? 0
	const change1h = coinData?.change_1h ?? 0
	const change6h = coinData?.change_6h ?? 0

	// Пример Buys / Sells
	const buys = 78524
	const sells = 69837
	// Рассчитываем процент для прогресс-бара
	const total = buys + sells
	const buysPercent = (buys / total) * 100

	const sellsPercent = 100 - buysPercent

	return (
		<div className='w-[300px] pt-[5em] text-white flex flex-col'>
			{/* Заголовок: BTC/USDC + иконка */}
			<div className='flex items-center space-x-2 mb-1'>
				<h2 className='text-[14px]'>{symbol}/USDC</h2>
				{/* Пример иконки монеты (замените на свою) */}
				<Image
					src='/icons/btc.png'
					alt='Waitlist Logo'
					width={17}
					height={17}
				/>
			</div>
			{/* Подзаголовок (Bitcoin) */}
			<p className='text-gray-400 text-[11px]'>{name}</p>

			{/* Заголовок PRICE */}
			<p className='text-gray-400 text-[13px] mt-5'>PRICE</p>

			{/* PRICE и изменение */}
			<div className='mt-5 mb-7'>
				<span className='text-green-400 text-[16px]'>${priceStr}</span>{' '}
				<span
					className={`text-base ml-1 ${
						isPositive ? 'text-green-500' : 'text-red-500'
					}`}
				>
					({priceChange24h.toFixed(2)}%)
				</span>{' '}
				{isPositive ? (
					<FaArrowUp className='inline w-2 text-green-500' />
				) : (
					<FaArrowDown className='inline w-2 text-red-500' />
				)}
			</div>

			{/* Сетка (PRICE USD, LIQUIDITY, FDV, MKT CAP) */}
			<div className='grid grid-cols-2 text-[9px] uppercase gap-2 mt-2 w-full'>
				{/* PRICE USD */}
				<div className='relative p-8 border border-[#191919]'>
					<span className='text-[#8F8F8F] absolute top-1 left-2'>
						PRICE USD
					</span>
					<span className='text-white text-[10px] absolute bottom-1 right-2'>
						${priceUsd.toLocaleString()}
					</span>
				</div>
				{/* LIQUIDITY */}
				<div className='relative p-8 border border-[#191919]'>
					<span className='text-[#8F8F8F] absolute top-1 left-2'>
						LIQUIDITY
					</span>
					<span className='text-white text-[10px] absolute bottom-1 right-2'>
						{formatNumber(liquidity)}
					</span>
				</div>
				{/* FDV */}
				<div className='relative p-8 border border-[#191919]'>
					<span className='text-[#8F8F8F] absolute top-1 left-2'>FDV</span>
					<span className='text-white text-[10px] absolute bottom-1 right-2'>
						{formatNumber(fdv)}
					</span>
				</div>
				{/* MKT CAP */}
				<div className='relative p-8 border border-[#191919]'>
					<span className='text-[#8F8F8F] absolute top-1 left-2'>MKT CAP</span>
					<span className='text-white text-[10px] absolute bottom-1 right-2'>
						{formatNumber(marketCap)}
					</span>
				</div>
			</div>

			{/* Маленькие боксы (5m, 1H, 6H, 24H) */}
			<div className='grid grid-cols-4 mt-2 text-[9px] uppercase'>
				<div className='relative p-7 border border-[#191919]'>
					<span className='text-[#8F8F8F] absolute top-1 left-2'>5M</span>
					<span
						className={`
        absolute bottom-1 right-2 text-[10px]
        ${change5m >= 0 ? 'text-green-400' : 'text-red-400'}
      `}
					>
						{change5m.toFixed(2)}%
					</span>
				</div>
				<div className='relative p-7 border border-[#191919]'>
					<span className='text-[#8F8F8F] absolute top-1 left-2'>1H</span>
					<span
						className={`
        absolute bottom-1 right-2 text-[10px]
        ${change1h >= 0 ? 'text-green-400' : 'text-red-400'}
      `}
					>
						{change1h.toFixed(2)}%
					</span>
				</div>
				<div className='relative p-7 border border-[#191919]'>
					<span className='text-[#8F8F8F] absolute top-1 left-2'>6H</span>
					<span
						className={`
        absolute bottom-1 right-2 text-[10px]
        ${change6h >= 0 ? 'text-green-400' : 'text-red-400'}
      `}
					>
						{change6h.toFixed(2)}%
					</span>
				</div>
				<div className='relative p-7 border border-[#191919]'>
					<span className='text-[#8F8F8F] absolute top-1 left-2'>24H</span>
					<span
						className={`${
							priceChange24h >= 0 ? 'text-green-400' : 'text-red-400'
						} text-[10px] absolute bottom-1 right-2`}
					>
						{priceChange24h.toFixed(2)}%
					</span>
				</div>
			</div>

			{/* Buys / Sells */}
			<div className='border border-[#191919] text-[9px] uppercase w-full mt-2 pb-2 pt-3 px-4'>
				{/* Заголовок: BUYS (слева) и SELLS (справа) */}
				<div className='flex items-center justify-between text-[#7B7B7B]'>
					<span>BUYS</span>
					<span>SELLS</span>
				</div>

				{/* Числа Buys / Sells */}
				<div className='flex items-center justify-between mt-2 mb-1 text-[11px]'>
					<span className='text-white'>{buys.toLocaleString()}</span>
					<span className='text-white'>{sells.toLocaleString()}</span>
				</div>

				{/* Полоса прогресса (зелёная + красная) */}
				<div className='relative w-full h-1 bg-gray-700 rounded  mb-2'>
					{/* Зелёная полоса слева */}
					<div
						className='absolute left-0 top-0 h-1 bg-green-500 rounded'
						style={{ width: `${buysPercent}%` }}
					/>
					{/* Красная полоса справа */}
					<div
						className='absolute right-0 top-0 h-1 bg-red-500 rounded'
						style={{ width: `${sellsPercent}%` }}
					/>
				</div>
			</div>
		</div>
	)
}
