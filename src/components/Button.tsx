import { IconType } from "react-icons";


export default function Button({ text, Icon, size, className, hoverTextClassName, onClick, toLeft, noGap }: { className?: string; hoverTextClassName?: string; text: string, Icon?: IconType; size?: number; onClick?: () => void, toLeft?: boolean; noGap?: boolean; }) {

    return (
        <button type="button" onClick={onClick} className={`${className ?  className : 'font-ov-soge bg-brown-800 text-brown-300 rounded-full sm:rounded-md min-h-12 md:min-h-[60px] px-6 md:px-8 py-2 md:py-4'} text-sm sm:text-base group overflow-hidden relative flex items-center justify-center before:absolute before:top-1/2 before:-translate-y-1/2 before:w-full before:h-full before:rounded-full before:bg-brown-600/50 before:transition-[transform,_border-radius] ${toLeft ? 'before:right-0 before:translate-x-[101%]' : 'before:left-0 before:-translate-x-[101%]'} hover:before:rounded-none before:duration-500 before:ease-expo hover:before:-translate-x-1/2 hover:before:scale-[2]`}>
            <span className={`relative flex ${toLeft ? 'flex-row-reverse' : ''} items-center justify-center gap-1`}>
                <span className={`relative block overflow-hidden ${className?.includes('font-ov-soge') ? '-mb-1' : ''}`}>
                    <span className={`inline-block ${toLeft ? 'group-hover:-translate-x-full origin-left' : 'group-hover:translate-x-full origin-right'} group-hover:scale-75 group-hover:opacity-100 transition-[transform,_opacity] duration-500 ease-expo`}>{text}</span>
                    <span className={`${hoverTextClassName ? hoverTextClassName : 'text-brown-300'} absolute top-0 left-0 w-full inline-block ${toLeft ? 'translate-x-full origin-right' : '-translate-x-full origin-left'} scale-75 opacity-50 group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 transition-[transform,_opacity] duration-500 ease-expo`}>{text}</span>
                </span>
                {
                    Icon ? 
                        <Icon size={size || 20} className={`transition-[transform,_color] ${noGap ? '' : toLeft ? 'group-hover:-translate-x-2' : 'group-hover:translate-x-2'} duration-500 ease-expo group-hover:text-brown-300`} /> :
                        null
                }
            </span>
        </button>
    )
}