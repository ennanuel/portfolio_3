
import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

import { BsArrowRight } from "react-icons/bs";

import Button from "../Button";
import Menu from "./Menu";

import { HeaderProps } from "../../types";

export default function Header({ socials, showingContentFor }: HeaderProps) {
    const { scrollY } = useScroll();

    const showHeader = useRef(false);
    const headerRef = useRef<HTMLHeadElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const button2Ref = useRef<HTMLDivElement>(null);

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const openMenu = () => {
        setMenuIsOpen(true);
        if(headerRef.current) headerRef.current.dataset.menu = "open";
    }
    const closeMenu = () => {
        setMenuIsOpen(false);
        if(headerRef.current) headerRef.current.dataset.menu = "closed";
    }

    useMotionValueEvent(scrollY, "change", (value) => {
        showHeader.current = value > window.innerHeight * 2;

        if(!headerRef?.current || !buttonRef.current || !button2Ref.current) return;

        if(showHeader.current || headerRef.current.dataset.menu === "open") {
            headerRef.current.classList.remove("pointer-events-none");
            buttonRef.current.classList.remove("scale-0", "opacity-0");
            button2Ref.current.classList.remove("scale-0");
        } else {
            headerRef.current.classList.add("pointer-events-none");
            buttonRef.current.classList.add("scale-0", "opacity-0");
            button2Ref.current.classList.add("scale-0");
        }
    });

    useEffect(() => {
        if (menuIsOpen) document.querySelector('body')?.classList?.add('overflow-hidden');
        else document.querySelector('body')?.classList?.remove('overflow-hidden');
    }, [menuIsOpen]);

    return (
        <div>
            <header 
                id="header" 
                ref={headerRef}
                className="pointer-events-none fixed z-[999999] top-0 right-0 py-4 sm:py-8 px-4 sm:px-8 flex gap-2 md:gap-[12px] justify-end items-center"
            >
                <div ref={buttonRef} className="transition-[transform,_opacity] scale-0 opacity-0 duration-500 ease-expo">
                    <Button text="Let's Talk" namespace="30min" Icon={BsArrowRight}></Button>
                </div>
                <div ref={button2Ref} className="scale-0 transition-transform duration-1000 ease-expo ">
                    <button 
                        onClick={menuIsOpen ? closeMenu : openMenu}
                        className={`${menuIsOpen ? 'after:-rotate-45 after:-translate-y-1/2 before:rotate-45 before:-translate-y-1/2' : 'before:translate-y-[calc(-50%_+_5px)] after:translate-y-[calc(-50%_-_5px)]'} relative w-12 md:w-[60px] aspect-square rounded-full md:rounded-lg bg-brown-400 text-brown-900 flex items-center justify-center transition-transform duration-1000 ease-expo md:hover:scale-90 before:absolute before:top-[50%] before:left-1/2 before:translate-x-[-50%] before:h-[2px] before:w-1/2 before:bg-brown-900 before:transition-transform before:duration-300 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-1/2 after:bg-brown-900 after:transition-transform after:duration-300`}
                    >
                    </button>
                </div>
            </header>             
            <Menu showingContentFor={showingContentFor} menuIsOpen={menuIsOpen} closeModal={closeMenu} socials={socials} />
        </div>
    )
}