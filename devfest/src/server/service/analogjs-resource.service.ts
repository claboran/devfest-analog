import { TResource } from "../../shared/resource.model";

const analogJSResources: TResource[] = [
  {
    headline: 'Analog Project Page',
    description: 'Analog Project Page, the main resource of the project',
    link: 'https://analogjs.org/',
    tags: ['AnalogJS', 'Documentation', 'Angular meta framework'],
    image: '/assets/analog-logo.svg',
    order: 0,
  },
  {
    headline: 'Analog GitHub',
    description: 'Analog GitHub repository',
    link: 'https://github.com/analogjs/analog',
    tags: ['AnalogJS', 'GitHub', 'Angular meta framework'],
    image: '/assets/analog-logo.svg',
    order: 1,
  },
  {
    headline: 'Nitro Project Page',
    description: 'Nitro Next Generation Server Toolkit, the driver behind Analogs server side',
    link: 'https://nitro.unjs.io/',
    tags: ['Nitro', 'Documentation', 'Next Generation Server Toolkit'],
    image: '/assets/nitro-logo.png',
    order: 2,
  },
  {
    headline: 'Learn with Jason - Full-stack Angular with AnalogJS',
    description: 'Nearly 90 minutes full of insights from Brandon Roberts the AnalogJS creator, building a full-stack Angular app with AnalogJS',
    link: 'https://www.youtube.com/live/VSCXOTCJpiI?si=ImT5pAxhuyOTxbyw',
    tags: ['AnalogJS', 'Documentation', 'Angular meta framework'],
    image: '/assets/learn-with-jason.jpg',
    order: 3,
  },
  {
    headline: 'Spartan.ng Cutting edge tools powering Angular Full-stack development',
    description: 'Cutting edge tools powering Angular Full-stack development allowing you to build next-level, full-stack applications with AnalogJs',
    link: 'https://www.spartan.ng/',
    tags: ['Spartan.ng', 'AnalogJS', 'Documentation', 'Tools + Framework'],
    image: '/assets/spartan-logo.svg',
    order: 4,
  },
];

export const fetchAnalogJSResources = (): TResource[] => [...analogJSResources];
