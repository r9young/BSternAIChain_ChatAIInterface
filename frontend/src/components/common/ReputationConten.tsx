'use client'

import React from 'react'
import { useEffect, useState } from 'react'
import lineaIcon from '../../../public/icons/Linea.png'
import ethIcon from '../../../public/icons/ETH.png'
import { SlArrowDown } from 'react-icons/sl'
import { RxQuestionMarkCircled } from 'react-icons/rx'

interface ChainData {
	reputation: number
	totalTransactions: number
	activeWallet: string | number
	totalVolume: string
	firstTransaction?: number
	gasSpent?: string
	lastTransaction?: string
	totalInteractions?: string
	chartDataLine?: any[]
	chartDataBar?: any[]
}

const chainInfo: Record<string, ChainData> = {
	linea: {
		reputation: 79,
		totalTransactions: 449,
		activeWallet: 337,
		totalVolume: '$2072.82',
		firstTransaction: 50,
		gasSpent: '$29.78',
		lastTransaction: '03/07/2024',
		totalInteractions: '22/06/2023',
		chartDataLine: [],
		chartDataBar: [],
	},
	ethereum: {
		reputation: 92,
		totalTransactions: 1234,
		activeWallet: 251,
		totalVolume: '$9999.99',
		firstTransaction: 100,
		gasSpent: '$45.12',
		lastTransaction: '15/06/2024',
		totalInteractions: '10/05/2023',
		chartDataLine: [],
		chartDataBar: [],
	},
	// Дополните при необходимости (op, bnb, ...)
}

