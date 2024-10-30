

import { MdArrowOutward } from "react-icons/md";

import image from "./assets/my_image.jpg";


export default function App() {
    return (
        <div className="bg-[#dfdeda]">
            <section className="sticky top-0 flex justify-between items-stretch gap-[96px] min-h-[100vh] px-[64px] py-[32px]">
                <div className="flex flex-col justify-between">
                    <span className="text-lg font-bold font-ov-soge">ezema designs</span>
                    <div>
                        <img src={image} alt="My image" className="h-[300px] w-[224px] rounded-xl object-cover" />
                    </div>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-6">
                            <h1 className="text-5xl leading-[6.2rem] uppercase font-bold font-ov-soge">Ezema<br /> Emmanuel</h1>
                            <h3 className="text-xl font-bold font-ov-soge text-black-75">Web Developer / Designer</h3>
                        </div>
                        <ul className="flex flex-col font-poppins tracking-tighter font-light gap-2 text-black-50 text-right text-base">
                            <li className="">Works</li>
                            <li className="">Services</li>
                            <li className="">About</li>
                            <li className="">Testimonials</li>
                            <li className="">Contact</li>
                        </ul>
                    </div>
                    <div className="flex justify-between items-end">
                        <div className="flex flex-col justify-between items-start gap-8">
                            <p className="text-lg leading-[1.8rem] font-poppins tracking-tighter text-black-50">I help growing brands and startups<br /> gain an unfair advantage through<br /> premium, results driven websites.</p>
                            <button className="flex items-center justify-center gap-1 px-6 py-4 rounded-md bg-black-75 text-black-10">
                                <span className="font-ov-soge font-light uppercase">Book a call</span>
                                <MdArrowOutward size={20} />
                            </button>
                        </div>
                        <ul className="flex items-end gap-3">
                            <li className="font-ov-soge text-black-50 uppercase border border-black-50 rounded-md px-3 py-1 text-sm">LinkedIn</li>
                            <li className="font-ov-soge text-black-50 uppercase border border-black-50 rounded-md px-3 py-1 text-sm">Github</li>
                            <li className="font-ov-soge text-black-50 uppercase border border-black-50 rounded-md px-3 py-1 text-sm">Instagram</li>
                            <li className="font-ov-soge text-black-50 uppercase border border-black-50 rounded-md px-3 py-1 text-sm">Twitter</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="relative z-[1] bg-black-100 text-black-10 min-h-[200vh] px-[64px] flex gap-20 pb-[160px]">
                <div className="sticky flex-1 top-0 mt-[100px] h-[100vh] flex flex-col justify-between py-12">
                    <div className="flex flex-col-reverse gap-6">
                        <span className="title" style={{ '--content': 'What I offer' } as React.CSSProperties}>
                            <span>What I offer</span>
                            <span className="absolute left-0 top-[30%] translate-x-[-30%] translate-y-[-50%] w-[60%] max-w-[400px] min-w-[300px] aspect-square after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-full after:bg-black-75 before:absolute before:-left-8 before:top-8 before:w-full before:h-full before:rounded-full before:bg-black-50"></span>
                        </span>
                        <span className="relative block w-max before:absolute before:-bottom-1 before:left-0 before:w-[80%] before:h-[2px] before:bg-black-10 uppercase font-ov-soge">Services</span>
                    </div>
                    <p className="font-montreal font-light text-black-50">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque incidunt fugit quod suscipit aperiam reprehenderit perspiciatis eos enim omnis mollitia sapiente blanditiis est doloribus consequuntur nulla nesciunt, eveniet in officia!</p>
                </div>
                <ul className="flex flex-1 flex-col items-start justify-start py-20">
                    <hr className="w-full z-[10] h-[104px] sticky top-0 border-0 border-b border-black-75 outline-none bg-black-100 mt-6" />
                    <span className="font-ov-soge uppercase text-black-50 pl-20 text-sm mt-10 bg-black-100">The main part</span>
                    <div className="pt-8 w-full pb-4 flex sticky top-[90px] z-[9] items-center text-2xl font-semibold font-ov-soge bg-black-100">
                        <span className="block w-20">01.</span>
                        <h3 className="">Web Design</h3>
                    </div>
                    <li className="sticky top-[200px] flex flex-col gap-6 pb-8 w-full bg-black-100">
                        <div className="flex flex-col gap-8">
                            <p className="font-montreal text-black-50 pl-20 font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum ut laudantium aspernatur saepe reprehenderit neque eum rem natus ullam optio consectetur nemo deserunt quod molestiae porro provident, sapiente reiciendis corrupti?</p>
                            <ul className="flex flex-col mt-6">
                                <li className="flex items-center py-4 first:border-t-0 border-t border-black-75">
                                    <span className="font-ov-soge text-black-50 w-20 block text-lg">01.</span>
                                    <span className="text-lg font-semibold font-ov-soge">Technical SEO</span>
                                </li>
                                <li className="flex items-center py-4 first:border-t-0 border-t border-black-75">
                                    <span className="font-ov-soge text-black-50 w-20 block text-lg">02.</span>
                                    <span className="text-lg font-semibold font-ov-soge">SEO Audits & Analysis</span>
                                </li>
                                <li className="flex items-center py-4 first:border-t-0 border-t border-black-75">
                                    <span className="font-ov-soge text-black-50 w-20 block text-lg">03.</span>
                                    <span className="text-lg font-semibold font-ov-soge">On Page Optimization</span>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <hr className="sticky z-[9] top-[194px] w-full border-0 border-b border-black-75 outline-none" />
                    <span className="sticky top-0 font-ov-soge uppercase text-black-50 pl-20 text-sm w-full bg-black-100 pt-10 pb-6">The main part</span>
                    <div className="sticky z-[8] top-[194px] py-4 w-full bg-black-100 flex items-center text-2xl font-semibold font-ov-soge">
                        <span className="block w-20">02.</span>
                        <h3 className="">Web Development</h3>
                    </div>
                    <li className="sticky flex z-[7] top-[280px] flex-col gap-6 pb-6 pt-4 w-full bg-black-100">
                        <p className="font-montreal text-black-50 pl-20 font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum ut laudantium aspernatur saepe reprehenderit neque eum rem natus ullam optio consectetur nemo deserunt quod molestiae porro provident, sapiente reiciendis corrupti?</p>
                        <ul className="flex flex-col mt-6">
                            <li className="flex items-center py-4 first:border-t-0 border-t border-black-75">
                                <span className="font-ov-soge text-black-50 w-20 block text-lg">01.</span>
                                <span className="text-lg font-semibold font-ov-soge">Technical SEO</span>
                            </li>
                            <li className="flex items-center py-4 first:border-t-0 border-t border-black-75">
                                <span className="font-ov-soge text-black-50 w-20 block text-lg">02.</span>
                                <span className="text-lg font-semibold font-ov-soge">SEO Audits & Analysis</span>
                            </li>
                            <li className="flex items-center py-4 first:border-t-0 border-t border-black-75">
                                <span className="font-ov-soge text-black-50 w-20 block text-lg">03.</span>
                                <span className="text-lg font-semibold font-ov-soge">On Page Optimization</span>
                            </li>
                        </ul>
                    </li>
                    <hr className="w-full sticky top-[280px] z-[11] border-0 border-b border-black-75 outline-none bg-black-100" />
                    <span className="w-full sticky top-0 z-[7] font-ov-soge uppercase text-black-50 pl-20 pt-8 pb-3 bg-black-100 text-sm">The main part</span>
                    <div className="sticky z-10 top-[280px] w-full flex items-center text-2xl font-semibold font-ov-soge py-3 bg-black-100">
                        <span className="block w-20">03.</span>
                        <h3 className="">SEO</h3>
                    </div>
                    <li className="sticky z-10 top-[320px] pt-3 bg-black-100 flex flex-col gap-6 w-full mb-4">
                        <div className="flex flex-col gap-8">
                            <p className="font-montreal text-black-50 pl-20 font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum ut laudantium aspernatur saepe reprehenderit neque eum rem natus ullam optio consectetur nemo deserunt quod molestiae porro provident, sapiente reiciendis corrupti?</p>
                            <ul className="flex flex-col mt-6">
                                <li className="flex items-center py-4 first:border-t-0 border-t border-black-75">
                                    <span className="font-ov-soge text-black-50 w-20 block text-lg">01.</span>
                                    <span className="text-lg font-semibold font-ov-soge">Technical SEO</span>
                                </li>
                                <li className="flex items-center py-4 first:border-t-0 border-t border-black-75">
                                    <span className="font-ov-soge text-black-50 w-20 block text-lg">02.</span>
                                    <span className="text-lg font-semibold font-ov-soge">SEO Audits & Analysis</span>
                                </li>
                                <li className="flex items-center py-4 first:border-t-0 border-t border-black-75">
                                    <span className="font-ov-soge text-black-50 w-20 block text-lg">03.</span>
                                    <span className="text-lg font-semibold font-ov-soge">On Page Optimization</span>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </section>
            <section className="min-h-[100vh] relative z-10 bg-secondary"></section>
        </div>
    )
}