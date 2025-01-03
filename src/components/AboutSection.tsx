

import { AltTitle } from "./AltTitle";

import { cubicBezier, motion, MotionValue, useScroll, useTransform } from "framer-motion";

import image from "../assets/my_image.jpg";
import SubTitle from "./SubTitle";
import { useRef } from "react";

const sub_title = "With a passion for design and development, I take projects from ideation to launch, ensuring a seamless journey that leaves a lasting positive impact on the digital landscape and your business.";

const ease = [0.16, 1, 0.3, 1];

function Word({ range, progress, word }: { range: [number, number], progress: MotionValue<number>, word: string; }) {
    const opacity = useTransform(progress, range, [0.2, 1]);

    return (
        <motion.span 
            style={{ opacity }}
            transition={{ ease }}
            className="inline-block"
        >{word}&nbsp;</motion.span>
    )
}

export default function AboutSection() {
    const containerRef = useRef<HTMLElement>(null);
    const boxRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['end 40vh', 'start start'],
    });

    const { scrollYProgress: scrollYProgress2 } = useScroll({
        target: boxRef,
        offset: ["0.1 end", "90vh start"]
    })

    const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1], { ease: cubicBezier(0.16, 1, 0.3, 1) });
    const translateY = useTransform(scrollYProgress, [0, 1], [-240, 0], { ease: cubicBezier(0.16, 1, 0.4, 1) });


    return (
        <div id="about" className="bg-light">
            <motion.section style={{ scale, translateY }} ref={containerRef} className="relative z-[7] min-h-screen flex flex-col px-6 md:px-10 p-10 bg-dark text-brown-200 rounded-b-[30px]">
                <AltTitle>Designer &-Developer</AltTitle>
                <div ref={boxRef} className="h-[200vh] flex flex-col justify-between gap-20 mb-20">
                    <span  className="sticky top-0 font-poppins text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-tighter leading-[2.6rem] sm:leading-[3rem] md:leading-[4.1rem] lg:leading-[5.1rem] pt-[120px]">
                        {
                            sub_title
                                .split(" ")
                                .map((word, index, arr) => (
                                    <Word 
                                        key={index} 
                                        progress={scrollYProgress2} 
                                        range={[(index / arr.length), ((index + 1) / arr.length)]} 
                                        word={word} 
                                    />
                                ))
                        }</span>
                </div>
                <div className="flex flex-col sticky top-0 md:flex-row gap-12">
                    <div className="flex-1">                            
                        <img src={image} alt="" className="w-full max-w-[240px] aspect-square lg:aspect-[.7] object-cover rounded-md grayscale" />
                    </div>

                    <div className="flex flex-1">
                        <SubTitle title="About me" paragraphClass="max-w-[400px] text-base font-poppins tracking-tighter text-black-50">                        
                            Creating great web experiences is my primary focus. I ensure each project leaves users with a feel-good sensation through meticulous attention to detail and user-centric design principles. \\br \\br When I'm not immersed in web development and design, you can find me sharing insights about my freelance journey on YouTube, bouldering, playing music, or tending to my cherished houseplants.
                        </SubTitle>
                    </div>
                </div>
            </motion.section>
        </div>
    )
}