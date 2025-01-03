

import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import Button from "./Button";

export default function Header({ handleModalClick, menuIsOpen, closeModal }: { handleModalClick: React.MouseEventHandler<HTMLDialogElement>, menuIsOpen: boolean; closeModal: () => void }) {

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
            <div id="menu-modal" className={`${menuIsOpen ? 'delay-100' : 'translate-x-[calc(100%_+_100px)] delay-300'} relative ease-expo duration-[2s] transition-transform w-full lg:w-1/2 h-full rounded-b-md bg-brown-800 px-4 sm:px-6 py-6 md:pb-16 md:px-16 sm:pt-[160px] md:pt-20 md:py-20 text-light flex flex-col justify-between gap-6 sm:gap-10 md:gap-12`}>
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
                    <ul className="flex flex-col gap-1 sm:gap-2">
                        {
                            [
                                { title: "Home", href: "#intro" }, 
                                { title: "Services", href: "#services" }, 
                                { title: "Projects", href: "#projects" }, 
                                { title: "About", href: "#about" }, 
                                { title: "Testimonials", href: "#testimonials" }, 
                                { title: "Contact", href: "#contact" }
                            ].map(({ title, href }, index) => (
                                <li 
                                    key={index} 
                                    style={{ '--delay': `${(index + 3) * 100}ms`} as React.CSSProperties} 
                                    className="z-[9999] group overflow-hidden font-bold font-ov-soge text-xl md:text-2xl lg:text-3xl leading-[3rem] md:leading-[3.5rem] lg:leading-[4rem] uppercase w-fit"
                                >
                                    <a href={href} onClick={closeModal} className={`${menuIsOpen ? 'delay-[var(--delay)]' : 'translate-y-full'} flex items-center justify-center w-fit transition-transform duration-1000 ease-expo`}>
                                        <span className="flex items-center justify-center -translate-x-10 group-hover:translate-x-0 transition-transform duration-500 ease-expo">
                                            <span className="mb-2 w-10 transition-transform scale-0 group-hover:scale-100 duration-500 ease-expo origin-left"><FaArrowRight size={20} /></span>
                                            <span>{title}</span>
                                        </span>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <div className="flex flex-col gap-4 md:gap-10">
                    <div className="flex flex-col">
                        <span className={`${menuIsOpen ? 'delay-[500ms]' : 'opacity-0'} transition-opacity duration-1000 ease-expo font-ov-soge text-sm font-medium uppercase text-brown-600`}>Email address</span>
                        <a href="emmanuelezema6@gmail.com" target="_blank" className={`${menuIsOpen ? 'delay-[600ms]' : 'opacity-0'} transition-opacity duration-1000 ease-expo font-mono hover:underline`}>emmanuelezema6@gmail.com</a>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-4">
                        {
                            [
                                { title: 'Linkedin', href: 'https://linkedin.com/in/ezema-emmanuel' }, 
                                { title: 'Github', href: 'https://github.com/ennanuel' }, 
                                { title: 'Twitter', href: 'https://x.com/nnanna-ezema' }].map(({ title, href }, index) => (
                                <li 
                                    key={index} 
                                    style={{ '--delay': `${(index + 5) * 100}ms` } as React.CSSProperties}
                                    className={`${menuIsOpen ? 'delay-[var(--delay)]' : 'opacity-0'} list-none transition-opacity duration-1000 ease-expo`}
                                >
                                    <Button text={title} onClick={() => { location.href = href }} className="font-mono uppercase text-sm sm:text-base px-4 min-h-[36px] rounded-full sm:rounded-md border border-brown-600 text-brown-500"></Button>
                                </li>
                            ))
                        }
                    </div>
                </div>
            </div>
        </dialog>
    )
}