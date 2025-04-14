

import { Title } from "./Title";
import SubTitle from "./SubTitle";
import Service from "./Service";
import { useEffect, useState } from "react";
import { FaLaptop } from "react-icons/fa6";
import { SiUpwork } from "react-icons/si";

// const SERVICES = [
//     {
//         subTitle: "Development",
//         title: "Web Development",
//         description: "Expertly coded websites and web applications designed to captivate your audience and drive business growth. I prioritize performance and user experience, ensuring your digital presence stands out.",
//         subServices: [
//             "CMS Integration",
//             "Website & Web Application",
//             "Motion & Animations"
//         ]
//     },
//     {
//         subTitle: "Design",
//         title: "Web Design",
//         description: "A well-designed website or web application is more than just a digital presence. It's a powerful tool that can elevate your brand, engage your audience, and drive business growth. We craft exceptional digital experiences that align with your unique brand identity and deliver results.",
//         subServices: [
//             "Wireframing",
//             "Responsive Design",
//             "User-centric Design",
//         ]
//     },
//     {
//         subTitle: "SEO",
//         title: "SEO",
//         description: "Want to dominate search engine results and attract more organic traffic? I'll optimize your website, create compelling content, and build high-quality backlinks to boost your online visibility, elevate your brand and drive real results.",
//         subServices: [
//             "Local SEO",
//             "On-Page & Off-Page Optimization",
//             "Website Audits & Analysis"
//         ]
//     }
// ]

const EXPERIENCE = [
    {
        company: "Safe Security Dynamics",
        subTitle: "Feb. 2024 - Jan. 2025",
        Icon: FaLaptop,
        title: "Frontend Developer",
        description: "At Safe Security Dynamics(SSD), I contributed to the full development lifecycle, from design to maintenance, proactively resolving issues and delivering optimized, user-friendly experiences remotely.",
        subServices: [
            "Responsive design advocate",
            "Optimized performance, debugged",
            "Built & maintained features."
        ]
    },
    {
        company: "Freelancer",
        subTitle: "May 2022 - Jan. 2024",
        Icon: SiUpwork,
        title: "Web Developer",
        description: "Focused on impactful online presence for clients, I developed a digital artist's website that achieved a 25% reach increase through user-centric design, effective portfolio presentation, and proactive problem-solving in a remote setting",
        subServices: [
            "Boosted clients' online reach",
            "Crafted intuitive showcase",
            "Delivered remotely, resolved issues"
        ]
    },
]

export default function ServicesSection() {
    const [{ topHeight, titleFontSize, titlePadding }, setDimensions] = useState({ topHeight: '', titleFontSize: '', titlePadding: '' });

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth <= 440) setDimensions({ topHeight: '92px', titleFontSize: '1.6rem', titlePadding: '32px' });
            else setDimensions({ topHeight: '124px', titleFontSize: '2.37rem', titlePadding: '64px' });
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return (
        <section id="services" className="relative z-[3] bg-dark rounded-t-[30px] text-brown-200 min-h-screen md:px-10 flex-col lg:flex-row flex gap-20 md:pb-[160px]">
            <div className="sticky flex-1 lg:top-0 z-[20] lg:h-screen flex flex-col gap-10 mt-20 px-4 sm:px-6 lg:mt-0 lg:py-20 lg:pt-[124px] mb-[-20vh]">
                <Title className="font-ov-soge font-bold">My Experience{/*Your Success, My Goal*/}</Title>
                <SubTitle title="Services">
                    {/* Your brand deserves a digital home that's as unique as you are. I specialize in crafting custom web experiences that captivate your audience and convert visitors into customers. */}{"Building dynamic web apps for startups and clients with React, TypeScript, and seamless API integrations."}
                </SubTitle>
            </div>
            <div className="flex-1">
                <ul className="flex flex-1 flex-col items-start justify-start lg:mt-[50vh]">
                    {
                        EXPERIENCE.map((service, index) => (
                            <Service 
                                {...service}
                                key={index}  
                                index={index} 
                                total={EXPERIENCE.length} 
                                topHeight={topHeight} 
                                titleFontSize={titleFontSize} 
                                titlePadding={titlePadding} 
                            />
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}