
import { useEffect } from "react";

import { getCalApi } from "@calcom/embed-react";

import { gql, useQuery } from "@apollo/client";

import Lenis from "lenis";

import HomeSection from "./components/HomeSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import TestimonialSection from "./components/TestimonialSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";

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
    const { loading, data } = useQuery<QueryResult>(QUERY);

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
            <Header socials={data?.ezemaSocials} />
            <HomeSection socials={data?.ezemaSocials} />
            <ServicesSection />
            <ProjectsSection projects={data?.ezemaProjects} />
            <AboutSection />
            <TestimonialSection testimonials={data?.ezemaTestimonials} />
            <ContactSection />
            <Footer socials={data?.ezemaSocials} />
        </div>
    )
}