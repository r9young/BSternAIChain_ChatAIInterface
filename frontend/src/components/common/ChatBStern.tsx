'use client'

import { MenuBar } from './MenuBar'
import { RightMenu } from './RightMenu'
import Image from 'next/image'
import logoUrl from '../../../public/images/logo.png'
import { PiWaveform } from 'react-icons/pi'

export default function ChatPage() {
	return (
		<div className='flex justify-between w-screen h-screen overflow-hidden bg-[#080808] text-gray-100'>
			<MenuBar />
			{/* Central unit (chat assistant) */}
			<div className='flex flex-col text-white'>
				{/* Center section with logo */}
				<div className='flex-1 flex items-center justify-center'>
					<div className='text-center'>
						<Image
							src={logoUrl}
							alt='Logo'
							className='h-[150px] w-[120px] opacity-50 transition'
						/>
						<p className=' text-[11px] text-[#D3D3D3]'>
							I'm ready to help you!
						</p>
					</div>
				</div>

				{/* Bottom block with questions and input field */}
				<div className='w-full'>
					{/* Block of questions */}
					<div className='grid grid-cols-2 gap-4 p-4 max-w-2xl mx-auto'>
						<div className='p-5 w-1/1 h-25 bg-[#0A0A0A] border border-[#232323] rounded-md shadow-md'>
							<h3 className='text-[12px] font-semibold'>
								Transaction Details?
							</h3>
							<p className='text-[9px] text-[#A0A0A0] mt-2'>
								"Can you show the full transaction history for a specific
								wallet?"
							</p>
						</div>

						<div className='p-5 w-1/1 h-25 bg-[#0A0A0A] border border-[#232323] rounded-md shadow-md'>
							<h3 className='text-[12px] font-semibold'>Wallet Balance?</h3>
							<p className='text-[9px] text-[#A0A0A0] mt-2'>
								"What is the current balance of this wallet?"
							</p>
						</div>

						<div className='p-5 w-1/1 h-25 bg-[#0A0A0A] border border-[#232323] rounded-md shadow-md'>
							<h3 className='text-[12px] font-semibold'>Final Destination?</h3>
							<p className='text-[9px] text-[#A0A0A0] mt-2'>
								"Where was the last transaction from this wallet sent?"
							</p>
						</div>

						<div className='p-5 w-1/1 h-25 bg-[#0A0A0A] border border-[#232323] rounded-md shadow-md'>
							<h3 className='text-[12px] font-semibold'>
								Suspicious Activity?
							</h3>
							<p className='text-[9px] text-[#A0A0A0] mt-2'>
								"Has this wallet been involved in any flagged or suspicious
								transactions?"
							</p>
						</div>
					</div>

					{/* Input field */}
					<div className='flex h-[45px] items-center bg-[#111111] text-[#F0F0F0] border border-[#212121] text-[12px] px-4 rounded-[3px] shadow-md mb-4'>
						<input
							type='text'
							placeholder='Write a question...'
							className='flex-1 bg-transparent border-none text-[#F0F0F0] placeholder-gray-500 focus:outline-none'
						/>
						<button className='ml-3 hover:text-gray-300'>
							<PiWaveform size={25} />
						</button>
					</div>
				</div>
			</div>

			{/* Right side menu */}
			<RightMenu />
		</div>
	)
}
