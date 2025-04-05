"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = ["Home", "About", "Services", "Industries", "Contact"];

    return (
        <header className="bg-white shadow sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

                {/* Logo */}
                <h1 className="text-xl font-bold text-blue-600">27by7</h1>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
                    {navLinks.map((item, i) => (
                        <a
                            key={i}
                            href="#"
                            className="relative group"
                        >
                            <span className="hover:text-primary">{item}</span>
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                    <a
                        href="#"
                        className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
                    >
                        Hire Now
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-2xl text-gray-700">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white px-6 pb-4 space-y-4 shadow">
                    {navLinks.map((item, i) => (
                        <a
                            key={i}
                            href="#"
                            className="block border-b border-gray-200 py-2 text-gray-700 hover:text-primary transition"
                        >
                            {item}
                        </a>
                    ))}
                    <a
                        href="#"
                        className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
                    >
                        Hire Now
                    </a>
                </div>
            )}
        </header>
    );
}
