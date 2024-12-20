

import { MdArrowBack, MdArrowForward, MdOutlineArrowOutward } from "react-icons/md";

import image from "./assets/my_image.jpg";
import testimonial_image from "./assets/testimonial_image.webp";

import { BsArrowRight } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa6";


export default function App() {
    return (
        <div className="bg-[#dfdeda]">
            <section className="sticky z-[1] top-0 flex justify-between items-stretch gap-[96px] min-h-screen px-10 py-6">
                <div className="flex flex-col justify-between">
                    <span className="text-lg font-bold font-ov-soge">ezema.dev</span>
                    <div>
                        <img src={image} alt="My image" className="aspect-[.7] w-[280px] rounded-xl object-cover saturate-0" />
                    </div>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-6">
                            <h1 className="text-5xl leading-[6.2rem] font-bold font-ov-soge">Ezema<br /> Emmanuel</h1>
                            <h3 className="text-xl font-medium font-ov-soge text-black-75">Web Developer / Designer</h3>
                        </div>
                        <ul className="mr-20 flex flex-col font-poppins tracking-tighter gap-2 text-left text-black-50 text-base">
                            <li className="">Works</li>
                            <li className="">Services</li>
                            <li className="">About</li>
                            <li className="">Testimonials</li>
                            <li className="">Contact</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-8 h-[calc(280px_/_0.7)]">
                        <span className="flex w-max items-center justify-center mb-12 text-black-50">
                            <MdOutlineArrowOutward size={40} />
                        </span>
                        <div className="flex-1 flex justify-between gap-10">
                            <div className="flex-1 flex flex-col gap-10">
                                <p className="text-[1.1rem] leading-[1.8rem] font-poppins tracking-tighter text-black-50">I help growing brands and startups<br /> gain an unfair advantage through<br /> premium, results driven websites.</p>
                                <button className="group w-max flex items-stretch text-black-10">
                                    <span className="font-ov-soge relative z-[1] font-light uppercase py-4 pl-6 bg-black-75 rounded-l-md">Book a call</span>
                                    <span className="flex items-center px-6 bg-black-75 rounded-r-md transition-transform -translate-x-5 group-hover:-translate-x-1">
                                        <BsArrowRight size={20} />
                                    </span>
                                </button>
                            </div>
                        </div>
                        <ul className="flex justify-start items-center gap-2">
                            {
                                ["Github", "LinkedIn", "Instagram", "Twitter"].map((item, index) => (
                                    <li key={index} className="rounded-md text-black-75 py-1 px-2 uppercase font-ov-soge text-sm font-light">{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>
            <section className="relative z-[3] bg-black-100 rounded-t-[30px] text-black-10 min-h-screen px-10 flex gap-20 pb-[160px]">
                <div className="sticky flex-1 top-0 h-[100vh] flex flex-col gap-10 py-20">
                    <span className="font-ov-soge font-bold text-4xl">What I offer</span>
                    <div className="flex items-start gap-12 px-8">
                        <span className="relative block w-max before:absolute before:-bottom-1 before:left-0 before:w-[80%] before:h-[2px] before:bg-black-75 text-black-75 uppercase font-ov-soge text-sm">Services</span>
                        <p className="mb-20 relative w-[360px] text-[1.1rem] leading-[1.8rem] font-poppins tracking-tighter text-black-50">Let me help take your business to the next level with premium looking websites and web applications.</p>
                    </div>
                </div>
                <div className="flex-1">
                    <ul className="flex flex-1 flex-col items-start justify-start mt-[100vh]">
                        <span className="w-full h-[100vh] block sticky top-0 z-10">
                            <hr className="w-full z-[10] h-[104px] border-0 border-b border-black-75 outline-none bg-black-100" />
                        </span>
                        <span className="font-ov-soge uppercase text-black-50 pl-20 text-sm mt-[calc(-100vh_+_144px)] bg-black-100">The main part</span>
                        <div className="w-full sticky top-[104px] z-[9] h-[calc(100vh_-_104px)]">
                            <div className="flex py-8 bg-black-100 items-center text-2xl font-medium font-ov-soge leading-[2.37rem]">
                                <span className="block w-20 font-poppins text-xl">[01]</span>
                                <h3 className="">Web Design</h3>
                            </div>
                        </div>
                        <li className="sticky top-[calc(168px_+_2.37rem)] mt-[calc(-100vh_+_168px_+_2.7rem)] w-full bg-black-100 flex flex-col gap-8">
                            <p className="text-black-50 pl-20 font-poppins tracking-tighter">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum ut laudantium aspernatur saepe reprehenderit neque eum rem natus ullam optio consectetur nemo deserunt quod molestiae porro provident, sapiente reiciendis corrupti?</p>
                            <ul className="flex flex-col mt-6">
                                <li className="flex items-center py-4 first:border-t-0 border-t border-black-75">
                                    <span className="font-mono text-black-50 w-20 block text-base">01.</span>
                                    <span className="text-lg font-medium font-ov-soge">Technical SEO</span>
                                </li>
                                <li className="flex items-center py-4 first:border-t-0 border-t border-black-75">
                                    <span className="font-mono text-black-50 w-20 block text-base">02.</span>
                                    <span className="text-lg font-medium font-ov-soge">SEO Audits & Analysis</span>
                                </li>
                                <li className="flex items-center py-4 first:border-t-0 border-t border-black-75">
                                    <span className="font-mono text-black-50 w-20 block text-base">03.</span>
                                    <span className="text-lg font-medium font-ov-soge">On Page Optimization</span>
                                </li>
                            </ul>
                        </li>

                        <span className="sticky z-[9] top-[calc(168px_+_2.37rem)] h-[calc(100vh_-_2.37rem_-_168px)] w-full border-t border-black-75">
                        </span>
                        <span className="sticky top-0 mt-[calc(-100vh_+_168px_+_2.37rem)] font-ov-soge uppercase text-black-50 pl-20 pt-10 text-sm w-full bg-black-100">The main part</span>
                        <div className="sticky z-[8] w-full top-[calc(168px_+_2.37rem)] h-[calc(100vh_-_168px_-_2.37rem)]">
                            <div className="py-8 w-full bg-black-100 flex items-center text-2xl font-medium font-ov-soge leading-[2.37rem]">
                                <span className="block w-20 font-poppins text-xl">[02]</span>
                                <h3 className="">Web Development</h3>
                            </div>
                        </div>
                        <li className="sticky top-[calc(4.74rem_+_232px)] mt-[calc(-100vh_+_4.74rem_+_232px)] flex z-[7] flex-col gap-6 mb-[5rem] w-full bg-black-100">
                            <p className="text-black-50 pl-20 font-poppins tracking-tighter">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum ut laudantium aspernatur saepe reprehenderit neque eum rem natus ullam optio consectetur nemo deserunt quod molestiae porro provident, sapiente reiciendis corrupti?</p>
                            <ul className="flex flex-col mt-6">
                                <li className="flex items-center py-4 first:border-t-0 border-t border-black-75">
                                    <span className="font-mono text-black-50 w-20 block text-base">01.</span>
                                    <span className="text-lg font-medium font-ov-soge">Technical SEO</span>
                                </li>
                                <li className="flex items-center py-4 first:border-t-0 border-t border-black-75">
                                    <span className="font-mono text-black-50 w-20 block text-base">02.</span>
                                    <span className="text-lg font-medium font-ov-soge">SEO Audits & Analysis</span>
                                </li>
                                <li className="flex items-center py-4 first:border-t-0 border-t border-black-75">
                                    <span className="font-mono text-black-50 w-20 block text-base">03.</span>
                                    <span className="text-lg font-medium font-ov-soge">On Page Optimization</span>
                                </li>
                            </ul>
                        </li>

                        <span className="w-full block sticky top-[calc(4.74rem_+_232px)] h-[calc(100vh_-_4.74rem_-_232px)] border-t border-black-75 z-[11]">
                        </span>
                        <span className="w-full sticky top-0 z-[7] mt-[calc(-100vh_+_232px_+_4.74rem)] font-ov-soge uppercase text-black-50 pl-20 pt-10 bg-black-100 text-sm">The main part</span>
                        <div className="w-full sticky top-[calc(4.74rem_+_232px)] h-[calc(100vh_-_4.74rem_-_232px)] z-10">
                            <div className="w-full py-8 flex items-center text-2xl leading-[2.37rem] font-medium font-ov-soge bg-black-100">
                                <span className="block w-20 font-poppins text-xl">[03]</span>
                                <h3 className="">SEO</h3>
                            </div>
                        </div>
                        <li className="sticky top-[calc(7.11rem_+_296px)] z-10 mt-[calc(-100vh_+_7.11rem_+_296px)] h-[calc(100vh_-_7.11rem_-_296px)] bg-black-100 flex flex-col gap-6 w-full">
                            <div className="flex flex-col gap-8">
                                <p className="text-black-50 pl-20 font-poppins tracking-tighter">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum ut laudantium aspernatur saepe reprehenderit neque eum rem natus ullam optio consectetur nemo deserunt quod molestiae porro provident, sapiente reiciendis corrupti?</p>
                                <ul className="flex flex-col mt-6">
                                    <li className="flex items-center py-4 first:border-t-0 border-t border-black-75">
                                        <span className="font-mono text-black-50 w-20 block text-base">01.</span>
                                        <span className="text-lg font-medium font-ov-soge">Technical SEO</span>
                                    </li>
                                    <li className="flex items-center py-4 first:border-t-0 border-t border-black-75">
                                        <span className="font-mono text-black-50 w-20 block text-base">02.</span>
                                        <span className="text-lg font-medium font-ov-soge">SEO Audits & Analysis</span>
                                    </li>
                                    <li className="flex items-center py-4 first:border-t-0 border-t border-black-75">
                                        <span className="font-mono text-black-50 w-20 block text-base">03.</span>
                                        <span className="text-lg font-medium font-ov-soge">On Page Optimization</span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="min-h-screen relative z-[4] bg-black-100 text-black-10 flex flex-col px-10 py-20">
                <div className="flex flex-col gap-12">
                    <span className="text-4xl font-bold font-ov-soge">Selected works</span>
                    <div className="flex gap-12 items-start px-8">
                        <span className="relative block w-max before:absolute before:-bottom-1 before:left-0 before:w-[80%] before:h-[2px] before:bg-black-75 text-black-75 uppercase font-ov-soge text-sm">Projects</span>
                        <span className="font-poppins text-black-50 w-[360px] text-[1.1rem] leading-[1.8rem] tracking-tighter">Featured projects that have been meticulously crafted with passion to drive results and impact.</span>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex-1 flex flex-col justify-between gap-12 h-screen sticky top-0 py-12">
                        <span className="font-mono font-bold text-[40vh] leading-[40vh]">01.</span>
                        <div className="flex flex-col gap-12">
                            <p className="font-poppins text-black-50 tracking-tighter w-[400px] text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error laborum quos et earum aperiam, quia blanditiis culpa, optio, sint inventore minus a modi!...</p>
                            <div className="flex items-center gap-8">
                                <button className="group flex items-start gap-1 text-black-25">
                                    <span className="relative z-10 font-ov-soge text-sm uppercase bg-black-100 py-1">View Project</span>
                                    <span className="w-4 flex items-center justify-center transition-transform scale-0 group-hover:scale-100 origin-bottom-left">
                                        <MdOutlineArrowOutward size={16} />
                                    </span>
                                </button>
                                <button className="group flex items-start gap-1 text-black-25">
                                    <span className="relative z-10 font-ov-soge text-sm uppercase bg-black-100 py-1">View Code</span>
                                    <span className="w-4 flex items-center justify-center transition-transform scale-0 group-hover:scale-100 origin-bottom-left">
                                        <MdOutlineArrowOutward size={16} />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <ul className="flex-1 flex flex-col min-h-[200vh]">
                        <li className="min-h-screen mt-20 flex flex-col gap-8">
                            <div className="flex-1 rounded-xl bg-black-90"></div>
                            <div className="span flex flex-col gap-2">
                                <span className="font-mono text-black-50">Architecture & Engineering</span>
                                <div className="flex flex-col gap-4">
                                    <span className="text-2xl font-ov-soge font-medium">Entuitive Engineering</span>
                                    <div className="flex items-center gap-2">
                                        <span className="tracking-tighter h-[28px] flex items-center justify-center px-2 font-mono border border-black-50 text-black-50 rounded-md uppercase">Design</span>
                                        <span className="tracking-tighter h-[28px] flex items-center justify-center px-2 font-mono border border-black-50 text-black-50 rounded-md uppercase">Development</span>
                                        <span className="h-[28px] flex items-center justify-center px-2 font-mono border border-black-50 text-black-100 bg-black-50 rounded-md uppercase">2024</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="relative z-[5] min-h-screen flex p-10 bg-black-100 text-black-10 rounded-b-[30px]">
                <div className="w-[280px]">
                    <MdOutlineArrowOutward size={60} />
                </div>
                <div className="flex flex-col gap-20 flex-1">
                    <div className="relative flex justify-between items-start">
                        <span className="flex flex-col peer">
                            <span className="title" style={{ '--content': '"Designer"' } as React.CSSProperties}>Designer</span>
                            <span className="title" style={{ '--content': '"& Developer"' } as React.CSSProperties}>& Developer</span>
                        </span>
                        <span className="absolute top-10 left-[-5%] w-[200px] aspect-square before:hidden before:top-4 before:-left-8 before:w-full before:h-full before:rounded-full before:bg-black-75 peer-hover:after:scale-125 after:transition-transform after:origin-bottom-left after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-full after:bg-black-90"></span>
                    </div>
                    <div className="flex justify-between gap-10">
                        <div className="flex flex-col gap-12 pb-20">
                            <span className="relative font-ov-soge w-[640px] text-lg leading-[2.4rem] text-tighter font-medium">With a passion for design and development, I take projects from ideation to launch, ensuring a seamless journey that leaves a lasting positive impact on the digital landscape and your business.</span>
                            <div className="flex gap-20 items-start">
                                <span className="relative block w-max before:absolute before:-bottom-1 before:left-0 before:w-[80%] before:h-[2px] before:bg-black-75 text-black-75 uppercase font-ov-soge text-sm">About me</span>
                                <span className="font-poppins w-[480px] tracking-tighter leading-[1.5rem] text-black-50">
                                Creating great web experiences is my primary focus. I ensure each project leaves users with a feel-good sensation through meticulous attention to detail and user-centric design principles.<br /><br />
                                When I'm not immersed in web development and design, you can find me sharing insights about my freelance journey on YouTube, bouldering, playing music, or tending to my cherished houseplants.
                                </span>
                            </div>
                         </div>
                         <img src={image} alt="" className="w-[320px] h-full object-cover rounded-md" />
                    </div>
                </div>
            </section>
            <section className="relative z-[6] min-h-screen bg-secondary flex flex-col gap-10 pt-20 pb-[160px]">
                <div className="flex flex-col gap-16">
                    <span className="px-10 font-ov-soge font-bold text-4xl leading-[5.2rem]">What my clients <br /> have to say.</span>
                    <div className="px-20 flex gap-10 items-start">
                        <span className="relative block w-max before:absolute before:-bottom-1 before:left-0 before:w-[80%] before:h-[2px] before:bg-black-50/80 text-black-50/80 uppercase font-ov-soge text-sm">Testimonials</span>
                        <span className="max-w-[360px] font-poppins tracking-tighter leading-[1.8rem] text-[1.1rem] text-black-50">Here's what my clients say about our collaboration. Their satisfaction and meeting expectations are my top priorities, ensuring the best experience possible.</span>
                    </div>
                </div>
                <hr className="border-b border-0 border-black-25 mx-20" />
                <div className="flex gap-10 mt-20 px-10">
                    <div className="flex-1">
                        <img src={testimonial_image} className="w-full aspect-[1.1] rounded-md object-cover saturate-0" />
                    </div>
                    <div className="flex-1 flex flex-col gap-5">
                        <span className="text-2xl font-medium font-ov-soge text-black-90">"Beyond standards. Huy grasped our vision and brought it to life brilliantly."</span>
                        <div className="flex flex-col mt-5">
                            <span className="font-medium font-ov-soge text-black-75">Dylan Kim</span>
                            <div className="font-poppins tracking-tighter text-black-50">Co-Founder @MLV Ignite</div>
                        </div>
                        <div className="flex gap-2">
                            <span className="flex items-center justify-center h-[30px] px-3 font-mono uppercase text-black-50 border border-black-50 rounded-md">WEB DESIGN</span>
                            <span className="flex items-center justify-center h-[30px] px-3 font-mono uppercase text-black-50 border border-black-50 rounded-md">WEB DEVELOPMENT</span>
                            <span className="flex items-center justify-center h-[30px] px-3 font-mono uppercase text-black-50 border border-black-50 rounded-md">SEO</span>
                        </div>
                        <div className="flex-1 flex justify-between items-end gap-4">
                            <div className="flex items-center gap-2 font-mono text-xl text-black-50">
                                <span>2</span>
                                <hr className="border-none w-16 h-[2px] bg-black-50" />
                                <span>2</span>
                            </div>
                            <div className="flex sticky bottom-10 items-center gap-4">
                                <button className="group text-black-10 font-ov-soge uppercase h-[44px] flex items-center justify-center">
                                    <span className="inline-flex items-center h-full rounded-l-md pl-6 pr-1 bg-black-75 translate-x-5 transition-transform group-hover:translate-x-0">
                                        <MdArrowBack size={16} />
                                    </span>
                                    <span className="relative z-10 h-full rounded-r-md pr-6 inline-flex items-center bg-black-75">
                                        <span className="-mb-1">prev</span>
                                    </span>
                                </button>
                                <button className="group text-black-10 font-ov-soge uppercase h-[44px] flex items-center justify-center">
                                    <span className="relative z-10 h-full rounded-l-md pl-6 inline-flex items-center bg-black-75">
                                        <span className="-mb-1">next</span>
                                    </span>
                                    <span className="inline-flex items-center h-full rounded-r-md pr-6 pl-1 bg-black-75 -translate-x-5 transition-transform group-hover:translate-x-0">
                                        <MdArrowForward size={16} />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative z-[7] min-h-screen bg-secondary flex p-12">
                <div className="flex-1 rounded-md bg-black-100 text-black-10 flex flex-col justify-between gap-12 p-8">
                    <div className="flex flex-col gap-8">
                        <span className="relative block w-max before:absolute before:-bottom-1 before:left-0 before:w-[80%] before:h-[2px] before:bg-black-50 text-black-50 uppercase font-ov-soge text-sm">Contact me</span>
                        <span className="flex flex-col text-5xl font-bold font-ov-soge leading-[6.4rem]">Let's build something great together</span>
                    </div>
                    <div className="flex flex-col gap-16">
                        <button className="h-[80px] px-10 w-max rounded-md bg-black-75 flex items-center justify-center gap-1">
                            <span className="font-ov-soge uppercase text-lg">Book a call</span>
                            <MdOutlineArrowOutward size={24} />
                        </button>
                        <div className="flex justify-between gap-20">
                            <div className="flex flex-col">
                                <span className="font-ov-soge font-medium text-black-50">For further enquires</span>
                                <div className="flex items-center gap-2 text-black-50">
                                    <MdOutlineArrowOutward size={16} />
                                    <span className="font-mono">ezemaemmanuelezema6@gmail.com</span>
                                </div>
                            </div>
                            <div className="flex border border-black-50 rounded-md h-[60px]">
                                <div className="h-full aspect-square"></div>
                                <div className="border-l border-black-50 flex flex-col">
                                    <span className="flex-1 px-3 flex items-center border-b border-black-50 font-mono text-black-50">Working Globally</span>
                                    <span className="flex-1 px-3 flex items-center font-mono text-black-50">Available Oct' 24</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="z-[2] sticky bottom-0 bg-secondary p-8 flex flex-col gap-20 justify-between">
                <div className="flex gap-8">
                    <span className="flex-[3] flex items-center font-ov-soge font-bold text-lg h-[40px] border-b border-black-25 text-black-90">ezema.dev</span>
                    <div className="flex flex-col gap-4 flex-1">
                        <span className="font-medium font-poppins tracking-tighter text-lg h-[40px] border-b border-black-25">Menu</span>
                        <ul className="flex flex-col gap-2 font-poppins tracing-tighter text-black-50">
                            <li>Home</li>
                            <li>Services</li>
                            <li>Projects</li>
                            <li>About</li>
                            <li>Testimonials</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4 flex-1">
                        <span className="font-medium font-poppins tracking-tighter text-lg h-[40px] border-b border-black-25">Socials</span>
                        <ul className="flex flex-col gap-2 font-poppins tracing-tighter text-black-50">
                            <li>LinkedIn</li>
                            <li>Github</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between items-end gap-12">
                    <span className="text-black-90 font-ov-soge font-bold text-5xl leading-[6.4rem]">
                        <span className="font-poppins">© 2024</span><br />
                        <span>Ezema Emmanuel</span>
                    </span>
                    <button className="w-20 aspect-square rounded-full bg-black-25 text-black-75 mb-4 mr-4 flex items-center justify-center">
                        <FaArrowUp size={30} />
                    </button>
                </div>
            </footer>
        </div>
    )
}