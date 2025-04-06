import TopBar from "../../components/Topbar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HeroSection from "./components/HeroSection";
import WhoWeAre from "./components/WhoWeAre";
import MissionSection from "./components/MissionSection";
import WhyChooseUs from "./components/WhyChooseUs";

export default function AboutPage() {
    return (
        <>
            <TopBar />
            <Header />
            <main className="max-w-6xl mx-auto px-4 py-12 text-gray-800 space-y-20">
                <HeroSection />
                <WhoWeAre />
                <MissionSection />
                <WhyChooseUs />
            </main>
            <Footer />
        </>
    );
}
