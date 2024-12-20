
import { useMemo } from "react";
import { motion } from "framer-motion";

const ease = [.16, 1, .3, 1];

export function Title({ children, className }: { children: string; className?: string; }) {
    const words = useMemo(() => children.split(' '), []);

    return (
        <span className={`${className} font-ov-soge font-bold text-2xl md:text-4xl leading-[3.2rem] md:leading-[5.61rem]`}>
            {
                words.map((word, index) => (
                    <span className="inline-flex overflow-hidden" key={index}>
                        {
                            word.split('').map((letter, subIndex) => (
                                <motion.span 
                                    transition={{ 
                                        ease, 
                                        duration: 1.5,
                                        delay: parseFloat(((words.slice(0, index).reduce((sum, w) => w.length + sum, 0) + subIndex)/25).toFixed(2)) 
                                    }}
                                    className="block"
                                    initial={{ y: '100%' }}
                                    whileInView={{ y: 0 }}
                                    viewport={{ once: true }}
                                    key={subIndex}
                                >{letter}</motion.span>
                            ))
                        }
                        <span>&nbsp;</span>
                    </span>
                ))
            }
        </span>
    )
}