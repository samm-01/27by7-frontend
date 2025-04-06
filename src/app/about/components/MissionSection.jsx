"use client";
import Image from 'next/image'
import WhoWeAreVector from '../../../../public/assets/mission-vector.jpg'
export default function MissionSection() {
    return (
        <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <Image src={WhoWeAreVector} alt="Who We Are" width={500} height={500} />

            <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                    Our mission is to make technology accessible, efficient, and impactful for businesses of all sizes.
                    We aim to be the tech partner you can rely on — delivering around-the-clock support, innovative thinking, and transparent communication.
                </p>
            </div>
        </section>
    );
}
