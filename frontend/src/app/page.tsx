'use client'
import React, { useState } from 'react'
import { MenuBar } from '@/components/common/MenuBar'
import HomeLayout from '@/components/common/HomeLayout'
import RightNewsBlock from '@/components/common/RightNewsBlock'
import RightMenuHomeWallet from '@/components/common/RightMenuHomeWallet'

export default function HomePage() {
	return (
		<div className='flex w-screen h-screen bg-white dark:bg-[#080808] text-black dark:text-white'>
			{/* Левое меню (фиксированная ширина) */}
			<MenuBar />
			{/* Центральный блок (растягивается) */}
			<div className='flex-1 overflow-auto flex-shrink-0'>
				<HomeLayout />
			</div>
			{/* Правый блок новостей (фикс. ширина) */}
			<div className='flex-shrink-0'>
				<RightNewsBlock />
			</div>
			{/* Правое меню (узкое/широкое) */}
			<RightMenuHomeWallet />
		</div>
	)
}
