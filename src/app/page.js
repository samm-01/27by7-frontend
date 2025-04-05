import '../../src/app/globals.css'
import Head from 'next/head'
import Topbar from "../components/Topbar.jsx"
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import HeroSection from "../app/home/HeroSection.jsx"
import ServicesSection from "./home/TopServices.jsx"
import ContactSection from "../app/home/ContactSection.jsx"
import Testimonials from "../app/home/Testimonial.jsx"
import HowItWorks from './home/HowItWorks'
import CTASection from './home/CtaSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Outsourcing Manpower Solutions</title>
        <meta name="description" content="We provide expert manpower outsourcing solutions to drive your business forward." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Topbar />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <HowItWorks />
        {/* <ContactSection /> */}
        <Testimonials />
        {/* <CTASection /> */}
      </main>
      <Footer />
    </>
  )
}
