
import React, { useEffect, useState } from "react";
import { getCalApi } from "@calcom/embed-react";

import Lenis from "lenis";

import { BsArrowRight } from "react-icons/bs";

import HomeSection from "./components/HomeSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import TestimonialSection from "./components/TestimonialSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Button from "./components/Button";
import { gql, useQuery } from "@apollo/client";
import { QueryResult } from "./types";



const QUERY = gql`
    query EzemaTestimonials {
        ezemaProjects {
            title
            desc
            demo_url
            code_url
            category
            tags
            image_public_id
            image_url
            video_public_id
            video_url
            createdAt
        }
        ezemaTestimonials {
            id
            verdict
            services
            client_name
            client_role
            client_company
            client_image {
                publicUrl
            }
        }
        ezemaSocials(where: {
            platform: {
                not: {
                    equals: "Email"
                }
            }
        }) {
            id
            platform
            url_link
        }
    }
`;


export default function App() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(false);

    const open = () => setMenuIsOpen(true);
    const close = () => setMenuIsOpen(false);

    const handleModalClick: React.MouseEventHandler<HTMLDialogElement> = (event) => {
        const modal = document.getElementById('menu-modal');
        if(!modal) return;

        const rect = modal.getBoundingClientRect();
        const isWithinRect = event.clientX >= rect.left && event.clientX <= (rect.left + rect.width) && event.clientY >= rect.top && event.clientY <= (rect.top + rect.height);

        if(!isWithinRect) close();
    };

    const { loading, data } = useQuery<QueryResult>(QUERY);

    useEffect(() => {
        if (menuIsOpen) document.querySelector('body')?.classList?.add('overflow-hidden');
        else document.querySelector('body')?.classList?.remove('overflow-hidden');
    }, [menuIsOpen]);

    useEffect(() => {
        const lenis = new Lenis();
        
        function raf(time: DOMHighResTimeStamp) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        
        requestAnimationFrame(raf);
    }, []);

    useEffect(() => {
        location.href = "#";
        setTimeout(() => window.scrollTo(0, 0), 0);
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
            <header className={`${showHeader || menuIsOpen ? '' : 'pointer-events-none'} fixed z-[999999] top-0 right-0 py-4 sm:py-8 px-4 sm:px-8 flex gap-2 md:gap-[12px] justify-end items-center`}>
                <span className={`${menuIsOpen ? 'before:opacity-50 after:opacity-100 after:delay-[400ms] before:delay-[450ms] before:duration-1000 after:duration-1000' : 'before:opacity-0 after:opacity-0 opacity-0'} pointer-events-none transition-opacity w-[400px] md:w-[440px] aspect-square absolute top-[-160px] right-[-200px] before:absolute before:top-12 before:left-8 before:w-full before:h-full before:rounded-full before:bg-brown-700 before:transition-opacity after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-full after:bg-brown-700 after:transition-opacity`}></span>
                <div className={`${menuIsOpen || showHeader ? '' : 'scale-0 opacity-0'} transition-[transform,_opacity] duration-500 ease-expo`}>
                    <Button text="Let's Talk" namespace="30min" Icon={BsArrowRight}></Button>
                </div>
                <button onClick={menuIsOpen ? close : open} className={`${showHeader || menuIsOpen ? '' : 'scale-0'} relative w-12 md:w-[60px] aspect-square rounded-full md:rounded-md bg-brown-400 text-brown-900 flex items-center justify-center transition-transform duration-1000 ease-expo md:hover:scale-90 before:absolute before:top-[50%] before:left-1/2 before:translate-x-[-50%] before:h-[2px] before:w-1/2 before:bg-brown-900 before:transition-transform before:duration-300 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-1/2 after:bg-brown-900 after:transition-transform after:duration-300 ${menuIsOpen ? 'after:-rotate-45 after:-translate-y-1/2 before:rotate-45 before:-translate-y-1/2' : 'before:translate-y-[calc(-50%_+_5px)] after:translate-y-[calc(-50%_-_5px)]'}`}>
                </button>
            </header> 
            <Menu handleModalClick={handleModalClick} menuIsOpen={menuIsOpen} closeModal={close} socials={data?.ezemaSocials || []} />
            <HomeSection socials={data?.ezemaSocials || []} setShowHeader={setShowHeader} />
            <ServicesSection />
            <ProjectsSection projects={data?.ezemaProjects || []} />
            <AboutSection />
            <TestimonialSection testimonials={data?.ezemaTestimonials || []} />
            <ContactSection />
            <Footer socials={data?.ezemaSocials || []} />
        </div>
    )
}