import {
  AboutSectionType,
  ContactSectionType,
  ExperienceSectionType,
  FooterSectionType,
  HeroSectionType,
  NavbarSectionType,
  ProjectsSectionType,
  SkillsSectionType,
  SocialSectionType,
} from '../types/sections';
import { StringKeyValueType } from '../types';
import { resumeFileName } from './config';
import { getId } from './helper';

/*
 * =========================
 * AUTHOR INFO
 * =========================
 */

export const socialLinks: StringKeyValueType = {
  
  twitter: 'https://x.com/vishal_shrmaa',
  github: 'https://github.com/vsvishalsharma',
  linkedin: 'https://www.linkedin.com/in/vsvishalsharma777/',
};

export const author = {
  name: 'Vishal Sharma',
  email: 'vsvishalsharma777@gmail.com',
};

export const seoData = {
  title: 'Vishal Sharma | Full-Stack Developer',
  description:
    'Vishal Sharma is a full-stack developer who specializes in building (and occasionally designing) exceptional visual interfaces.',
  author: author.name,
  image:
    'https://user-images.githubusercontent.com/85820227/231264058-df236c47-a8d2-4077-9fa6-3577aa18e8ca.png',
  url: '',
  keywords: [
    'Gaurav',
    'Vishal Sharma',
    '@Vishal Sharma',
    'Vishal Sharma',
    'Portfolio',
    'Vishal Portfolio ',
    'Vishal Sharma Portfolio',
  ],
};

/*
 * =========================
 * SECTIONS
 * =========================
 */

// Navbar Section

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'about', url: '/#about' },
    { name: 'skills', url: '/#skills' },
    { name: 'experience', url: '/#experience' },
    { name: 'projects', url: '/#projects' },
    { name: 'contact', url: '/#contact' },
  ],
  cta: {
    title: 'resume',
    url: `/${resumeFileName}`,
  },
};

// * Hero Section

export const heroSection: HeroSectionType = {
  subtitle: "Hello fren 👋, I'm ",
  title: 'Vishal Sharma.',
  tagline: 'I create visually appealing interfaces on the web',
  description:
    "I'm a passionate Fullstack Web Developer having an experience of creating web applications using ReactJS & NextJS. ",
  

  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};

// * About Section

export const aboutSection: AboutSectionType = {
  title: 'about me',
  list: {
    title: 'Here are a few technologies I’ve been working with recently:',
    items: [
      'Next.js',
      'React.js',
      'TailwindCSS',
      'NestJS',
      'Go',
      'Node.js',
    ],
  },
  img: '/profile_img.jpeg',
};

// * Skills Section

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'full stack development',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building responsive static websites using Next.js',
        'Building responsive Single Page Apps in React.js',
        'Building RESTful APIs in Express',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'HTML5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS3', icon: 'vscode-icons:file-type-css' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        {
          name: 'typeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'node.js', icon: 'logos:nodejs-icon' },
        { name: 'react.js', icon: 'logos:react' },
        { name: 'next.js', icon: 'logos:nextjs-icon' },
        { name: 'tailwind CSS', icon: 'logos:tailwindcss-icon' },
        { name: 'redux', icon: 'logos:redux' },
        { name: 'database', icon: 'vscode-icons:file-type-sql' },
      ],
    },
    {
      id: getId(),
      title: 'API development',
      lottie: {
        light: '/lotties/ethereum.json',
        dark: '/lotties/ethereum-dark.json',
      },
      points: [
        'Experience in developing API using NestJs and Go',
        'Developed Trust Registry API for authorising Issuer and verifier in Verfiable credentials Ecosystem'
      ],
      softwareSkills: [
        { name: 'go', icon: 'logos:go' },
        { name: 'nestjs', icon: 'logos:nestjs' },
        { name: 'postgresql', icon: 'logos:postgresql' },
        { name: 'prisma', icon: 'logos:prisma' },

      ],
    },
  ],
};

// * Experience Section

