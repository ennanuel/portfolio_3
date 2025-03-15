


export default function ProjectsDescription({ projects, currentIndex }: { currentIndex: number; projects?: { desc: string; index: number}[] }) {

    return (
        <div className="relative">
            {
                projects?.map(({ desc, index }) => (
                    <p key={index} className="absolute bottom-0 left-0 w-full max-w-[360px] font-poppins tracking-tighter text-black-50">
                        {
                            [desc.split(' ').map((word, subIndex) => (
                                <span className="inline-block overflow-hidden">
                                    <span 
                                        style={{ 
                                            '--delay': `${(subIndex * 25) % 200 + ((subIndex * 25) % 200 <= 100 ? 0 : -100)}ms`, transform: `translateY(${((index - (currentIndex + 1)) * 100)}%)` 
                                        } as React.CSSProperties}
                                        className="transition-transform ease-expo duration-[1500ms] delay-[var(--delay)] block"
                                    >{word}&nbsp;</span>
                                </span>
                            ))]
                        }
                    </p>
                ))
            }
        </div>
    )
}