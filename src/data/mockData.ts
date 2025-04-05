import { Note, Category, SubscriptionTier, Department, Subject } from '@/types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Computer Science',
    description: 'Programming, algorithms, data structures, and more',
    iconName: 'Code',
  },
  {
    id: '2',
    name: 'Mathematics',
    description: 'Calculus, algebra, statistics, and more',
    iconName: 'PieChart',
  },
  {
    id: '3',
    name: 'Physics',
    description: 'Mechanics, thermodynamics, electromagnetism, and more',
    iconName: 'Atom',
  },
  {
    id: '4',
    name: 'Business',
    description: 'Economics, management, finance, and more',
    iconName: 'Briefcase',
  },
  {
    id: '5',
    name: 'Language Arts',
    description: 'Literature, composition, rhetoric, and more',
    iconName: 'BookOpen',
  },
  {
    id: '6',
    name: 'Social Sciences',
    description: 'Psychology, sociology, anthropology, and more',
    iconName: 'Users',
  },
];

export const departments: Department[] = [
  {
    id: 'cs',
    name: 'Computer Science',
    description: 'Foundational computer science principles, algorithms, and theory',
    iconName: 'Code',
    subjects: [
      {
        id: 'cs-algorithms',
        name: 'Algorithms & Data Structures',
        description: 'Study of efficient algorithms and data organization methods',
        departmentId: 'cs',
        iconName: 'Network',
      },
      {
        id: 'cs-systems',
        name: 'Operating Systems',
        description: 'Concepts of modern operating systems and system architecture',
        departmentId: 'cs',
        iconName: 'Server',
      },
      {
        id: 'cs-databases',
        name: 'Database Systems',
        description: 'Design and implementation of database management systems',
        departmentId: 'cs',
        iconName: 'Database',
      }
    ]
  },
  {
    id: 'ai',
    name: 'Artificial Intelligence',
    description: 'Machine learning, neural networks, and computational intelligence',
    iconName: 'Brain',
    subjects: [
      {
        id: 'ai-ml',
        name: 'Machine Learning',
        description: 'Statistical techniques for computers to learn from data',
        departmentId: 'ai',
        iconName: 'LineChart',
      },
      {
        id: 'ai-nlp',
        name: 'Natural Language Processing',
        description: 'Techniques for computers to understand human language',
        departmentId: 'ai',
        iconName: 'MessageSquare',
      },
      {
        id: 'ai-cv',
        name: 'Computer Vision',
        description: 'Methods for computers to interpret visual information',
        departmentId: 'ai',
        iconName: 'Camera',
      }
    ]
  },
  {
    id: 'se',
    name: 'Software Engineering',
    description: 'Principles of software design, development, and maintenance',
    iconName: 'GitBranch',
    subjects: [
      {
        id: 'se-patterns',
        name: 'Design Patterns',
        description: 'Reusable solutions to common software design problems',
        departmentId: 'se',
        iconName: 'Puzzle',
      },
      {
        id: 'se-testing',
        name: 'Software Testing',
        description: 'Methods for verifying software functionality and reliability',
        departmentId: 'se',
        iconName: 'FileBadge',
      },
      {
        id: 'se-agile',
        name: 'Agile Development',
        description: 'Iterative approach to software delivery',
        departmentId: 'se',
        iconName: 'Repeat',
      }
    ]
  },
  {
    id: 'cs-sec',
    name: 'Cybersecurity',
    description: 'Network security, cryptography, and digital forensics',
    iconName: 'Shield',
    subjects: [
      {
        id: 'cs-sec-crypto',
        name: 'Cryptography',
        description: 'Secure communication techniques and data protection',
        departmentId: 'cs-sec',
        iconName: 'Lock',
      },
      {
        id: 'cs-sec-network',
        name: 'Network Security',
        description: 'Defense strategies for computer networks',
        departmentId: 'cs-sec',
        iconName: 'Globe',
      },
      {
        id: 'cs-sec-forensics',
        name: 'Digital Forensics',
        description: 'Recovery and investigation of material found in digital devices',
        departmentId: 'cs-sec',
        iconName: 'Search',
      }
    ]
  },
  {
    id: 'data',
    name: 'Data Science',
    description: 'Tools and techniques for extracting knowledge from data',
    iconName: 'BarChart',
    subjects: [
      {
        id: 'data-analytics',
        name: 'Data Analytics',
        description: 'Methods for analyzing and visualizing data',
        departmentId: 'data',
        iconName: 'LineChart',
      },
      {
        id: 'data-bigdata',
        name: 'Big Data',
        description: 'Processing and analyzing extremely large data sets',
        departmentId: 'data',
        iconName: 'Database',
      },
      {
        id: 'data-stats',
        name: 'Statistical Methods',
        description: 'Statistical techniques for data analysis',
        departmentId: 'data',
        iconName: 'Sigma',
      }
    ]
  }
];

// Extract all subjects from departments
export const subjects: Subject[] = departments.reduce((allSubjects, department) => {
  return [...allSubjects, ...department.subjects];
}, [] as Subject[]);

