import { Terminal, Code, Cpu, Layout, Code2, Database, Github, Linkedin, Twitter } from 'lucide-react';

export const portfolioData = {
    // --- HOME PAGE DATA ---
    home: {
        badgeText: "Computer Engineering Student",
        titlePrefix: "Hi, I'm a",
        titleHighlight: "Developer",
        titleSuffix: "& Tech Enthusiast",
        description: "I specialize in building exceptional digital experiences. Currently exploring web technologies, algorithms, and software architecture.",
        techIcons: [
            { id: 1, icon: <Terminal size={48} />, colorClass: "var(--accent-1)" },
            { id: 2, icon: <Code size={48} />, colorClass: "var(--accent-2)", transform: "translateY(-20px)" },
            { id: 3, icon: <Cpu size={48} />, colorClass: "var(--accent-3)" }
        ]
    },

    // --- ABOUT PAGE DATA ---
    about: {
        title: "About Me",
        descriptions: [
            "I am a passionate Computer Science student dedicated to creating impactful digital solutions. My journey in tech started with a simple curiosity about how things work on the internet, which quickly evolved into a deep love for software engineering.",
            "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or participating in hackathons to challenge my problem-solving skills."
        ],
        education: {
            degree: "B.E. Computer Engineering",
            school: "Marathwada Mitra Mandal's Institute of Technology, Pune",
            year: "Expected 2029"
        },
        achievements: [
            {
                title: "Hackathon Winner",
                event: "Global Tech Summit 2024",
                detail: "1st Place"
            }
        ],
        skills: [
            { category: 'Data/AI', items: ['Data Analysis (Python)', 'Machine Learning (Basics)'] },
            { category: 'Languages', items: ['Python (Basics)', 'C (Basics)'] },
            { category: 'Frontend', items: ['HTML', 'CSS'] },
            { category: 'Backend', items: [] },
            { category: 'Tools', items: ['Tableau', 'VS Code', 'GitHub'] },
            { category: 'Currently Learning', items: ['Data Structure & Algorithms', 'Backend Development']}
        ]
    },

    // --- PROJECTS PAGE DATA ---
    projects: {
        title: "My Projects",
        subtitle: "Here are some of the practical applications I've built to apply my computer science knowledge.",
        list: [
            {
                title: 'E-Commerce Platform',
                description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features secure payment integration, user authentication, and admin dashboard.',
                tags: ['React', 'Node.js', 'MongoDB', 'Express'],
                icon: <Layout size={32} className="text-gradient" />,
                github: 'https://github.com',
                demo: 'https://demo.com',
                color: 'var(--accent-1)'
            },
            {
                title: 'AI Image Generator',
                description: 'Web application leveraging OpenAI API to generate and edit images based on user prompts. Built with Next.js and Tailwind CSS.',
                tags: ['Next.js', 'OpenAI API', 'Tailwind CSS'],
                icon: <Code2 size={32} className="text-gradient" />,
                github: 'https://github.com',
                demo: 'https://demo.com',
                color: 'var(--accent-2)'
            },
            {
                title: 'Student Management System',
                description: 'Comprehensive database management system for schools to track student records, attendance, and grades utilizing Python and SQL.',
                tags: ['Python', 'SQL', 'PyQt5'],
                icon: <Database size={32} className="text-gradient" />,
                github: 'https://github.com',
                demo: 'https://demo.com',
                color: 'var(--accent-3)'
            },
            {
                title: 'Real-time Chat App',
                description: 'Socket.io powered chat application with private messaging, rooms, and file sharing capabilities.',
                tags: ['Vue.js', 'Socket.io', 'Express'],
                icon: <Layout size={32} className="text-gradient" />,
                github: 'https://github.com',
                demo: 'https://demo.com',
                color: 'var(--accent-1)'
            }
        ]
    },

    // --- CONTACT PAGE DATA ---
    contact: {
        title: "Let's Connect",
        subtitle: "I'm currently open for internship opportunities and freelance projects. Feel free to reach out to me!",
        email: "bhagyeshsmore28@gmail.com",
        phone: "+91 94213 41625",
        location: "Pune, India",
        socials: [
            { name: "Github", icon: <Github size={24} />, url: "https://github.com" },
            { name: "LinkedIn", icon: <Linkedin size={24} />, url: "https://linkedin.com" },
            { name: "Twitter", icon: <Twitter size={24} />, url: "https://twitter.com" }
        ]
    }
};
