

import { useMemo, useState, useRef } from "react";

import { MdOutlineArrowOutward } from "react-icons/md";

import { motion, useMotionValue } from "framer-motion";

import Button from "./Button";
import Project from "./Project";
import ProjectsDescription from "./ProjectsDescription";
import { EzemaProjects } from "../types";

const ease = [.16, 1, .3, 1];

export default function Projects({ projects }: { projects?: EzemaProjects[] }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const [index, setIndex] = useState(-1);
    const translateY = useMemo(() => `${index * -100}%`, [index]);
    const myProjects = useMemo(() => projects?.map(({ desc, code_url }, index) => ({ index: index + 1, desc, code_url })), [projects]);

    const buttonPosition = useMotionValue("translateX(0) translateY(0)");
    const [hoveringOverProject, setHoveringOverProject] = useState(false);

    const handleButtonMouseMove = () => {
        if(!buttonRef.current) return;

        const rect = buttonRef.current.getBoundingClientRect();
        const y = (mousePosition.y - (rect.top + (rect.height /2 ))) / 1;
        const x = (mousePosition.x - (rect.left + (rect.width / 2))) / 2;
        buttonPosition.set(`translateX(${x}px) translateY(${y}px)`);
    }
    const handleButtonMouseOut = () => buttonPosition.set("translateX(0) translateY(0)");
    const handleProjectMouseOver = () => setHoveringOverProject(true);
    const handleProjectMouseOut = () => setHoveringOverProject(false);

    const visitLink = (href: string) => {
        location.href = href;
    }
    
    const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (event) => setMousePosition({ x: event.clientX, y: event.clientY });

    return (
        <div ref={containerRef} onMouseOver={handleMouseMove} onMouseMove={handleMouseMove} className="flex mb-20">
            <div className="flex-1 hidden lg:flex flex-col justify-between gap-12 h-screen sticky top-0 py-12">
                <span className="relative font-mono text-brown-300 font-bold text-[40vh] leading-[40vh] flex">
                    <span className="block">0</span>
                    <span className="block h-full relative overflow-hidden">
                        <span className="opacity-0 tracking-tighter">0</span>
                        <motion.div animate={{ y: translateY }} transition={{ ease, duration: 2 }} className="absolute h-full top-0 left-0 flex flex-col">
                            {
                                myProjects?.map(({ index }) => (
                                    <span className="tracking-tighter">{index}.</span>
                                ))
                            }
                        </motion.div>
                    </span>
                    <span className="block">.</span>
                </span>
                <div className="flex flex-col gap-8">
                    <ProjectsDescription projects={myProjects} currentIndex={index} />
                    <motion.div 
                        onMouseMove={handleButtonMouseMove} 
                        onMouseOut={handleButtonMouseOut} 
                        style={{ transform: buttonPosition }} 
                        transition={{ duration: .6, ease }}
                        className="overflow-hidden transition-transform ease-expo duration-500 w-fit"
                    >
                        <motion.div 
                            ref={buttonRef} 
                            transition={{ ease, duration: 2 }} 
                            initial={{ y: '100%' }} 
                            whileInView={{ y: 0, offset: 104 }} 
                            className="group w-max flex items-center gap-1 text-black-25"
                        >
                            <Button 
                                text="View Site"
                                onClick={projects && projects[index] ? () => visitLink(projects[index]?.demo_url) : undefined}
                                Icon={MdOutlineArrowOutward} 
                                noGap 
                                className="font-mono bg-black-90 text-black-25 uppercase px-4 py-3 rounded-md"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            <ul className="peer flex-1 flex flex-col">
                {
                    projects?.map((project, index) => <Project 
                        project={project}
                        handleHover={handleProjectMouseOver} 
                        handleMouseOut={handleProjectMouseOut} 
                        index={index} 
                        setIndex={setIndex} 
                        key={index} 
                    />)
                }
            </ul>
            
            <div className="hidden lg:flex items-center fixed top-4 left-2">
                <motion.span
                    animate={{ 
                        x: mousePosition.x, 
                        y: mousePosition.y, 
                        opacity: hoveringOverProject ? 1 : 0 
                    }}
                    transition={{ ease, duration: .3 }}
                    className={`transition-[transform,_opacity] ease-expo origin-top-left block`}
                >
                    <span className="text-[.6rem] flex items-center justify-center -mr-9 pr-12 pl-4 h-10 rounded-full bg-brown-800 text-brown-200">
                        <span className="text-.6rem">Visit site</span>
                    </span>
                </motion.span>  
                <motion.div 
                    animate={{ 
                        x: mousePosition.x, 
                        y: mousePosition.y, 
                        opacity: hoveringOverProject ? 1 : 0, 
                        scale: hoveringOverProject ? 1 : 0 
                    }}
                    transition={{ ease, duration: .35 }}
                    className={`transition-[transform,_opacity] ease-expo origin-top-left`}
                >
                    <span className="flex items-center justify-center w-8 aspect-square rounded-full bg-brown-200 text-brown-800 border border-brown-900">
                        <MdOutlineArrowOutward size={16} />
                    </span>
                </motion.div>
            </div>
        </div>
    )
}