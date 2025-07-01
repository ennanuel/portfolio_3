

export const PROJECT_ID = String(import.meta.env.VITE_PROJECT_ID);
export const DATABASE_ID = String(import.meta.env.VITE_DB_ID);
export const COLLECTION_ID = String(import.meta.env.VITE_COLLECTION_ID);
export const ENDPOINT_URL = String(import.meta.env.VITE_ENDPOINT_URL);
export const IP_URL = String(import.meta.env.VITE_IP_URL);

export const MENUS = [
    {
        platform: "Home",
        url_link: "#"
    },
    {
        platform: "Services",
        url_link: "#services"
    },
    {
        platform: "Works",
        url_link: "#projects"
    },
    {
        platform: "About",
        url_link: "#about"
    },
    {
        platform: "Testimonials",
        url_link: "#testimonials"
    },
    {
        platform: "Contact",
        url_link: "#contact"
    }
];