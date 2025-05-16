'use client';

import { AmazonwebservicesOriginalWordmark, Css3Original, DockerOriginal, ElectronOriginal, ExpressOriginal, GithubOriginal, GitOriginal, Html5Original, JavascriptOriginal, LaravelOriginal, MariadbOriginal, NextjsOriginal, PhpOriginal, PostgresqlOriginal, PrismaOriginal, ReactOriginal, TailwindcssOriginal, TypescriptOriginal, VitejsOriginal } from 'devicons-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Skill } from '@/types';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

export default function SkillsComponent() {
    const t = useTranslations('SkillsComponent');
    const [visibleSkills, setVisibleSkills] = useState<number>(6);
    const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
    const [detailsVisible, setDetailsVisible] = useState(false);
    const skillsRef = useRef(null);
    const titleSkillsRef = useRef(null);
    const leftSkillsRef = useRef(null);
    const centerSkillsRef = useRef(null);
    const skillsListRef = useRef<(HTMLButtonElement | null)[]>([]);

    const skillsData = [
        { icon: <Html5Original size='100' />, name: 'HTML5', description: t('DescriptionFirst') },
        { icon: <Css3Original size='100' />, name: 'CSS3', description: t('DescriptionSecond') },
        { icon: <JavascriptOriginal size='100' />, name: 'JavaScript', description: t('DescriptionThird') },
        { icon: <TypescriptOriginal size='100' />, name: 'TypeScript', description: t('DescriptionFourth') },
        { icon: <PhpOriginal size='100' />, name: 'PHP', description: t('DescriptionFifth') },
        { icon: <TailwindcssOriginal size='100' />, name: 'TailwindCss', description: t('DescriptionSixth') },
        { icon: <GithubOriginal size='100' />, name: 'GitHub', description: t('DescriptionSeventh') },
        { icon: <GitOriginal size='100' />, name: 'Git', description: t('DescriptionEighth') },
        { icon: <ReactOriginal size='100' />, name: 'React', description: t('DescriptionNinth') },
        { icon: <VitejsOriginal size='100' />, name: 'Vite.Js', description: t('DescriptionTenth') },
        { icon: <NextjsOriginal size='100' />, name: 'Next.Js', description: t('DescriptionEleventh') },
        { icon: <LaravelOriginal size='100' />, name: 'Laravel', description: t('DescriptionTwelfth') },
        { icon: <PostgresqlOriginal size='100' />, name: 'PostgreSql', description: t('DescriptionThirteenth') },
        { icon: <MariadbOriginal size='100' />, name: 'MariaDB', description: t('DescriptionFourteenth') },
        { icon: <PrismaOriginal size='100' />, name: 'Prisma', description: t('DescriptionFifteenth') },
        { icon: <ExpressOriginal size='100' />, name: 'Express', description: t('DescriptionSixteenth') },
        { icon: <DockerOriginal size='100' />, name: 'Docker', description: t('DescriptionSeventeenth') },
        { icon: <AmazonwebservicesOriginalWordmark size='100' />, name: 'Aws', description: t('DescriptionEighteenth') },
        { icon: < ElectronOriginal size='100' />, name: 'Electron', description: t('DescriptionNineteenth') },
    ];

    const loadMoreSkills = () => setVisibleSkills(prevVisibleSkills => prevVisibleSkills + 3);
    const handleSkillClick = (skill: Skill) => {
        setSelectedSkill(skill);
        setDetailsVisible(true);
    };

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const skills = skillsRef.current;
        const titleSkills = titleSkillsRef.current;
        const leftSkills = leftSkillsRef.current;
        const centerSkills = centerSkillsRef.current;

        gsap.fromTo(titleSkills, {
            opacity: 0,
            y: 200,
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: skills,
                start: 'top center',
            },
        });

        gsap.fromTo(leftSkills, {
            opacity: 0,
            scale: 0.5,
        }, {
            opacity: 1,
            scale: 1,
            duration: 1,
            scrollTrigger: {
                trigger: skills,
                start: 'top center',
            },
        });

        gsap.fromTo(centerSkills, {
            opacity: 0,
            y: -200,
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: skills,
                start: 'top center',
            },
        });

    }, []);
    useEffect(() => {
        if (visibleSkills > 3) {
            gsap.fromTo(skillsListRef.current.slice(-3), {
                opacity: 0,
                y: 100
            }, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.2,
            },
            );
        }
    }, [visibleSkills]);
    return (
        <section className="w-full min-h-screen flex flex-col gap-10 cursor-default" id="skills" ref={skillsRef}>
            <h4 className="text-center text-3xl font-bold capitalize opacity-0" ref={titleSkillsRef}>{t('Hfourth')}</h4>

            <div className="flex flex-wrap items-center justify-center gap-5 opacity-0" ref={leftSkillsRef}>
                {skillsData.slice(0, visibleSkills).map((skill, index) => (
                    <button
                        className="group max-w-[350px] flex flex-col items-center gap-5 py-10 px-5 cursor-pointer"
                        type="button"
                        key={index}
                        ref={(el) => { skillsListRef.current[index] = el; }}
                        onClick={() => handleSkillClick(skill)}
                    >
                        {skill.icon}
                        <span className="text-[#43bdff] text-2xl duration-300 group-hover:scale-110 group-hover:text-[var(--foreground)]">{skill.name}</span>
                        <p className="text-lg group-hover:text-[#43bdff] duration-300">{skill.description.substring(0, 66)}...</p>
                    </button>
                ))}
            </div>

            {visibleSkills < skillsData.length && (
                <div className="flex justify-center">
                    <button className="buttons cursor-pointer" type="button" ref={centerSkillsRef} onClick={loadMoreSkills}>
                        <span>{t('ButtonPlus')}</span>
                    </button>
                </div>
            )}

            {detailsVisible && (
                <Dialog open={detailsVisible} onOpenChange={setDetailsVisible}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle className="flex flex-col items-center justify-center gap-5">
                                {selectedSkill?.icon}
                                {selectedSkill?.name}
                            </DialogTitle>
                            <DialogDescription className="text-md text-center">
                                {selectedSkill?.description}
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant="ghost">
                                    {t('ButtonClose')}
                                </Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            )}
        </section>
    );
}