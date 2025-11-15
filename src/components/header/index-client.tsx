'use client';

import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { FaLightbulb } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import { useTranslations } from 'next-intl';
import LanguageToggleComponent from '@/components/languages';

export default function HeaderComponentClient({ logoPerfil }: { logoPerfil: string }) {
    const t = useTranslations('HeaderComponent');
    const logoRef = useRef<HTMLAnchorElement>(null);
    const switchRef = useRef<HTMLDivElement>(null);
    const navAboutRef = useRef<HTMLAnchorElement>(null);
    const navSkillsRef = useRef<HTMLAnchorElement>(null);
    const navProjectsRef = useRef<HTMLAnchorElement>(null);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    const handleSwitchChange = (checked: boolean) => setTheme(checked ? 'dark' : 'light');

    useEffect(() => setMounted(true), []);
    useEffect(() => {
        const logo = logoRef.current;
        const switchtoggle = switchRef.current;
        const about = navAboutRef.current;
        const skills = navSkillsRef.current;
        const projects = navProjectsRef.current;

        gsap.fromTo(logo, {
            opacity: 0,
            x: 300
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power1.in'
        });

        gsap.fromTo(switchtoggle, {
            opacity: 0,
            x: -300
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
            <Link
                className="logo"
                ref={logoRef}
                href="/"
            >
                <Image
                    src={logoPerfil}
                    alt='Logo BetoFoxNet'
                    width={512}
                    height={512}
                    priority
                />
            </Link>
            <div className="flex flex-col items-end gap-4">
                <div className="flex gap-2 opacity-0" ref={switchRef}>
                    <LanguageToggleComponent />
                    {mounted && (
                        <Switch
                            className="cursor-pointer"
                            checked={theme === 'dark'}
                            onCheckedChange={handleSwitchChange}
                            title={theme === 'dark' ? t('SwitchTitleDark') : t('SwitchTitleLight')}
                        />
                    )}
                    <FaLightbulb />
                </div>

                <nav className="flex gap-2 max-sm:hidden">
                    <Link
                        className="buttons"
                        title={t('ButtonTitleOne')}
                        ref={navAboutRef}
                        href="#about_me"
                    >
                        <span>{t('ButtonOne')}</span>
                    </Link>
                    <Link
                        className="buttons"
                        title={t('ButtonTitleTwo')}
                        ref={navSkillsRef}
                        href="#skills"
                    >
                        <span>{t('ButtonTwo')}</span>
                    </Link>
                    <Link
                        className="buttons"
                        title={t('ButtonTitleThree')}
                        ref={navProjectsRef}
                        href="#projects"
                    >
                        <span>{t('ButtonThree')}</span>
                    </Link>
                </nav>
            </div>
        </header>
    );
}