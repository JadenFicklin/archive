import React from "react";

export default function Header() {
  return (
    <header className="space-x-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-8 py-1 text-right font-sans text-sm font-medium tracking-tight text-white">
      <button>Create Account</button>
      <button>Login</button>
    </header>
  );
}
