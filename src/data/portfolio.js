import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaGithub, FaJava } from 'react-icons/fa';
import { SiJavascript, SiExpress, SiMongodb, SiGit, SiMysql, SiC, SiTailwindcss, SiPostman } from 'react-icons/si';

export const skills = [
  { name: 'HTML', icon: FaHtml5, color: '#E34F26', level: 95 },
  { name: 'CSS', icon: FaCss3Alt, color: '#1572B6', level: 90 },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8', level: 92 },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 92 },
  { name: 'React', icon: FaReact, color: '#61DAFB', level: 88 },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933', level: 85 },
  { name: 'Express.js', icon: SiExpress, color: '#CCCCCC', level: 80 },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 82 },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37', level: 88 },
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
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80',
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'School Bus Tracker',
    description: 'A real-time GPS tracking application for school fleets ensuring student safety with predictive ETA and parental alerts.',
    technologies: ['React Native', 'Node.js', 'Express', 'Socket.io', 'Google Maps API'],
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    github: '#',
    demo: '#',
  },
  {
    id: 3,
    title: 'Hithesh Hub Portfolio',
    description: 'A modern, interactive personal developer portfolio featuring futuristic terminal themes, smooth animations, audio feedback, and dark/light mode support.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    github: '#',
    demo: '#',
  },
];

export const timeline = [
  {
    year: 'Present (Pursuing)',
    role: 'Master of Computer Applications (MCA)',
    company: 'Vivekananda College of Engineering and Technology, Puttur',
    stats: {
      University: 'Visvesvaraya Technological University, Belagavi',
      Percentage: '85.00%'
    }
  },
  {
    year: '2025',
    role: 'Bachelor of Computer Applications (BCA)',
    company: 'Vivekananda College of Arts, Science and Commerce (Autonomous), Puttur',
    stats: {
      University: 'Mangalore University',
      Marks: '3529 / 4550',
      Percentage: '77.56%',
      Year: '2025'
    }
  },
  {
    year: '2022',
    role: 'Pre-University Course (PUC)',
    company: 'Subramanyeshwara PU College, Subrahmanya',
    stats: {
      Board: 'Karnataka State PU Board',
      Marks: '513 / 600',
      Percentage: '85.50%',
      Year: '2022'
    }
  },
  {
    year: '2020',
    role: 'Secondary School (SSLC)',
    company: 'Vidyabodhini High School, Balila',
    stats: {
      Board: 'Karnataka Secondary Education Board',
      Marks: '520 / 625',
      Percentage: '83.20%',
      Year: '2020'
    }
  }
];

export const certificates = [
  {
    id: 1,
    title: 'Ultimate Web Development Course',
    issuer: 'CodeWithHarry',
    date: 'Jul 2026',
    credentialId: 'CWH-THE-ULTIMATE-WEB-DEV-COURSE-2LZSXHZT',
    fileUrl: '/certificates/ultimate-web-dev.png',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 2,
    title: 'Build with AI Bootcamp',
    issuer: 'Google for Developers',
    date: 'Jun 2026',
    credentialId: '2026H2SO6BWAIINPUT-P00298',
    fileUrl: '/certificates/build-with-ai.png',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 3,
    title: 'Full Stack Web Development',
    issuer: 'Google',
    date: 'Jul 2025',
    credentialId: 'GGL-FSWD-98213',
    fileUrl: '/certificates/full-stack-dev.png',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600',
  }
];
