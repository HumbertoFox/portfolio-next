'use client';

import { Css3Original, DockerOriginal, ExpressOriginal, GithubOriginal, GitOriginal, Html5Original, JavascriptOriginal, LaravelOriginal, MariadbOriginal, NextjsOriginal, PhpOriginal, PostgresqlOriginal, PrismaOriginal, ReactOriginal, VitejsOriginal } from 'devicons-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Skill } from '@/types';

const skillsData = [
    { icon: <Html5Original size='100' />, name: 'HTML5', description: 'HTML é a base fundamental para a criação de páginas web. Ele fornece a estrutura, a semântica e os elementos necessários para apresentar informações de forma organizada e acessível na web, além de permitir a criação de links e a incorporação de mídia. É uma linguagem essencial para qualquer desenvolvedor web!' },
    { icon: <Css3Original size='100' />, name: 'CSS3', description: 'CSS é essencial para controlar o estilo e o design de páginas web, tornando possível criar layouts atraentes, responsivos e consistentes. Ele desempenha um papel fundamental na apresentação visual de conteúdo na web e é uma ferramenta essencial para desenvolvedores web e designers!' },
    { icon: <JavascriptOriginal size='100' />, name: 'JavaScript', description: 'JavaScript é uma linguagem versátil que desempenha um papel fundamental no desenvolvimento web, aplicativos móveis e em uma variedade de outras aplicações. É uma das linguagens mais amplamente usadas no mundo da programação devido à sua flexibilidade e capacidade de criar experiências interativas na web!' },
    { icon: <GithubOriginal size='100' />, name: 'GitHub', description: 'GitHub é uma plataforma essencial para desenvolvedores de software e equipes de desenvolvimento, pois facilita o controle de versão, a colaboração, o compartilhamento de código e a gestão de projetos, contribuindo para a eficiência e a qualidade do desenvolvimento de software!' },
    { icon: <GitOriginal size='100' />, name: 'Git', description: 'Git é uma ferramenta fundamental no desenvolvimento de software, fornecendo controle de versão, colaboração em equipe, rastreamento de alterações e muitos outros recursos que tornam o desenvolvimento de software mais eficiente, seguro e colaborativo. É uma ferramenta essencial para desenvolvedores e equipes de desenvolvimento de software!' },
    { icon: <ReactOriginal size='100' />, name: 'React', description: 'React é uma biblioteca JavaScript desenvolvida pelo Facebook. É usada para construir interfaces de usuário (UI) interativas e reativas para aplicações web. O principal objetivo do React é facilitar a criação de componentes reutilizáveis e construir interfaces de usuário escaláveis. Além disso, o React introduz um paradigma de programação chamado de programação declarativa!' },
    { icon: <VitejsOriginal size='100' />, name: 'Vite.Js', description: 'Vite é uma ferramenta de construção e desenvolvimento para aplicações web, criada por Evan You, o criador do Vue.js. Ele se destaca por sua velocidade e eficiência, utilizando uma abordagem moderna para o desenvolvimento de projetos. Aqui estão algumas características principais do Vite: 1. **Desenvolvimento Rápido**, 2. **Construção Otimizada**, 3. **Suporte a Múltiplos Frameworks** 4. **Configuração Simples**, 5. **Plugins** Se você estiver pensando em usar Vite em seu próximo projeto seria uma ótima opção!' },
    { icon: <NextjsOriginal size='100' />, name: 'Next.Js', description: 'Next.js é um framework React desenvolvido pela Vercel que facilita a criação de aplicações web. Ele é conhecido por oferecer uma série de recursos que melhoram a experiência de desenvolvimento e o desempenho das aplicações. Aqui estão algumas das principais características do Next.js: 1. **Renderização Híbrida**, 2. **Geração de Sites Estáticos (SSG)**, 3. **Rotas Automáticas**, 4. **API Routes** 5. **Suporte a CSS e Sass**, 6. **Otimização de Imagens**, 7. **Desempenho e SEO**, 8. **Suporte a TypeScript** 9. **Ambiente de Desenvolvimento**, Essas características fazem do Next.js uma escolha popular para desenvolvedores que querem criar aplicações React de forma rápida e eficiente!' },
    { icon: <PostgresqlOriginal size='100' />, name: 'PostgreSql', description: 'PostgreSQL é um sistema de gerenciamento de banco de dados relacional de código aberto e altamente avançado. Ele é conhecido por sua robustez, escalabilidade e suporte a recursos avançados. Aqui estão algumas das principais características do PostgreSQL: Open Source, Compatibilidade com SQL, Extensibilidade, Suporte a ACID, Suporte a tipos de dados avançados, Procedimentos armazenados e funções, Indexação avançada, Replicação e alta disponibilidade, Comunidade ativa, Devido a essas características, o PostgreSQL é uma escolha popular para muitas aplicações, desde pequenas startups até grandes corporações!' },
    { icon: <MariadbOriginal size='100' />, name: 'MariaDB', description: 'MariaDB é um sistema de gerenciamento de banco de dados relacional (RDBMS) que é um fork do MySQL, criado por alguns dos desenvolvedores originais do MySQL após a aquisição deste último pela Oracle. MariaDB é popular por ser uma alternativa de código aberto ao MySQL e oferece uma série de recursos e melhorias. Aqui estão algumas das características principais do MariaDB: 1. **Código Aberto**, 2. **Compatibilidade com MySQL**, 3. **Desempenho Aprimorado**, 4. **Recursos Avançados**, 5. **Segurança**, 6. **Replicação e Escalabilidade**, 7. **Comunidade Ativa**, 8. **Interface de Linha de Comando**, 9. **Interface Gráfica**!' },
    { icon: <PhpOriginal size='100' />, name: 'PHP', description: 'PHP (Hypertext Preprocessor) é uma linguagem de programação amplamente utilizada para desenvolvimento web, especialmente para a criação de sites dinâmicos e aplicações web. Aqui estão algumas características e informações importantes sobre o PHP: 1. **Linguagem de Script do Lado do Servidor**, 2. **Facilidade de Aprendizado**, 3. **Integração com Bancos de Dados** 4. **Ampla Comunidade e Suporte**, 5. **Frameworks Populares**, 6. **Funcionalidades de Segurança**, 7. **Compatibilidade com HTML**, 8. **Hospedagem Acessível**, 9. **Suporte a Programação Orientada a Objetos**!' },
    { icon: <LaravelOriginal size='100' />, name: 'Laravel', description: 'Laravel é um framework de desenvolvimento web em PHP que se destaca pela sua elegância e simplicidade. Criado por Taylor Otwell em 2011, o Laravel foi projetado para facilitar o desenvolvimento de aplicações web, oferecendo uma série de recursos e ferramentas que ajudam a acelerar o processo de codificação. Algumas das características principais do Laravel incluem: 1. **Arquitetura MVC**, 2. **Roteamento Simples**,  3. **ORM Eloquent**, 4. **Sistema de Migrations**, 5. **Segurança**, 6. **Artisan**, 7. **Comunitária e Ecosystem**!' },
    { icon: <ExpressOriginal size='100' />, name: 'Express', description: 'Express é um framework web para Node.js que facilita a criação de servidores e aplicações web. Ele é conhecido por sua simplicidade, flexibilidade e performance. Aqui estão alguns dos principais aspectos do Express: 1. **Minimalista e Flexível**, 2. **Middleware**, 3. **Roteamento**, 4. **Tratamento de Erros**, 5. **Suporte a View Engines**, 6. **Desempenho**, 7. **Comunidade e Ecossistema**, 8. **Documentação e Recursos**, Express é amplamente utilizado em aplicações Node.js, desde APIs simples até aplicações web complexas. Sua popularidade e flexibilidade o tornam uma escolha comum para desenvolvedores que buscam um framework leve e eficiente para construir aplicações de servidor!' },
    { icon: <PrismaOriginal size='100' />, name: 'Prisma', description: 'Prisma é uma ferramenta de ORM (Object-Relational Mapping) moderna e poderosa para Node.js e TypeScript, que facilita a interação com bancos de dados relacionais. Ele ajuda a mapear dados entre o banco de dados e a aplicação de forma mais intuitiva e segura. Aqui estão algumas das principais características e funcionalidades do Prisma: 1. **Cliente Prisma**, 2. **Prisma Migrate**, 3. **Prisma Studio**, 4. **Modelo de Dados Declarativo**, 5. **Suporte a Diversos Bancos de Dados**, 6. **Segurança e Validação**, 7. **Desempenho**, 8. **Integração com Ecosistema JavaScript/TypeScript**, 9. **Comunidade e Suporte**, No geral, o Prisma é uma ferramenta que visa simplificar e melhorar a experiência de desenvolvimento ao trabalhar com bancos de dados, oferecendo uma maneira moderna e eficiente de lidar com dados em aplicações Node.js e TypeScript!' },
    { icon: <DockerOriginal size='100' />, name: 'Docker', description: 'Docker é uma plataforma que permite criar, implantar e gerenciar aplicativos em contêineres. Um contêiner é uma unidade leve e portátil que encapsula tudo o que um aplicativo precisa para rodar, incluindo código, bibliotecas e dependências. Isso garante que o aplicativo funcione de maneira consistente em diferentes ambientes, desde o desenvolvimento até a produção. 1. **Isolamento**, 2. **Portabilidade**, 3. **Eficiência**, 4. **Facilidade de uso**, 5. **Escalabilidade**!' },
];

