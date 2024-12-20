

import { Title } from "./Title";
import SubTitle from "./SubTitle";
import Service from "./Service";

const SERVICES = [
    {
        subTitle: "Development",
        title: "Web Development",
        description: "Expertly coded websites and web applications designed to captivate your audience and drive business growth. I prioritize performance and user experience, ensuring your digital presence stands out.",
        subServices: [
            "CMS Integration",
            "Website & Web Application",
            "Motion & Animations"
        ]
    },
    {
        subTitle: "Design",
        title: "Web Design",
        description: "A well-designed website or web application is more than just a digital presence. It's a powerful tool that can elevate your brand, engage your audience, and drive business growth. We craft exceptional digital experiences that align with your unique brand identity and deliver results.",
        subServices: [
            "Wireframing",
            "Responsive Design",
            "User-centric Design",
        ]
    },
    {
        subTitle: "SEO",
        title: "SEO",
        description: "Want to dominate search engine results and attract more organic traffic? I'll optimize your website, create compelling content, and build high-quality backlinks to boost your online visibility, elevate your brand and drive real results.",
        subServices: [
            "Local SEO",
            "On-Page & Off-Page Optimization",
            "Website Audits & Analysis"
        ]
    }
]

export default function ServicesSection() {

    return (
        <section className="relative z-[3] bg-dark rounded-t-[30px] text-brown-200 min-h-screen md:px-10 flex-col lg:flex-row flex gap-20 md:pb-[160px]">
            <div className="sticky flex-1 lg:top-0 z-[20] lg:h-screen flex flex-col gap-10 mt-20 px-6 lg:mt-0 lg:py-20 lg:pt-[124px] mb-[-20vh]">
                <Title className="font-ov-soge font-bold">Your Success, My Goal</Title>
                <SubTitle title="Services">
                    Your brand deserves a digital home that's as unique as you are. I specialize in crafting custom web experiences that captivate your audience and convert visitors into customers.
                </SubTitle>
            </div>
            <div className="flex-1">
                <ul className="flex flex-1 flex-col items-start justify-start lg:mt-[50vh]">
                    {
                        SERVICES.map((service, index) => <Service key={index} {...service} index={index} total={SERVICES.length} />)
                    }
                </ul>
            </div>
        </section>
    )
}