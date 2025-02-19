// components/TransactionsTable.tsx

import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { SlArrowDown, SlArrowUp } from 'react-icons/sl'

interface Transaction {
	id: string
	from: string
	gasFee: string
	sum: string
	currency: string
	sumUsd: string
	to: string
	time: string
	hash: string
	networkIcon: string
	profilIcon: string
	coinIcon: string
	etherscanLink: string
}

const transactions: Transaction[] = [
	{
		id: '1',
		from: '0xF567_K789L012',
		gasFee: '0.0002 ETH ($0.06)',
		sum: '+4.5',
		currency: 'ETH',
		sumUsd: '($9.21)',
		to: '0xFFA43_56GGHH',
		time: '22/11/2024 08:30 AM',
		hash: '0XTX12347ABCDE67890FGHIJKLMNO1234567890ABCDEF1234567890ABCDEF',
		networkIcon: '/icons/ETH.png',
		coinIcon: '/icons/ETH.png',
		profilIcon: '/icons/Lifi.png',
		etherscanLink: 'https://etherscan.io/tx/0XTX12347ABCDE',
	},
	{
		id: '2',
		from: '0xABC123_456DEF',
		gasFee: '0.0001 ETH ($0.03)',
		sum: '-6.86',
		currency: 'USDC',
		sumUsd: '($6.84)',
		to: '0x429D_366D',
		time: '2024/07/01 10:00 AM',
		hash: '0XTX12347ABCDE67890FGHIJKLMNO1234567890ABCDEF1234567890ABCDEF',
		networkIcon: '/icons/ETH.png',
		coinIcon: '/icons/USDT.png',
		profilIcon: '/icons/Lifi.png',
		etherscanLink: 'https://etherscan.io/tx/0XTXABCDEF67890FGH',
	},
	{
		id: '3',
		from: '0x429D_366D',
		gasFee: '0.0003 ETH ($0.09)',
		sum: '-1.5',
		currency: 'ETH',
		sumUsd: '($4.80)',
		to: '0x123456_789ABC',
		time: '2024/07/02 04:15 PM',
		hash: '0XTX12347ABCDE67890FGHIJKLMNO1234567890ABCDEF1234567890ABCDEF',
		networkIcon: '/icons/ETH.png',
		coinIcon: '/icons/USDC.png',
		profilIcon: '/icons/Lifi.png',
		etherscanLink: 'https://etherscan.io/tx/0XTX987654321ABC',
	},
]

const TransactionsTable: React.FC = () => {
	const [expanded, setExpanded] = useState<string | null>(null)
	const toggleExpand = (id: string) => {
		setExpanded(expanded === id ? null : id)
	}

	return (
		<div className=' m-4 text-sm text-neutral-200'>
			{/* Шапка таблицы с пагинацией/кнопками “Back | 1 2 3 4 5… | Latest” и иконкой поиска */}
			<div className='flex items-center space-x-4 mb-2'>
				<div className='text-[#656565] text-[11px] ml-auto space-x-1'>
					<button className='hover:text-white'>Back</button>
					<span>|</span>
					<button className='hover:text-white'>1 2 3 4 5...</button>
					<span>|</span>
					<button className='hover:text-white'>Latest</button>
				</div>
				<div className='relative'>
					<input
						type='text'
						className='w-[25em] bg-[#101010] border border-[#373737] text-white text-[11px] px-3 py-1 focus:outline-none'
					/>
					<span className='absolute top-1.5 right-2 text-neutral-400'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-4 w-4'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth={2}
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M21 21l-4.35-4.35m0 0a7.5 
                   7.5 0 10-10.6 0 7.5 7.5 0 
                   0010.6 0z'
							/>
						</svg>
					</span>
				</div>
			</div>

			<div className='w-full text-white py-4'>
				{/* Заголовки */}
				<table className='w-full border-separate border-spacing-y-2'>
					<thead>
						<tr className='text-left text-[#2F2F2F] text-[11px]'>
							<th className='py-2 px-3'>From</th>
							<th className='py-2 px-3'>Gas Fee</th>
							<th className='py-2 px-3'>Sum</th>
							<th className='py-2 px-3'>To</th>
							<th className='py-2 px-3'>Time</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{transactions.map(tx => (
							<>
								{/* Основная строка транзакции */}
								<tr
									key={tx.id}
									className='bg-[#1A1A1A] hover:bg-[#191919] border-b border-[#2C2C2C] cursor-pointer transition-all'
									onClick={() => toggleExpand(tx.id)}
								>
									<td className='py-3 px-3 text-[#CBCBCB] text-[11px] flex items-center'>
										<img
											src={tx.profilIcon}
											alt='icon'
											className='w-7 h-7 mr-2'
										/>
										{tx.from}
									</td>
									<td className='py-3 px-3 text-[#CBCBCB] text-[11px]'>
										{tx.gasFee}
									</td>
									<td className='py-3 px-3 text-[11px] flex items-center'>
										<img
											src={tx.coinIcon}
											alt='icon'
											className='w-5 h-5 mr-2'
										/>
										{tx.sum} {tx.currency}{' '}
										<span
											className={
												tx.sum.startsWith('-')
													? 'text-red-500'
													: 'text-green-500'
											}
										>
											{tx.sumUsd}
										</span>
									</td>
									<td className='py-3 px-3 text-[11px] text-[#CBCBCB] underline'>
										{tx.to}
									</td>
									<td className='py-3 px-3 text-[11px] text-[#CBCBCB]'>
										{tx.time}
									</td>
									<td className='py-3 px-3 text-right text-gray-400'>
										{expanded === tx.id ? <SlArrowUp /> : <SlArrowDown />}
									</td>
								</tr>

								{/* Раскрытая дополнительная информация */}
								{expanded === tx.id && (
									<tr className='bg-[#1A1A1A]'>
										<td colSpan={6} className='p-0'>
											{' '}
											{/* Убираем padding */}
											<div className='flex items-center text-[11px] space-x-4 px-3 py-2'>
												<span className='truncate text-white'>{tx.hash}</span>
												<img
													src={tx.networkIcon}
													alt='network'
													className='w-5'
												/>
												<FaArrowRight />
												<a
													href={tx.etherscanLink}
													target='_blank'
													rel='noopener noreferrer'
													className='text-blue-400 hover:underline flex items-center'
												>
													Go to EtherScan
												</a>
											</div>
										</td>
									</tr>
								)}
							</>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default TransactionsTable
