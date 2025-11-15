'use client';

import SocialComponent from '@/components/social';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useLocale, useTranslations } from 'next-intl';

const currentYear = new Date().getFullYear();
const years = currentYear - 2002;

export default function FooterComponentClient({ logoPerfil }: { logoPerfil: string }) {
    const locale = useLocale();
    const t = useTranslations('FooterComponent');
    const footerRef = useRef<HTMLDivElement>(null);
    const socialRef = useRef<HTMLDivElement>(null);
    const msmFooterRef = useRef<HTMLHeadingElement>(null);
    const msmLeftFooterRef = useRef<HTMLDivElement>(null);
    const logoFooterRef = useRef<HTMLImageElement>(null);
    useEffect(() => {
        const h1Element = document?.querySelector("h6")?.textContent;
        const letters = h1Element?.split("");
        const h1ElementNode = document?.querySelector("h6");

        if (h1ElementNode) h1ElementNode.innerHTML = '';

        letters?.forEach((letter: string) => {
            const span = document.createElement("span");
            span.innerText = letter;
            document?.querySelector("h6")?.appendChild(span);
        });

        const spans = document.querySelectorAll("h6 span");
        gsap.fromTo(spans, { opacity: 0, y: 100, color: "var(--sidebar-primary)" }, {
            opacity: 1, y: 0, color: "var(--foreground)", duration: 0.6, repeat: -1, stagger: 0.1, ease: "power4.out"
        });
    }, [locale]);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const footer = footerRef.current;
        const textCenter = msmFooterRef.current;
        const social = socialRef.current;
        const textLeft = msmLeftFooterRef.current;
        const logo = logoFooterRef.current;

        gsap.fromTo(textLeft, { opacity: 0, x: -500, scale: 0.5 }, {
            opacity: 1, x: 0, scale: 1, duration: 1, scrollTrigger: { trigger: footer, start: '87% center' }
        });
        gsap.fromTo(textCenter, { opacity: 0, y: -300, scale: 0.5 }, {
            opacity: 1, y: 0, scale: 1, duration: 1
        });
        gsap.fromTo(social, { opacity: 0, x: -500, scale: 0.5 }, {
            opacity: 1, x: 0, scale: 1, duration: 1, delay: 0.5, scrollTrigger: { trigger: footer, start: '87% center' }
        });
        gsap.fromTo(logo, { opacity: 0, x: -500, scale: 0.5 }, {
            opacity: 1, x: 0, scale: 1, duration: 1, delay: 1, scrollTrigger: { trigger: footer, start: '87% center' }
        });
    }, []);
    return (
        <footer className="w-full flex justify-between items-center gap-5 pt-5 pb-2.5 max-sm:flex-col-reverse">
            <div className="flex flex-col opacity-0" ref={msmLeftFooterRef}>
                <p>{t('ParagrafOneFirst')} <strong>{years}</strong> {t('ParagrafOneSecond')}</p>
                <p>{t('ParagrafSecond')}</p>
            </div>

            <div className="text-center">
                <h6
                    className="pb-2.5 opacity-0"
                    ref={msmFooterRef}>
                    {t('Hsexth')}
                </h6>
                <SocialComponent socialRef={socialRef} />
            </div>

            <Image
                className="size-24 opacity-0"
                src={logoPerfil}
                alt='Logo BetoFoxNet'
                width={512}
                height={512}
                ref={logoFooterRef}
                priority
            />
        </footer>
    );
}