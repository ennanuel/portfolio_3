


const TOP_HEIGHT = '124px';
const TITLE_FONT_SIZE = '2.37rem';
const TITLE_PADDING = '64px';

export default function Service({ subTitle, index, total, title, description, subServices }: { index: number; total: number; subTitle: string; title: string; description: string; subServices: string[]; }) {

    return (
        <>
        {
            index === 0 ?
                <span className="w-full h-[100vh] block sticky top-0 z-10">
                    <hr style={{ height: TOP_HEIGHT }} className="w-full z-[10] border-0 border-b border-black-75 outline-none bg-dark" />
                </span> :
                <span 
                    style={{
                        zIndex: index + 3,
                        top: `calc(${TOP_HEIGHT} + calc(${index} * calc(${TITLE_FONT_SIZE} + ${TITLE_PADDING})))`,
                        height: `calc(100vh - ${TOP_HEIGHT} - calc(${index} * calc(${TITLE_FONT_SIZE} + ${TITLE_PADDING})))`,
                    }} 
                    className="sticky w-full border-t border-black-75" />
        }
        <span
            style={{ 
                marginTop: `calc(-100vh + ${TOP_HEIGHT} + calc(${index} * calc(${TITLE_FONT_SIZE} + ${TITLE_PADDING})))`
            }} 
            className="sticky top-0 font-ov-soge uppercase text-black-50 pl-20 text-sm bg-dark pt-10 w-full"
        >{subTitle}</span>
        <div 
            style={{
                zIndex: index + 2,
                height: `calc(100vh - ${TOP_HEIGHT} - calc(${index} * calc(${TITLE_PADDING} + ${TITLE_FONT_SIZE})))`,
                top: `calc(${TOP_HEIGHT} + calc(${index} * calc(${TITLE_FONT_SIZE} + ${TITLE_PADDING})))`
            }}
            className="w-full sticky"
        >
            <div 
                style={{ 
                    lineHeight: TITLE_FONT_SIZE, 
                    height: `calc(${TITLE_FONT_SIZE} + ${TITLE_PADDING})`
                }} 
                className="flex bg-dark items-center font-medium font-ov-soge text-xl md:text-2xl"
            >
                <span className="block w-20 font-poppins text-xl pl-4 md:pl-0">{index > 10 ? index + 1 : `0${index+1}`}.</span>
                <h3 className="">{title}</h3>
            </div>
        </div>
        <li 
            style={{
                top: `calc(${TOP_HEIGHT} + calc(${index + 1} * calc(${TITLE_FONT_SIZE} + ${TITLE_PADDING})))`,
                marginTop: `calc(-100vh + ${TOP_HEIGHT} + calc(${index + 1} * calc(${TITLE_FONT_SIZE} + ${TITLE_PADDING})))`,
                minHeight: `calc(100vh - ${TOP_HEIGHT} - calc(${index + 1} * calc(${TITLE_FONT_SIZE} + ${TITLE_PADDING})))`,
                marginBottom: index < (total - 1) ? TOP_HEIGHT : ''
            }} 
            className="sticky w-full bg-dark flex flex-col gap-8"
        >
            <p className="text-black-50 pl-20 font-poppins tracking-tighter pr-2 md:pr-0">{description}</p>
            <ul className="flex flex-col mt-6">
                {
                    subServices.map((subService, i) => (
                        <li className="flex items-center py-4 first:border-t-0 border-t border-black-75">
                            <span className="font-mono text-black-50 w-20 block text-sm md:text-base pl-4 md:pl-0">[0{i + 1}]</span>
                            <span className="text-base md:text-lg font-medium font-ov-soge">{subService}</span>
                        </li> 
                    ))
                }
            </ul>
        </li>
        </>
    )
}