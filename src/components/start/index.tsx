'use client';

import Image from 'next/image';
import ImgPerfil from '@/components/images/foto-perfil.png'
import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

export default function StartComponent() {
    const textRef = useRef(null);
    const socialRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        const text = textRef.current;
        const social = socialRef.current;
        const imgPerfil = imgRef.current;

        gsap.fromTo(text, {
            opacity: 0,
            y: -300,
            scale: 0.5,
        }, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
        });

        gsap.fromTo(social, {
            opacity: 0,
            y: 300,
            scale: 0.5,
        }, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
        });

        gsap.fromTo(imgPerfil, {
            opacity: 0,
            x: -500,
            scale: 0.5,
        }, {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
        });

        const h1Element = document?.querySelector("h1")?.textContent;
        const letters = h1Element?.split("");
        const h1ElementNode = document?.querySelector("h1");
        if (h1ElementNode) {
            h1ElementNode.innerHTML = '';
        };

        letters?.forEach((letter: string) => {
            const span = document.createElement("span");
            span.innerText = letter;
            document?.querySelector("h1")?.appendChild(span);
        });

        const spans = document.querySelectorAll("h1 span");

        gsap.fromTo(spans, {
            opacity: 0,
            y: 100,
            color: "var(--sidebar-primary)",
        }, {
            opacity: 1,
            y: 0,
            color: "var(--foreground)",
            duration: 0.6,
            repeat: -1,
            stagger: 0.1,
            ease: "power4.out",
        });
    }, []);
    return (
        <div className="w-full h-[80vh] flex items-center justify-between">
            <section className="flex flex-col gap-5">
                <div className="flex flex-col opacity-0 cursor-default" ref={textRef}>
                    <p className="text-3xl">Olá 🖖,</p>
                    <h1 className="text-4xl font-bold">Sou o Humberto Ribeiro</h1>
                    <h2 className="text-4xl">Desenvolvedor Full-Stack</h2>
                </div>
                <div className="social" ref={socialRef}>
                    <Link href="https://www.linkedin.com/in/humberto-ribeiro-sales/" target='_blank'>
                        <FaLinkedinIn />
                    </Link>
                    <Link href="https://github.com/HumbertoFox/" target='_blank'>
                        <FaGithub />
                    </Link>
                    <Link href="https://www.instagram.com/betofoxnet_info/" target='_blank'>
                        <FaInstagram />
                    </Link>
                    <Link href="https://api.whatsapp.com/send/?phone=5581988075408&text&type=phone_number&app_absent=0" target='_blank'>
                        <FaWhatsapp />
                    </Link>
                </div>
            </section>

            <div className="perfilrt" ref={imgRef}>
                <Image src={ImgPerfil} alt="Imagem Perfil" priority />
            </div>
        </div>
    );
}