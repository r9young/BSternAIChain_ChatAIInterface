'use client'

import React from 'react'

const networks = [
	{ name: 'Ethereum', price: '$19,783.46', icon: '/icons/ETH.png' },
	{ name: 'OP', price: '$823.3', icon: '/icons/OP.png' },
	{ name: 'Scroll', price: '$53.1', icon: '/icons/Scroll.png' },
	{ name: 'Aurora', price: '$43', icon: '/icons/Aurora.png' },
	{ name: 'BNB Chain', price: '$783', icon: '/icons/BNB.png' },
	{ name: 'Base', price: '$22.32', icon: '/icons/Base.png' },
	{ name: 'zkSync Era', price: '$21.2', icon: '/icons/zkSync.png' },
	{ name: 'CORE', price: '$533', icon: '/icons/Core.png' },
	{ name: 'Polygon', price: '$776', icon: '/icons/Polygon.png' },
	{ name: 'BStern', price: '$876', icon: '/icons/BStern.png' },
	{ name: 'Mode', price: '$34.7', icon: '/icons/Mode.png' },
	{ name: 'Mantle', price: '$57.5', icon: '/icons/Mantle.png' },
	{ name: 'Zora', price: '$76.4', icon: '/icons/Zora.png' },
	{ name: 'Fuse', price: '$64.6', icon: '/icons/Fuse.png' },
	{ name: 'Linea', price: '$98.2', icon: '/icons/Linea.png' },
	{ name: 'Avalanche', price: '$43.6', icon: '/icons/Avalanche.png' },
	{ name: 'Blast', price: '$87.4', icon: '/icons/Blast.png' },
	{ name: 'BNB', price: '$192.5', icon: '/icons/BNB.png' },
	{ name: 'Moonriver', price: '$65.7', icon: '/icons/Moonriver.png' },
]
const rows = [
	{
		tokenIcon: '/icons/USDT.png',
		tokenName: 'USDT',
		price: '$1.001',
		change7d: '0%',
		change24h: '0%',
		amount: '120,232.2',
		usdValue: '$120,232.2',
	},
	{
		tokenIcon: '/icons/eth.png',
		tokenName: 'ETH',
		price: '$3,230.2',
		change7d: '+1.66%',
		change24h: '-4.85%',
		amount: '10',
		usdValue: '$37,026',
	},
	{
		tokenIcon: '/icons/Blast.png',
		tokenName: 'BLAST',
		price: '$0.01284',
		change7d: '-1.3%',
		change24h: '+6.54%',
		amount: '10155',
		usdValue: '$130.477',
	},
	{
		tokenIcon: '/icons/USDC.png',
		tokenName: 'USDC',
		price: '$1.001',
		change7d: '0%',
		change24h: '0%',
		amount: '1,200',
		usdValue: '$1,200',
	},
	{
		tokenIcon: '/icons/APE.png',
		tokenName: 'APE',
		price: '$1.1897',
		change7d: '+3.80%',
		change24h: '-13.85%',
		amount: '1.8024',
		usdValue: '$2.14',
	},
	{
		tokenIcon: '/icons/WETH.png',
		tokenName: 'WETH',
		price: '$3,434.27',
		change7d: '-0.1%',
		change24h: '-4.65%',
		amount: '0.000375',
		usdValue: '$1.20',
	},
	{
		tokenIcon: '/icons/WETH.png',
		tokenName: 'WETH',
		price: '$3,434.27',
		change7d: '-0.1%',
		change24h: '-4.65%',
		amount: '0.000375',
		usdValue: '$1.20',
	},
	{
		tokenIcon: '/icons/WETH.png',
		tokenName: 'WETH',
		price: '$3,434.27',
		change7d: '-0.1%',
		change24h: '-4.65%',
		amount: '0.000375',
		usdValue: '$1.20',
	},
	{
		tokenIcon: '/icons/WETH.png',
		tokenName: 'WETH',
		price: '$3,434.27',
		change7d: '-0.1%',
		change24h: '-4.65%',
		amount: '0.000375',
		usdValue: '$1.20',
	},
	{
		tokenIcon: '/icons/WETH.png',
		tokenName: 'WETH',
		price: '$3,434.27',
		change7d: '-0.1%',
		change24h: '-4.65%',
		amount: '0.000375',
		usdValue: '$1.20',
	},
	{
		tokenIcon: '/icons/WETH.png',
		tokenName: 'WETH',
		price: '$3,434.27',
		change7d: '-0.1%',
		change24h: '-4.65%',
		amount: '0.000375',
		usdValue: '$1.20',
	},
	{
		tokenIcon: '/icons/WETH.png',
		tokenName: 'WETH',
		price: '$3,434.27',
		change7d: '-0.1%',
		change24h: '-4.65%',
		amount: '0.000375',
		usdValue: '$1.20',
	},
	{
		tokenIcon: '/icons/WETH.png',
		tokenName: 'WETH',
		price: '$3,434.27',
		change7d: '-0.1%',
		change24h: '-4.65%',
		amount: '0.000375',
		usdValue: '$1.20',
	},
	{
		tokenIcon: '/icons/WETH.png',
		tokenName: 'WETH',
		price: '$3,434.27',
		change7d: '-0.1%',
		change24h: '-4.65%',
		amount: '0.000375',
		usdValue: '$1.20',
	},
	{
		tokenIcon: '/icons/WETH.png',
		tokenName: 'WETH',
		price: '$3,434.27',
		change7d: '-0.1%',
		change24h: '-4.65%',
		amount: '0.000375',
		usdValue: '$1.20',
	},
	{
		tokenIcon: '/icons/WETH.png',
		tokenName: 'WETH',
		price: '$3,434.27',
		change7d: '-0.1%',
		change24h: '-4.65%',
		amount: '0.000375',
		usdValue: '$1.20',
	},
	{
		tokenIcon: '/icons/WETH.png',
		tokenName: 'WETH',
		price: '$3,434.27',
		change7d: '-0.1%',
		change24h: '-4.65%',
		amount: '0.000375',
		usdValue: '$1.20',
	},
	{
		tokenIcon: '/icons/WETH.png',
		tokenName: 'WETH',
		price: '$3,434.27',
		change7d: '-0.1%',
		change24h: '-4.65%',
		amount: '0.000375',
		usdValue: '$1.20',
	},
	{
		tokenIcon: '/icons/WETH.png',
		tokenName: 'WETH',
		price: '$3,434.27',
		change7d: '-0.1%',
		change24h: '-4.65%',
		amount: '0.000375',
		usdValue: '$1.20',
	},
	{
		tokenIcon: '/icons/WETH.png',
		tokenName: 'WETH',
		price: '$3,434.27',
		change7d: '-0.1%',
		change24h: '-4.65%',
		amount: '0.000375',
		usdValue: '$1.20',
	},
	// ... добавьте остальные (BLAST, USDC, APE, WETH)
]

