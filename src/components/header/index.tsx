'use client';

import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import LogoBfn from '@/components/images/LOGOBFN.png';
import { Switch } from '@/components/ui/switch';
import { FaLightbulb } from 'react-icons/fa';

export default function HeaderComponent() {
    const logoRef = useRef(null);
    const switchRef = useRef(null);
    const navAboutRef = useRef(null);
    const navSkillsRef = useRef(null);
    const navProjectsRef = useRef(null);
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const handleSwitchChange = (checked: boolean) => setIsChecked(checked);

    useEffect(() => {
        if (isChecked) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        };
    }, [isChecked]);

    useEffect(() => {
        const logo = logoRef.current;
        const switchtoggle = switchRef.current;
        const about = navAboutRef.current;
        const skills = navSkillsRef.current;
        const projects = navProjectsRef.current;

        gsap.fromTo(logo, {
            opacity: 0,
            x: 300,
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power1.in'
        });

        gsap.fromTo(switchtoggle, {
            opacity: 0,
            x: -300,
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power1.in'
        });

        gsap.fromTo(about, {
            opacity: 0,
            x: -300
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power1.in'
        });

        gsap.fromTo(skills, {
            opacity: 0,
            x: -300
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: 0.5,
            ease: 'power1.in'
        });

        gsap.fromTo(projects, {
            opacity: 0,
            x: -300
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: 1,
            ease: 'power1.in'
        });
    }, []);
    return (
        <header className="w-full flex justify-between">
            <Link className="logo" ref={logoRef} href="/">
                <Image src={LogoBfn} alt='Logo BetoFoxNet' priority />
            </Link>
            <div className="flex flex-col items-end gap-4">
                <div className="flex gap-2 opacity-0" ref={switchRef}>
                    <Switch className="cursor-pointer" checked={isChecked} onCheckedChange={handleSwitchChange} title={isChecked ? 'Claro' : 'Escuro'} />
                    <FaLightbulb />
                </div>

                <nav className="flex gap-2 max-sm:hidden">
                    <Link className="buttons" ref={navAboutRef} href="#about_me">
                        <span>sobre mim</span>
                    </Link>
                    <Link className="buttons" ref={navSkillsRef} href="#skills">
                        <span>habilidades</span>
                    </Link>
                    <Link className="buttons" ref={navProjectsRef} href="#projects">
                        <span>Projetos</span>
                    </Link>
                </nav>
            </div>
        </header>
    );
}