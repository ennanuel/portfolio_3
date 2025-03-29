
import { useEffect } from "react";

import { getCalApi } from "@calcom/embed-react";

import Lenis from "lenis";

import HomeSection from "./components/HomeSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import TestimonialSection from "./components/TestimonialSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { useFetch } from "./utils/hooks";


export default function App() {
    const { loading, data } = useFetch();

    useEffect(() => {
        const lenis = new Lenis();
        
        function raf(time: DOMHighResTimeStamp) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        
        requestAnimationFrame(raf);
    }, []);
    
    useEffect(()=>{
        (async function () {
            const cal = await getCalApi({ namespace: "30min" });
            cal("ui", {
                hideEventTypeDetails: false,
                layout: "month_view"
            });
        })();
    }, []);

    if(loading) return <div className="bg-black-100 h-screen w-full"></div>

    return (
        <div className="">
            <Header socials={data?.socials} />
            <HomeSection socials={data?.socials} />
            <ServicesSection />
            <ProjectsSection projects={data?.projects} />
            <AboutSection />
            <TestimonialSection testimonials={data?.testimonials} />
            <ContactSection />
            <Footer socials={data?.socials} />
        </div>
    )
}