'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { FaGithub } from 'react-icons/fa6';
import { ProjectsProps } from '@/types';
import { useTranslations } from 'next-intl';

export default function ProjectComponentClient({
    logoPerfil,
    imageFR,
    imagesBA
}: {
    logoPerfil: string,
    imageFR: string | null;
    imagesBA: string[];
}) {
    const t = useTranslations('ProjectComponent');
    const projectsRef = useRef<HTMLElement>(null);
    const titleProjectsRef = useRef<HTMLHeadingElement>(null);
    const centerProjectsRef = useRef<HTMLDivElement>(null);

    const projects: ProjectsProps[] = [
        {
            id: 'neninstalacoes-next',
            github: 'https://github.com/HumbertoFox/neninstalacoes',
            live: 'https://neninstalacoes.vercel.app/',
            description: t('DescriptionFirst'),
            title: t('TitleFirst'),
        },
        {
            id: 'nextjs-auth-sidebar-shadcn',
            github: 'https://github.com/HumbertoFox/nextjs-auth-sidebar-shadcn',
            live: 'https://nextjs-auth-sidebar-shadcn.vercel.app/',
            description: t('DescriptionSecond'),
            title: t('TitleSecond'),
        },
        {
            id: 'project-nextjs-dolbytec',
            github: 'https://github.com/HumbertoFox/dolbytec',
            live: 'https://dolbytec.vercel.app/',
            description: t('DescriptionThird'),
            title: t('TitleThird'),
        },
        {
            id: 'project-bfn-mlu-next-app',
            github: 'https://github.com/HumbertoFox/bfn-mlu-next-app',
            live: 'https://bfn-mlu-next-app.vercel.app/',
            description: t('DescriptionFourth'),
            title: t('TitleFourth'),
        },
        {
            id: 'project-pokedex',
            github: 'https://github.com/HumbertoFox/exercicio-quest05',
            live: 'https://exercicio-quest05.vercel.app/',
            description: t('DescriptionFifth'),
            title: t('TitleFifth'),
        },
        {
            id: 'project-aquarela-colegio-curso',
            github: 'https://github.com/HumbertoFox/aquarela-colegio-curso',
            live: 'https://aquarela-colegio-curso.vercel.app/',
            description: t('DescriptionSixth'),
            title: t('TitleSixth'),
        },
        {
            id: 'filmes-app',
            github: 'https://github.com/HumbertoFox/films-app/',
            live: 'https://films-app-betofoxnet-info-projects.vercel.app/',
            description: t('DescriptionSeventh'),
            title: t('TitleSeventh'),
        },
        {
            id: 'Projeto App Next.js Start Kits',
            github: 'https://github.com/HumbertoFox/nextjs-start-kit',
            live: 'https://nextjs-start-kit-pi.vercel.app/',
            description: t('DescriptionEighth'),
            title: t('TitleEighth'),
        },
    ];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const projects = projectsRef.current;
        const titleProjects = titleProjectsRef.current;
        const centerProjects = centerProjectsRef.current;

        gsap.fromTo(titleProjects, {
            opacity: 0,
            y: 200,
            scale: 0.5,
        }, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            scrollTrigger: {
                trigger: projects,
                start: 'top center',
            },
        });

        gsap.fromTo(centerProjects, {
            opacity: 0,
            scale: 0.5,
        }, {
            opacity: 1,
            scale: 1,
            duration: 1,
            scrollTrigger: {
                trigger: projects,
                start: 'top center',
            },
        });
    }, []);
    return (
        <section
            className="w-full min-h-screen flex flex-col gap-10 px-4 cursor-default"
            id='projects'
            ref={projectsRef}
        >
            <h5
                className="text-center text-3xl font-bold capitalize opacity-0"
                ref={titleProjectsRef}
            >
                {t('Hfifth')}
            </h5>

            <div
                className="flex justify-around items-center flex-wrap gap-5 opacity-0"
                ref={centerProjectsRef}
            >
                {projects?.map((project, index) => (
                    <div className="flex justify-around items-center flex-wrap gap-5 projects" key={index}>
                        <div className="projectfron" style={{ backgroundImage: `url(${imageFR})` }}>
                            <Link className="projectlink" href={project.github} target="_blank" rel="noopener">
                                <Image
                                    src={logoPerfil}
                                    alt="Logo BetoFoxNet_Info"
                                    width={512}
                                    height={512}
                                    priority
                                />
                                <span>BetoFoxNet_Info</span>
                                <div>
                                    <p>{t('ParagrafOne')} 😎</p>
                                    <p>🔗 {t('ParagrafSecond')}</p>
                                </div>
                            </Link>
                        </div>
                        <div className="projectback" style={{ backgroundImage: `url(${imagesBA[index]})` }}>
                            <Link className="projectlink" href={project.live} target="_blank" rel="noopener">
                                <FaGithub />
                                <span>{project.title}</span>
                                <div>
                                    <p>{project.description}</p>
                                    <p>🔗 {t('ParagrafFour')}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}