"use client";
import Image from 'next/image'
import WhoWeAreVector from '../../../../public/assets/who-we-are-vector.jpg'
export default function WhoWeAre() {
    return (
        <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Who We Are</h3>
                <p className="text-gray-700 leading-relaxed">
                    We are a dynamic team of developers, designers, and strategists dedicated to helping businesses grow through smart, scalable, and user-focused digital products.
                    With years of experience across industries, we blend creativity and code to deliver results that speak for themselves.
                </p>
            </div>
            <Image src={WhoWeAreVector} alt="Who We Are" width={500} height={500} />

        </section>
    );
}
