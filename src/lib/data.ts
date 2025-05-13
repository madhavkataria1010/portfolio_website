import type { Project } from './types';

export const projects: Project[] = [
  {

    id: '1',
    title: 'AI Image Explainability',
    description: 'Built an AI that spots fake images and explains why — even in blurry 32×32 pixels. Combined smart CNNs with a vision-language model to detect artifacts and reveal the truth behind AI-generated visuals.',
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    imageHint: 'AI',
    githubLink: 'https://github.com/madhavkataria1010/AI-Image-Explainability',
    tags: ['VLMs', 'GANs', 'KANs', 'VAEs', 'LoRA', 'Knowledge Distillation', 'Diffusion Models'],
  },
  {
    id: '2',
    title: 'DeepPlay: Autonomous Football Agents',
    description: 'Leveraged Deep Q-Networks in PyTorch and TensorFlow to train Unity-based football agents from scratch, achieving a 40% boost in strategic decision-making accuracy and an 85% success rate in mastering complex gameplay strategies. A 3D Unity simulation visualizes learned agent behaviors and tactics.',
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    imageHint: 'team tasks',
    // liveLink: '#',
    githubLink: 'https://iitjacin-my.sharepoint.com/personal/b23ch1025_iitj_ac_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fb23ch1025%5Fiitj%5Fac%5Fin%2FDocuments%2FSanta%20Project&ga=1',
    tags: ['Unity Engine,', 'DQN', 'PPO', 'Blender', 'PyTorch', 'TensorFlow', 'Reinforcement Learning'],
  },
  {
    id: '3',
    title: 'AI Agent for Domain-Specific QA',
    description: 'Built a high-efficiency AI agent for domain-specific question answering using GPT-4, combining multi-task learning with prompt engineering and CoT reasoning to streamline support workflows, cut response times, and deliver scalable cost savings.',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    imageHint: 'photo gallery',
    // liveLink: '#',
    githubLink: 'https://github.com/madhavkataria1010/InterIIT-Devrev',
    tags: ['Rrompt engineering', 'CoTs', 'Multi-task learning', 'Model distillation'],
  },
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
