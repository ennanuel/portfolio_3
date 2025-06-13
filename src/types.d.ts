

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
};


type PathType = string | null;

export type HeaderProps = {
    socials?: EzemaSocials[];
    showingContentFor: PathType;
};

export type MenuProps = {
    socials?: EzemaSocials[];
    menuIsOpen: boolean;
    closeModal: () => void;
    showingContentFor: PathType;
};

export type IntroSectionProps = {
    socials?: EzemaSocials[];
    showingContentFor: PathType;
};

export type ServicesSectionProps = {
    showingContentFor: PathType;
};

export type ServiceProps = { 
    index: number; 
    company?: string;
    Icon?: IconType;
    total: number; 
    subTitle: string; 
    title: string; 
    description: string; 
    subServices: string[]; 
    topHeight: string;
    titleFontSize: string;
    titlePadding: string;
    showingContentFor: PathType;
};

export type ProjectsSectionProps = {
    projects?: EzemaProjects[];
    showingContentFor: PathType;
};

export type TestimonialsSectionProps = {
    testimonials?: EzemaTestimonials[];
    showingContentFor: PathType;
};

export type FooterProps = {
    socials?: EzemaSocials[];
    showingContentFor: PathType;
};