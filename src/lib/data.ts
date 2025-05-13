import type { Project } from './types';

export const projects: Project[] = [
  {

    id: '1',
    title: 'AI Image Explainability',
    description: 'Built an AI that spots fake images and explains why — even in blurry 32×32 pixels. Combined smart CNNs with a vision-language model to detect artifacts and reveal the truth behind AI-generated visuals.',
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    imageHint: 'AI',
    liveLink: '#',
    githubLink: 'https://github.com/madhavkataria1010/AI-Image-Explainability',
    tags: ['VLMs', 'GANs', 'KANs', 'VAEs', 'LoRA', 'Knowledge Distillation', 'Diffusion Models'],
  },
  // {
  //   id: '2',
  //   title: 'Task Management App',
  //   description: 'A collaborative task management application designed for teams, featuring real-time updates and a clean, intuitive interface.',
  //   imageUrl: 'https://picsum.photos/seed/project2/600/400',
  //   imageHint: 'team tasks',
  //   liveLink: '#',
  //   githubLink: '#',
  //   tags: ['React', 'Firebase', 'Material UI'],
  // },
  // {
  //   id: '3',
  //   title: 'Portfolio Website CMS',
  //   description: 'A custom content management system for photographers to showcase their work, built with a focus on image optimization and ease of use.',
  //   imageUrl: 'https://picsum.photos/seed/project3/600/400',
  //   imageHint: 'photo gallery',
  //   liveLink: '#',
  //   githubLink: '#',
  //   tags: ['Vue.js', 'Node.js', 'Cloudinary'],
  // },
  //  {
  //   id: '4',
  //   title: 'Data Visualization Dashboard',
  //   description: 'An interactive dashboard for visualizing complex datasets, offering various chart types and filtering options for insightful data analysis.',
  //   imageUrl: 'https://picsum.photos/seed/project4/600/400',
  //   imageHint: 'charts graphs',
  //   githubLink: '#',
  //   tags: ['D3.js', 'Python', 'Flask', 'ShadCN UI'],
  // },
];
