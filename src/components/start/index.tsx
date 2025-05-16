'use client';

import Image from 'next/image';
import ImgPerfil from '@/components/images/foto-perfil.png';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SocialComponent from '@/components/social';
import { useLocale, useTranslations } from 'next-intl';

export default function StartComponent() {
    const locale = useLocale();
    const t = useTranslations('StartComponent');
    const textRef = useRef(null);
    const socialRef = useRef(null);
    const imgRef = useRef(null);
    useEffect(() => {
        const h1Element = document?.querySelector("h1")?.textContent;
        const letters = h1Element?.split("");
        const h1ElementNode = document?.querySelector("h1");

        if (h1ElementNode) h1ElementNode.innerHTML = '';

        letters?.forEach((letter: string) => {
            const span = document.createElement("span");
            span.innerText = letter;
            document?.querySelector("h1")?.appendChild(span);
        });
        const spans = document.querySelectorAll("h1 span");

        gsap.fromTo(spans, { opacity: 0, y: 100, color: "var(--sidebar-primary)" }, {
            opacity: 1, y: 0, color: "var(--foreground)", duration: 0.6, repeat: -1, stagger: 0.1, ease: "power4.out"
        });
    }, [locale]);
    useEffect(() => {
        const text = textRef.current;
        const social = socialRef.current;
        const imgPerfil = imgRef.current;

        gsap.fromTo(text, { opacity: 0, y: -300, scale: 0.5 }, {
            opacity: 1, y: 0, scale: 1, duration: 1
        });
        gsap.fromTo(social, { opacity: 0, y: 300, scale: 0.5 }, {
            opacity: 1, y: 0, scale: 1, duration: 1
        });
        gsap.fromTo(imgPerfil, { opacity: 0, x: -500, scale: 0.5 }, {
            opacity: 1, x: 0, scale: 1, duration: 1
        });
    }, []);
    return (
        <div className="w-full h-[80vh] flex items-center justify-between max-lg:flex-col-reverse">
            <section className="flex flex-col gap-5 max-lg:items-center">
                <div className="flex flex-col max-lg:text-center opacity-0 cursor-default" ref={textRef}>
                    <p className="text-3xl">{t('Paragraf')} 🖖,</p>
                    <h1 className="text-4xl font-bold">{t('Hfirst')}</h1>
                    <h2 className="text-4xl">{t('Hsecond')}</h2>
                </div>

                <SocialComponent socialRef={socialRef} />
            </section>

            <div className="perfilrt" ref={imgRef}>
                <Image src={ImgPerfil} alt={t('ImgAlt')} priority />
            </div>
        </div>
    );
}