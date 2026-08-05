import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaGithub, FaJava } from 'react-icons/fa';
import { SiJavascript, SiExpress, SiMongodb, SiGit, SiMysql, SiC } from 'react-icons/si';

export const skills = [
  { name: 'HTML', icon: FaHtml5, color: '#E34F26', level: 95 },
  { name: 'CSS', icon: FaCss3Alt, color: '#1572B6', level: 90 },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 92 },
  { name: 'React', icon: FaReact, color: '#61DAFB', level: 88 },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933', level: 85 },
  { name: 'Express.js', icon: SiExpress, color: '#000000', level: 80 },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 82 },
  { name: 'Python', icon: FaPython, color: '#3776AB', level: 90 },
  { name: 'Java', icon: FaJava, color: '#007396', level: 85 },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1', level: 80 },
  { name: 'C', icon: SiC, color: '#A8B9CC', level: 75 },
  { name: 'Git', icon: SiGit, color: '#F05032', level: 85 },
  { name: 'GitHub', icon: FaGithub, color: '#ffffff', level: 88 },
];

export const projects = [
  {
    id: 1,
    title: 'AgriPhytoRx AI',
    description: 'An advanced AI-powered diagnostic tool for agricultural plants, utilizing computer vision to detect plant diseases and recommend localized treatments.',
    technologies: ['React', 'Python', 'TensorFlow', 'MongoDB', 'TailwindCSS'],
    image: 'https://images.unsplash.com/photo-1530836369250-ef71a3f5e4bb?auto=format&fit=crop&q=80&w=800',
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'School Bus Tracker',
    description: 'A real-time GPS tracking application for school fleets ensuring student safety with predictive ETA and parental alerts.',
    technologies: ['React Native', 'Node.js', 'Express', 'Socket.io', 'Google Maps API'],
    image: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&q=80&w=800',
    github: '#',
    demo: '#',
  },
  {
    id: 3,
    title: 'Cyberpunk Portfolio',
    description: 'A futuristic, immersive 3D web portfolio featuring holographic interfaces, smooth animations, and interactive elements.',
    technologies: ['React', 'Three.js', 'Framer Motion', 'GSAP', 'TailwindCSS'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    github: '#',
    demo: '#',
  },
];

export const timeline = [
  {
    year: '2025 - Present',
    role: 'Software & Full Stack Developer',
    company: 'Tech Innovations Inc.',
    description: 'Developing next-generation software platforms. Leading the frontend integration of complex systems into consumer-facing web apps.',
  },
  {
    year: '2023 - 2025',
    role: 'Software Engineer',
    company: 'AgriTech Solutions',
    description: 'Built scalable backend architectures using Node.js and improved database querying efficiency by 40%.',
  },
  {
    year: '2021 - 2023',
    role: 'B.S. in Computer Science',
    company: 'University of Technology',
    description: 'Graduated with honors. Specialized in machine learning algorithms and software engineering principles.',
  }
];

export const certificates = [
  {
    id: 1,
    title: 'Advanced React & Web3',
    issuer: 'Meta',
    date: 'Jan 2024',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 2,
    title: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI',
    date: 'Nov 2023',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 3,
    title: 'Full Stack Web Development',
    issuer: 'Google',
    date: 'Jul 2022',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600',
  }
];
