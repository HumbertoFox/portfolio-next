'use client';

import Image from 'next/image';
import ImgPerfil from '@/components/images/foto-perfilCF.png';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

export default function AboutComponent() {
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
        <section className="w-full h-[80vh] flex flex-col gap-10 cursor-default" id="about_me" ref={aboutRef}>
            <h3 className="text-center text-3xl font-bold capitalize opacity-0" ref={titleAboutRef}>sobre mim</h3>

            <div className="flex justify-between items-center gap-12 ">
                <div className="perfilrt" ref={imageAboutRef}>
                    <Image src={ImgPerfil} alt="Imagem Perfil" />
                </div>

                <div className="max-w-2/4 opacity-0" ref={textAboutRef}>
                    <p className="text-xl">
                        <strong>Olá!<br />
                            Me chamo Humberto Ribeiro e sou um desenvolvedor
                            Full-Stack em formação! 📚</strong><br />
                        Gosto MUITO da área de tecnologia, e tenho certeza que posso
                        contribuir em qualquer time com as minhas habilidades.
                    </p>
                    <p className="text-xl">
                        Sou técnico em Informática desde 2002 em Telecomunicações em 2016
                        e Desenvolvimento de Sistema em sistema Web 2021 👨‍🎓.<br />
                        Estou sempre me desafiando com novos projetos e participando
                        de comunidades de programação para buscar feedback de outros
                        desenvolvedoras e desenvolvedores.
                        Além de tentar ajudar essas pessoas com o que eu já aprendi. 😁<br />
                        Ah, gosto de jogos, filmes, séries, animes e outras nerdices. 💜
                    </p>

                    <div className="flex py-10">
                        <Link className="buttons" href={"file/cv.pdf"} target='_blank' ref={buttonAboutRef}>
                            <span>Veja meu CV</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}