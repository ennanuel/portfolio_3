

import { motion } from "framer-motion";
import { SetStateAction } from "react";


export default function Project({ index, title, category, tags, image, video, demoLink, date, setIndex, handleHover, handleMouseOut }: { index: number; title: string; category: string; tags: string[]; image: string; video: string; demoLink: string; date: string; handleHover: () => void; handleMouseOut: () => void; setIndex: React.Dispatch<SetStateAction<number>> }) {
    return (
        <motion.li onMouseOver={handleHover} onMouseOut={handleMouseOut} className="md:min-h-screen mt-20 flex flex-col gap-8" onViewportEnter={() => setIndex(index)}>
            <div className="md:flex-1 aspect-square md:aspect-auto rounded-xl bg-brown-900"></div>
            <div className="span flex flex-col gap-2">
                <span className="font-mono text-brown-700">{category}</span>
                <div className="flex flex-col gap-4">
                    <span className="text-2xl font-ov-soge font-medium">{title}</span>
                    <div className="flex items-center gap-2">
                        {
                            tags?.map((tag, index) => (
                                <span key={index} className="tracking-tighter h-[28px] flex items-center justify-center px-2 font-mono border border-black-50 text-black-50 rounded-md uppercase">{tag}</span>
                            ))
                        }
                        <span className="h-[28px] flex items-center justify-center px-2 font-mono border border-black-50 text-black-100 bg-black-50 rounded-md uppercase">{(new Date(date).getFullYear())}</span>
                    </div>
                </div>
            </div>
        </motion.li>
    )
}