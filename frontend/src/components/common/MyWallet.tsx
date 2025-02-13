'use client'

import { useState } from 'react'
import { MenuBar } from './MenuBar'
import Image from 'next/image'
import UserIcon from '../../../public/images/UserIcon.svg'
import { MdContentCopy } from 'react-icons/md'
import { BsEye } from 'react-icons/bs'
import { RxQuestionMarkCircled } from 'react-icons/rx'
import {
	FiUser,
	FiPlus,
	FiTrash,
	FiChevronLeft,
	FiChevronRight,
} from 'react-icons/fi'
import { BsSun } from 'react-icons/bs'
import TransactionsTable from './TransactionsTable'
import ReviewContent from './ReviewContent'
import ReputationContent from './ReputationConten'

export default function MyWallet() {
	const [isOpen, setIsOpen] = useState(false)
	const [activeTab, setActiveTab] = useState<
		'Transactions' | 'Review' | 'Reputation'
	>('Transactions')

	return (
		<div className='flex justify-between w-screen h-screen bg-[#080808] text-gray-100 pb-1'>
			<MenuBar />
			{/* Central unit (chat assistant) */}
			<div className='w-screen h-auto overflow-y-auto scrollbar-hide'>
				<div className='w-[75em] mt-5 text-white mb-5 mx-auto'>
					{/* Верхняя панель с поиском (если вам нужна). Условная реализация. */}
					<div className='flex items-center justify-between p-2 mb-3 w-[35em]'>
						<div className='relative w-[16em]'>
							<input
								type='text'
								placeholder='0x88dfedef6012...7bc0fe'
								className='w-full bg-[#171717] py-2 pl-3 pr-10 text-[10px] text-white focus:outline-none'
							/>
							<span className='absolute right-3 top-2 text-neutral-500'>
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
										d='M21 21l-4.35-4.35m0 0a7.5 7.5 0 10-10.6 0 7.5 7.5 0 0010.6 0z'
									/>
								</svg>
							</span>
						</div>
					</div>
					{/* Пример — метка даты в правом верхнем углу, как на скриншоте (11.31.2024) */}
					<div className='w-[35em] flex items-center space-x-2'>
						<div className='bg-[#8AE06C]/20 w-[8em] px-2 text-[8px] text-[#FFFFFF] ml-auto rounded-full'>
							11.31.2024
						</div>
						<RxQuestionMarkCircled className='w-3 h-3 opacity-60 ' />
					</div>

					{/* Основной блок: слева информация о кошельке, справа — график */}
					<div className='flex flex-col lg:flex-row gap-6 ml-5'>
						{/* Левая часть: название и баланс */}
						<div className='flex-1'>
							{/* Логотип и название */}
							<div className='flex items-center space-x-3'>
								<Image src={UserIcon} alt='Logo' className='w-[65px]' />
								<div>
									<h2 className='text-xl font-bold'>BStern AI</h2>
								</div>
							</div>

							{/* Адрес + иконка копирования (пример) */}
							<div className='border-t border-[#232323] w-[15em] mt-2' />
							<div className='flex justify-between w-[21em] py-2 text-[11px] text-[#FFFFFF]'>
								<span>0x49b807...67E8</span>
								<button>
									<MdContentCopy className='w-4 h-4 opacity-40' />
								</button>
							</div>
							<div className='border-b w-[15em] border-[#232323]' />

							{/* Balance */}
							<div className='flex items-center space-x-3 mt-4'>
								<span className='text-[#A9A9A9] text-[11px]'>Balance</span>
								{/* иконка / тултип, условно */}
								<button className='hover:opacity-70'>
									<BsEye className='w-3 mt-[1px] opacity-60' />
								</button>
							</div>

							{/* Основное значение */}
							<div className='flex space-x-5 mt-2 mb-2'>
								<div className='text-[22px] font-semibold'>
									193&nbsp;986.25 $
								</div>
								<div className='mt-2 text-[14px]'>
									<span className='text-[#8AE06C]'>+2%</span>{' '}
									<span className='text-[#FFFFFF]'>/ 66.26 $</span>
								</div>
							</div>
							{/* Рост / BTC */}
							<div className='text-[#C5CAC6] text-[11px] mt-2'>
								0.848899 BTC
							</div>
						</div>

						{/* Правая часть: График */}
						<div className='flex-1 bg-neutral-800 mr-5 p-4 relative overflow-hidden'>
							{/* Заголовок «Chart» можно условно скрыть, если не нужен */}
							<div className='absolute top-2 right-2 text-neutral-500 text-xs'>
								{/* Подпись возле верхней точки: +71,286.9 (2024/07/01 05:23) 
                - это можно реализовать как всплывающую подсказку при наведении на точку */}
							</div>
							<div className='h-48 flex items-center justify-center'>
								{/* Заглушка для графика */}
								<span className='text-neutral-500 text-sm'>
									График (placeholder)
								</span>
							</div>

							{/* Метки шкалы времени внизу (Jan, Feb, Mar ...), если нужно */}
							<div className='flex justify-between mt-2 text-xs text-neutral-400'>
								<span>JAN</span>
								<span>FEB</span>
								<span>MAR</span>
								<span>APR</span>
								<span>MAY</span>
								<span>JUN</span>
								<span>JUL</span>
								<span>FEB</span>
							</div>
						</div>
					</div>

					{/* Вкладки / переключатели / последний апдейт */}
					<div className='flex flex-col m-4 md:flex-row items-start md:items-center border-b border-[#212224] justify-between'>
						{/* Левая часть: вкладки */}
						<div className='flex space-x-6 mx-2'>
							<button
								onClick={() => setActiveTab('Transactions')}
								className={`pb-2 text-[#2F2F2F] text-[11px] ${
									activeTab === 'Transactions'
										? 'text-[#E1E1E1]'
										: 'hover:text-[#E1E1E1]'
								}`}
							>
								Transactions
							</button>
							<button
								onClick={() => setActiveTab('Review')}
								className={`pb-2 text-[#2F2F2F] text-[11px] ${
									activeTab === 'Review'
										? 'text-[#E1E1E1]'
										: 'hover:text-[#E1E1E1]'
								}`}
							>
								Review
							</button>
							<button
								onClick={() => setActiveTab('Reputation')}
								className={`pb-2 text-[#2F2F2F] text-[11px] ${
									activeTab === 'Reputation'
										? 'text-[#E1E1E1]'
										: 'hover:text-[#E1E1E1]'
								}`}
							>
								Reputation
							</button>
						</div>

						{/* Правая часть: периоды + последний апдейт */}
						<div className='flex flex-col items-end mb-2'>
							<div className='flex space-x-4 mb-2 mr-5'>
								<button className='text-[#FFFFFF] hover:text-[#808080] text-[11px]'>
									DAILY
								</button>
								<button className='text-[#FFFFFF] hover:text-[#808080] text-[11px]'>
									WEEKLY
								</button>
								<button className='text-[#FFFFFF] hover:text-[#808080] text-[11px]'>
									MONTHLY
								</button>
								<button className='text-[#FFFFFF] hover:text-[#808080] text-[11px]'>
									THIS YEAR
								</button>
							</div>
							<div className='text-[8px] text-neutral-500'>
								Last update 2024.01.13 03:45 (UTC)
							</div>
						</div>
					</div>

					{/* Содержимое вкладок */}
					{activeTab === 'Transactions' && <TransactionsTable />}
					{activeTab === 'Review' && <ReviewContent />}
					{activeTab === 'Reputation' && <ReputationContent />}
				</div>
			</div>

			{/* Right side menu */}
			<div
				className={`top-0 left-0 h-screen bg-[#212121] text-white shadow-lg flex flex-col justify-between transition-all duration-300 ${
					isOpen ? 'w-64' : 'w-16'
				}`}
			>
				<div>
					<div className='flex flex-col items-center pt-4 pb-4'>
						{/* User icon */}
						<div
							className={`p-3 rounded-full transition-all duration-300 ${
								isOpen ? 'ml-4 self-start' : 'mx-auto'
							}`}
						>
							<FiUser size={16} />
						</div>

						{/* Add chat button */}
						<button
							className={`flex items-center justify-center mt-4  ${
								isOpen
									? 'px-4 py-2 w-[calc(100%-10px)] border border-[#4C4C4C] rounded-md hover:bg-white/[5%]'
									: 'w-10 h-10 border border-[#4C4C4C] rounded-md mx-auto hover:bg-white/[5%]'
							} transition-all duration-300`}
						>
							<FiPlus size={16} />
							{isOpen && <span className='ml-2 text-[11px]'>New chat</span>}
						</button>
					</div>

					{/* Menu contents */}
					{isOpen && (
						<div className='p-2'>
							<h3 className='text-[9px] text-[#8B8B8B] mb-2'>Query History</h3>
							<div className='space-y-1'>
								{Array.from({ length: 4 }).map((_, index) => (
									<div
										key={index}
										className='flex items-center justify-between p-3 bg-[#222222] border border-[#2C2C2C] rounded-[2px] hover:bg-white/[5%] cursor-pointer'
									>
										<div className='flex items-center space-x-2'>
											<FiTrash
												size={16}
												className='text-[#838383] hover:text-white/[10%] '
											/>
											<span className='text-[10px] text-[#9C9C9C]'>
												Stolen Funds Anal.
											</span>
										</div>
										<span className='text-[9px] text-[#505050]'>23.11.24</span>
									</div>
								))}
							</div>
						</div>
					)}
				</div>

				{/* Lower part */}
				<div className='flex flex-col justify-end'>
					{isOpen && (
						<div className='p-2 space-y-1'>
							<button className='flex items-center w-full p-2 rounded-[1px] hover:bg-white/[5%] cursor-pointer'>
								<BsSun size={16} className='mr-2' />
								<span className='text-[11px]'>Light mode</span>
							</button>
							<button className='flex items-center w-full p-2 rounded-md hover:bg-white/[5%] cursor-pointer'>
								<FiChevronRight size={16} className='mr-2' />
								<span className='text-[11px]'>Digidop Académie</span>
							</button>
						</div>
					)}

					{/* Menu open/close button */}
					<button
						onClick={() => setIsOpen(!isOpen)}
						className={`p-4 transition-all duration-300 ${
							isOpen ? 'ml-4 self-end' : 'mx-auto'
						}`}
					>
						{isOpen ? (
							<FiChevronLeft size={20} />
						) : (
							<FiChevronRight size={20} />
						)}
					</button>
				</div>
			</div>
		</div>
	)
}
