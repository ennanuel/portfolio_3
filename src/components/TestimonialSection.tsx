
import { useMemo, useState } from "react";

import testimonial_image from "../assets/testimonial_image.webp";
import testimonial_image2 from "../assets/testimonial_image2.webp";

import { Title } from "./Title";
import SubTitle from "./SubTitle";

import Testimonial from "./Testimonial";

const TESTIMONIALS = [
    {
        testimonial: "\"Beyond standards. Huy grasped our vision and brought it to life brilliantly.\"",
        image: testimonial_image,
        name: "Dylan Kim",
        role: "Co-Founder",
        company: "MLV Ignite",
        tags: ["Web development", "Web design", "SEO"]
    },
    {
        testimonial: "\"Beyonds standards. Huy grasped our vision and brought it to life brilliantly.\"",
        image: testimonial_image2,
        name: "Dylan Kim",
        role: "Co-Founder",
        company: "MLV Ignite",
        tags: ["Web development", "Web design", "SEO"]
    },
]


export default function TestimonialSection() {
    const [index, setIndex] = useState(0);
    const testimonial = useMemo(() => TESTIMONIALS[index], [index]);

    return (
        <section id="testimonials" className="relative z-[6] mt-[-200px] min-h-screen bg-light flex flex-col md:gap-10 pt-20 pb-[160px]">
            <div className="px-6 md:px-12">                    
                <div className="flex flex-col gap-16 lg:max-w-[50%]">
                    <Title className="text-black-100">What my clients have to say</Title>
                    <SubTitle alt title="Testimonials" paragraphClass="max-w-[400px] text-base md:text-[1.2rem] leading-[1.4rem] md:leading-[1.8rem] font-poppins tracking-tighter text-black-75">Here's what my clients say about our collaboration. Their satisfaction and meeting expectations are my top priorities, ensuring the best experience possible.</SubTitle>                </div>
            </div>
            <hr className="md:mx-12 border-0 border-b border-black-25" />
            <Testimonial {...testimonial} maxLength={TESTIMONIALS.length} index={index} setIndex={setIndex} />
        </section>
    )
}