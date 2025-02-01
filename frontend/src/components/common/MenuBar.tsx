"use client";
import Image from "next/image";
import React, { useMemo } from "react";
import logoUrl from "../../../public/images/logo.png";
import nameUrl from "../../../public/images/name.png";
import { PRIMARY_LINKS, SECONDARY_LINKS } from "@/constants/menubar";
import Link from "next/link";
import { RiHomeFill } from "react-icons/ri";
import { MdBarChart } from "react-icons/md";
import { PiWaveform } from "react-icons/pi";
import { BiSolidBookAlt } from "react-icons/bi";
import { LinkType } from "@/types/menubar";
import { FaFolder } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { PiNotepadFill } from "react-icons/pi";

const Icons = {
  home: <RiHomeFill />,
  "my-wallet": <MdBarChart />,
  "bstern-ai": <PiWaveform />,
  community: <BiSolidBookAlt />,
  docs: <FaFolder />,
  settings: <IoSettings />,
  faqs: <PiNotepadFill />,
};

function RenderLink({ link }: { link: LinkType }) {
  return (
    <Link
      href={link.path}
      className=" text-[#A0A0A0] hover:bg-white/[5%] rounded transition-all duration-150 ease-in-out text-sm flex gap-2 items-center pl-6 py-2"
    >
      <span>{link.icon}</span>
      <span>{link.label}</span>
      {link?.new && (
        <span className="text-[#8AE06B] ml-1 text-xs border-b-[1px] border-[#8C8C8C]">
          NEW
        </span>
      )}
    </Link>
  );
}

export function MenuBar() {
  const primaryLinks = useMemo(() => {
    return PRIMARY_LINKS.map((link) => ({
      ...link,
      icon: Icons[link.id],
    }));
  }, []);

  const secondaryLinks = useMemo(() => {
    return SECONDARY_LINKS.map((link) => ({
      ...link,
      icon: Icons[link.id],
    }));
  }, []);

  return (
    <div className="h-screen bg-[#0C0C0C] flex flex-col justify-between w-60 border-r-[1px] border-[#2C2C2C]">
      {/* links */}
      <div>
        {/* logo */}
        <div className="flex items-center gap-2 px-5 py-6 border-b-[1px] border-[#2C2C2C]">
          <Image src={logoUrl} alt="logo" width={40} height={40} />
          <Image src={nameUrl} alt="logo" width={90} height={18} />
        </div>

        {/* primary links */}
        <div className="flex flex-col py-5 border-[#2C2C2C] border-b-[1px]">
          {primaryLinks.map((link) => (
            <RenderLink key={link.id} link={link} />
          ))}
        </div>

        {/* secondary links */}
        <div className="flex flex-col py-5 border-[#2C2C2C] border-b-[1px]">
          {secondaryLinks.map((link) => (
            <RenderLink key={link.id} link={link} />
          ))}
        </div>
      </div>

      {/* TODO: Create common button UI */}
      {/* signin/signup button */}
      <div className="p-8 flex flex-col gap-3">
        {/* signup */}
        <button className="rounded-sm p-2 text-sm bg-[#111111] border-[1px] border-[#2C2C2C]">
          Sign up
        </button>

        {/* signin */}
        <button className="rounded-sm p-2 text-sm bg-[#111111]">Sign In</button>
      </div>
    </div>
  );
}
