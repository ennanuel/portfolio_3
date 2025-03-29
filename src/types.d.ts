

export type EzemaProjects = {
    title: string;
    desc: string;
    demo_url: string;
    code_url: string;
    category: string;
    tags: string[];
    image_public_id: string;
    image_url: string;
    video_public_id: string;
    video_url: string;
    createdAt: string;
}
    
export type EzemaTestimonials = {
    id: string;
    verdict: string;
    client_name: string;
    client_role: string;
    client_company: string;
    services: string[];
    client_image: {
        publicUrl: string;
    }
};

export type EzemaSocials = {
    id: string;
    platform: string;
    url_link: string;
};

export type QueryResult = {
    projects?: EzemaProjects[];
    testimonials?: EzemaTestimonials[];
    socials?: EzemaSocials[];
}