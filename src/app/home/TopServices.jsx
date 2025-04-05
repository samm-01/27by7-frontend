"use client";

import { FaUsers, FaLaptopCode, FaHeadset } from "react-icons/fa";

export default function TopServices() {
    const services = [
        {
            icon: <FaUsers className="text-3xl text-primary" />,
            title: "Manpower Outsourcing",
            description:
                "We provide skilled professionals tailored to your business needs, whether short-term or long-term.",
        },
        {
            icon: <FaLaptopCode className="text-3xl text-primary" />,
            title: "Remote IT Teams",
            description:
                "Build high-performing remote tech teams with the expertise you need — fast, reliable, and scalable.",
        },
        {
            icon: <FaHeadset className="text-3xl text-primary" />,
            title: "Customer Support Staffing",
            description:
                "Deliver exceptional support by outsourcing trained and multilingual support teams 24/7.",
        },
    ];

    return (
        <section className="py-16 bg-blue-50">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-heading text-dark mb-10 text-center">What We Do</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition"
                        >
                            <div className="mb-4 flex justify-center">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-dark mb-2">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