interface Segment {
	color: string
	widthPercent: number
}

interface TokenItem {
	id: string
	icon: string
	name: string
	price: string
	change7d: string
	change24h: string
	amount: string
	usdValue: string
}

interface BarData {
	name: string
	icon: string
	segments: Segment[]
	totalPercent: number
}

const bars: BarData[] = [
	{
		name: 'Ethereum',
		icon: '/icons/ETH.png',
		segments: [
			{ color: 'bg-pink-500', widthPercent: 5 },
			{ color: 'bg-yellow-400', widthPercent: 10 },
			{ color: 'bg-green-600', widthPercent: 25 },
			{ color: 'bg-blue-500', widthPercent: 33 },
		],
		totalPercent: 23.18,
	},
	{
		name: 'OP',
		icon: '/icons/op.png',
		segments: [
			{ color: 'bg-pink-500', widthPercent: 15 },
			{ color: 'bg-yellow-400', widthPercent: 10 },
			{ color: 'bg-red-500', widthPercent: 40 },
		],
		totalPercent: 15.94,
	},
	{
		name: 'Scroll',
		icon: '/icons/scroll.png',
		segments: [
			{ color: 'bg-blue-500', widthPercent: 10 },
			{ color: 'bg-pink-500', widthPercent: 30 },
		],
		totalPercent: 9.67,
	},
	{
		name: 'Aurora',
		icon: '/icons/aurora.png',
		segments: [
			{ color: 'bg-purple-500', widthPercent: 5 },
			{ color: 'bg-pink-500', widthPercent: 5 },
			{ color: 'bg-green-500', widthPercent: 20 },
		],
		totalPercent: 7.36,
	},
]

interface LegendItem {
	label: string
	value: string
	color: string
}

const legendItems = [
	{ label: 'USDT', value: '$10,232.2', color: 'bg-blue-400' },
	{ label: 'ETH', value: '$37,026', color: 'bg-green-500' },
	{ label: 'USDC', value: '$130,477', color: 'bg-yellow-500' },
	{ label: 'BLAST', value: '$1,200', color: 'bg-pink-500' },
	{ label: 'APE', value: '$2.14', color: 'bg-orange-400' },
	{ label: 'WETH', value: '$1.20', color: 'bg-cyan-500' },
]

