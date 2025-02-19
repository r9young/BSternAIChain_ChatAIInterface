'use client'
import React, { useState, useEffect } from 'react'
import { FaPlus, FaMoon, FaSun } from 'react-icons/fa'

import { LuArrowLeftToLine, LuArrowRightToLine } from 'react-icons/lu'

export default function RightMenuHomeWallet() {
	// Состояние, открыто ли меню
	const [isOpen, setIsOpen] = useState(false)
	const [theme, setTheme] = useState<'light' | 'dark'>('dark')

	// Переключатель
	const toggleMenu = () => setIsOpen(!isOpen)

	// При каждом изменении `theme`, добавляем или убираем класс "dark" на <html>
	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [theme])

	useEffect(() => {
		// При первом рендере проверяем localStorage
		const storedTheme = localStorage.getItem('theme')
		if (storedTheme === 'light' || storedTheme === 'dark') {
			setTheme(storedTheme)
		}
	}, [])

	useEffect(() => {
		// При изменении темы - сохраняем в localStorage
		localStorage.setItem('theme', theme)

		if (theme === 'dark') {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [theme])

	// Обработчики клика
	const selectDark = () => setTheme('dark')
	const selectLight = () => setTheme('light')

	return (
		<div
			className={`
        bg-[#1A1A1A] text-white transition-all duration-300
        h-screen flex flex-col
        ${isOpen ? 'w-64' : 'w-16'} 
      `}
		>
			{/* Верхняя часть (Connect Wallet) */}
			<div className='flex-1 flex flex-col items-center pt-4 gap-4 w-full'>
				{/* Если меню открыто -> кнопка с текстом, иначе квадрат */}
				{isOpen ? (
					<button
						className='
              flex items-center justify-center
              w-[90%] border border-[#414141] px-3 py-2
              hover:border-gray-400 transition-colors
            '
					>
						<FaPlus className='mr-2 w-3 h-3' />
						<span className='whitespace-nowrap text-[10px]'>
							Connect Wallet
						</span>
					</button>
				) : (
					<button
						className='
              w-8 h-8 flex items-center justify-center
              border border-gray-600
              hover:border-gray-400 transition-colors
            '
					>
						<FaPlus className='w-3 h-3' />
					</button>
				)}
			</div>

			{/* Нижняя часть */}
			<div className='pb-4 mx-3 pt-4 flex flex-col items-center gap-4'>
				{isOpen ? (
					/* Меню открыто: две кнопки тем + кнопка закрыть/открыть */
					<div className='flex flex-col items-start gap-4 w-full'>
						{/* Блок тем (Light / Dark) с границами сверху/снизу, если нужно */}
						<div className='w-full text-[14px] border-t border-b border-[#2F2F2F] p-3 flex flex-col gap-2'>
							{/* Light mode */}
							<button
								onClick={selectLight}
								className={`
                  flex items-center gap-2 py-1 w-full
                   transition-colors
                  ${theme === 'light' ? 'text-white' : 'text-[#8F8F8F]'}
                `}
							>
								<FaSun />
								<span>Light mode</span>
							</button>
							{/* Dark mode */}
							<button
								onClick={selectDark}
								className={`
                  flex items-center gap-2 py-1 w-full transition-colors
                  ${theme === 'dark' ? 'text-white' : 'text-[#8F8F8F]'}
                `}
							>
								<FaMoon />
								<span>Dark mode</span>
							</button>
						</div>

						{/* Кнопка закрытия */}
						<button
							onClick={toggleMenu}
							className='
                w-8 h-8 flex items-center justify-center transition-colors ml-2 border border-[#414141]
                hover:border-gray-400
              '
						>
							<LuArrowLeftToLine className='w-4 h-4' />
						</button>
					</div>
				) : (
					/* Меню закрыто: одна кнопка темы + кнопка открыть */
					<div className='flex-1 flex flex-col items-center justify-center gap-4'>
						{/* Кнопка темы (Moon / Sun), переключает тему при клике */}
						<button
							onClick={theme === 'light' ? selectDark : selectLight}
							className='
                w-10 h-10 flex items-center justify-center transition-colors
              '
						>
							{theme === 'light' ? <FaSun /> : <FaMoon />}
						</button>

						{/* Кнопка открытия */}
						<button
							onClick={toggleMenu}
							className='
                w-8 h-8 flex items-center justify-center
                border border-[#414141]
                hover:border-gray-400 transition-colors
              '
						>
							<LuArrowRightToLine className='w-4 h-4' />
						</button>
					</div>
				)}
			</div>
		</div>
	)
}
