import { useRef, useState } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import { MdArrowUpward } from "react-icons/md";
import MenuLink from "./MenuLink";
import { EzemaSocials } from "../types";



const MENUS = [
    {
        platform: "Home",
        url_link: "#"
    },
    {
        platform: "Services",
        url_link: "#services"
    },
    {
        platform: "Works",
        url_link: "#projects"
    },
    {
        platform: "About",
        url_link: "#about"
    },
    {
        platform: "Testimonials",
        url_link: "#testimonials"
    },
    {
        platform: "Contact",
        url_link: "#contact"
    }
];

export default function Footer({ socials }: { socials?: EzemaSocials[] }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const anchorRef = useRef<HTMLAnchorElement>(null);

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const { scrollYProgress } = useScroll({
        target: containerRef
    });
    const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
    const translateY = useTransform(scrollYProgress, [0, 1], [50, 0]);

    const handleMouseMove: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
        if(!anchorRef.current) return;

        const rect = anchorRef.current.getBoundingClientRect();
        const x = event.clientX - (rect.left + (rect.width / 4));
        const y = event.clientY - (rect.top + (rect.height / 4));

        setMousePosition({ x, y });
    }
    const handleMouseOut = () => setMousePosition({ x: 0, y: 0 });

    return (
        <div ref={containerRef} className="mt-[-100dvh] bg-light">
            <div className="h-[100dvh]"></div>
            <motion.footer style={{ opacity: scrollYProgress, y: translateY, scale }} className="overflow-clip z-[2] w-full sticky bottom-0 p-4 md:p-8 flex flex-col gap-20 justify-between">
                <div className="flex gap-8">
                    <span className="flex-1 md:flex-[3] flex items-center font-ov-soge font-bold text-base md:text-lg h-[40px] border-b border-black-25 text-black-90">ezema.dev</span>
                    <div className="flex flex-col gap-2 md:gap-4 flex-1">
                        <span className="flex items-center font-medium font-poppins tracking-tighter text-base md:text-lg h-[40px] border-b border-black-25">Menu</span>
                        <ul className="flex flex-col gap-1 md:gap-2 text-sm lg:text-base font-poppins tracing-tighter text-black-50">
                            {
                                MENUS.map((link, index) => (
                                    <MenuLink key={index} {...link} />
                                ))
                            }
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2 md:gap-4 flex-1">
                        <span className="flex items-center font-medium font-poppins tracking-tighter text-base md:text-lg h-[40px] border-b border-black-25">Socials</span>
                        <ul className="flex flex-col gap-1 md:gap-2 text-sm lg:text-base font-poppins tracing-tighter text-black-50">
                            {
                                socials?.map((link, index) => (
                                    <MenuLink key={index} {...link} target="_blank" />
                                ))
                            }                        
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between items-end gap-12">
                    <span className="text-black-90 font-ov-soge font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[3rem] sm:leading-[4.1rem] md:leading-[5rem] lg:leading-[6.4rem]">
                        <span className="font-poppins">© {(new Date()).getFullYear()}</span><br />
                        <span>Ezema Emmanuel</span>
                    </span>
                    <motion.div 
                        transition={{ ease: [.16, 1, .3, 1], duration: .5 }} 
                        animate={{ x: mousePosition.x, y: mousePosition.y }} 
                        className="transition-transform ease-expo duration-500"
                    >
                        <a 
                            ref={anchorRef}
                            onMouseMove={handleMouseMove} 
                            onMouseOut={handleMouseOut}
                            href="/#"
                            className="relative w-20 aspect-square text-brown-800 mb-4 mr-4 flex items-center justify-center before:absolute before:w-full before:h-full before:bg-brown-300 before:ease-expo before:duration-500 before:rounded-full before:transition-transform hover:before:scale-[1.4]"
                        >
                            <MdArrowUpward size={30} className="relative" />
                        </a>
                    </motion.div>
                </div>
            </motion.footer>
        </div>
    )
}