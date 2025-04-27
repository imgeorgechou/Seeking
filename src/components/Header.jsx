import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-screen z-50">
      {/* 正常導覽列 */}
      <div className="flex justify-between items-center px-5 py-3 bg-white">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" className="h-6 sm:h-9" alt="Logo" />
        </Link>
        <button
          className="w-8 h-8 rounded-full flex items-center justify-center"
          onClick={() => setIsMenuOpen(true)}
        >
          {/* 漢堡選單圖示 */}
          <div className="space-y-1">
            <div className="w-5 h-0.5 bg-black transition-all duration-300" />
            <div className="w-5 h-0.5 bg-black transition-all duration-300" />
            <div className="w-5 h-0.5 bg-black transition-all duration-300" />
          </div>
        </button>
      </div>

      {/* 當選單打開時 */}
      <div
        className={`fixed inset-0 bg-white flex flex-col items-center justify-center z-50 transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 visible animate-slide-in"
            : "opacity-0 invisible"
        }`}
      >
        <button
          className="absolute top-3 right-6 text-2xl font-bold text-black transition-transform duration-300 hover:rotate-90"
          onClick={() => setIsMenuOpen(false)}
        >
          ✕
        </button>

        <div className="flex flex-col items-center space-y-6 text-black text-2xl font-bold">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="hover:underline transition-all duration-300 hover:scale-110"
          >
            主頁
          </Link>
          <Link
            to="/aboutus"
            onClick={() => setIsMenuOpen(false)}
            className="hover:underline transition-all duration-300 hover:scale-110"
          >
            關於我們
          </Link>
          <Link
            to="/storyans"
            onClick={() => setIsMenuOpen(false)}
            className="hover:underline transition-all duration-300 hover:scale-110"
          >
            關卡詳解
          </Link>
        </div>
      </div>
    </nav>
  );
};
