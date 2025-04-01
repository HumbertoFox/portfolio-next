import { JSX } from 'react';

export interface Skill {
    icon: JSX.Element;
    name: string;
    description: string;
};

export interface ProjectsProps {
    id: string;
    github: string;
    live: string;
    description: string;
    title: string;
    bgfr: string;
    bgba: string;
};