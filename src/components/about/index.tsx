'use client';

import Image from 'next/image';
import ImgPerfil from '@/components/images/foto-perfilCF.png';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function AboutComponent() {
    const t = useTranslations('AboutComponent');
    const aboutRef = useRef(null);
    const titleAboutRef = useRef(null);
    const imageAboutRef = useRef(null);
    const textAboutRef = useRef(null);
    const buttonAboutRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const about = aboutRef.current;
        const titleAbout = titleAboutRef.current;
        const imageAbou = imageAboutRef.current;
        const textAbou = textAboutRef.current;
        const buttonCv = buttonAboutRef.current;

        gsap.fromTo(titleAbout, {
            opacity: 0,
            y: 200,
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: about,
                start: 'top center',
            },
        });

        gsap.fromTo(imageAbou, {
            opacity: 0,
            x: 200,
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            scrollTrigger: {
                trigger: about,
                start: 'top center',
            },
        });

        gsap.fromTo(textAbou, {
            opacity: 0,
            x: -200,
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            scrollTrigger: {
                trigger: about,
                start: 'top center',
            },
        });

        gsap.fromTo(buttonCv, {
            opacity: 0,
            y: -300,
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: about,
                start: 'top center',
            }
        });
    }, []);
    return (
        <section className="w-full min-h-[80vh] flex flex-col gap-10 cursor-default" id="about_me" ref={aboutRef}>
            <h3 className="text-center text-3xl font-bold capitalize opacity-0" ref={titleAboutRef}>{t('Hthird')}</h3>

            <div className="flex justify-between items-center gap-12 max-lg:flex-col">
                <div className="perfilrt" ref={imageAboutRef}>
                    <Image src={ImgPerfil} alt={t('ImgAlt')} />
                </div>

                <div className="max-w-2/4 max-lg:max-w-full opacity-0" ref={textAboutRef}>
                    <div className="text-xl max-lg:text-center">
                        <p><strong>{t('ParagrafOne')}</strong></p>
                        <p><strong>{t('ParagrafSecond')} 📚</strong></p>
                        <p>{t('ParagrafThree')}</p>
                        <p>{t('ParagrafFour')} 👨‍🎓.</p>
                        <p>{t('ParagrafFive')}</p>
                        <p>{t('ParagrafSix')} 😁</p>
                        <p>{t('ParagrafSeven')} 💜</p>
                    </div>
                    <div className="flex py-10 max-lg:justify-center">
                        <Link className="buttons" href={"file/cv.pdf"} target='_blank' ref={buttonAboutRef}>
                            <span>{t('LinkCv')}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}