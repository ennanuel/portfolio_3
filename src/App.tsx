
import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import Lenis from "lenis";

import HomeSection from "./components/HomeSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import TestimonialSection from "./components/TestimonialSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loading from "./components/Loading";

import { useFetch } from "./utils/hooks";
import { initializeCalApi, saveVisitorToDB } from "./utils";


export default function App() {
    const [searchParams] = useSearchParams();
    const showingContentFor = useMemo(() => searchParams.get('t'), [searchParams]);
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
        const avoidVisitor = searchParams.get('omit') === 'true';

        initializeCalApi();
        saveVisitorToDB(avoidVisitor);
    }, []);

    if(loading) return <Loading />

    return (
        <div className="">
            <Header showingContentFor={showingContentFor} socials={data?.socials} />
            <HomeSection showingContentFor={showingContentFor} socials={data?.socials} />
            <ServicesSection showingContentFor={showingContentFor} />
            <ProjectsSection showingContentFor={showingContentFor} projects={data?.projects} />
            <AboutSection />
            <TestimonialSection showingContentFor={showingContentFor} testimonials={data?.testimonials} />
            <ContactSection />
            <Footer showingContentFor={showingContentFor} socials={data?.socials} />
        </div>
    )
}