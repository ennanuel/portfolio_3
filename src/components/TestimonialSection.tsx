
import { useMemo, useState } from "react";

import { Title } from "./Title";
import SubTitle from "./SubTitle";

import Testimonial from "./Testimonial";
import { EzemaTestimonials } from "../types";

export default function TestimonialSection({ testimonials }: { testimonials: EzemaTestimonials[] }) {
    const [index, setIndex] = useState(0);
    const testimonial = useMemo(() => testimonials[index], [index]);

    return (
        <section id="testimonials" className="relative z-[6] mt-[-200px] min-h-screen bg-light flex flex-col md:gap-10 pt-20 pb-[160px]">
            <div className="px-6 md:px-12">                    
                <div className="flex flex-col gap-16 lg:max-w-[50%]">
                    <Title className="text-black-100">What my clients have to say</Title>
                    <SubTitle alt title="Testimonials" paragraphClass="max-w-[400px] text-base md:text-[1.2rem] leading-[1.4rem] md:leading-[1.8rem] font-poppins tracking-tighter text-black-75">
                        Here's what my clients say about our collaboration. Their satisfaction and meeting expectations are my top priorities, ensuring the best experience possible.
                    </SubTitle>
                </div>
            </div>
            <hr className="md:mx-12 border-0 border-b border-black-25" />

            {
                testimonial ?
                    <Testimonial testimonial={testimonial} maxLength={testimonials.length} index={index} setIndex={setIndex} /> :
                    null
            }
        </section>
    )
}