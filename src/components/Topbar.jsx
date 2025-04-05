import { FaLinkedin, FaFacebook, FaXTwitter, FaInstagram } from "react-icons/fa6";

export default function Topbar() {
    return (
        <div className="bg-gray-100 text-sm text-gray-700 px-4 py-2 flex justify-between items-center">
            <div className="flex gap-4">
                <span>📧 contact@infonza.com</span>
                <span>📍 Dubai | Singapore | USA</span>
            </div>
            <div className="flex gap-3 text-blue-600">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaXTwitter />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
            </div>
        </div>
    );
}
