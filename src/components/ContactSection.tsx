

import { motion } from "framer-motion";

import { MdOutlineArrowOutward } from "react-icons/md";
import Button from "./Button";
import { BiMessageSquare } from "react-icons/bi";
import { GiWorld } from "react-icons/gi";

const ease = [0.16, 1, 0.3, 1];

export default function ContactSection() {

    return (
        <section id="contact" className="relative z-[7] min-h-screen bg-light flex p-4 md:p-12">
            <div className="flex-1 rounded-md bg-dark text-brown-200 flex flex-col justify-between gap-12 px-4 py-6 md:py-8 md:px-8">
                <div className="flex flex-col gap-10">
                    <span className="relative block w-max before:absolute before:-bottom-1 before:left-0 before:w-[80%] before:h-[2px] before:bg-brown-800 text-brown-800 uppercase font-ov-soge text-sm">Contact me</span>
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-ov-soge flex flex-wrap">
                        {
                            "Let's build something great together"
                                .split(" ")
                                .map((word, index) => (
                                    <span key={index} className="inline-block leading-[3rem] sm:leading-[4.1rem] md:leading-[5.1rem] lg:leading-[6.2rem] -mt-2 pb-2 overflow-hidden">
                                        <motion.span 
                                            transition={{ ease, duration: 1.8, delay: (index/10) }} 
                                            initial={{ y: '100%' }} 
                                            whileInView={{ y: 0 }}
                                            viewport={{ once: true }}
                                            className="block"
                                        >{word}&nbsp;</motion.span>
                                    </span>
                                ))
                        }
                    </span>
                </div>
                <div className="flex flex-col gap-16">
                    <Button text="Book a Call" namespace="30min" Icon={MdOutlineArrowOutward} size={24} className="font-ov-soge uppercase text-base md:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full sm:rounded-md bg-brown-800 text-brown-400 w-fit"></Button>
                    <div className="flex flex-wrap justify-between gap-6 md:gap-20">
                        <div className="flex flex-col">
                            <span className="text-sm md:text-base font-ov-soge font-medium text-brown-700">For further enquires</span>
                            <div className="text-sm md:text-base flex items-center gap-2 text-brown-600">
                                <BiMessageSquare size={16} />
                                <span className="font-mono truncate">ezemaemmanuelezema6@gmail.com</span>
                            </div>
                        </div>
                        <div className="flex border border-brown-700 rounded-md h-14">
                            <div className="h-full aspect-square flex items-center justify-center text-brown-600">
                                <GiWorld className="text-lg md:text-xl lg:text-2xl" />
                            </div>
                            <div className="border-l border-brown-700 flex flex-col">
                                <span className="flex-1 px-3 flex items-center border-b border-brown-700 font-mono text-brown-600 text-sm md:text-base">Working Globally</span>
                                <span className="flex-1 px-3 flex items-center font-mono text-brown-600 text-sm md:text-base">Available Oct' 24</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}