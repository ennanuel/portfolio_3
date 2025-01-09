import { useMemo } from "react";

import { MdArrowBack, MdArrowForward } from "react-icons/md";

import { AnimatePresence, motion } from "framer-motion";

import { v4 as generateId } from "uuid";

import Button from "./Button";

import { EzemaTestimonials } from "../types";


const ease = [.16, 1, .3, 1];

const getPages = ( maxLength: number ) => {
    const result = [];
    for(let i = 1; i <= maxLength; i++) result.push(i);
    return result;
}

export default function Testimonial({ testimonial, maxLength, index, setIndex }: { testimonial: EzemaTestimonials, maxLength: number; index: number; setIndex: React.Dispatch<React.SetStateAction<number>> }) {
    const words = useMemo(() => testimonial.verdict.split(' '), [testimonial]);

    const next = () => {
        location.href = '#testimonial';
        setIndex(index < (maxLength - 1) ? index + 1 : 0);
    }
    const prev = () => {
        location.href = "#testimonial";
        setIndex(index > 0 ? index - 1 : maxLength - 1);
    }
    
    const id = useMemo(() => generateId(), [index])

    return (
        <div id="testimonial" className="flex flex-col md:flex-row gap-10 mt-20 px-6 md:px-10">
            <div className="relative flex-1 aspect-square md:aspect-[1.1]">
                <div className="absolute w-full h-full top-0 left-0 bg-black-75 rounded-full md:rounded-md">
                    <AnimatePresence>
                        <motion.div
                            key={id} 
                            transition={{ ease: [1, .2, .16, 1], duration: 1.8 }}
                            initial={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }}
                            animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'}}
                            exit={{ clipPath: 'polygon(0 0, 100% 0, 100%, 0, 0 0)' }}
                            className="absolute top-0 left-0 w-full h-full  rounded-full md:rounded-md object-cover grayscale overflow-hidden"
                        >
                            <motion.img 
                                transition={{ ease: [1, .2, .16, 1], duration: 1.8 }}
                                initial={{ scale: 1.2 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 1 }}
                                src={testimonial.client_image.publicUrl} 
                                className="rounded-md object-cover saturate-0 absolute top-0 left-0 w-full h-full" 
                                />
                        </motion.div>   
                    </AnimatePresence>
                </div>
            </div>
            <div className="flex-1 flex flex-col gap-4">
                <div className="flex flex-col gap-5">
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.span key={id} className="text-lg md:text-2xl text-center md:text-left font-medium font-ov-soge text-black-75">
                            {
                                words.map((word, index) => (
                                    <span key={index} className="inline-block overflow-hidden -mb-4">
                                        <motion.span 
                                            key={testimonial.id}
                                            transition={{ ease, duration: 1, delay: (index/25) }}
                                            initial={{ y: '100%' }} 
                                            animate={{ y: 0 }} 
                                            exit={{ y: '-100%' }} 
                                            className="block"
                                        >{word}&nbsp;</motion.span>
                                    </span>
                                ))
                            }
                        </motion.span>
                    </AnimatePresence>
                    <div className="flex flex-col items-center justify-center md:items-start md:justify-start mt-5">
                        <div className="overflow-hidden relative">
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.span 
                                    key={id}
                                    transition={{ ease, duration: .6, delay: .4 }}
                                    initial={{ y: '100%' }} 
                                    animate={{ y: 0 }} 
                                    exit={{ y: '-100%' }} 
                                    className="font-medium font-poppins tracking-tighter text-[1.2rem] text-black-75 block"
                                >{testimonial.client_name}</motion.span>  
                            </AnimatePresence>
                        </div>
                        <div className="relative font-poppins overflow-hidden tracking-tighter text-[1.1rem] text-black-50">
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.span 
                                    key={id}
                                    transition={{ ease, duration: .6, delay: .5 }}
                                    initial={{ y: '100%' }} 
                                    animate={{ y: 0 }} 
                                    exit={{ y: '-100%' }} 
                                    className="inline-block"
                                >{testimonial.client_role}&nbsp;@{testimonial.client_company}</motion.span> 
                            </AnimatePresence>
                        </div>
                    </div>
                    <div className="relative">
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div key={id} className="flex flex-wrap gap-2 justify-center md:justify-start">
                                {
                                    testimonial.services.map((tag, index) => (
                                        <span key={index} className="block overflow-hidden">
                                            <motion.span 
                                                key={index}
                                                transition={{ duration: .6, delay: .5 + (index/10) }}
                                                initial={{ y: '100%' }}
                                                animate={{ y: 0 }}
                                                exit={{ y: '-100%' }}
                                                className="flex items-center justify-center h-[30px] px-3 font-mono whitespace-nowrap uppercase text-black-50 border border-black-50 rounded-md"
                                            >{tag}</motion.span>
                                        </span>
                                    ))
                                }
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
                <div className="flex-1 flex flex-col md:flex-row justify-center items-center md:justify-between md:items-end gap-8 md:gap-4 mt-6 md:mt-0">
                    <div className="flex items-center gap-2 font-mono text-xl text-black-50">
                        <span className="relative block w-fit overflow-clip">
                            <span className="opacity-0">0</span>
                            <span style={{ transform: `translateY(-${index * 100}%)` }} className="absolute top-0 left-0 w-full h-full flex flex-col transition-transform duration-1000 ease-expo">
                                {
                                    getPages(maxLength).map((item) => (<span key={item}>{item}</span>))
                                }
                            </span>
                        </span>
                        <hr className="border-none w-16 h-[2px] bg-black-50" />
                        <span>{maxLength}</span>
                    </div>
                    <div className="flex sticky md:bottom-10 items-center gap-4">
                        <span className="relative">
                            <Button toLeft text="prev" onClick={prev} Icon={MdArrowBack} className="uppercase font-ov-soge px-4 min-h-[40px] py-3 bg-brown-800 text-brown-400 rounded-full sm:rounded-md"></Button>
                        </span>
                        <span className="relative block">
                            <Button text="next" onClick={next} Icon={MdArrowForward} className="uppercase font-ov-soge px-4 min-h-[40px] py-3 bg-brown-800 text-brown-400 rounded-full sm:rounded-md"></Button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}