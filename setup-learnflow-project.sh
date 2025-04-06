
#!/bin/bash

# Setup LearnFlow Project Script
echo "Setting up LearnFlow project..."

# Create project directory
mkdir -p learnflow-project
cd learnflow-project

# Initialize package.json
echo "Initializing package.json..."
cat > package.json << 'EOF'
{
  "name": "learnflow",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.9.0",
    "@radix-ui/react-accordion": "^1.2.0",
    "@radix-ui/react-alert-dialog": "^1.1.1",
    "@radix-ui/react-aspect-ratio": "^1.1.0",
    "@radix-ui/react-avatar": "^1.1.0",
    "@radix-ui/react-checkbox": "^1.1.1",
    "@radix-ui/react-collapsible": "^1.1.0",
    "@radix-ui/react-context-menu": "^2.2.1",
    "@radix-ui/react-dialog": "^1.1.2",
    "@radix-ui/react-dropdown-menu": "^2.1.1",
    "@radix-ui/react-hover-card": "^1.1.1",
    "@radix-ui/react-label": "^2.1.0",
    "@radix-ui/react-menubar": "^1.1.1",
    "@radix-ui/react-navigation-menu": "^1.2.0",
    "@radix-ui/react-popover": "^1.1.1",
    "@radix-ui/react-progress": "^1.1.0",
    "@radix-ui/react-radio-group": "^1.2.0",
    "@radix-ui/react-scroll-area": "^1.1.0",
    "@radix-ui/react-select": "^2.1.1",
    "@radix-ui/react-separator": "^1.1.0",
    "@radix-ui/react-slider": "^1.2.0",
    "@radix-ui/react-slot": "^1.1.0",
    "@radix-ui/react-switch": "^1.1.0",
    "@radix-ui/react-tabs": "^1.1.0",
    "@radix-ui/react-toast": "^1.2.1",
    "@radix-ui/react-toggle": "^1.1.0",
    "@radix-ui/react-toggle-group": "^1.1.0",
    "@radix-ui/react-tooltip": "^1.1.4",
    "@tanstack/react-query": "^5.56.2",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.0.0",
    "date-fns": "^3.6.0",
    "embla-carousel-react": "^8.3.0",
    "input-otp": "^1.2.4",
    "lucide-react": "^0.462.0",
    "next-themes": "^0.3.0",
    "react": "^18.3.1",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.53.0",
    "react-resizable-panels": "^2.1.3",
    "react-router-dom": "^6.26.2",
    "recharts": "^2.12.7",
    "sonner": "^1.5.0",
    "tailwind-merge": "^2.5.2",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^0.9.3",
    "zod": "^3.23.8"
  },
  "devDependencies": {
    "@types/node": "^20.11.28",
    "@types/react": "^18.3.1",
    "@types/react-dom": "^18.3.0",
    "@typescript-eslint/eslint-plugin": "^7.2.0",
    "@typescript-eslint/parser": "^7.2.0",
    "@vitejs/plugin-react-swc": "^3.6.0",
    "autoprefixer": "^10.4.18",
    "eslint": "^8.57.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.4.2",
    "vite": "^5.1.6"
  }
}
EOF

# Create tsconfig.json
echo "Creating tsconfig.json..."
cat > tsconfig.json << 'EOF'
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
EOF

# Create tsconfig.node.json
echo "Creating tsconfig.node.json..."
cat > tsconfig.node.json << 'EOF'
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
EOF

# Create vite.config.ts
echo "Creating vite.config.ts..."
cat > vite.config.ts << 'EOF'
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
EOF

# Create postcss.config.js
echo "Creating postcss.config.js..."
cat > postcss.config.js << 'EOF'
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOF

# Create tailwind.config.js
echo "Creating tailwind.config.js..."
cat > tailwind.config.js << 'EOF'
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        learnflow: {
          primary: "#3B82F6",
          accent: "#818CF8"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
EOF

# Create index.html
echo "Creating index.html..."
cat > index.html << 'EOF'
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>LearnFlow - Share & Discover Academic Notes</title>
    <meta name="description" content="LearnFlow is a platform for students to share and discover academic notes across various departments and subjects">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
EOF

# Create directory structure
mkdir -p src/components/ui
mkdir -p src/context
mkdir -p src/hooks
mkdir -p src/lib
mkdir -p src/pages
mkdir -p src/types
mkdir -p src/data
mkdir -p public

# Create basic files
echo "Creating core files..."

# Create src/main.tsx
cat > src/main.tsx << 'EOF'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);
EOF

