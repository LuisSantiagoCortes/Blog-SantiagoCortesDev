import {
  frontend,
  backend,
  ux,
  prototyping,
  Cloudformation,
  // typescript,
  devops,
  linux,
  sqlserver,
  mongodb,
  python,
  AWS,
  git,
  server,
  docker,
  // postgresql,
  // rubyrails,
  jira,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  companilogo,
  // dcc,
  // kelhel,
  // microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'Acerca de mi',
  },
  {
    id: 'projects',
    title: 'Proyectos',
  },
  {
    id: 'contact',
    title: 'Contacto',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'devops',
    icon: devops,
  },
  {
    name: 'linux',
    icon: linux,
  },
  {
    name: 'Cloudformation',
    icon: Cloudformation,
  },
  // {
  //   name: 'TypeScript',
  //   icon: typescript,
  // },
  {
    name: 'sqlserver',
    icon: sqlserver,
  },
  {
    name: 'mongodb',
    icon: mongodb,
  },
  {
    name: 'python',
    icon: python,
  },
  {
    name: 'AWS',
    icon: AWS,
  },
  // {
  //   name: 'Rails',
  //   icon: rubyrails,
  // },
  {
    name: 'jira',
    icon: jira,
  },
  // {
  //   name: 'postgresql',
  //   icon: postgresql,
  // },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'server',
    icon: server,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Consultor Junior',
    company_name: 'SGV Software',
    icon: companilogo,
    iconBg: '#333333',
    date: 'Jul 2021 - Abr 2023',
  },
  {
    title: 'Ingeniero Mecatronico',
    company_name: 'Trabajador Independiente',
    icon: companilogo,
    iconBg: '#333333',
    date: 'Ene 2020 - Jun 2021',
  },
  {
    title: 'Estudiante en prácticas de ingeniería',
    company_name: 'BuenCafe liofilizado de Colombia',
    icon: companilogo,
    iconBg: '#333333',
    date: 'Ene 2019 - Jun 2019',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'KomiKult',
    description: 'A comic characters list app that displays Marvel characters.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    // image: komikult,
    // repo: 'https://github.com/shaqdeff/KomiKult',
    // demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'Leaderboard',
    description:
      'A leaderboard list app that displays scores submitted by different players.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    // image: leaderboard,
    // repo: 'https://github.com/shaqdeff/Leaderboard',
    // demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Math Magicians',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    // image: math,
    // repo: 'https://github.com/shaqdeff/Math-Magicians',
    // demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Movie Metro',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    demo: '/index_copy.html',
    // image: movie,
    // repo: 'https://github.com/shaqdeff/Movie-Metro',
    // demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Nyeusi Fest Site',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    // image: nyeusi,
    // repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    // demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };
