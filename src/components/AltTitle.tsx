
import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

const ease = [.16, 1, .3, 1];

export function AltTitle({ children, className }: { children: string; className?: string; }) {
    const ref = useRef<HTMLSpanElement>(null);
    const circleRef = useRef<HTMLSpanElement>(null);
    const words = useMemo(() => children.split(' '), [children]);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (event) => {
        if(!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const y = (event.clientY - rect.top) - (Number(circleRef.current?.offsetHeight) / 2);
        const x = (event.clientX - rect.left) - (Number(circleRef.current?.offsetWidth) / 2);
        setPosition({ x, y });
    }

    const handleMouseOut = () => setPosition({ x: 0, y: 0 });

    return (
        <div onMouseMove={handleMouseMove} onMouseOut={handleMouseOut} className="w-fit">
            <span ref={ref} className={`group relative font-ov-soge font-bold text-3xl md:text-4xl flex flex-col w-fit ${className}`}>
                {
                    words.map((word, index) => (
                        <span className="inline-flex -mb-4 sm:mb-0 overflow-hidden" key={index}>
                            {
                                word.split('').map((letter, subIndex) => (
                                    letter === '-' ?
                                    <span>&nbsp;</span> :
                                    <motion.span 
                                        transition={{ 
                                            ease, 
                                            duration: 1,
                                            delay: parseFloat(((words.slice(0, index).reduce((sum, w) => w.length + sum, 0) + subIndex)/25).toFixed(2)) 
                                        }}
                                        className="block title relative"
                                        style={{ '--content': `"${letter}"` } as React.CSSProperties}
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
                <motion.span 
                    className="block absolute top-4 -left-8 transition-transform duration-[600ms] ease-expo"
                    animate={{ x: position.x, y: position.y }}
                    transition={{ ease, duration: .3 }}
                >
                    <motion.span
                        ref={circleRef}
                        transition={{ ease, duration: 1.5, delay: 1.5 }} 
                        initial={{ scale: 0 }} 
                        whileInView={{ scale: 1 }} 
                        viewport={{ once: true }}
                        className={`absolute top-10 left-[-5%] w-[200px] aspect-square before:hidden group-hover:after:scale-125 after:transition-transform after:origin-bottom-left after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-full after:bg-black-90 after:border after:border-brown-900`}
                    ></motion.span>
                </motion.span>
            </span>
        </div>
    )
}