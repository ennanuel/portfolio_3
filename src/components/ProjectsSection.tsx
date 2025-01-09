

import { Title } from "./Title"
import SubTitle from "./SubTitle"
import Projects from "./Projects"
import { EzemaProjects } from "../types"


export default function ProjectSection({ projects }: { projects: EzemaProjects[] }) {

    if(!projects.length) return;

    return (
        <section id="projects" className="min-h-screen relative z-[4] bg-dark text-brown-200 flex flex-col px-4 sm:px-6 md:px-10 py-20">
            <div className="flex flex-col gap-12">
                <div className="flex gap-6">
                    <Title>Selected works</Title>
                    <span className="text-3xl tracking-tighter -mt-4 font-mono font-bold text-black-50">[5]</span>
                </div>
                <SubTitle title="Projects">Featured projects that have been meticulously crafted with passion to drive results and impact.</SubTitle>
            </div>
            <Projects projects={projects} />
        </section>
    )
}