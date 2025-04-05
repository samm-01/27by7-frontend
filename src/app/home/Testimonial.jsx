"use client";

import { FaStar } from "react-icons/fa";

export default function Testimonials() {
    const testimonials = [
        {
            name: "Anjali Mehra",
            role: "HR Manager, TechSpark",
            image: "https://randomuser.me/api/portraits/women/68.jpg",
            feedback:
                "27by7 helped us scale our operations rapidly by providing skilled remote developers within days. The onboarding was seamless and efficient.",
        },
        {
            name: "Rajiv Khanna",
            role: "CEO, Finvesto",
            image: "https://randomuser.me/api/portraits/men/44.jpg",
            feedback:
                "Their customer support outsourcing has been top-notch. Our client satisfaction rates have gone up significantly since partnering with 27by7.",
        },
        {
            name: "Emily Turner",
            role: "Operations Head, GlobalMart",
            image: "https://randomuser.me/api/portraits/women/22.jpg",
            feedback:
                "Finding quality manpower was a big challenge until we connected with 27by7. Their team is reliable, communicative, and professional.",
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-heading font-bold text-dark">What Our Clients Say</h2>
                    <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                        Hear from companies who have scaled faster and served better with 27by7's manpower outsourcing.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
                        >
                            <div className="flex items-center space-x-4 mb-4">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-14 h-14 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-semibold text-primary">{t.name}</p>
                                    <p className="text-sm text-gray-500">{t.role}</p>
                                </div>
                            </div>

                            <p className="text-gray-700 text-sm italic">"{t.feedback}"</p>

                            {/* <div className="flex mt-4 text-yellow-400">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
