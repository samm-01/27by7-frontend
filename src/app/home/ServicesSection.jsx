const ServicesSection = () => (
    <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold mb-2">Skilled Workforce</h3>
                    <p className="text-gray-600">
                        Access a pool of talented professionals across various industries.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold mb-2">Temporary Staffing</h3>
                    <p className="text-gray-600">
                        Flexible staffing solutions to meet your project demands.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold mb-2">Permanent Placement</h3>
                    <p className="text-gray-600">
                        Strategic hiring solutions to help grow your team with the right talent.
                    </p>
                </div>
            </div>
        </div>
    </section>
)

export default ServicesSection