// Update notes to include departments
export const notes: Note[] = [
  {
    id: '1',
    title: 'Introduction to Algorithms',
    description: 'Comprehensive notes on basic algorithms and their time complexity analysis.',
    subject: 'Algorithms & Data Structures',
    department: 'Computer Science',
    fileUrl: '#',
    previewUrl: '/placeholder.svg',
    author: 'Alex Johnson',
    uploadDate: '2024-03-15',
    tier: SubscriptionTier.FREE,
    downloads: 234,
    rating: 4.5,
    fileType: 'PDF'
  },
  {
    id: '2',
    title: 'Deep Learning Fundamentals',
    description: 'Detailed notes covering neural networks, backpropagation, and optimization algorithms.',
    subject: 'Machine Learning',
    department: 'Artificial Intelligence',
    fileUrl: '#',
    previewUrl: '/placeholder.svg',
    author: 'Maria Chen',
    uploadDate: '2024-02-28',
    tier: SubscriptionTier.FREE,
    downloads: 156,
    rating: 4.2,
    fileType: 'PDF'
  },
  {
    id: '3',
    title: 'Object-Oriented Programming in Java',
    description: 'Complete guide to OOP concepts with practical Java examples.',
    subject: 'Design Patterns',
    department: 'Software Engineering',
    fileUrl: '#',
    previewUrl: '/placeholder.svg',
    author: 'John Smith',
    uploadDate: '2024-03-05',
    tier: SubscriptionTier.PREMIUM,
    downloads: 312,
    rating: 4.8,
    fileType: 'PDF'
  },
  {
    id: '4',
    title: 'Network Penetration Testing',
    description: 'University-level notes covering security assessment methodologies.',
    subject: 'Network Security',
    department: 'Cybersecurity',
    fileUrl: '#',
    previewUrl: '/placeholder.svg',
    author: 'Robert Zhang',
    uploadDate: '2024-01-17',
    tier: SubscriptionTier.PREMIUM,
    downloads: 178,
    rating: 4.6,
    fileType: 'PDF'
  },
  {
    id: '5',
    title: 'Big Data Technologies',
    description: 'Comprehensive guide to Hadoop, Spark, and NoSQL databases.',
    subject: 'Big Data',
    department: 'Data Science',
    fileUrl: '#',
    previewUrl: '/placeholder.svg',
    author: 'Sarah Williams',
    uploadDate: '2024-02-10',
    tier: SubscriptionTier.ELITE,
    downloads: 267,
    rating: 4.7,
    fileType: 'PDF'
  },
  {
    id: '6',
    title: 'Advanced Data Structures',
    description: 'In-depth exploration of complex data structures with implementation examples.',
    subject: 'Algorithms & Data Structures',
    department: 'Computer Science',
    fileUrl: '#',
    previewUrl: '/placeholder.svg',
    author: 'David Park',
    uploadDate: '2024-03-22',
    tier: SubscriptionTier.ELITE,
    downloads: 195,
    rating: 4.9,
    fileType: 'PDF'
  },
  {
    id: '7',
    title: 'Natural Language Understanding',
    description: 'Techniques for semantic analysis and language comprehension.',
    subject: 'Natural Language Processing',
    department: 'Artificial Intelligence',
    fileUrl: '#',
    previewUrl: '/placeholder.svg',
    author: 'Emily Taylor',
    uploadDate: '2024-02-05',
    tier: SubscriptionTier.PREMIUM,
    downloads: 221,
    rating: 4.4,
    fileType: 'PDF'
  },
  {
    id: '8',
    title: 'Software Testing Automation',
    description: 'Framework design for automated testing with CI/CD integration.',
    subject: 'Software Testing',
    department: 'Software Engineering',
    fileUrl: '#',
    previewUrl: '/placeholder.svg',
    author: 'Michael Brown',
    uploadDate: '2024-01-30',
    tier: SubscriptionTier.FREE,
    downloads: 142,
    rating: 4.3,
    fileType: 'PDF'
  },
  {
    id: '9',
    title: 'Cryptographic Protocols',
    description: 'Secure communication protocols for modern applications.',
    subject: 'Cryptography',
    department: 'Cybersecurity',
    fileUrl: '#',
    previewUrl: '/placeholder.svg',
    author: 'Jessica Lee',
    uploadDate: '2024-02-15',
    tier: SubscriptionTier.PREMIUM,
    downloads: 187,
    rating: 4.5,
    fileType: 'PDF'
  },
  {
    id: '10',
    title: 'Statistical Analysis with R',
    description: 'Comprehensive guide to statistical methods using R programming.',
    subject: 'Statistical Methods',
    department: 'Data Science',
    fileUrl: '#',
    previewUrl: '/placeholder.svg',
    author: 'Thomas Wilson',
    uploadDate: '2024-03-10',
    tier: SubscriptionTier.FREE,
    downloads: 215,
    rating: 4.4,
    fileType: 'PDF'
  },
];
