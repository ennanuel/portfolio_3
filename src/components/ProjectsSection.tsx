

import { Title } from "./Title"

import SubTitle from "./SubTitle"
import Projects from "./Projects"

import { ProjectsSectionProps } from "../types"
import { useMemo } from "react"


export default function ProjectSection({ projects, showingContentFor }: ProjectsSectionProps) {
    const projectsToDisplay = useMemo(() => showingContentFor === 'frontend' ? projects?.reverse() : projects, [projects]);

    if(!projectsToDisplay?.length) return;

    return (
        <section id="projects" className="min-h-screen relative z-[4] bg-dark text-brown-200 flex flex-col px-4 sm:px-6 md:px-10 py-20">
            <div className="flex flex-col gap-12">
                <div className="flex gap-6">
                    <Title>Selected works</Title>
                    <span className="text-3xl tracking-tighter -mt-4 font-mono font-bold text-black-50">[{projectsToDisplay.length}]</span>
                </div>
                <SubTitle title="Projects">Featured projects that have been meticulously crafted with passion to drive results and impact.</SubTitle>
            </div>
            <Projects projects={projectsToDisplay} />
        </section>
    )
}