

import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import Button from "./Button";

export default function Header({ handleModalClick, menuIsOpen }: { handleModalClick: React.MouseEventHandler<HTMLDialogElement>, menuIsOpen: boolean; }) {

    const initialPath = `M100 0 L100 ${window.innerHeight} Q0 ${window.innerHeight/2} 100 0`;
    const finalPath = `M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight/2} 100 0`;

    const pathVariants = {
        initial: {
            d: initialPath
        },
        enter: {
            d: finalPath,
            transition: {
                ease: [0.16, 1, 0.3, 1],
                duration: 3
            }
        },
        exit: {
            d: initialPath
        }
    }

    return (
        <dialog onClick={handleModalClick} className={`${menuIsOpen ? '' : 'opacity-0 pointer-events-none'} flex justify-end transition-opacity overflow-clip fixed z-[99999] top-0 left-0 m-0 p-0 w-screen h-screen bg-black-100/30`}>
            <div id="menu-modal" className={`${menuIsOpen ? 'delay-100' : 'translate-x-[calc(100%_+_100px)] delay-300'} relative ease-expo duration-[2s] transition-transform w-full lg:w-1/2 h-full rounded-b-md bg-brown-800 px-6 md:px-16 pt-[160px] md:pt-20 py-20 pb-16 text-light flex flex-col justify-between gap-12`}>
                <AnimatePresence>
                    {
                        menuIsOpen &&
                        <svg width={100} height="100%" fill="orange" className="absolute top-0 left-[-100px] fill-brown-800 stroke-none">
                            <motion.path 
                                variants={pathVariants}
                                whileInView="enter"
                                initial="initial"
                                exit="exit"
                                animate="enter"
                            ></motion.path>
                        </svg>
                    }
                </AnimatePresence>
                <nav className="">
                    <ul className="flex flex-col gap-2">
                        {
                            ["Home", "Services", "Projects", "About", "Testimonials", "Contact"].map((item, index) => (
                                <li 
                                    key={index} 
                                    style={{ '--delay': `${(index + 3) * 100}ms`} as React.CSSProperties} 
                                    className="group overflow-hidden font-bold font-ov-soge text-xl md:text-2xl lg:text-3xl leading-[3rem] md:leading-[3.5rem] lg:leading-[4rem] uppercase w-fit"
                                >
                                    <span className={`${menuIsOpen ? 'delay-[var(--delay)]' : 'translate-y-full'} flex items-center justify-center w-fit transition-transform duration-1000 ease-expo`}>
                                        <span className="flex items-center justify-center -translate-x-10 group-hover:translate-x-0 transition-transform duration-500 ease-expo">
                                            <span className="mb-2 w-10 transition-transform scale-0 group-hover:scale-100 duration-500 ease-expo origin-left"><FaArrowRight size={20} /></span>
                                            <span>{item}</span>
                                        </span>
                                    </span>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col">
                        <span className={`${menuIsOpen ? 'delay-[500ms]' : 'opacity-0'} transition-opacity duration-1000 ease-expo font-ov-soge text-sm font-medium uppercase text-brown-600`}>Email address</span>
                        <span className={`${menuIsOpen ? 'delay-[600ms]' : 'opacity-0'} transition-opacity duration-1000 ease-expo font-mono`}>emmanuelezema6@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-4">
                        {
                            ['Linkedin', 'Github', 'Instagram'].map((item, index) => (
                                <li 
                                    key={index} 
                                    style={{ '--delay': `${(index + 5) * 100}ms` } as React.CSSProperties}
                                    className={`${menuIsOpen ? 'delay-[var(--delay)]' : 'opacity-0'} list-none transition-opacity duration-1000 ease-expo`}
                                >
                                    <Button text={item} className="font-mono uppercase text-sm sm:text-base px-4 min-h-[36px] rounded-md border border-brown-600 text-brown-500"></Button>
                                </li>
                            ))
                        }
                    </div>
                </div>
            </div>
        </dialog>
    )
}