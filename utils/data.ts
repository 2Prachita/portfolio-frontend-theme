import React from "react";
import { FaReact } from "react-icons/fa";

export const links = [
    {
        name: 'Home',
        hash: '#home'
    },
    {
        name: 'About',
        hash: '#about'
    },
    {
        name: 'Projects',
        hash: '#projects'
    },
    {
        name: 'Skills',
        hash: '#skills'
    },
    {
        name: 'Experience',
        hash: '#experience'
    },
    {
        name: 'Contact',
        hash: '#contact'
    },
] as const;

export const experienceData = [
    {
        title: 'Software Developer Intern',
        company: 'Bizsense Solution Pvt Ltd.',
        location: 'Nagpur, India',
        description: '',
        icon: React.createElement(FaReact),
        date: 'July 2019 - Dec 2019'
    },
    {
        title: 'Graduate Engineer Trainee (Software Developer)',
        company: 'UNext Learning Pvt Ltd.',
        location: 'Banglaore, India',
        description: '',
        icon: React.createElement(FaReact),
        date: 'Sept 2020 - Sept 2021'
    },
    {
        title: 'Brand Ambassador',
        company: 'Hollister Co',
        location: 'Bristol, UK',
        description: '',
        icon: React.createElement(FaReact),
        date: 'Feb 2022 - Apr 2022'
    },
] as const;

export const skills = [
    'Java', 
    'C', 
    'Python',
    'SQL',
    'MYSQL',
    'Git',
    'Jira',
    'HTML',
    'CSS', 
    'JavaScript',
    'React',
    'Redux',
    'Next.js',
    'Node.js',
    'Power BI', 
    'Tableau',
    'Framer Motion'
]