import { useMemo } from "react";

import { motion } from "framer-motion";


const ease = [.16, 1, .3, 1];

export default function SubTitle({ children, title, className, paragraphClass, alt }: { title: string; children: string; className?: string; paragraphClass?: string; alt?: boolean; }) {

    const words = useMemo(() => children.split(' '), []);

    return (
        <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-12 md:px-8">
            <motion.span 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                transition={{ ease, duration: 1.5, }} 
                className={`${className} relative block whitespace-nowrap w-max before:absolute before:-bottom-1 before:left-0 before:w-[80%] before:h-[2px] ${alt ? 'text-brown-600 before:bg-brown-600' : 'text-brown-700 before:bg-brown-700'} text-sm font-ov-soge uppercase`}
            >{title}</motion.span>
            <p className={`mb-20 relative w-full ${paragraphClass ? paragraphClass : 'max-w-[400px] text-[.9rem] sm:text-base md:text-[1.2rem] leading-[1rem] sm:leading-[1.2rem] md:leading-[1.6rem] font-poppins tracking-tighter text-black-50'}`}>
                {
                    words.map((word, index) => (
                        word.includes('\\br') ?
                        <br className="block" /> :
                        <span key={index} className="inline-block overflow-hidden">
                            <motion.span
                                transition={{ ease, duration: 1.5, delay: 0.2 + (index / 20) }} 
                                initial={{ y: '100%' }} 
                                whileInView={{ y: 0 }}
                                viewport={{ once: true }}
                                className="block"
                            >{word}&nbsp;</motion.span>
                        </span>
                    ))
                }
            </p>
        </div>
    )
}