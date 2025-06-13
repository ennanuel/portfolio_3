import { useMemo } from "react";
import { ServiceProps } from "../types";

export default function Service({ company, Icon, subTitle, index, total, title, description, subServices, topHeight, titleFontSize, titlePadding, showingContentFor }: ServiceProps) {
    const showIcon = useMemo(() => showingContentFor === 'frontend', [showingContentFor]);

    return (
        <>
        {
            index === 0 ?
                <span className="w-full h-screen block sticky top-0 z-10">
                    <hr style={{ height: topHeight }} className="w-full z-[10] border-0 border-b border-black-75 outline-none bg-dark" />
                </span> :
                <span 
                    style={{
                        zIndex: index + 3,
                        top: `calc(${topHeight} + calc(${index} * calc(${titleFontSize} + ${titlePadding})))`,
                        height: `calc(100vh - ${topHeight} - calc(${index} * calc(${titleFontSize} + ${titlePadding})))`,
                    }} 
                    className="sticky w-full border-t border-black-75" />
        }
        <span
            style={{ 
                marginTop: `calc(-100vh + ${topHeight} + calc(${index} * calc(${titleFontSize} + ${titlePadding})))`
            }} 
            className="sticky top-0 flex items-center justify-between gap-4 font-mono /font-ov-soge uppercase text-black-50 pl-20 /text-xs text-sm sm:text-base /sm:text-sm bg-dark pt-10 w-full"
        >
            <span>{subTitle}</span>
            <span>{company}</span>
        </span>
        <div 
            style={{
                zIndex: index + 2,
                height: `calc(100vh - ${topHeight} - calc(${index} * calc(${titlePadding} + ${titleFontSize})))`,
                top: `calc(${topHeight} + calc(${index} * calc(${titleFontSize} + ${titlePadding})))`,
            }}
            className="w-full sticky"
        >
            <div 
                style={{ 
                    lineHeight: titleFontSize, 
                    height: `calc(${titleFontSize} + ${titlePadding})`,
                    fontSize: titleFontSize
                }} 
                className="flex bg-dark items-center font-medium font-ov-soge"
            >
                <span className="h-[1rem] mb-2 lg:h-[1.78rem] flex items-center w-20 font-poppins text-base lg:text-xl pl-4 md:pl-0">
                    {
                        showIcon && Icon ? 
                            <Icon size={40} className="opacity-30" /> : 
                            <span>{index > 10 ? index + 1 : `0${index+1}`}.</span>
                    }
                </span>
                <h3 className="">{title}</h3>
            </div>
        </div>
        <li 
            style={{
                top: `calc(${topHeight} + calc(${index + 1} * calc(${titleFontSize} + ${titlePadding})))`,
                marginTop: `calc(-100vh + ${topHeight} + calc(${index + 1} * calc(${titleFontSize} + ${titlePadding})))`,
                height: `calc(100vh - ${topHeight} - calc(${index + 1} * calc(${titleFontSize} + ${titlePadding})))`,
                marginBottom: index < (total - 1) ? topHeight : ''
            }} 
            className="sticky w-full bg-dark flex flex-col gap-8"
        >
            <p className="text-black-50 pl-20 font-poppins tracking-tighter pr-2 md:pr-0 text-sm sm:text-base">{description}</p>
            <ul className="flex flex-col mt-6">
                {
                    subServices.map((subService, i) => (
                        <li key={i} className="flex items-center py-4 first:border-t-0 border-t border-black-75">
                            <span className="font-mono text-black-50 w-20 block text-xs sm:text-sm md:text-base pl-4 md:pl-0">[0{i + 1}]</span>
                            <span className="text-[.9rem] sm:text-base md:text-lg font-medium font-ov-soge">{subService}</span>
                        </li> 
                    ))
                }
            </ul>
        </li>
        </>
    )
}