const ReviewContent: React.FC = () => {
	return (
		<div className='text-white space-y-4'>
			<div className='flex flex-col lg:flex-row gap-6 mx-4 border-b border-[#212224] pb-6 '>
				<div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 p-4 gap-[5px] bg-[#0F0F0F] rounded'>
					{networks.map(net => (
						<div
							key={net.name}
							className=' w-[110px] h-[42px] 
             text-white rounded 
             p-2 flex items-center 
             hover:bg-[#191919]
             transition
             cursor-pointer'
						>
							{/* Icon */}
							<img
								src={net.icon}
								alt={net.name}
								className='w-7 h-7 object-contain'
							/>
							{/* Title */}
							<div className='ml-2 flex flex-col'>
								<span className='text-white text-[9px] opacity-50'>
									{net.name}
								</span>
								{/* Price */}
								<span className='text-white text-[10px]'>{net.price}</span>
							</div>
						</div>
					))}
					<div
						className='w-[120px] h-[42px] 
                flex flex-col justify-end 
                p-2 rounded hover:text-white
                transition text-neutral-400 text-[9px] cursor-pointer'
					>
						More...
					</div>
				</div>

				<div className='bg-[#0F0F0F] text-white rounded'>
					<div className='flex flex-col md:flex-row w-[33em]'>
						<div className='space-y-4 p-4'>
							{bars.map(item => {
								let sumWidth = item.segments.reduce(
									(acc, s) => acc + s.widthPercent,
									0
								)
								sumWidth = Math.min(sumWidth, 100)

								return (
									<div key={item.name} className='flex items-center'>
										<div className='w-[6em] flex items-center '>
											<img
												src={item.icon}
												alt={item.name}
												className='w-6 h-6 mr-2 object-contain'
											/>
											<span className='text-[9px] text-neutral-300'>
												{item.name}
											</span>
										</div>

										<div
											className='relative h-4 overflow-hidden'
											style={{ width: '14em' }}
										>
											{/* Segments */}
											{item.segments.map((seg, idx) => {
												const leftSum = item.segments
													.slice(0, idx)
													.reduce((acc, s) => acc + s.widthPercent, 0)

												return (
													<div
														key={idx}
														className={`absolute top-0 h-full ${seg.color}`}
														style={{
															left: `${leftSum}%`,
															width: `${seg.widthPercent}%`,
														}}
													/>
												)
											})}

											<div
												className='absolute top-1/2 text-[10px] whitespace-nowrap'
												style={{
													left: `${sumWidth}%`,
													transform: 'translateY(-50%)',
													marginLeft: '4px',
												}}
											>
												{item.totalPercent}%
											</div>
										</div>
									</div>
								)
							})}

							<div className='text-neutral-400 text-[9px] hover:text-white cursor-pointer'>
								More...
							</div>
						</div>

						{/* The right side is the legend */}
						<div className='w-[8em] h-[9em] items-center bg-[#141414] my-8 p-2'>
							{legendItems.map(leg => (
								<div
									key={leg.label}
									className='flex items-center space-x-2 mb-2 last:mb-0'
								>
									<div className='flex w-[3em] items-center space-x-2'>
										<div className={`w-1.5 h-1.5 ${leg.color}`} />
										<span className='text-[10px]'>{leg.label}</span>
									</div>
									<span className='text-[10px] text-neutral-300'>
										{leg.value}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Token table (bottom part) */}
			<div className=' text-white px-4 space-y-1'>
				{/* Шапка (одна «строка») */}
				<div className='flex w-full items-center px-3 py-2 text-[11px] text-[#2F2F2F]'>
					{/* Левый (Token) */}
					<div className='flex-shrink-0 w-48'>Token</div>
					{/* Центральный блок (Price, 7d Change, 24h Change, Amount) */}
					<div className='flex-grow flex px-20 space-x-20'>
						<div className='w-24'>Price</div>
						<div className='w-20'>7d Change</div>
						<div className='w-20'>24h Change</div>
						<div className='w-20 pl-20'>Amount</div>
					</div>
					{/* Правый блок (USD Value) */}
					<div className='flex-shrink-0 w-20 text-left'>USD Value</div>
				</div>
				<div className='h-[50em] overflow-y-auto scrollbar-hide space-y-1'>
					{/* Тело (каждая «строка» данных) */}
					{rows.map((row, idx) => {
						// Цвета для изменений
						const color7d = row.change7d.startsWith('+')
							? 'text-green-400'
							: row.change7d.startsWith('-')
							? 'text-red-400'
							: ''
						const color24h = row.change24h.startsWith('+')
							? 'text-green-400'
							: row.change24h.startsWith('-')
							? 'text-red-400'
							: ''

						return (
							<div
								key={idx}
								className='flex w-full h-12 items-center text-[11px] px-3 py-2 bg-[#0F0F0F] hover:bg-neutral-800 transition'
							>
								{/* Левый блок (иконка + название токена) */}
								<div className='flex-shrink-0 w-48 flex text-neutral-400 items-center space-x-2'>
									<img
										src={row.tokenIcon}
										alt={row.tokenName}
										className='w-5 h-5 object-contain'
									/>
									<span>{row.tokenName}</span>
								</div>

								{/* Центральный блок */}
								<div className='flex-grow flex px-20 space-x-20'>
									<div className='w-24'>{row.price}</div>
									<div className={`w-20 ${color7d}`}>{row.change7d}</div>
									<div className={`w-20 ${color24h}`}>{row.change24h}</div>
									<div className='w-20 px-20'>{row.amount}</div>
								</div>

								{/* Правый блок (USD Value) */}
								<div className='flex-shrink-0 w-20 text-left'>
									{row.usdValue}
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default ReviewContent
