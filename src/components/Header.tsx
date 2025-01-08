import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white">
      <nav className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <img
          className="h-16 w-16"
          src="https://s3-alpha-sig.figma.com/img/d7fb/35d1/0a5d5473989ba4ec575b8af8fe1f746c?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n-vbAPQ05LmD8Nda2f2mGNfZTgj7C6YBEioDb~0ls1JxMZ5voB4rtvKkqDu8mDFa9VKS4X~28N4hO14wVLH-Aaips877QZP2jTVclw~oKbP2-R0Qz-NXaQES6jgHdYYG6XJTT31iOazUoRUpPb3Y9U-8~DwuxkzPZnq5SG3zOgqASsaIeiHiO7uId7sMl7jnpznKoyNk~F-lEI73oUHez4df0sd86oEDWzKWRAGY~oxiwQv2J5iJ3PZpHP3RN-~i7P29JdHP6US2hi4N-MOlhHADGHdxVYkiuJ~y4k1eyZUHYlLo-~TAMM1nHamq4uA7BPtgQPLwN19MZEeOlGHqOw__"
          alt="Logo"
        />

        {/* Hamburger Icon */}
        <button
          className="block md:hidden text-xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>

        {/* Menu Items */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-black md:flex md:static md:w-auto md:space-x-8 md:items-center`}
        >
          <li className="relative group">
            <a
              href="#home"
              className="block py-2 px-4 md:inline hover:text-gray-400"
            >
              Home
            </a>
          </li>
          <li className="relative group">
            <a
              href="#living"
              className="block py-2 px-4 md:inline hover:text-gray-400"
            >
              Living <i className="fa-solid fa-chevron-down"></i>
            </a>
            <div className="absolute left-0 hidden bg-white text-black space-y-2 p-3 group-hover:block">
              <a href="#" className="block px-6 py-2">
                TV Units
              </a>
              <a href="#" className="block px-6 py-2">
                Box Shelves
              </a>
              <a href="#" className="block px-6 py-2">
                Shoe Racks
              </a>
            </div>
          </li>
          <li className="relative group">
            <a
              href="#storage"
              className="block py-2 px-4 md:inline hover:text-gray-400"
            >
              Storage <i className="fa-solid fa-chevron-down"></i>
            </a>
          </li>
          <li className="relative group">
            <a
              href="#dining"
              className="block py-2 px-4 md:inline hover:text-gray-400"
            >
              Dining <i className="fa-solid fa-chevron-down"></i>
            </a>
          </li>
          <li className="relative group">
            <a
              href="#mattress"
              className="block py-2 px-4 md:inline hover:text-gray-400"
            >
              Mattress <i className="fa-solid fa-chevron-down"></i>
            </a>
          </li>
          <li className="relative group">
            <a
              href="#study"
              className="block py-2 px-4 md:inline hover:text-gray-400"
            >
              Study <i className="fa-solid fa-chevron-down"></i>
            </a>
          </li>
          <li className="relative group">
            <a
              href="#office"
              className="block py-2 px-4 md:inline hover:text-gray-400"
            >
              Office <i className="fa-solid fa-chevron-down"></i>
            </a>
          </li>
          <li className="relative group">
            <a
              href="#outdoor"
              className="block py-2 px-4 md:inline hover:text-gray-400"
            >
              Outdoor <i className="fa-solid fa-chevron-down"></i>
            </a>
          </li>
        </ul>

        {/* Search and User Icons */}
        <div className="hidden md:flex items-center space-x-6">
          <i className="fas fa-search text-xl cursor-pointer hover:text-gray-400"></i>
          <i className="fas fa-user text-xl cursor-pointer hover:text-gray-400"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
