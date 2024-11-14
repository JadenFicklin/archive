import React from "react";
import Image from "next/image";
import coin from "~/assets/svgs/coin.svg";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-8 py-1 text-right font-sans text-sm font-medium tracking-tight text-white">
      <div className="mx-auto flex max-w-[88rem] justify-between px-6">
        <div className="relative">
          Coins: 0
          <Image
            src={coin}
            alt="coin"
            width={14}
            height={14}
            className="absolute -right-5 top-1/2 -translate-y-1/2"
          />
        </div>
        <div className="space-x-6">
          <button>Create Account</button>
          <button>Login</button>
        </div>
      </div>
    </header>
  );
}
