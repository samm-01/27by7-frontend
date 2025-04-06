import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

export default function ContactInfo() {
    return (
        <div className="w-full mt-10 flex flex-col items-center text-center space-y-4 md:flex-row md:justify-between md:space-y-0 md:space-x-10 bg-blue-50 p-6 rounded-xl shadow-sm">

            <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-blue-600 text-xl" />
                <span className="text-gray-700 font-medium">Mumbai, India</span>
            </div>

            <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-blue-600 text-xl" />
                <a href="tel:+911234567890" className="text-gray-700 hover:text-blue-600 transition font-medium">
                    +91 12345 67890
                </a>
            </div>

            <div className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-600 text-xl" />
                <a href="mailto:hello@27by7.com" className="text-gray-700 hover:text-blue-600 transition font-medium">
                    hello@27by7.com
                </a>
            </div>

            <div className="flex items-center space-x-3">
                <FaClock className="text-blue-600 text-xl" />
                <span className="text-gray-700 font-medium">Mon - Fri: 9am - 6pm</span>
            </div>

        </div>
    );
}
