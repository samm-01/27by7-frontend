"use client";

export default function CTASection() {
    return (
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-10 px-4">
            <div className="max-w-5xl mx-auto bg-white text-blue-800 rounded-3xl shadow-lg px-6 py-8 text-center">
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">
                    Ready to Find Top Talent?
                </h2>
                <p className="text-base md:text-lg mb-6">
                    Let’s help you build your dream team — skilled, vetted, and ready to go.
                </p>
                <a
                    href="#contact"
                    className="inline-block bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-full shadow hover:bg-blue-800 transition-all duration-300"
                >
                    Get in Touch
                </a>
            </div>
        </section>
    );
}
