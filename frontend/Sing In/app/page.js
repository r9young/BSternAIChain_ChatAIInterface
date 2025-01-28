"use client";

import Image from "next/image";
import { useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BiHide } from "react-icons/bi";
import { TbEye } from "react-icons/tb";
import { BiSend } from "react-icons/bi";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from 'react';
import Link from 'next/link';


export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
<div className="min-h-screen bg-[#080808] text-gray-100 flex">
      <div className="flex-1 flex justify-center items-center">
      <div className=" border border-[#16161670] rounded-xl p-[10em]">
        <div className="w-[290px] relative -translate-y-[5em]">
          <div className="flex items-center justify-center mb-5">

            <div className="flex-grow border-t border-[#393a33]" />

            <Link href="/#">
            <img
            src="/img/logo.png"
            alt="Logo"
            className="mx-3 h-[80px] w-[60px] cursor-pointer hover:opacity-80 transition"
            />
            </Link>

            <div className="flex-grow border-t border-[#393a33]" />
            </div>
  
          <h2 className="text-[0.8em] font-myMono mb-5">Sign In with:</h2>
          
          <form className="space-y-4 mb-4">
            <div>
              <input
                id="username"
                type="text"
                className="w-full text-sm px-3 py-2 rounded bg-[#090909] text-gray-100 border border-[#161616] focus:outline-none focus:ring-1 focus:ring-[#333]"
                placeholder="Username"
              />
            </div>
            
            <div className="relative max-w-sm">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                className="w-full text-sm px-3 py-2 mb-10 rounded bg-[#090909] text-gray-100  border border-[#161616] focus:outline-none focus:ring-1 focus:ring-[#333]"
                placeholder="Password"
              />
              <button
              type="button"
              onClick={togglePassword}
              className="
              absolute
              right-2 
              top-5
              -translate-y-1/2
              text-gray-400 
              hover:text-gray-200
              ">
                {showPassword ? (
                  <BiHide className="w-4 h-4" />
                ) : (
                <TbEye className="w-4 h-4" />
                )}
                </button>
                </div>
            
            <button
              type="submit"
              className="w-full text-sm font-bold bg-[#0a0a0a] hover:bg-black hover:border-white transition-colors py-2 border border-[#474747] rounded font-semibold"
            >
              Submit
            </button>
          </form>
          
          <p className="mt-3 mb-3 text-[#6a7076] text-[0.6rem] p-2">
            By creating an account you agree to the{" "}
            <Link href="/terms" className="text-[#76a9c9] text-[0.7rem] underline hover:text-[#fff]">
              terms of service
            </Link>{" "}
            we’ll occasionally send you account-related emails.
          </p>
          
          {/* Кнопки соцсетей (Google, GitHub, Facebook) */}
          <div className="flex justify-center space-x-2">
            <Button className="group text-[0.6rem] rounded-[10px] transition-transform duration-300 hover:scale-105 flex-1 items-center bg-[#3d3d38] py-[10px] px-[15px] font-medium transition-all duration-300 group-hover:blur-sm group-hover:translate-y-1">
            <FaGoogle />
              Google
            </Button>
            <Button className="group text-[0.6rem] rounded-[10px] transition-transform duration-300 hover:scale-105 flex-1 items-center bg-[#3d3d38] py-[10px] px-[15px] font-medium transition-all duration-300 group-hover:blur-sm group-hover:translate-y-1">
            <FaGithub />
              GitHub
            </Button>
            <Button className="group text-[0.6rem] rounded-[10px] transition-transform duration-300 hover:scale-105 flex-1 items-center bg-[#3d3d38] py-[10px] px-[10px] font-medium transition-all duration-300 group-hover:blur-sm group-hover:translate-y-1">
            <FaFacebookF />
              Facebook
            </Button>
          </div>
          
          <p className="text-[0.7rem] mt-4">
            Already have an account?{" "}
            <Link href="/signup" className="text-[#76a9c9] text-[0.8rem] underline hover:text-[#fff]">
              Sign Up
            </Link>
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}