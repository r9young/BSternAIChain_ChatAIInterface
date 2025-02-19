'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiArrowUpRight } from 'react-icons/fi'

export default function RightNewsBlock() {
	return (
		<div className='w-[300px] h-full border-l border-[#252525] flex flex-col text-white'>
			{/* Верхний блок: Заголовок и описание */}
			<div className='px-4 py-2 m-2 border-b border-[#161616]'>
				<h2 className='text-[26px]'>
					NEW <span className='text-[#C9C9C9] text-[11px]'>Bstern.</span>
					<span className='text-[#93DAFB] text-[11px]'>AI</span>
				</h2>
				<p className='text-[#F8F8F8] text-[11px] mt-2'>
					Register for the Waitlist and get an extra bonus
				</p>
			</div>
			<div className='px-4'>
				<p className='text-[#8F8F8F] text-[10px] mt-2'>
					Don't miss out on new opportunities — leave your email and nickname
					below to join the waitlist.
				</p>
			</div>

			{/* Средняя часть (пример Waitlist) — используем flex-1, чтобы занять всё свободное пространство */}
			<div className='p-4 flex-1'>
				<Link href='#' passHref>
					<div className='relative bg-black h-48 text-white cursor-pointer overflow-hidden p-4'>
						{/* "Waitlist!" в левом верхнем углу */}
						<span className='absolute top-4 left-4 text-[12px]'>Waitlist!</span>

						{/* Логотип S по центру */}
						<div className='flex items-center justify-center h-full'>
							<Image
								src='/images/logo.png'
								alt='Waitlist Logo'
								width={64}
								height={64}
							/>
						</div>

						{/* Стрелка в правом нижнем углу */}
						<div className='absolute bottom-2 right-2 flex items-center justify-center w-7 h-7 border border-[#191919]'>
							<FiArrowUpRight size={14} />
						</div>
					</div>
				</Link>
			</div>

			{/* Нижний блок: Соцсети (с верхней границей) */}
			<div className='p-6 border-t-2 border-[#1B1B1B] flex justify-center text-[10px] mx-2'>
				<div className='grid grid-cols-2 gap-4'>
					{/* Telegram */}
					<Link
						href='https://t.me/YourChannel'
						target='_blank'
						rel='noopener noreferrer'
						className='
            group flex items-center space-x-2 cursor-pointer
            text-white
            hover:text-[#8F8F8F]
            transition-colors duration-200
          '
					>
						<div className='flex items-center space-x-2'>
							{/* Квадратная стрелка (ArrowBox) */}
							<div className='w-7 h-7 flex items-center justify-center border border-[#191919]'>
								<FiArrowUpRight className='text-gray-300' size={14} />
							</div>
							<span>Telegram</span>
						</div>
					</Link>

					{/* Discord */}
					<Link
						href='https://discord.gg/YourServer'
						target='_blank'
						rel='noopener noreferrer'
						className='
            group flex items-center space-x-2 cursor-pointer
            text-white
            hover:text-[#8F8F8F]
            transition-colors duration-200
          '
					>
						<div className='flex items-center space-x-2'>
							<div className='w-7 h-7 flex items-center justify-center border border-[#191919]'>
								<FiArrowUpRight className='text-gray-300' size={14} />
							</div>
							<span>Discord</span>
						</div>
					</Link>

					{/* Twitter/X */}
					<Link
						href='https://twitter.com/YourProfile'
						target='_blank'
						rel='noopener noreferrer'
						className='
            group flex items-center space-x-2 cursor-pointer
            text-white
            hover:text-[#8F8F8F]
            transition-colors duration-200
          '
					>
						<div className='flex items-center space-x-2'>
							<div className='w-7 h-7 flex items-center justify-center border border-[#191919]'>
								<FiArrowUpRight className='text-gray-300' size={14} />
							</div>
							<span>Twitter/X</span>
						</div>
					</Link>

					{/* YouTube */}
					<Link
						href='https://youtube.com/YourChannel'
						target='_blank'
						rel='noopener noreferrer'
						className='
            group flex items-center space-x-2 cursor-pointer
            text-white
            hover:text-[#8F8F8F]
            transition-colors duration-200
          '
					>
						<div className='flex items-center space-x-2'>
							<div className='w-7 h-7 flex items-center justify-center border border-[#191919]'>
								<FiArrowUpRight className='text-gray-300' size={14} />
							</div>
							<span>YouTube</span>
						</div>
					</Link>
				</div>
			</div>
		</div>
	)
}
