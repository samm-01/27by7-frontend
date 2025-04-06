"use client";
import Image from "next/image";
import heroImage from "../../../public/assets/HomeBanner2.jpg" // Update path if needed

export default function HeroSection() {
    return (
        <section className="bg-neutral py-16 px-4 md:px-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

                {/* Text Section */}
                <div className="md:w-2/5">
                    <h1 className="text-4xl md:text-5xl font-heading text-dark mb-6">
                        Empowering Businesses with Skilled Manpower
                    </h1>
                    <p className="text-lg text-dark mb-6">
                        Providing highly skilled and reliable manpower to support your business 24/7.
                    </p>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-blue-700 transition">
                        Get Started
                    </button>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2">
                    <Image
                        src={heroImage}
                        alt="Hero Section"
                        className="w-full h-auto rounded-2xl"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