export const experienceSection: ExperienceSectionType = {
  title: "My experience and volunteering",
  experiences: [
    {
      company: 'Credebl',
      companyUrl: 'https://credebl.id/',
      role: 'Software Developer Intern',
      started: 'June 2024',
      upto: 'Present',
      tasks: [
        "Contributed to the development of secure and verifiable digital identity solutions, playing a key role in enhancing the          Trust Registry system. Collaborated with a cross-functional team to implement robust API features using NestJS and               TypeScript, ensuring high security standards.",
        "Worked on full-stack web applications, integrating digital identity verification systems for clients in the public sector,       which led to improved transparency and trust in digital interactions. Implemented Prisma and PostgreSQL to optimize              database performance and ensure data integrity.",
        "Engaged with stakeholders to gather detailed project requirements and transformed them into technical tasks, ensuring            project deliverables aligned with organizational goals."
      ],

    },
    {
      company: 'C4GT IIITN Club',
      companyUrl: 'https://codeforgovtech.in/',
      role: 'C4GT Club Member',
      started: 'January 2023',
      upto: 'March 2023',
      tasks: [
        "Selected as a member of the C4GT IIITN Club, participating in initiatives focused on open-source contributions and             government tech solutions.",
        "Engaged in a 5-week program under the mentorship of industry professionals, gaining hands-on experience in open-source         development and contributing to real-world projects.",
        "Acquired skills in setting up development environments, understanding the basics of blockchain, ZK proofs, and writing         smart contracts using Cairo.",
        "Contributed to club activities and earned recognition through exclusive certificates and C4GT swag as proof of completion."
      ],
    },

   
    // {
    //   company: '',
    //   companyUrl: '',
    //   role: '',
    //   started: '',
    //   upto: '',
    //   tasks: [

    //   ],
    // },
  ],
};

// * Projects Section

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: "Chrysalis",
      url: "https://chrysalis-three.vercel.app/",
      repo: "https://github.com/vsvishalsharma/chrysalis",
      img: "/chrysalis.png",
      year: 2024,
      tags: ["NextJS", "GenAI", "Shadcn","Websocket","Firebase", "Prisma"],
    },
    {
      id: getId(),
      name: 'SmartPrep',
      url: 'https://smartprep-coral.vercel.app/',
      repo: 'https://github.com/vsvishalsharma/smartprep',
      img: '/smartprep1.png',
      year: 2024,
      tags: ['Nextjs', "GenAI","WebCam","Postgres", 'Stripe Payment Gateway'],
    },
    {
      id: getId(),
      name: 'Merged PR at BharatShAIyak',
      url: 'https://github.com/BharatSahAIyak/kg-markdown-enhancer/pull/11',
      repo: 'https://github.com/BharatSahAIyak/kg-markdown-enhancer/pull/11',
      img: '/bshaiyak.png',
      year: 2023,
      tags: ['React',"Neo4j",'MongoDB'],
    },
    {
      id: getId(),
      name: 'Whatsapp end-to-end',
      url: 'https://github.com/vsvishalsharma/Whatsapp_end_to_end',
      repo: 'https://github.com/vsvishalsharma/Whatsapp_end_to_end',
      img: '/whatsapp.png',
      year: 2023,
      tags: ["React","TypeScript","Firebase","Node.js","Express"],
    },
    {
      id: getId(),
      name: 'Dalle clone',
      url: 'https://github.com/vsvishalsharma/DALLE-Clone',
      repo: 'https://github.com/vsvishalsharma/DALLE-Clone',
      img: '/Dalle.png',
      year: 2023,
      tags: ["React","TypeScript","MongoDB","Node.js","Express"],
    },
    {
      id: getId(),
      name: 'HCX-NPM package',
      url: 'https://www.npmjs.com/package/hcx-ui-prototype',
      repo: 'https://github.com/vsvishalsharma/HCX-Ui-npm-Prototype',
      img: '/npm.png',
      year: 2023,
      tags: ["Only protoype availabe for display"],
    },
  ],
};

// * Contact Section

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "what's next",
  paragraphs: [
    "I'm currently looking for a remote job or any new opportunities.",
    'Whether you have a project to discuss or just want to say hi, my inbox is open for all!',
  ],
  link: `mailto:${author.email}`,
};

// Social Links Section

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: 'tabler:brand-github',
      url: socialLinks.github,
    },
    {
      icon: 'lucide:twitter',
      url: socialLinks.twitter,
    },
    {
      icon: 'lucide:linkedin',
      url: socialLinks.linkedin,
    },
  ],
};

// Footer Section

export const footerSection: FooterSectionType = {
  title: 'Design Inspiration @Brittany Chiang',
  link: 'https://github.com/bchiang7',
};
