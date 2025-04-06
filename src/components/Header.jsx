"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { Audiowide } from 'next/font/google';

const audiowide = Audiowide({
    weight: '400',
    subsets: ['latin'],
});

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        // { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Industries", path: "/industries" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <header className="bg-white shadow sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <Link href="/">
                    <h1 className={`${audiowide.className} text-3xl text-blue-600 tracking-wider cursor-pointer`}>
                        27By7
                    </h1>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
                    {navLinks.map((link, i) => (
                        <a
                            key={i}
                            href={link.path}
                            className={`relative group ${pathname === link.path ? "text-blue-600" : ""
                                }`}
                        >
                            <span className="hover:text-blue-600">{link.name}</span>
                            <span
                                className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all ${pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                                    }`}
                            ></span>
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
                    {navLinks.map((link, i) => (
                        <a
                            key={i}
                            href={link.path}
                            className={`block border-b border-gray-200 py-2 text-gray-700 hover:text-blue-600 transition ${pathname === link.path ? "text-blue-600 font-medium" : ""
                                }`}
                        >
                            {link.name}
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
