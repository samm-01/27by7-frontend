import TopBar from '../../components/Topbar'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import React from "react";
import Link from "next/link";

export const metadata = {
    title: "Proxmox Virtual Environment – PVE Solution",
    description:
        "Overview of Proxmox VE, features, and enterprise benefits with links to learn more.",
};

export default function ContactPage() {
    return (
        <>
            <TopBar />
            <Header />
            <main className="bg-gray-50 text-gray-800">
                {/* Top banner */}
                <section className="bg-gray-900 text-white py-14 px-6 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold">
                        Proxmox Virtual Environment – PVE Solution
                    </h1>
                </section>

                {/* Content */}
                <section className="max-w-5xl mx-auto px-6 py-12 space-y-6 leading-7">
                    {/* Logo */}
                    <div className="flex justify-center">
                        {/* Use <img> to avoid Next Image domain config */}
                        <img
                            src="https://www.proxmox.com/images/proxmox/Proxmox_logo_standard_hex_400px.png"
                            alt="Proxmox"
                            className="w-52 h-auto"
                        />
                    </div>

                    <p>
                        <strong>Proxmox Virtual Environment</strong> is a complete open-source
                        server virtualization platform and a practical alternative to VMware
                        vSphere, Microsoft Hyper-V, Oracle VM, and Citrix XenServer.
                    </p>

                    <p>
                        Proxmox VE is the leading open-source platform for all-inclusive enterprise virtualization. With the central built-in web interface you can easily run Windows VMs, Linux VMs and Linux containers, manage software-defined storage and networking functionality, high-availability clustering, and multiple integrated out-of-the-box tools like backup/restore, live migration, replication, the firewall and disaster recovery. Enterprises use the powerful yet easy-to-manage all-in-one solution Proxmox VE to meet the core requirements—less complexity, more elasticity— of today’s modern data centers ensuring to stay adaptable for future growth thanks to the flexible, modular and open architecture.


                    </p>

                    <p>
                        The enterprise-class features and the intuitive web interface are designed to help you increase the use of your existing resources and reduce hardware cost and administrating time.


                    </p>

                    <p>
                        Check out{" "}
                        <a
                            href="https://www.proxmox.com/en/proxmox-ve/features"
                            className="text-blue-600 underline hover:no-underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Proxmox VE Features
                        </a>{" "}
                        for more details.
                    </p>

                    <p>
                        <a
                            href="https://www.proxmox.com/en/news/press-releases/proxmox-ve-turns-10"
                            className="text-blue-600 underline hover:no-underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Proxmox VE is 18+ years old
                        </a>
                        , with a worldwide user base of 900,000+ hosts.
                    </p>

                    <p>
                        {/* <a
                            href="https://www.technoinfotech.com/"
                            className="text-blue-600 underline hover:no-underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            TechnoInfotech is an official reseller partner of Proxmox
                        </a>
                        .  */}
                        We provide planning, deployment, and implementation support (local
                        or remote) on top of license/support subscriptions—offering peace of
                        mind and competitive pricing.
                    </p>

                    {/* Example internal link (if needed) */}
                    <div className="pt-2">
                        <Link
                            href="/contact"
                            className="inline-block rounded-lg border px-4 py-2 hover:bg-gray-100"
                        >
                            Contact Us
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
