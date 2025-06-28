'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LogoBfn from '@/components/images/LOGOBFN.png';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { FaGithub } from 'react-icons/fa6';
import { ProjectsProps } from '@/types';
import { useTranslations } from 'next-intl';

export default function ProjectComponent() {
    const t = useTranslations('ProjectComponent');
    const projectsRef = useRef(null);
    const titleProjectsRef = useRef(null);
    const centerProjectsRef = useRef(null);

    const projects: ProjectsProps[] = [
        {
            id: 'next-starter-kit',
            github: 'https://github.com/HumbertoFox/nextjs-starter-kit',
            live: 'https://nextjs-starter-kit-betofoxnet-info-projects.vercel.app/',
            description: t('DescriptionFirst'),
            title: t('TitleFirst'),
            bgfr: '/bgs/bg_fron_0.png',
            bgba: '/bgs/bg_back_0.png'
        },
        {
            id: 'project-nextjs',
            github: 'https://github.com/HumbertoFox/nextjs-dashboard',
            live: 'https://nextjs-dashboard-betofoxnet-info-projects.vercel.app/',
            description: t('DescriptionSecond'),
            title: t('TitleSecond'),
            bgfr: '/bgs/bg_fron_0.png',
            bgba: '/bgs/bg_back_1.png'
        },
        {
            id: 'pizzaria-app',
            github: 'https://github.com/HumbertoFox/pizzaria',
            live: 'https://pizzaria-beige-seven.vercel.app/',
            description: t('DescriptionThird'),
            title: t('TitleThird'),
            bgfr: '/bgs/bg_fron_0.png',
            bgba: '/bgs/bg_back_2.png'
        },
        {
            id: 'project-bfn-mlu-next-app',
            github: 'https://github.com/HumbertoFox/bfn-mlu-next-app',
            live: 'https://bfn-mlu-next-app.vercel.app/',
            description: t('DescriptionFourth'),
            title: t('TitleFourth'),
            bgfr: '/bgs/bg_fron_0.png',
            bgba: '/bgs/bg_back_3.png'
        },
        {
            id: 'project-pokedex',
            github: 'https://github.com/HumbertoFox/exercicio-quest05',
            live: 'https://exercicio-quest05.vercel.app/',
            description: t('DescriptionFifth'),
            title: t('TitleFifth'),
            bgfr: '/bgs/bg_fron_0.png',
            bgba: '/bgs/bg_back_4.png'
        },
        {
            id: 'next-kit-starter',
            github: 'https://github.com/HumbertoFox/nextjs-kit-starter',
            live: 'https://nextjs-kit-starter-betofoxnet-info-projects.vercel.app/',
            description: t('DescriptionSixth'),
            title: t('TitleSixth'),
            bgfr: '/bgs/bg_fron_0.png',
            bgba: '/bgs/bg_back_5.png'
        },
        {
            id: 'filmes-app',
            github: 'https://github.com/HumbertoFox/films-app/',
            live: 'https://films-app-betofoxnet-info-projects.vercel.app/',
            description: t('DescriptionSeventh'),
            title: t('TitleSeventh'),
            bgfr: '/bgs/bg_fron_0.png',
            bgba: '/bgs/bg_back_6.png'
        },
        {
            id: 'cruzado-d3-app',
            github: 'https://github.com/HumbertoFox/cruzado-d3-app',
            live: 'https://cruzado-d3-app.vercel.app/',
            description: t('DescriptionEighth'),
            title: t('TitleEighth'),
            bgfr: '/bgs/bg_fron_0.png',
            bgba: '/bgs/bg_back_7.png'
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
        <section className="w-full min-h-screen flex flex-col gap-10 px-4 cursor-default" id='projects' ref={projectsRef}>
            <h5 className="text-center text-3xl font-bold capitalize opacity-0" ref={titleProjectsRef}>{t('Hfifth')}</h5>

            <div className="flex justify-around items-center flex-wrap gap-5 opacity-0" ref={centerProjectsRef}>
                {projects?.map((project, index) => (
                    <div className="flex justify-around items-center flex-wrap gap-5 projects" key={index}>
                        <div className="projectfron" style={{ backgroundImage: `url(${project.bgfr})` }}>
                            <Link className="projectlink" href={project.github} target="_blank" rel="noopener">
                                <Image src={LogoBfn} alt="Logo BetoFoxNet_Info" />
                                <span>BetoFoxNet_Info</span>
                                <div>
                                    <p>{t('ParagrafOne')} 😎</p>
                                    <p>🔗 {t('ParagrafSecond')}</p>
                                </div>
                            </Link>
                        </div>
                        <div className="projectback" style={{ backgroundImage: `url(${project.bgba})` }}>
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