# Create src/index.css
cat > src/index.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;

    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;

    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;

    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;

    --secondary: 160 84.1% 39.2%;
    --secondary-foreground: 222.2 47.4% 11.2%;

    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;

    --accent: 237.4 84.6% 67.6%;
    --accent-foreground: 222.2 47.4% 11.2%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;

    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;

    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;

    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;

    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;

    --primary: 217.2 91.2% 59.8%;
    --primary-foreground: 222.2 47.4% 11.2%;

    --secondary: 160 84.1% 39.2%;
    --secondary-foreground: 210 40% 98%;

    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;

    --accent: 237.4 84.6% 67.6%;
    --accent-foreground: 210 40% 98%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;

    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 224.3 76.3% 48%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
  }
}

/* Custom Animations */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

@keyframes pulse-light {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}

@keyframes slide-in-bottom {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes gradient-animation {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Custom Utility Classes */
.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-pulse-light {
  animation: pulse-light 2s infinite;
}

.animate-slide-in-bottom {
  animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient-animation 3s ease infinite;
}

.glass-morphism {
  @apply backdrop-blur-md bg-white/10 border border-white/20;
}

.note-card {
  transition: all 0.3s ease;
}

.note-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
}

/* Tech Effect */
.tech-dots {
  background-image: radial-gradient(#3B82F6 1px, transparent 1px);
  background-size: 20px 20px;
}

.tech-grid {
  background-size: 40px 40px;
  background-image: 
    linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #3B82F6;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #2563EB;
}
EOF

# Create src/App.tsx
cat > src/App.tsx << 'EOF'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Browse from "./pages/Browse";
import Upload from "./pages/Upload";
import Subscriptions from "./pages/Subscriptions";
import NotFound from "./pages/NotFound";
import Departments from "./pages/Departments";
import DepartmentSubjects from "./pages/DepartmentSubjects";
import SubjectNotes from "./pages/SubjectNotes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/departments/:departmentId" element={<DepartmentSubjects />} />
            <Route path="/departments/:departmentId/subjects/:subjectId" element={<SubjectNotes />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/subscriptions" element={<Subscriptions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
EOF

# Create src/lib/utils.ts
cat > src/lib/utils.ts << 'EOF'
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
EOF

# Create src/types/index.ts
cat > src/types/index.ts << 'EOF'
export type User = {
  id: string;
  name: string;
  email: string;
  subscription: SubscriptionTier;
};

export enum SubscriptionTier {
  FREE = 'free',
  PREMIUM = 'premium',
  ELITE = 'elite'
}

export type Note = {
  id: string;
  title: string;
  description: string;
  subject: string;
  department: string;
  fileUrl: string;
  previewUrl?: string;
  author: string;
  uploadDate: string;
  tier: SubscriptionTier;
  downloads: number;
  rating: number;
  fileType: string;
};

export type Category = {
  id: string;
  name: string;
  description: string;
  iconName: string;
};

export type Department = {
  id: string;
  name: string;
  description: string;
  iconName: string;
  subjects: Subject[];
};

export type Subject = {
  id: string;
  name: string;
  description: string;
  departmentId: string;
  iconName: string;
};
EOF

# Create src/data/mockData.ts
cat > src/data/mockData.ts << 'EOF'
import { Category, Department, Note, SubscriptionTier, Subject } from "@/types";

// Mock categories data
export const categories: Category[] = [
  {
    id: "1",
    name: "Computer Science",
    description: "Fundamentals of computing and programming",
    iconName: "laptop",
  },
  {
    id: "2",
    name: "Data Science",
    description: "Analysis and interpretation of complex data",
    iconName: "bar-chart",
  },
  {
    id: "3",
    name: "Artificial Intelligence",
    description: "Machine learning and neural networks",
    iconName: "brain",
  },
  {
    id: "4",
    name: "Software Engineering",
    description: "Best practices for software development",
    iconName: "code",
  },
  {
    id: "5",
    name: "Cybersecurity",
    description: "Network and information security",
    iconName: "shield",
  }
];

// Mock subjects data
const computerScienceSubjects: Subject[] = [
  {
    id: "cs1",
    name: "Algorithms",
    description: "Study of computational problem-solving methods",
    departmentId: "1",
    iconName: "code-2",
  },
  {
    id: "cs2",
    name: "Data Structures",
    description: "Efficient organization and storage of data",
    departmentId: "1",
    iconName: "database",
  },
  {
    id: "cs3",
    name: "Operating Systems",
    description: "Management of computer hardware and software resources",
    departmentId: "1",
    iconName: "cpu",
  },
  {
    id: "cs4",
    name: "Computer Networks",
    description: "Communication between computers and network devices",
    departmentId: "1",
    iconName: "network",
  },
  {
    id: "cs5",
    name: "Database Systems",
    description: "Design and implementation of database systems",
    departmentId: "1",
    iconName: "database",
  }
];

const dataScienceSubjects: Subject[] = [
  {
    id: "ds1",
    name: "Statistical Methods",
    description: "Applications of statistics in data analysis",
    departmentId: "2",
    iconName: "line-chart",
  },
  {
    id: "ds2",
    name: "Data Mining",
    description: "Discovering patterns in large datasets",
    departmentId: "2",
    iconName: "pickaxe",
  },
  {
    id: "ds3",
    name: "Big Data Analytics",
    description: "Processing and analyzing large datasets",
    departmentId: "2",
    iconName: "layers",
  },
  {
    id: "ds4",
    name: "Data Visualization",
    description: "Graphical representation of data",
    departmentId: "2",
    iconName: "bar-chart-2",
  },
  {
    id: "ds5",
    name: "Predictive Analytics",
    description: "Using data to forecast future outcomes",
    departmentId: "2",
    iconName: "trending-up",
  }
];

const aiSubjects: Subject[] = [
  {
    id: "ai1",
    name: "Machine Learning",
    description: "Algorithms that improve through experience",
    departmentId: "3",
    iconName: "git-branch",
  },
  {
    id: "ai2",
    name: "Neural Networks",
    description: "Computer systems inspired by biological neural networks",
    departmentId: "3",
    iconName: "network",
  },
  {
    id: "ai3",
    name: "Natural Language Processing",
    description: "Interaction between computers and human language",
    departmentId: "3",
    iconName: "message-square",
  },
  {
    id: "ai4",
    name: "Computer Vision",
    description: "Enabling computers to interpret visual information",
    departmentId: "3",
    iconName: "eye",
  },
  {
    id: "ai5",
    name: "Reinforcement Learning",
    description: "Learning through interaction with an environment",
    departmentId: "3",
    iconName: "refresh-cw",
  }
];

const softwareEngineeringSubjects: Subject[] = [
  {
    id: "se1",
    name: "Software Design",
    description: "Principles and patterns of software architecture",
    departmentId: "4",
    iconName: "layers",
  },
  {
    id: "se2",
    name: "Testing & QA",
    description: "Ensuring software quality and reliability",
    departmentId: "4",
    iconName: "check-circle",
  },
  {
    id: "se3",
    name: "Agile Methodologies",
    description: "Iterative and incremental development approaches",
    departmentId: "4",
    iconName: "repeat",
  },
  {
    id: "se4",
    name: "DevOps",
    description: "Integration of development and operations",
    departmentId: "4",
    iconName: "git-merge",
  },
  {
    id: "se5",
    name: "Project Management",
    description: "Planning and organizing software projects",
    departmentId: "4",
    iconName: "clipboard",
  }
];

const cybersecuritySubjects: Subject[] = [
  {
    id: "cs1",
    name: "Network Security",
    description: "Protection of network infrastructure",
    departmentId: "5",
    iconName: "wifi",
  },
  {
    id: "cs2",
    name: "Cryptography",
    description: "Secure communication techniques",
    departmentId: "5",
    iconName: "lock",
  },
  {
    id: "cs3",
    name: "Security Auditing",
    description: "Assessment of security controls",
    departmentId: "5",
    iconName: "shield",
  },
  {
    id: "cs4",
    name: "Penetration Testing",
    description: "Simulating cyber attacks to find vulnerabilities",
    departmentId: "5",
    iconName: "zap",
  },
  {
    id: "cs5",
    name: "Digital Forensics",
    description: "Investigation of digital security incidents",
    departmentId: "5",
    iconName: "search",
  }
];

// Mock departments data
export const departments: Department[] = [
  {
    id: "1",
    name: "Computer Science",
    description: "Core principles of computing, algorithms, and programming languages",
    iconName: "laptop",
    subjects: computerScienceSubjects,
  },
  {
    id: "2",
    name: "Data Science",
    description: "Techniques for analyzing and extracting insights from complex data",
    iconName: "bar-chart",
    subjects: dataScienceSubjects,
  },
  {
    id: "3",
    name: "Artificial Intelligence",
    description: "Study of intelligent agents and machine learning systems",
    iconName: "brain",
    subjects: aiSubjects,
  },
  {
    id: "4",
    name: "Software Engineering",
    description: "Application of engineering principles to software development",
    iconName: "code",
    subjects: softwareEngineeringSubjects,
  },
  {
    id: "5",
    name: "Cybersecurity",
    description: "Protection of computer systems from theft or damage",
    iconName: "shield",
    subjects: cybersecuritySubjects,
  }
];

// Mock notes data
export const notes: Note[] = [
  {
    id: "1",
    title: "Introduction to Algorithms",
    description: "Comprehensive notes on basic algorithmic principles including time complexity analysis and common problem-solving techniques.",
    subject: "Algorithms",
    department: "Computer Science",
    fileUrl: "/files/intro-algorithms.pdf",
    author: "Dr. Jane Smith",
    uploadDate: "2023-11-15",
    tier: SubscriptionTier.FREE,
    downloads: 1245,
    rating: 4.7,
    fileType: "PDF"
  },
  {
    id: "2",
    title: "Advanced Data Structures",
    description: "In-depth notes on trees, graphs, heaps and their implementations with performance considerations.",
    subject: "Data Structures",
    department: "Computer Science",
    fileUrl: "/files/advanced-data-structures.pdf",
    previewUrl: "/previews/advanced-data-structures.jpg",
    author: "Prof. Alex Johnson",
    uploadDate: "2023-10-22",
    tier: SubscriptionTier.PREMIUM,
    downloads: 863,
    rating: 4.9,
    fileType: "PDF"
  },
  {
    id: "3",
    title: "Machine Learning Fundamentals",
    description: "Detailed notes on supervised and unsupervised learning algorithms with practical examples.",
    subject: "Machine Learning",
    department: "Artificial Intelligence",
    fileUrl: "/files/ml-fundamentals.pdf",
    author: "Dr. Michael Chen",
    uploadDate: "2023-09-18",
    tier: SubscriptionTier.FREE,
    downloads: 2104,
    rating: 4.8,
    fileType: "PDF"
  },
  {
    id: "4",
    title: "Deep Neural Networks",
    description: "Comprehensive guide to neural network architectures, training techniques, and optimization methods.",
    subject: "Neural Networks",
    department: "Artificial Intelligence",
    fileUrl: "/files/deep-neural-networks.pdf",
    previewUrl: "/previews/deep-neural-networks.jpg",
    author: "Prof. Sarah Wong",
    uploadDate: "2023-08-30",
    tier: SubscriptionTier.ELITE,
    downloads: 1532,
    rating: 5.0,
    fileType: "PDF"
  },
  {
    id: "5",
    title: "Software Testing Strategies",
    description: "Complete notes on unit testing, integration testing, and test-driven development methodologies.",
    subject: "Testing & QA",
    department: "Software Engineering",
    fileUrl: "/files/testing-strategies.pdf",
    author: "Thomas Anderson",
    uploadDate: "2023-11-02",
    tier: SubscriptionTier.FREE,
    downloads: 978,
    rating: 4.6,
    fileType: "PDF"
  },
  {
    id: "6",
    title: "Agile Development Practices",
    description: "Detailed guide to Scrum, Kanban, and other agile methodologies with real-world case studies.",
    subject: "Agile Methodologies",
    department: "Software Engineering",
    fileUrl: "/files/agile-practices.pdf",
    previewUrl: "/previews/agile-practices.jpg",
    author: "Emily Robertson",
    uploadDate: "2023-10-10",
    tier: SubscriptionTier.PREMIUM,
    downloads: 1145,
    rating: 4.8,
    fileType: "PDF"
  },
  {
    id: "7",
    title: "Statistical Methods in Data Analysis",
    description: "Comprehensive notes on statistical techniques for data analysis, including hypothesis testing and regression analysis.",
    subject: "Statistical Methods",
    department: "Data Science",
    fileUrl: "/files/statistical-methods.pdf",
    author: "Dr. Robert Lee",
    uploadDate: "2023-09-25",
    tier: SubscriptionTier.FREE,
    downloads: 1532,
    rating: 4.7,
    fileType: "PDF"
  },
  {
    id: "8",
    title: "Big Data Processing with Hadoop",
    description: "In-depth guide to distributed data processing using Hadoop, MapReduce, and related technologies.",
    subject: "Big Data Analytics",
    department: "Data Science",
    fileUrl: "/files/hadoop-processing.pdf",
    previewUrl: "/previews/hadoop-processing.jpg",
    author: "Jennifer Davis",
    uploadDate: "2023-11-08",
    tier: SubscriptionTier.ELITE,
    downloads: 897,
    rating: 4.9,
    fileType: "PDF"
  },
  {
    id: "9",
    title: "Network Security Essentials",
    description: "Comprehensive notes on securing network infrastructure, detecting intrusions, and implementing defense mechanisms.",
    subject: "Network Security",
    department: "Cybersecurity",
    fileUrl: "/files/network-security.pdf",
    author: "Mark Wilson",
    uploadDate: "2023-10-15",
    tier: SubscriptionTier.FREE,
    downloads: 1876,
    rating: 4.8,
    fileType: "PDF"
  },
  {
    id: "10",
    title: "Advanced Cryptography Techniques",
    description: "Detailed guide to modern cryptographic algorithms, protocols, and their applications in security systems.",
    subject: "Cryptography",
    department: "Cybersecurity",
    fileUrl: "/files/cryptography.pdf",
    previewUrl: "/previews/cryptography.jpg",
    author: "Dr. Lisa Brown",
    uploadDate: "2023-09-05",
    tier: SubscriptionTier.PREMIUM,
    downloads: 1243,
    rating: 4.9,
    fileType: "PDF"
  }
];
EOF

# Create src/context/AuthContext.tsx
cat > src/context/AuthContext.tsx << 'EOF'
import React, { createContext, useContext, useState, useEffect } from "react";
import { User, SubscriptionTier } from "@/types";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: async () => {},
  signup: async () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string) => {
    // This is a mock implementation. In a real app, you would call an API.
    console.log("Logging in with:", email, password);
    
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const mockUser: User = {
      id: "1",
      name: "Test User",
      email: email,
      subscription: SubscriptionTier.FREE,
    };
    
    setUser(mockUser);
    setIsAuthenticated(true);
    localStorage.setItem("user", JSON.stringify(mockUser));
  };

  const signup = async (name: string, email: string, password: string) => {
    // This is a mock implementation. In a real app, you would call an API.
    console.log("Signing up with:", name, email, password);
    
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      name: name,
      email: email,
      subscription: SubscriptionTier.FREE,
    };
    
    setUser(mockUser);
    setIsAuthenticated(true);
    localStorage.setItem("user", JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, signup, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
EOF

# Create src/components/ui folders for basic components
mkdir -p src/components/ui/button
mkdir -p src/components/ui/card
mkdir -p src/components/ui/toast
mkdir -p src/components/ui/tooltip
mkdir -p src/components/ui/navbar
mkdir -p src/components/ui/footer

# Create src/hooks/use-toast.ts
cat > src/hooks/use-toast.ts << 'EOF'
import { useToast as useToastOriginal } from "@/components/ui/use-toast";

export const useToast = useToastOriginal;
EOF

# Create pages
cat > src/pages/Index.tsx << 'EOF'
import React from "react";
import Navbar from "@/components/ui/navbar";
import HeroSection from "@/components/ui/hero-section";
import FeatureSection from "@/components/ui/feature-section";
import PricingSection from "@/components/ui/pricing-section";
import Footer from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeatureSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
EOF

cat > src/pages/NotFound.tsx << 'EOF'
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import { FileQuestion } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center px-4 py-16">
          <FileQuestion className="mx-auto h-24 w-24 text-learnflow-primary mb-6" />
          <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild className="bg-learnflow-primary hover:bg-learnflow-primary/90">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
EOF

# Create component stubs for pages that would need substantial code
echo "Creating component stubs..."
for page in Login Signup Browse Upload Subscriptions Departments DepartmentSubjects SubjectNotes; do
    echo "import React from 'react';" > src/pages/${page}.tsx
    echo "import Navbar from '@/components/ui/navbar';" >> src/pages/${page}.tsx
    echo "import Footer from '@/components/ui/footer';" >> src/pages/${page}.tsx
    echo "" >> src/pages/${page}.tsx
    echo "const ${page} = () => {" >> src/pages/${page}.tsx
    echo "  return (" >> src/pages/${page}.tsx
    echo "    <div className=\"flex flex-col min-h-screen\">" >> src/pages/${page}.tsx
    echo "      <Navbar />" >> src/pages/${page}.tsx
    echo "      <div className=\"flex-grow container mx-auto px-4 py-8\">" >> src/pages/${page}.tsx
    echo "        <h1 className=\"text-3xl font-bold mb-8\">${page}</h1>" >> src/pages/${page}.tsx
    echo "        {/* Content for ${page} page */}" >> src/pages/${page}.tsx
    echo "      </div>" >> src/pages/${page}.tsx
    echo "      <Footer />" >> src/pages/${page}.tsx
    echo "    </div>" >> src/pages/${page}.tsx
    echo "  );" >> src/pages/${page}.tsx
    echo "};" >> src/pages/${page}.tsx
    echo "" >> src/pages/${page}.tsx
    echo "export default ${page};" >> src/pages/${page}.tsx
done

# Create component stubs for UI components
echo "Creating UI component stubs..."
for component in hero-section feature-section pricing-section navbar footer department-grid subject-grid note-card category-grid; do
    echo "import React from 'react';" > src/components/ui/${component}.tsx
    echo "" >> src/components/ui/${component}.tsx
    componentName=$(echo ${component} | sed -r 's/(^|-)([a-z])/\U\2/g')
    echo "const ${componentName} = () => {" >> src/components/ui/${component}.tsx
    echo "  return (" >> src/components/ui/${component}.tsx
    echo "    <div>" >> src/components/ui/${component}.tsx
    echo "      {/* Content for ${component} component */}" >> src/components/ui/${component}.tsx
    echo "    </div>" >> src/components/ui/${component}.tsx
    echo "  );" >> src/components/ui/${component}.tsx
    echo "};" >> src/components/ui/${component}.tsx
    echo "" >> src/components/ui/${component}.tsx
    echo "export default ${componentName};" >> src/components/ui/${component}.tsx
done

# Create component stubs for shadcn components
echo "Creating shadcn component stubs..."
for component in button card input label textarea toast toaster tooltip sonner tabs; do
    mkdir -p src/components/ui/${component}
    echo "// Placeholder for shadcn ${component} component" > src/components/ui/${component}.tsx
done

# Add a favicon
echo "Creating placeholder favicon..."
mkdir -p public
touch public/favicon.ico

echo "LearnFlow project setup complete!"
echo "To start the development server, run:"
echo "  cd learnflow-project"
echo "  npm install"
echo "  npm run dev"
EOF

# Make script executable
chmod +x setup-learnflow-project.sh
