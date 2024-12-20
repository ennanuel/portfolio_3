



export default function MenuLink({ text, href, target, className }: { text: string, target?: string; href: string; className?: string; }) {


    return (
        <a href={href} target={target} className="group w-max relative overflow-hidden -ml-2 block">
            <span className={`${className} block relative z-[1] pr-4 md:pr-6 pl-2`}>{text}</span>
            <span className="absolute top-0 left-0 w-full h-full overflow-hidden flex items-center ease-expo duration-500 -translate-x-full group-hover:translate-x-0">
                <span className="block h-[2px] w-[calc(100%_+_10px)] mr-[-20px] bg-brown-500"></span>
                <span className="relative block w-[10px] aspect-square before:absolute before:origin-bottom-right before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:w-full before:h-[2px] before:rotate-[30deg] before:bg-brown-500 before:scale-0 group-hover:before:scale-100 before:transition-transform before:ease-expo group-hover:before:delay-200 before:duration-300 after:absolute after:origin-bottom-right after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[2px] after:rotate-[-30deg] after:bg-brown-500 after:scale-0 group-hover:after:scale-100 after:transition-transform after:ease-expo group-hover:after:delay-200 after:duration-300"></span>
            </span>
        </a>
    )
}