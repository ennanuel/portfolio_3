import { useMemo, useRef, useState } from "react";

import { useScroll, motion, useTransform, cubicBezier } from "framer-motion";

import { BsArrowRight } from "react-icons/bs";
import { MdOutlineArrowOutward } from "react-icons/md";

import image from "../assets/my_image.jpg";
import Button from "./Button";
import MenuLink from "./MenuLink";
import { IntroSectionProps } from "../types";
import { MENUS } from "../assets/constants";

const MY_NAME = 'Ezema Emmanuel';
const TITLE_1 = 'Front End Developer';
const TITLE_2 = 'Web Developer / Designer';
const DESCRIPTION_1 = 'Driven frontend developer: building exceptional web experiences that elevate brands and drive results.';
const DESCRIPTION_2 = 'I craft exceptional web applications and websites that align with your brand identity and drive business growth.';

const ease = [.16, 1, .3, 1];

export default function HomeSection({ socials, showingContentFor }: IntroSectionProps) {
    const title = useMemo(() => showingContentFor === 'frontend' ? TITLE_1 : TITLE_2, [showingContentFor]);
    const description = useMemo(() => showingContentFor === 'frontend' ? DESCRIPTION_1 : DESCRIPTION_2, [showingContentFor]);

    const logoElementRef = useRef<HTMLElement>(null);
    const [{ x, y }, setPositions] = useState({ x: 0, y: 0 });

    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['101vh end', 'end start']
    });

    const translateY = useTransform(scrollYProgress, [1, 0], [50, 0], { ease: cubicBezier(0.16, 1, 0.3, 1) });
    const reverseTranslateY = useTransform(scrollYProgress, [1, 0], ['-100%', '0%'], { ease: cubicBezier(0.16, 1, 0.3, 1) })
    const scale = useTransform(scrollYProgress, [1, 0], [0.9, 1], { ease: cubicBezier(0.16, 1, 0.3, 1) });
    const opacity = useTransform(scrollYProgress, [1, 0], [0, 1], { ease: cubicBezier(0.16, 1, 0.3, 1) });

    const handleMouseOver: React.MouseEventHandler<HTMLElement> = (event) => {
        if(!logoElementRef.current) return;

        const rect = logoElementRef.current.getBoundingClientRect();

        const y = (event.clientY - (rect.top + (rect.height / 2))) / 2;
        const x = (event.clientX - (rect.left + (rect.width / 4))) / 5;

        setPositions({ x, y });
    };
    const handleMouseOut = () => setPositions({ x: 0, y: 0 });


    return (
        <div id="intro" ref={containerRef} className="mb-[-100dvh] bg-black-100">
            <motion.div
                initial={{
                    clipPath: 'ellipse(40% 20% at 50% 120%)'
                }}
                animate={{
                    clipPath: 'ellipse(140% 55vh at 50% 50%)',
                }}
                transition={{
                    duration: 3,
                    delay: .5,
                    ease
                }}
                id="home-layout"
                className="bg-light sticky top-0 z-[1] px-4 sm:px-6 md:px-10 py-6 h-[100dvh]"
            >
                <div className="logo">
                    <motion.span 
                        animate={{ y, x }} 
                        transition={{ ease }}
                        onMouseMove={handleMouseOver} 
                        onMouseOut={handleMouseOut}
                        className="transition-transform ease-expo w-fit duration-500 h-fit md:text-lg text-base overflow-hidden font-bold font-ov-soge block"
                    >
                        <motion.span
                            ref={logoElementRef}
                            style={{ y: reverseTranslateY }} 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }}
                            transition={{ ease, duration: 1.5, delay: 1.6 }} 
                            className="block text-black-90"
                        >ezema.dev</motion.span>
                    </motion.span>
                </div>
                <div className="name">
                    <motion.div style={{ y: translateY, scale, opacity }} transition={{ ease }} className="flex flex-col gap-2 md:gap-6">
                        <motion.h1 className="leading-[3rem] sm:leading-[4rem] md:leading-[6.4rem] text-black-90 font-bold text-2xl sm:text-3xl md:text-5xl font-ov-soge">
                            {
                                MY_NAME.split('').map((letter, index) => (
                                    letter === ' '?
                                    <br key={index} /> :
                                    <motion.span key={index} className="overflow-hidden inline-block -mb-4">
                                        {
                                            <motion.span 
                                                initial={{ y: '100%' }} 
                                                animate={{ y: 0 }} 
                                                transition={{ ease, delay: 0.3 + (index/25), duration: 2 }} 
                                                className="block"
                                            >{letter}</motion.span>
                                        }
                                    </motion.span>
                                ))
                            }
                        </motion.h1>
                        <h3 className="text-base sm:text-lg md:text-xl font-medium font-ov-soge text-black-75 overflow-hidden">
                            <motion.span 
                                className="block" 
                                initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }} 
                                transition={{ ease, duration: 2, delay: 1 }}
                            >{title}</motion.span>
                        </h3>
                    </motion.div>
                </div>
                <div className="links flex justify-end lg:justify-start">
                    <ul className="lg:mr-20 flex flex-col flex-wrap items-start justify-start font-poppins tracking-tighter md:gap-2 text-left text-black-50 text-base">
                        {
                            MENUS.map((link, index) => (
                                showingContentFor !== 'frontend' || (showingContentFor === 'frontend' && link.platform !== 'Testimonials') ?
                                    <motion.li 
                                        key={index} 
                                        className="overflow-hidden"
                                        transition={{ ease, duration: 2, delay: 1.5 + (index/10) }} 
                                        initial={{ opacity: 0 }} 
                                        animate={{ opacity: 1 }}
                                    >
                                        <motion.span 
                                            className="block" 
                                            style={{ y: reverseTranslateY, opacity }} 
                                        >
                                            <MenuLink {...link} />
                                        </motion.span>
                                    </motion.li> :
                                    null
                            )) 
                        }
                    </ul>
                </div>
                <div className="w-fit mt-6 lg:mt-0 image h-sm:hidden lg:hidden flex">
                    <motion.div 
                        transition={{ ease, duration: 2, delay: 0.5 }} 
                        initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0'}} 
                        animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'}} 
                        style={{ y: translateY, opacity, scale }}
                        className="w-fit h-fit overflow-hidden rounded-md"
                    >
                        <motion.img 
                            transition={{ ease, duration: 2, delay: 0.6 }}
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            src={image} 
                            alt="My image" 
                            className="aspect-[.7] w-[120px] lg:w-full max-w-[280px] object-cover saturate-0" 
                        />
                    </motion.div>
                </div>
                <div className="details">
                    <motion.div style={{ y: translateY, opacity, scale }} className="flex-1 flex flex-col justify-between gap-4">
                        <motion.span 
                            transition={{ ease, duration: 2, delay: 1.4 }}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="hidden md:flex w-max items-center justify-center mb-12 text-black-50"
                        >
                            <MdOutlineArrowOutward size={40} />
                        </motion.span>
                        <div className="flex-1 w-fit flex flex-col gap-6 md:gap-10">
                            <p className="text-[.9rem] sm:text-base w-full max-w-[320px] md:text-[1.2rem] leading-[1.4rem] sm:leading-[1.6rem] md:leading-[1.8rem] font-poppins tracking-tighter text-black-50">
                                {
                                    description
                                        .split(" ")
                                        .map((word, index) => (
                                            <span key={index} className="inline-block overflow-hidden -mb-2">
                                                <motion.span 
                                                    transition={{ ease, duration: 1.5, delay: 0.5 + (index/25) }} 
                                                    initial={{ y: '100%' }} 
                                                    animate={{ y: 0 }} 
                                                    className="block"
                                                >{word}&nbsp;</motion.span>
                                            </span>
                                        ))
                                }
                            </p>
                            <div className="w-fit overflow-hidden">
                                <motion.div 
                                    transition={{ ease, duration: 1.5, delay: 0.6 }} 
                                    initial={{ y: '100%' }} 
                                    animate={{ y: 0 }} 
                                    className="overflow-hidden"
                                >
                                    <Button text="Let's Talk" namespace="30min" Icon={BsArrowRight}></Button>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className="socials flex items-end w-full">
                    <ul className="flex h-fit w-full flex-wrap flex-start sm:justify-end md:justify-start items-end lg:items-center lg:gap-6">
                        {
                            socials?.map(({ url_link, platform }, index) => (
                                <li key={index} className="overflow-hidden text-black-50 uppercase text-sm md:text-base font-mono">
                                    <motion.span transition={{ ease, duration: 1.5, delay: 0.6 + (index / 10) }} initial={{ y: '100%' }} animate={{ y: 0 }} className="block">
                                        <Button onClick={() => { location.href = url_link }} text={platform} hoverTextClassName="text-brown-600" className="h-30px px-2 font-mono uppercase before:bg-brown-500/50"></Button>
                                    </motion.span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </motion.div>
            <div className="h-svh"></div>         
        </div>
    )
}