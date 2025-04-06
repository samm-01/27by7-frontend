"use client";

import { FaFileAlt, FaUsers, FaComments, FaRocket } from "react-icons/fa";

export default function HowItWorks() {
    const steps = [
        {
            icon: <FaFileAlt className="text-3xl text-blue-600" />,
            title: "1. Submit Requirements",
            desc: "Tell us what roles you’re looking to outsource and your ideal candidate profile.",
        },
        {
            icon: <FaUsers className="text-3xl text-blue-600" />,
            title: "2. Get Vetted Talent",
            desc: "We shortlist top candidates tailored to your needs, saving you time and effort.",
        },
        {
            icon: <FaComments className="text-3xl text-blue-600" />,
            title: "3. Interview & Select",
            desc: "You interview the candidates, assess their skills, and make the final choice.",
        },
        {
            icon: <FaRocket className="text-3xl text-blue-600" />,
            title: "4. Onboard & Launch",
            desc: "We help you onboard and manage the resource, ensuring smooth operations.",
        },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-heading font-bold text-dark mb-3">How It Works</h2>
                <p className="text-gray-600 mb-10">
                    Hire the right talent in 4 easy steps — fast, efficient, and hassle-free.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-white rounded-2xl p-6 shadow hover:shadow-md transition-all duration-300">
                            <div className="mb-4 flex justify-center">{step.icon}</div>
                            <h3 className="font-semibold text-lg text-dark mb-2">{step.title}</h3>
                            <p className="text-gray-600 text-sm">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
