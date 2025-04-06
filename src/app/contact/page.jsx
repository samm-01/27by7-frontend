import TopBar from '../../components/Topbar'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ContactForm from './components/ContactForm'
import ContactInfo from './components/ContactInfo'
import ContactHeader from './components/ContactHeader'
import Image from 'next/image'
import ContactVector from '../../../public/assets/contact-vector.jpg' // Place this in public or import your image

export default function ContactPage() {
    return (
        <>
            <TopBar />
            <Header />
            {/* <ContactHeader /> */}


            <main className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        {/* Vector Image */}
                        <div className="hidden md:block">
                            <Image src={ContactVector} alt="Contact Us" width={500} height={500} />
                        </div>

                        {/* Contact Form */}
                        <div>
                            <ContactForm />
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-12">
                        <ContactInfo />
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}
