"use client";

import { useState } from "react";
import { MenuBar } from "./MenuBar";
import Image from "next/image";
import logoUrl from "../../../public/images/logo.png";
import { PiWaveform } from "react-icons/pi";
import { FiUser, FiPlus, FiTrash, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { BsSun } from "react-icons/bs";


export default function ChatPage() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between w-screen h-screen overflow-hidden bg-[#080808] text-gray-100 w-full">
    <MenuBar />
      {/* Central unit (chat assistant) */}
      <div className="flex flex-col text-white">
      {/* Center section with logo */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
        <Image
            src={logoUrl}
            alt="Logo"
            className="h-[150px] w-[120px] opacity-50 transition"
            />
          <p className=" text-[11px] text-[#D3D3D3]">I'm ready to help you!</p>
        </div>
      </div>

      {/* Bottom block with questions and input field */}
      <div className="w-full">
        {/* Block of questions */}
        <div className="grid grid-cols-2 gap-4 p-4 max-w-2xl mx-auto">
          <div className="p-5 w-1/1 h-25 bg-[#0A0A0A] border border-[#232323] rounded-md shadow-md">
            <h3 className="text-[12px] font-semibold">Transaction Details?</h3>
            <p className="text-[9px] text-[#A0A0A0] mt-2">
              "Can you show the full transaction history for a specific wallet?"
            </p>
          </div>

          <div className="p-5 w-1/1 h-25 bg-[#0A0A0A] border border-[#232323] rounded-md shadow-md">
            <h3 className="text-[12px] font-semibold">Wallet Balance?</h3>
            <p className="text-[9px] text-[#A0A0A0] mt-2">
              "What is the current balance of this wallet?"
            </p>
          </div>

          <div className="p-5 w-1/1 h-25 bg-[#0A0A0A] border border-[#232323] rounded-md shadow-md">
            <h3 className="text-[12px] font-semibold">Final Destination?</h3>
            <p className="text-[9px] text-[#A0A0A0] mt-2">
              "Where was the last transaction from this wallet sent?"
            </p>
          </div>

          <div className="p-5 w-1/1 h-25 bg-[#0A0A0A] border border-[#232323] rounded-md shadow-md">
            <h3 className="text-[12px] font-semibold">Suspicious Activity?</h3>
            <p className="text-[9px] text-[#A0A0A0] mt-2">
              "Has this wallet been involved in any flagged or suspicious transactions?"
            </p>
          </div>
        </div>

        {/* Input field */}
        <div className="flex h-[45px] items-center bg-[#111111] text-[#F0F0F0] border border-[#212121] text-[12px] px-4 rounded-[3px] shadow-md mb-4">
          <input
            type="text"
            placeholder="Write a question..."
            className="flex-1 bg-transparent border-none text-[#F0F0F0] placeholder-gray-500 focus:outline-none"
          />
          <button className="ml-3 hover:text-gray-300">
            <PiWaveform size={25} />
          </button>
        </div>
      </div>
    </div>

    {/* Right side menu */}
    <div
      className={`top-0 left-0 h-screen bg-[#212121] text-white shadow-lg flex flex-col justify-between transition-all duration-300 ${
        isOpen ? "w-64" : "w-16"
      }`}
    >

      <div>
        <div className="flex flex-col items-center pt-4 pb-4">
          {/* User icon */}
          <div
            className={`p-3 rounded-full transition-all duration-300 ${
              isOpen ? "ml-4 self-start" : "mx-auto"
            }`}
          >
            <FiUser size={16} />
          </div>

          {/* Add chat button */}
          <button
            className={`flex items-center justify-center mt-4  ${
              isOpen
                ? "px-4 py-2 w-[calc(100%-10px)] border border-[#4C4C4C] rounded-md hover:bg-white/[5%]"
                : "w-10 h-10 border border-[#4C4C4C] rounded-md mx-auto hover:bg-white/[5%]"
            } transition-all duration-300`}
          >
            <FiPlus size={16} />
            {isOpen && <span className="ml-2 text-[11px]">New chat</span>}
          </button>
        </div>

        {/* Menu contents */}
        {isOpen && (
          <div className="p-2">
            <h3 className="text-[9px] text-[#8B8B8B] mb-2">
              Query History
            </h3>
            <div className="space-y-1">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-[#222222] border border-[#2C2C2C] rounded-[2px] hover:bg-white/[5%] cursor-pointer"
                >
                  <div className="flex items-center space-x-2">
                    <FiTrash size={16} className="text-[#838383] hover:text-white/[10%] "/>
                    <span className="text-[10px] text-[#9C9C9C]">
                      Stolen Funds Anal.
                    </span>
                  </div>
                  <span className="text-[9px] text-[#505050]">23.11.24</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lower part */}
      <div className="flex flex-col justify-end">
        {isOpen && (
          <div className="p-2 space-y-1">
            <button className="flex items-center w-full p-2 rounded-[1px] hover:bg-white/[5%] cursor-pointer">
              <BsSun size={16} className="mr-2" />
              <span className="text-[11px]">Light mode</span>
            </button>
            <button className="flex items-center w-full p-2 rounded-md hover:bg-white/[5%] cursor-pointer">
              <FiChevronRight size={16} className="mr-2" />
              <span className="text-[11px]">Digidop Académie</span>
            </button>
          </div>
        )}

        {/* Menu open/close button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`p-4 transition-all duration-300 ${
            isOpen ? "ml-4 self-end" : "mx-auto"
          }`}
        >
          {isOpen ?  <FiChevronLeft size={20} /> : <FiChevronRight size={20}  />}
        </button>
      </div>
    </div>
    </div>
  );
}