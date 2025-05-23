"use client";
import Image from "next/image";
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-800 text-white py-6 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                {/* Logo Image */}
                <div className="flex items-center gap-2">
                    <Image
                        src="/27by7-footer.jpg" // make sure this is in the /public folder
                        alt="27by7 Logo"
                        width={100}
                        height={100}
                        className="rounded-full object-cover"
                    />
                    {/* <span className="text-2xl font-bold text-white tracking-wide">27by7</span> */}
                </div>
                {/* Copyright */}
                <div className="text-center text-sm text-white">
                    &copy; {new Date().getFullYear()} 27by7. All rights reserved. Built with ❤️ by{" "}
                    <a
                        href="https://www.infonza.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 font-medium hover:underline"
                    >
                        Infonza
                    </a>
                </div>

                {/* Social Links */}
                <div className="flex space-x-5">
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition duration-300 text-xl"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition duration-300 text-xl"
                    >
                        <FaLinkedinIn />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-400 transition duration-300 text-xl"
                    >
                        <FaInstagram />
                    </a>
                </div>
            </div>


        </footer>
    );
}
