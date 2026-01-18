"use client";

import useSideMenuStore from "@/store/side-menu";
import { TextAlignJustify } from "lucide-react";
import Link from "next/link";

const Header = ({ className }: { className?: string }) => {
  const toggleSideMenu = useSideMenuStore((state) => state.toggle);

  return (
    <header className={`absolute top-0 left-0 right-0 z-10 py-7 px-3 bg-[#BA1A33] flex items-center justify-between ${className}`}>
      <Link href="/">
        <img className="w-20 xs:w-full" src="/logo.svg" alt="logo" />
      </Link>
      <button className="text-white cursor-pointer" onClick={toggleSideMenu}>
        <TextAlignJustify size={30} />
      </button>
    </header>
  );
};

export default Header;
