import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Topbar() {
    return (
        <div className="bg-gradient-to-r from-teal-600 to-cyan-500 text-white text-sm px-4 py-2 flex justify-between items-center">
            <div className="flex items-center gap-4">
                <span className="flex items-center gap-1"><FaEnvelope /> support@27by7.com</span>
                <span className="flex items-center gap-1"><FaMapMarkerAlt /> Bangalore, India</span>
            </div>
            <div className="flex gap-3 text-white">
                <a href="#"><FaLinkedin /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaInstagram /></a>
            </div>
        </div>
    );
}