export default function SkillsComponent() {
    const [visibleSkills, setVisibleSkills] = useState<number>(6);
    const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
    const [detailsVisible, setDetailsVisible] = useState(false);
    const skillsRef = useRef(null);
    const titleSkillsRef = useRef(null);
    const leftSkillsRef = useRef(null);
    const centerSkillsRef = useRef(null);
    const skillsListRef = useRef<(HTMLButtonElement | null)[]>([]);

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
        <section className="w-full h-screen flex flex-col gap-10 cursor-default" id="skills" ref={skillsRef}>
            <h4 className="text-center text-3xl font-bold capitalize opacity-0" ref={titleSkillsRef}>habilidades</h4>

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
                    <button className="buttons" type="button" ref={centerSkillsRef} onClick={loadMoreSkills}>
                        <span>Carregar mais</span>
                    </button>
                </div>
            )}

            {detailsVisible && (
                <AlertDialog open={detailsVisible} onOpenChange={setDetailsVisible}>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle className="flex flex-col items-center justify-center gap-5">
                                {selectedSkill?.icon}
                                {selectedSkill?.name}
                            </AlertDialogTitle>
                            <AlertDialogDescription className="text-md text-center">
                                {selectedSkill?.description}
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Fechar</AlertDialogCancel>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            )}
        </section>
    );
}