'use client'

import { useState } from 'react'

import {
	FiUser,
	FiPlus,
	FiTrash,
	FiChevronLeft,
	FiChevronRight,
} from 'react-icons/fi'
import { BsSun } from 'react-icons/bs'

export const RightMenu = () => {
	const [isOpen, setIsOpen] = useState(false)
	return (
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
					{isOpen ? <FiChevronLeft size={20} /> : <FiChevronRight size={20} />}
				</button>
			</div>
		</div>
	)
}
