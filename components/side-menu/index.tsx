"use client";

import useSideMenuStore from "@/store/side-menu";
import { X } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

const SideMenu = () => {
  const isActive = useSideMenuStore((state) => state.isActive);
  const toggleSideMenu = useSideMenuStore((state) => state.toggle);

  useEffect(() => {
    if (!isActive) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") toggleSideMenu();
    };

    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, [isActive, toggleSideMenu]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-[rgba(0,0,0,0.8)] flex justify-end ${isActive ? "visible opacity-100" : "invisible opacity-0"} transition-all duration-300`}
      onClick={toggleSideMenu}
    >
      <div
        className="py-5 xs:py-13 bg-[#B11C34] w-96 h-full text-white font-bold text-end"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-3 mb-2 xs:mb-5">
          <button className="cursor-pointer" onClick={toggleSideMenu}>
            <X size={40} />
          </button>
        </div>
        <nav className="flex flex-col">
          <Link
            className="py-1.5 xs:py-2.5 px-5 capitalize text-2xl xs:text-3xl hover:bg-[#C1495D] transition-all duration-300"
            href="/"
            onClick={toggleSideMenu}
          >
            home
          </Link>
          <Link
            className="py-1.5 xs:py-2.5 px-5 capitalize text-2xl xs:text-3xl hover:bg-[#C1495D] transition-all duration-300"
            href="/about"
            onClick={toggleSideMenu}
          >
            about
          </Link>
          <Link
            className="py-1.5 xs:py-2.5 px-5 capitalize text-2xl xs:text-3xl hover:bg-[#C1495D] transition-all duration-300"
            href="/certificates"
            onClick={toggleSideMenu}
          >
            certificates
          </Link>
          <Link
            className="py-1.5 xs:py-2.5 px-5 capitalize text-2xl xs:text-3xl hover:bg-[#C1495D] transition-all duration-300"
            href="/media"
            onClick={toggleSideMenu}
          >
            media
          </Link>
          <div className="flex flex-col hover:bg-[rgba(193,73,93,0.4)] transition-all duration-300">
            <span className="py-1 px-5 capitalize text-2xl xs:text-3xl">products</span>
            <Link
              className="py-1 px-5 capitalize text-xl font-semibold hover:bg-[#D4808E] transition-all duration-300"
              href="/mayonnaise"
              onClick={toggleSideMenu}
            >
              mayonnaise
            </Link>
            <Link
              className="py-1 px-5 capitalize text-xl font-semibold hover:bg-[#D4808E] transition-all duration-300"
              href="/ketchup"
              onClick={toggleSideMenu}
            >
              ketchup
            </Link>
            <Link
              className="py-1 px-5 capitalize text-xl font-semibold hover:bg-[#D4808E] transition-all duration-300"
              href="/sauce"
              onClick={toggleSideMenu}
            >
              sauce
            </Link>
          </div>
          <Link
            className="py-1.5 xs:py-2.5 px-5 capitalize text-2xl xs:text-3xl hover:bg-[#C1495D] transition-all duration-300"
            href="/receipts"
            onClick={toggleSideMenu}
          >
            receipts
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default SideMenu;
