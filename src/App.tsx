
import { AiOutlineArrowDown, AiOutlineArrowRight } from 'react-icons/ai';
import { BsDot } from 'react-icons/bs';
import { FaFonticonsFi, FaGithub } from 'react-icons/fa';
import { FiExternalLink, FiGithub, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { HiOutlineDocument } from 'react-icons/hi2';
import { SiMongodb, SiNextdotjs, SiPython, SiReact, SiTailwindcss } from 'react-icons/si';

function App() {

  return (
    <div id="App" className="bg-black">
      <section className="flex min-h-[100vh]">
        <div className="w-[60px] bg-white rounded-br-full"></div>

        <div className='relative flex flex-col items-center justify-between w-[1px]'>
          <hr className="relative flex-1 block border-none w-[1px] bg-white max-h-[60px]" />
          <ul className="flex flex-col gap-10 items-center">
            <li className="relative flex items-center justify-center w-12 aspect-square before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:bg-white"><FiGithub size={15} className="relative" /></li>
            <li className="relative flex items-center justify-center w-12 aspect-square before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:bg-white"><FiInstagram size={15} className="relative" /></li>
            <li className="relative flex items-center justify-center w-12 aspect-square before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:bg-white"><FiLinkedin size={15} className="relative" /></li>
          </ul>
          <hr className="relative flex-1 block border-none" />
          <span className="relative w-[40px] aspect-square flex items-center justify-center before:absolute before:top-[50%] before:left-[50%] before:w-[60px] before:aspect-square before:rounded-full before:bg-white before:translate-x-[-50%] before:translate-y-[-50%] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:border after:border-black after:rounded-full"></span>
          <hr className="relative flex-1 block border-none" />
        </div>
        <div className="flex flex-1 gap-20 p-[5%] pr-0 bg-white rounded-bl-[60px]">
          <div className="flex flex-col gap-4 max-w-[300px] justify-end py-10">
            <h1 className='font-bold text-2xl font-poppins'>Emmanuel Ezema</h1>
            <p className="font-handjet">I like to craft solid and scalable frontend products with great user experiences.</p>
            <p className="font-handjet">Proven experience building successful products for clients across several countries.</p>
          </div>

          <ul className="flex-1 grid grid-cols-2 grid-rows-2 gap-6">
            <li className="group flex flex-col justify-between gap-4 border border-black rounded-[30px] p-4 pb-2">
              <div className="flex items-center justify-between gap-4">
                <span className="text-2xl font-bold font-handjet">01.</span>
                <span className="flex items-center justify-center w-[40px] aspect-square rounded-full border border-black opacity-0 group-hover:opacity-100 transition-opacit duration-300y">
                  <AiOutlineArrowRight size={15} />
                </span>
              </div>
              <span className="font-bold text-[2.4rem] font-poppins outline-text">About</span>
            </li>
            <li className="group flex flex-col justify-between gap-4 border border-r-0 border-black rounded-l-[30px] p-4 pb-2">
              <div className="flex items-center justify-between gap-4">
                <span className="text-2xl font-bold font-handjet">03.</span>
                <span className="flex items-center justify-center w-[40px] aspect-square rounded-full border border-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <AiOutlineArrowRight size={15} />
                </span>
              </div>
              <span className="font-bold text-[2.4rem] font-poppins outline-text">Contact</span>
            </li>
            <li className="group p-6 pb-2 col-span-2 flex flex-col justify-between border border-r-0 border-black rounded-l-[30px]">
              <div className="flex items-center justify-between gap-4">
                <span className='text-2xl font-bold font-handjet'>02.</span>
                <span className="flex items-center justify-center w-[50px] aspect-square rounded-full border border-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <AiOutlineArrowRight size={20} />
                </span>
              </div>
              <span className="font-bold text-[2.6rem] font-poppins outline-text">My works</span>
            </li>
          </ul>
        </div>
      </section>
      <div className="bg-white">

        <section className="flex min-h-[100vh] text-white flex-row-reverse">
          <div className='w-[60px] bg-black rounded-l-full'></div>

          <div className='flex flex-col w-[1px] items-center sticky top-0 h-[100vh] py-20'>
            <span className="relative w-[40px] h-[40px] rounded-full flex items-center justify-center before:bg-black before:absolute before:w-[60px] before:aspect-square before:rounded-full before:top-[50%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:border after:border-white after:rounded-full"></span>
            <ul className="flex-1 flex flex-col justify-end gap-4">
              <li className="relative flex items-center justify-center h-12 w-12 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:bg-black">
                <BsDot size={25} className="relative" />
              </li>
              <li className="relative flex items-center justify-center h-12 w-12 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:bg-black">
                <BsDot size={25} className="relative" />
              </li>
            </ul>
          </div>

          <div className="flex flex-1 pl-0 p-[10%] bg-black rounded-r-[60px]">
            <div className="flex flex-col gap-20">
              <h2 className="flex items-start gap-6 ml-[calc(10%_-_40px)]">
                <span className="font-bold text-2xl font-handjet">01.</span>
                <span className="font-bold font-poppins outline-text-dark text-[5rem] leading-[5rem]">About</span>
              </h2>
              <div className="flex flex-col gap-10 max-w-[700px] ml-[10%]">
                <h3 className="text-[2rem] font-bold font-poppins">I'm Emmanuel. A Full Stack Developer, quick and efficient.</h3>
                <p className="font-handjet text-xl text-gray-200">The cusp of art and technology has always fascinated me and I've never been afraid to just jump in and give it a go, whether it's Paint, Photoshop, Sketch or CSS. I’ve been designing with computers since the day I first opened Microsoft Paint.<br />
                  Fast forward to 2023 and I’ve tried it all, from Digital Campaign Design and Flash Actionscript to Web Design, Animation, HTML/CSS, No-Code Web Development, Product Design and Product Management. Everything I have done, small or big, has been a vital stepping stone for where I am today.<br />e right problems to solve, delivering solutions as quickly as possible, learning from those and then iterating and improving that value over time is the key to great product design.<br />
                  This is one of my favourite quotes (by Peter Drucker):</p>
                <div className="flex items-center gap-4">
                  <button className="relative overflow-clip h-[60px] flex items-center justify-center px-[40px] rounded-full bg-black border border-white/80 gap-3 hover:text-black hover:border-white before:absolute before:left-0 before:top-[50%] before:w-full before:aspect-square before:rounded-full before:bg-white before:translate-y-[-50%] before:translate-x-[-50px] before:scale-0 hover:before:scale-[1.6] before:transition-transform before:duration-300">
                    <HiOutlineDocument size={20} className='relative' />
                    <span className="font-poppins text-sm relative">View resume</span>
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-10">
                <h3 className="text-[2rem] font-bold font-poppins ml-[10%]">Experience</h3>
                <ul className="flex flex-col gap-10">
                  {
                    [1, 2, 3].map((index) => (
                      <li key={index} className="group flex gap-6 p-6 hover:bg-white/5 rounded-r-[30px] pl-[10%]">
                        <span className="whitespace-nowrap font-handjet font-bold">Jun 2024 - Present</span>
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center justify-between gap-4">
                            <h3 className="font-poppins font-bold text-lg">Senior Frontend Developer</h3>
                            <button className="opacity-0 group-hover:opacity-100 flex items-center justify-center w-8 aspect-square rounded-full bg-white/5">
                              <AiOutlineArrowDown size={15} />
                            </button>
                          </div>
                          <p className="font-handjet mt-2 text-gray-200">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis iste ad eligendi maiores omnis eaque nam quaerat quibusdam rem ea! Optio ipsum tenetur libero nemo consequatur aperiam doloremque alias at?</p>
                          <div className="flex flex-wrap gap-3 font-poppins text-xs">
                            <span className="flex items-center justify-center h-[32px] min-w-[32px] px-4 rounded-full bg-white/5">React</span>
                            <span className="flex items-center justify-center h-[32px] min-w-[32px] px-4 rounded-full bg-white/5">Bootstrap</span>
                            <span className="flex items-center justify-center h-[32px] min-w-[32px] px-4 rounded-full bg-white/5">Jest</span>
                            <span className="flex items-center justify-center h-[32px] min-w-[32px] px-4 rounded-full bg-white/5">Tailwind</span>
                            <span className="flex items-center justify-center h-[32px] min-w-[32px] rounded-full bg-white/5 font-semibold">+3</span>
                          </div>
                        </div>
                      </li>
                    ))
                  }
                </ul>
                <div className="flex items-center gap-4 mt-4 ml-[10%]">
                  <button className="relative overflow-clip h-[60px] flex items-center justify-center px-[40px] rounded-full bg-black border border-white/80 gap-3 hover:text-black hover:border-white before:absolute before:left-0 before:top-[50%] before:w-full before:aspect-square before:rounded-full before:bg-white before:translate-y-[-50%] before:translate-x-[-45px] before:scale-0 hover:before:scale-[1.6] before:transition-transform before:duration-300">
                    <AiOutlineArrowDown size={20} className="relative" />
                    <span className="font-poppins text-sm relative">My projects</span>
                  </button>
                </div>
              </div>
            </div>
            
          </div>
        </section>
      </div>

      <section className="flex min-h-[100vh]">
        <div className="bg-white rounded-r-full w-[60px]"></div>
        <div className='flex relative w-[1px] flex-col items-center py-20'>
          <span className="w-10 aspect-square flex items-center sticky top-[100px] justify-center after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-full after:bg-white after:border after:border-black before:absolute before:w-[60px] before:aspect-square before:rounded-full before:top-[50%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:bg-white"></span>
        </div>
        
        <div className="flex-1 bg-white rounded-l-[60px] flex gap-20 pl-[10%] pb-20">
          <div className="flex flex-1 flex-col gap-4 justify-between h-[100vh] sticky top-0 max-w-[300px] pt-[10%] pb-[5%]">
            <h2 className="flex gap-4 ml-[-50px]">
              <span className="font-handjet font-bold text-2xl">02.</span>
              <span className="font-poppins text-[4rem] leading-[4rem] font-bold outline-text">Work</span>
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-handjet">
                This is a showcase of my best work in a variety of fields including Graphic and Web Design, No-Code Development, Product Design and Product Management.<br />
                The world of digital design and development is constantly evolving and so has my role over the last 15 years. I’m still learning and gaining new skills every day.
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-10 pt-[10%] pb-[5%]">
            <ul className="flex-1 flex flex-col gap-6">
              {
                [1, 2, 3, 4, 5].map((num, index) => (
                  <li key={index} className="group flex flex-col justify-between p-[24px] border border-r-0 border-black min-h-[240px] rounded-l-[40px] overflow-hidden">
                    <ul className="relative flex items-center">
                      {
                        [
                          {
                            Icon: SiReact,
                            leftPosition: 'left-0',
                            hoverTranslate: 'group-hover:translate-x-[calc(100%_-_232px)] group-hover:delay-[250ms]',
                          },
                          {
                            Icon: SiMongodb,
                            leftPosition: 'left-0 translate-x-[40px]',
                            hoverTranslate: 'group-hover:translate-x-[calc(100%_-_192px)] group-hover:delay-[200ms]',
                          },
                          {
                            Icon: SiTailwindcss,
                            leftPosition: 'left-0 translate-x-[80px]',
                            hoverTranslate: 'group-hover:translate-x-[calc(100%_-_152px)] group-hover:delay-[150ms]',
                          }, {
                            Icon: SiNextdotjs,
                            leftPosition: 'left-0 translate-x-[120px]',
                            hoverTranslate: 'group-hover:translate-x-[calc(100%_-_112px)] group-hover:delay-[100ms]',
                          },
                          {
                            Icon: SiPython,
                            leftPosition: 'left-0 translate-x-[160px]',
                            hoverTranslate: 'group-hover:translate-x-[calc(100%_-_72px)] group-hover:delay-[50ms]',
                          }
                        ].map(({ Icon, leftPosition, hoverTranslate }, index) => (
                          <li key={index} className={`absolute top-0 ${leftPosition} ${hoverTranslate} transition-transform duration-300 h-[32px] w-full`}>
                            <span className="w-[30px] aspect-square rounded-full border border-black flex items-center justify-center">
                              <Icon size={18} />
                            </span>
                          </li>
                        ))
                      }
                      <div className="absolute top-0 left-0 translate-x-[200px] w-full group-hover:translate-x-[calc(100%_-_32px)] transition-transform duration-300">
                        <li className="absolute top-0 w-[30px] aspect-square rounded-full bg-black border border-black text-white flex items-center justify-center">
                          <span className="text-xs font-poppins font-semibold">+2</span>
                        </li>
                      </div>
                    </ul>
                    <div className="flex flex-col gap-6 duration-300 translate-y-[calc(100%_-_2.5rem)] group-hover:translate-y-0 group-hover:delay-[250ms] transition-transform">
                      <h3 className="font-poppins text-[2.5rem] leading-[2.5rem] font-bold outline-text transition-transform duration-300 group-hover:translate-y-[-0.4rem] group-hover:delay-[250ms]">Project name</h3>
                      <div className="flex flex-col gap-3">
                        <div className="overflow-hidden">
                          <p className="font-handjet text-lg transition-trasform duration-300 group-hover:delay-[600ms] translate-y-[-110%] group-hover:translate-y-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique accusamus voluptas pariatur nam, in blanditiis laboriosam doloribus. Quos amet, quis hic perferendis facere aliquid ipsa labore dolor iste, sapiente illum?</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <button className="flex items-center justify-center gap-2 px-4 min-w-[120px] border border-black h-[40px] rounded-full transition-opacity duration-300 opacity-0 group-hover:delay-[700ms] group-hover:opacity-100">
                            <FaGithub size={18} />
                            <span className="text-xs font-poppins">View code</span>
                          </button>
                          <button className="flex items-center justify-center gap-2 px-4 min-w-[120px] border border-black bg-black text-white h-[40px] rounded-full transition-opacity duration-300 opacity-0 group-hover:delay-[800ms] group-hover:opacity-100">
                            <FiExternalLink size={18} />
                            <span className="text-xs font-poppins">Demo</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))
              }
            </ul>
            <button className='relative overflow-clip h-[60px] rounded-full bg-black border border-black text-white hover:text-black flex items-center justify-center gap-2 px-3 w-full max-w-[250px] m-auto before:absolute before:top-[50%] before:translate-y-[-50%] before:left-[50px] before:w-full before:aspect-square before:rounded-full before:bg-white before:scale-0 before:transition-transform before:duration-300 hover:before:scale-[1.6]'>
              <span className="text-sm font-poppins relative">View archives</span>
              <AiOutlineArrowRight size={20} className="relative" />
            </button>
          </div>
        </div>
      </section>
      <section className="bg-white flex min-h-[100vh]">
        <div className="flex-1 bg-black text-white rounded-tr-[60px] flex pr-[5%] gap-20 pb-20">
          <form action="" className="pl-[10%] p-8 flex-1 mt-[10%] mb-[5%] bg-white/5 rounded-r-[60px] border border-l-0 border-transparent hover:border-white/5 flex flex-col gap-10">
            <div className="flex-1 grid grid-cols-2 grid-rows-[auto,_1fr] gap-6">
              <div className="flex flex-col gap-3">
                <label htmlFor="name" className="text-xs font-poppins px-4">Name</label>
                <input type="text" id="name" className="font-handjet text-lg bg-white/5 h-[50px] rounded-full px-4" placeholder="Enter your name" />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="email" className="text-xs font-poppins px-4">Email address</label>
                <input type="email" id="email" className="font-handjet text-lg bg-white/5 h-[50px] rounded-full px-4" placeholder="Enter your email address" />
              </div>
              <div className="flex flex-col gap-3 col-span-2">
                <label htmlFor="message" className="text-xs font-poppins px-4">Your message</label>
                <textarea id="message" className="font-handjet text-lg flex-1 bg-white/5 rounded-[25px] p-4" placeholder="Hi, I think we need a design system for our product at Company X. How soon can you hop on to discuss"></textarea>
              </div>
            </div>
            <button className="relative overflow-clip h-[60px] flex items-center justify-center px-[40px] rounded-full border border-white/80 gap-3 hover:text-black hover:border-white before:absolute before:left-0 before:top-[50%] before:w-full before:aspect-square before:rounded-full before:bg-white before:translate-y-[-50%] before:translate-x-[60px] before:scale-0 hover:before:scale-[1.6] before:transition-transform before:duration-300">
              <span className="font-poppins text-sm relative">Send message</span>
              <HiOutlineArrowNarrowRight size={20} className='relative' />
            </button>
          </form>
          <div className="flex-1 max-w-[400px] h-[100vh] pt-[10%] pb-[5%] flex flex-col justify-between">
            <div className="flex gap-3 mx-[-40px]">
              <span className="font-handjet text-2xl">03.</span>
              <h2 className="text-[4rem] leading-[4rem] -mt-2 font-bold outline-text-dark">Contact</h2>
            </div>
            <p className="font-handjet">Need a beautiful, well-structured website that you can own and maintain yourself? Get in touch. <br /> Email: legendarywaller@gmail.com On the Internet: LinkedIn / Dribbble / Twitter / Github</p>
          </div>
        </div>
        <span className="w-[1px] flex justify-center py-20 sticky top-[0px] h-max">
          <span className="relative min-w-[40px] min-h-[40px] rounded-full flex items-center justify-center before:bg-black before:absolute before:w-[60px] before:aspect-square before:rounded-full before:top-[50%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:border after:border-white after:rounded-full"></span>
        </span>
        <div className="flex-1 max-w-[60px] bg-black rounded-tl-[60px]"></div>
      </section>
      <footer className="bg-black text-white flex p-[60px] min-h-[100vh]">
        <div className="relative flex-1 flex flex-col justify-between py-20 rounded-[100px] border border-white before:absolute before:top-[-60px] before:right-[-1px] before:w-[1px] before:bg-white before:h-[calc(50%_+_150px)]">
          <div className="flex flex-col gap-6 px-20">
            <FaFonticonsFi size={40} />
            <h3 className="text-2xl mt-2 font-poppins">Say hello</h3>
            <div className="flex gap-20">
              <ul className="flex flex-col gap-4">
                <li className="font-handjet">emmanuelezema@gmail.com</li>
                <li className="font-handjet">t.me/ennanuel</li>
              </ul>
              <ul className="flex flex-col gap-4">
                <li className="font-handjet">My work</li>
                <li className="font-handjet">My shelf</li>
                <li className="font-handjet">My résumé</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between items-center mx-20 pt-10 border-t border-white/20">
            <span className='font-poppins'>&copy; <span className="text-sm"> Emmanuel Ezema {(new Date()).getFullYear()}.</span></span>
            <div className="flex items-center gap-4">
              <span className="w-10 aspect-square rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center">
                <FiTwitter size={16} />
              </span>
              <span className="w-10 aspect-square rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center">
                <FaGithub size={16} />
              </span>
              <span className="w-10 aspect-square rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center">
                <FiLinkedin size={16} />
              </span>
              <span className="w-10 aspect-square rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center">
                <FiInstagram size={16} />
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
