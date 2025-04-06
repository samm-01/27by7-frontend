export default function ContactForm() {
    return (
        <form className="bg-white shadow-xl rounded-2xl p-8 space-y-6">
            <div>
                <h2 className="text-3xl font-bold text-blue-600 mb-2">Get in Touch with Us</h2>
                <p className="text-gray-600">We’d love to hear from you. Fill out the form below!</p>
            </div>

            {/* Name */}
            <div className="relative">
                <input
                    type="text"
                    id="name"
                    placeholder=" "
                    className="peer w-full border border-gray-300 rounded-md px-4 pt-5 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label
                    htmlFor="name"
                    className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
                >
                    Full Name
                </label>
            </div>

            {/* Email */}
            <div className="relative">
                <input
                    type="email"
                    id="email"
                    placeholder=" "
                    className="peer w-full border border-gray-300 rounded-md px-4 pt-5 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label
                    htmlFor="email"
                    className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
                >
                    Email Address
                </label>
            </div>

            {/* Message */}
            <div className="relative">
                <textarea
                    id="message"
                    placeholder=" "
                    rows="4"
                    className="peer w-full border border-gray-300 rounded-md px-4 pt-5 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <label
                    htmlFor="message"
                    className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
                >
                    Your Message
                </label>
            </div>

            {/* Submit */}
            <div className="text-right">
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow transition duration-200"
                >
                    Send Message
                </button>
            </div>
        </form>
    )
}