const ReputationContent: React.FC = () => {
	// Текущее выбранное значение — "linea" по умолчанию
	const [selectedChain, setSelectedChain] = useState<string>('linea')

	// Достаем данные для текущей сети
	const data = chainInfo[selectedChain]

	// Локальный стейт для анимации заполнения
	const [currentWidth, setCurrentWidth] = useState(0)

	// При каждом изменении data.reputation плавно «доезжаем» до нового значения
	useEffect(() => {
		setCurrentWidth(data.reputation)
	}, [data.reputation])

	// Если data может быть undefined, стоит проверить (но в нашем примере все есть)

	const handleChangeChain = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedChain(e.target.value)
	}

	const iconSrc = selectedChain === 'linea' ? lineaIcon.src : ethIcon.src

	return (
		<div className='w-full text-whit px-4 space-y-6'>
			{/* Верхняя панель */}
			<div className='flex flex-wrap items-center justify-between space-y-2 sm:space-y-0'>
				{/* Select chain */}
				<div className='flex items-center space-x-2'>
					<div className='relative inline-block'>
						<select
							value={selectedChain}
							onChange={handleChangeChain}
							// Базовые классы для стилей:
							className='w-[15em] py-2 pl-8 pr-6 text-[11px] text-[#C5C5C5] rounded appearance-none bg-[#0E0E0E] hover:cursor-pointer focus:outline-none'
							// Inline-стиль для фона
							style={{
								backgroundImage: `url(${iconSrc})`,
								backgroundRepeat: 'no-repeat',
								backgroundPosition: 'left 0.5rem center',
								backgroundSize: '20px',
							}}
						>
							<option value='linea'>Linea</option>
							<option value='ethereum'>Ethereum</option>
						</select>
						<span className='absolute right-2 top-3 text-white text-xs pointer-events-none'>
							<SlArrowDown />
						</span>
					</div>
				</div>

				{/* Репутация справа */}
				<div className='flex items-center space-x-2 text-[12px]'>
					{/* Надпись "Reputation" и, например, иконка вопроса (по желанию) */}
					<span className='flex text-[11px ] text-[#2F2F2F]'>
						Reputation
						<RxQuestionMarkCircled className='w-4 text-white ml-2 mt-1' />
					</span>

					{/* Контейнер для прогресс-бара */}
					<div className='relative w-[30em] h-10 bg-[#3A3A3A] rounded overflow-hidden'>
						{/* Заполненная часть */}
						<div
							className='absolute inset-0 bg-white transition-all duration-500 ease-in-out'
							style={{ width: `${currentWidth}%` }} // ширина в процентах
						/>
						{/* Текст внутри (процент) */}
						<span
							className='
          absolute
          top-1/2
          -translate-y-1/2
          -translate-x-10
          text-[14px]
          font-extrabold
          text-black
          transition-all
          duration-500
          ease-in-out
        '
							style={{ left: `${currentWidth}%` }}
						>
							{data.reputation}%
						</span>
					</div>
				</div>
			</div>

			{/* -- Чарт и таблица статистики в одной строке -- */}
			<div className='flex space-x-4'>
				{' '}
				{/* <-- Сетка из 2 колонок */}
				{/* Левая колонка: Линейный чарт */}
				<div className='w-[50em] bg-[#0F0F0F] p-4 rounded space-y-3'>
					<div className='text-[10px] text-[#C5C5C5]'>
						Total transactions{' '}
						<span className='font-semibold text-[12px] text-white'>
							{data.totalTransactions}
						</span>
					</div>

					{/* График (placeholder) */}
					<div className='bg-neutral-700 h-[20em]  rounded flex items-center justify-center'>
						<span className='text-neutral-500 text-sm'>
							(Line Chart for {selectedChain})
						</span>
					</div>
				</div>
				{/* Правая колонка: Блок со статистикой */}
				<div className='flex justify-center'>
					<div className='w-[25em] bg-[#0F0F0F] px-6 pt-12 rounded'>
						<table className='w-full text-[11px]'>
							<tbody className='text-[#C5C5C5]'>
								<tr className=' border-b border-[#1D1D1D] pt-10'>
									<td className='py-2 text-neutral-500'>Total volume</td>
									<td className='py-2 text-left text-[#FFFFFF] font-semibold'>
										{data.totalVolume}
									</td>
								</tr>
								<tr className='border-b border-[#1D1D1D]'>
									<td className='py-2 pt-5 text-neutral-500'>
										Total transactions
									</td>
									<td className='py-2 pt-5 text-left text-[#FFFFFF] font-semibold'>
										{data.totalTransactions}
									</td>
								</tr>
								<tr className='border-b border-[#1D1D1D]'>
									<td className='py-2 pt-5 text-neutral-500'>
										First transaction
									</td>
									<td className='py-2 pt-5 text-left text-[#FFFFFF] font-semibold'>
										{data.firstTransaction}
									</td>
								</tr>
								<tr className='border-b border-[#1D1D1D]'>
									<td className='py-2 pt-5 text-neutral-500'>Gas spent</td>
									<td className='py-2 pt-5 text-left text-[#FFFFFF] font-semibold'>
										{data.gasSpent}
									</td>
								</tr>
								<tr className='border-b border-[#1D1D1D]'>
									<td className='py-2 pt-5 text-neutral-500'>
										Last transaction
									</td>
									<td className='py-2 pt-5 text-left font-semibold text-[#CCFFC7]'>
										{data.lastTransaction}
									</td>
								</tr>
								<tr>
									<td className='border-b pt-5 border-[#1D1D1D]  text-neutral-500'>
										Total interactions
									</td>
									<td className='border-b pt-5 border-[#1D1D1D] py-2 text-left text-[#FFFFFF] font-semibold'>
										{data.totalInteractions}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>

			{/* -- Отдельный блок под бар-чарт (внизу) -- */}
			<div className='bg-[#0F0F0F] p-4 rounded space-y-3'>
				<div className='text-[10px] text-[#C5C5C5]'>
					This wallet has been active for{' '}
					<span className='font-semibold text-[12px] text-white'>
						{data.activeWallet}
						days.
					</span>
				</div>
				<div className='bg-neutral-700 h-48 rounded flex items-center justify-center'>
					<span className='text-neutral-500 text-sm'>
						(Bar Chart for {selectedChain})
					</span>
				</div>
			</div>
		</div>
	)
}

export default ReputationContent
