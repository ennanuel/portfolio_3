

import { motion } from "framer-motion";
import { SetStateAction } from "react";
import { EzemaProjects } from "../types";

type ProjectProps = {
    project: EzemaProjects;
    index: number;
    handleHover: () => void;
    handleMouseOut: () => void;
    setIndex: React.Dispatch<SetStateAction<number>>
};

export default function Project({ project, index, setIndex, handleHover, handleMouseOut }: ProjectProps) {
    return (
        <motion.li onMouseOver={handleHover} onMouseOut={handleMouseOut} onViewportEnter={() => setIndex(index)}>
            <a href={project.demo_url} target="_blank" className="mt-20 flex flex-col gap-8">
                <div
                    style={{
                        backgroundImage: `url(${project.image_url})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                    className="relative md:flex-1 flex aspect-square md:aspect-auto rounded-2xl bg-brown-900 overflow-hidden"
                >
                    <div className="flex-1 aspect-square relative flex items-center justify-center p-4 md:p-10 lg:p-14 bg-black-100/20">
                        <div className="w-full max-w-[640px] overflow-hidden rounded-t-2xl rounded-b-lg">
                            <video muted autoPlay loop className="w-[calc(100%_+_100px)] h-auto object-cover">
                                <source src={project.video_url} />
                            </video>
                        </div>
                    </div>
                </div>
                <div className="span flex flex-col gap-2">
                    <span className="text-sm sm:text-base font-mono text-brown-700">{project.category}</span>
                    <div className="flex flex-col gap-4">
                        <span className="text-lg sm:text-xl md:text-2xl font-ov-soge font-medium">{project.title}</span>
                        <div className="flex items-center gap-2 text-sm sm:text-base">
                            {
                                project.tags?.map((tag, index) => (
                                    <span key={index} className="tracking-tighter h-[28px] flex items-center justify-center px-2 font-mono border border-black-50 text-black-50 rounded-md uppercase">{tag}</span>
                                ))
                            }
                            <span className="h-[28px] flex items-center justify-center px-2 font-mono border border-black-50 text-black-100 bg-black-50 rounded-md uppercase">{(new Date(project.createdAt).getFullYear())}</span>
                        </div>
                    </div>
                </div>
            </a>
        </motion.li>
    )
}