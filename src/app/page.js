import Head from 'next/head'
import Topbar from "../components/Topbar.jsx"
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import HeroSection from "../app/home/HeroSection.jsx"
import ServicesSection from "../app/home/ServicesSection.jsx"
import ContactSection from "../app/home/ContactSection.jsx"

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
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
