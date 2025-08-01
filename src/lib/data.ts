import type { Project, Publication } from './types';

export const projects: Project[] = [
  {

    id: '1',
    rank: 1,
    title: 'AI Image Explainability',
    description: 'Built an AI that spots fake images and explains why — even in blurry 32×32 pixels. Combined smart CNNs with a vision-language model to detect artifacts and reveal the truth behind AI-generated visuals.',
    imageUrl: '/images/projects/Ai_explanablilty.png',
    imageHint: 'AI',
    githubLink: 'https://github.com/madhavkataria1010/AI-Image-Explainability',
    tags: ['VLMs', 'GANs', 'KANs', 'VAEs', 'LoRA', 'Knowledge Distillation', 'Diffusion Models'],
  },
  {
    id: '2',
    rank: 2,
    title: 'DeepPlay: Autonomous Football Agents',
    description: 'Leveraged Deep Q-Networks in PyTorch and TensorFlow to train Unity-based football agents from scratch, achieving a 40% boost in strategic decision-making accuracy and an 85% success rate in mastering complex gameplay strategies. A 3D Unity simulation visualizes learned agent behaviors and tactics.',
    imageUrl: '/images/projects/Deep_play.png',
    imageHint: 'team tasks',
    liveLink: 'https://iitjacin-my.sharepoint.com/:v:/g/personal/b23ch1025_iitj_ac_in/EfligOT9Lx5Hv-_ocnB02QUBOBfVAQs8jebLLuMv0SR6_g?e=7QevEw',
    githubLink: 'https://iitjacin-my.sharepoint.com/personal/b23ch1025_iitj_ac_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fb23ch1025%5Fiitj%5Fac%5Fin%2FDocuments%2FSanta%20Project&ga=1',
    tags: ['Unity Engine', 'DQN', 'PPO', 'Blender', 'PyTorch', 'Reinforcement Learning'],
  },
  {
    id: '3',
    rank: 3,
    title: 'AI Agent for Domain-Specific QA',
    description: 'Built a high-efficiency AI agent for domain-specific question answering using GPT-4, combining multi-task learning with prompt engineering and CoT reasoning to streamline support workflows, cut response times, and deliver scalable cost savings.',
    imageUrl: '/images/projects/devrev.png',
    imageHint: 'photo gallery',
    liveLink: 'https://drive.google.com/file/d/1gzoY9JNJnLCivzH_Ew4q74S1LK58HX9P/view?usp=sharing',
    githubLink: 'https://github.com/madhavkataria1010/InterIIT-Devrev',
    tags: ['Prompt engineering', 'CoTs', 'Multi-task learning', 'Model distillation'],
  },

  { id: '4',
    rank: 4,
    title: 'DeepFusion-C',
    description: 'DeepFusion-C is a hand-optimized C implementation of a four-layer CNN for MNIST digit recognition, leveraging SIMD intrinsics and OpenMP to deliver sub-millisecond, >99.2%-accurate inference with detailed latency, throughput and memory profiling.',
    imageUrl: '/images/projects/mnist.png',
    imageHint: 'AI',
    githubLink: 'https://github.com/madhavkataria1010/ics_majorproject',
    tags: ['C', 'CNN', 'MNIST', 'Model Adapter', 'Custom IDX-format MNIST loader'],
  },
  {
    id: '5',
    rank: 5,
    title: 'RealmWeaver',
    description: '🎮 RealmWeaver: Step into a world of endless possibilities! ✨ This 2D open-ended game redefines interactive storytelling with 🧙 dynamic NPCs, 🗺️ unique locations, 🏹 quests, and 🎁 items—all generated through the powerful GEMINI API. No two adventures are ever the same! 🌟',
    imageUrl: '/images/projects/Deep_play.png',
    imageHint: 'team tasks',
    githubLink: 'https://github.com/lakshyajain-0291/RealmWeaver',
    tags: ['Data Structure','C++', 'CMake', 'Makefile', 'Gemni'],
  },
  // {
  //   id: '6',
  //   rank: 6,
  //   title: 'NeuroLearn',
  //   description: 'Built a high-efficiency AI agent for domain-specific question answering using GPT-4, combining multi-task learning with prompt engineering and CoT reasoning to streamline support workflows, cut response times, and deliver scalable cost savings.',
  //   imageUrl: '/images/projects/devrev.png',
  //   imageHint: 'photo gallery',
  //   liveLink: 'https://drive.google.com/file/d/1gzoY9JNJnLCivzH_Ew4q74S1LK58HX9P/view?usp=sharing',
  //   githubLink: 'https://github.com/madhavkataria1010/InterIIT-Devrev',
  //   tags: ['Rrompt engineering', 'CoTs', 'Multi-task learning', 'Model distillation'],
  // },

  //   {
  //   id: '7',
  //   rank: 7,
  //   title: 'DeepPlay: Autonomous Football Agents',
  //   description: 'Leveraged Deep Q-Networks in PyTorch and TensorFlow to train Unity-based football agents from scratch, achieving a 40% boost in strategic decision-making accuracy and an 85% success rate in mastering complex gameplay strategies. A 3D Unity simulation visualizes learned agent behaviors and tactics.',
  //   imageUrl: '/images/projects/Deep_play.png',
  //   imageHint: 'team tasks',
  //   liveLink: 'https://iitjacin-my.sharepoint.com/:v:/g/personal/b23ch1025_iitj_ac_in/EfligOT9Lx5Hv-_ocnB02QUBOBOBfVAQs8jebLLuMv0SR6_g?e=7QevEw',
  //   githubLink: 'https://iitjacin-my.sharepoint.com/personal/b23ch1025_iitj_ac_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fb23ch1025%5Fiitj%5Fac%5Fin%2FDocuments%2FSanta%20Project&ga=1',
  //   tags: ['Unity Engine', 'DQN', 'PPO', 'Blender', 'PyTorch', 'Reinforcement Learning'],
  // },
  // {
  //   id: '8',
  //   rank: 8,
  //   title: 'AI Agent for Domain-Specific QA',
  //   description: 'Built a high-efficiency AI agent for domain-specific question answering using GPT-4, combining multi-task learning with prompt engineering and CoT reasoning to streamline support workflows, cut response times, and deliver scalable cost savings.',
  //   imageUrl: '/images/projects/devrev.png',
  //   imageHint: 'photo gallery',
  //   liveLink: 'https://drive.google.com/file/d/1gzoY9JNJnLCivzH_Ew4q74S1LK58HX9P/view?usp=sharing',
  //   githubLink: 'https://github.com/madhavkataria1010/InterIIT-Devrev',
  //   tags: ['Rrompt engineering', 'CoTs', 'Multi-task learning', 'Model distillation'],
  // },
];

export const publications: Publication[] = [
  {
    id: '1',
    title: 'Re:Verse - Can Your VLM Read a Manga?',
    authors: ['Aaditya Baranwal', 'Madhav Kataria', 'Naitik Agrawal', 'Yogesh Singh Rawat', 'Shruti Vyas'],
    venue: '1st Workshop on Generative AI for Storytelling (AISTORY) @ ICCV 2025',
    year: 2025,
    type: 'workshop',
    abstract: 'Current Vision Language Models (VLMs) demonstrate a critical gap between surface-level recognition and deep narrative reasoning when processing sequential visual storytelling. Through a comprehensive investigation of manga narrative understanding, we reveal that while recent large multimodal models excel at individual panel interpretation, they systematically fail at temporal causality and cross-panel cohesion—core requirements for coherent story comprehension. We introduce Re:Verse, a novel evaluation framework combining fine-grained multimodal annotation, cross-modal embedding analysis, and retrieval-augmented assessment to systematically characterize these limitations.',
    websiteUrl: 'https://re-verse.vercel.app/',
    tags: ['Vision Language Models', 'Manga', 'Narrative Understanding', 'Multimodal', 'Benchmark', 'Temporal Reasoning'],
    highlight: true
  }
];

