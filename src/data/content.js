// All website content lives here. Edit this file to update the site.

export const profile = {
  name: 'Sharad Krishna Singh',
  role: 'CS Student & Developer',
  intro:
    "I'm a Computer Science student exploring different branches of technology, building full-stack applications, and sharpening my problem-solving skills through DSA. I'm still figuring out what excites me most, trying new things, and turning every experience into my own journey of learning.",
  image: 'images/profile.png', // replace the file in /public/images with your final photo
  imageAlt: 'Sharad Krishna Singh',
  resume: 'resume.pdf', // file lives in /public
};

export const socials = [
  { label: 'GitHub', href: 'https://github.com/Sharad64i' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sharad-krishna-singh-4376212a1' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/Shara64e/' },
  { label: 'X', href: 'https://x.com/Sharad64e' },
];

export const email = 'sharad64e@gmail.com';

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const skills = [
  { group: 'Languages', items: ['C++', 'JavaScript'] },
  { group: 'Frameworks and libraries', items: ['React.js', 'Next.js', 'Node.js', 'Express.js'] },
  { group: 'Databases', items: ['MongoDB'] },
  { group: 'Tools and platforms', items: ['Git', 'GitHub', 'Postman', 'Linux', 'AWS EC2', 'AWS S3', 'Docker'] },
];

export const projects = [
  {
    title: 'Pāne&PDF',
    subtitle: 'Privacy-First PDF & Document Studio',
    description:
      'Browser-based tools for creating documents and working with PDFs, including merge, split, page organization, annotations, and PDF export. Files are processed locally in the browser; text edits use overlays.',
    tech: ['React', 'Vite', 'PDF.js', 'pdf-lib', 'IndexedDB'],
    links: [
      { label: 'GitHub', href: 'https://github.com/Sharad64i/Pane-and-pdf' },
      { label: 'Studio changes', href: 'https://github.com/Sharad64i/Pane-and-pdf/tree/codex/document-studio-pdf-selection-2026-11-20' },
    ],
  },
  {
    title: 'Bigram Book',
    subtitle: 'Word-Level Language Model',
    description:
      'A Python word-level tokenizer and bigram next-token model trained on a book, with prompt-based text generation.',
    tech: ['Python', 'NLP', 'Bigram model'],
    links: [{ label: 'GitHub', href: 'https://github.com/Sharad64i/bigram-book' }],
  },
  {
    title: 'DropVault',
    subtitle: 'Secure File Sharing Platform',
    description:
      'Full-stack file-sharing application with JWT authentication, private cloud storage, expiring share links, download limits, password protection, link revocation, ownership-based authorization, and short-lived download URLs.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'AWS S3'],
    links: [{ label: 'GitHub', href: 'https://github.com/Sharad64i/DropVault-Secure-File-Sharing-Platform' }],
  },
  {
    title: 'Owls-Larks',
    subtitle: 'Real-Time Collaborative Study Platform',
    status: 'In progress',
    description:
      'Collaborative study application with virtual rooms, synchronized Pomodoro sessions, real-time participant presence, study-goal tracking, and productivity analytics.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.IO'],
    links: [{ label: 'GitHub', href: 'https://github.com/Sharad64i/Owls-Larks-' }],
  },
];

export const experience = [
  {
    role: 'Full Stack Web Developer',
    company: 'Big Berry Pharma Pvt. Ltd.',
    period: 'May 2026 – June 2026',
    location: 'Remote',
    points: [
      'Developed inventory-management features for medicine stock tracking.',
      'Built chatbot functionality for product information and company services.',
      'Developed the company website.',
    ],
    tech: ['Next.js', 'Node.js', 'Express.js', 'Git'],
  },
];

export const education = [
  {
    school: 'KIET Group of Institutions',
    detail: 'B.Tech in Computer Science and Engineering (AI & ML) | CGPA 8.11/10',
    period: 'Sep 2024 – Jun 2028',
  },
  { school: 'Lucknow Public School', detail: 'Intermediate | 80%', period: '2023' },
  { school: 'Lucknow Public School', detail: 'High School (Class 10) | 94%', period: '2021' },
];

export const certifications = [
  { name: 'AWS Certified Solutions Architect – Associate', date: 'Oct 2026' },
  { name: 'AWS Certified Cloud Practitioner', date: 'Dec 2025' },
];
