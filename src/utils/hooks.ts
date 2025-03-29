import { useEffect, useState } from "react";
import { QueryResult } from "../types";


const THINGS_TO_FETCH = [
    { name: "projects", path: "ezema/projects" },
    { name: "testimonials", path: "ezema/testimonials" },
    { name: "socials", path: "ezema/socials" }
]


export function useGetMousePosition() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => setMousePosition({ x: event.clientX, y: event.clientY })
        window.addEventListener('mousemove', handleMouseMove);

        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return mousePosition;
};


export function useFetch(options?: RequestInit) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState<QueryResult>({});

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            for(const { path } of THINGS_TO_FETCH) {
                try {
                    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/${path}`, options);
                    const result = await response.json();

                    if(response.status !== 200) throw result;
                    setData((prev) => ({ ...prev, ...result }));
                } catch (error) {
                    console.error((error as Error).message);
                    setError(true);
                }
            }
            setLoading(false);
        }

        fetchData();
    }, []);

    return { loading, error, data }
}