import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
  OrbitControls, 
  PresentationControls, 
  Float,
  Stars
} from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';

// ==================== 3D COMPONENTS ====================

// Neural Network Background Component
const NeuralNetwork = () => {
  const meshRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  // Create neural network nodes
  const nodes = useMemo(() => {
    const nodeArray = [];
    for (let i = 0; i < 30; i++) {
      nodeArray.push({
        position: [
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 15
        ],
        scale: Math.random() * 0.1 + 0.05,
      });
    }
    return nodeArray;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      
      // Mouse interaction
      meshRef.current.rotation.x += mouse.y * 0.1;
      meshRef.current.rotation.y += mouse.x * 0.1;
    }
  });

  return (
    <group ref={meshRef}>
      <Stars radius={50} depth={50} count={1000} factor={2} saturation={0} fade />
      {nodes.map((node, index) => (
        <Float key={index} speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh position={node.position as [number, number, number]}>
            <sphereGeometry args={[node.scale, 8, 8]} />
            <meshStandardMaterial
              color="#00ffff"
              transparent
              opacity={0.6}
              roughness={0.4}
              metalness={0.3}
              emissive="#00ffff"
              emissiveIntensity={0.2}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

// Simple 3D Project Card Component
const ProjectCard3D = ({ title }: { title: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.3}>
      <mesh ref={meshRef}>
        <boxGeometry args={[1.5, 2, 0.3]} />
        <meshStandardMaterial
          color="#0a0a0a"
          transparent
          opacity={0.8}
          roughness={0.2}
          metalness={0.8}
          emissive="#00ffff"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Floating particles around the card */}
      <group>
        {[...Array(8)].map((_, i) => (
          <mesh
            key={i}
            position={[
              Math.sin(i * 0.8) * 2,
              Math.cos(i * 0.6) * 1.5,
              Math.sin(i * 0.4) * 1
            ]}
          >
            <sphereGeometry args={[0.02, 8, 8]} />
            <meshStandardMaterial
              color="#00ffff"
              emissive="#00ffff"
              emissiveIntensity={0.5}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

// ==================== UI COMPONENTS ====================

// Navigation Component
const Navigation = ({ currentPage, setCurrentPage }: {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/30"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div 
          className="text-xl font-bold text-glow-cyan"
          whileHover={{ scale: 1.05 }}
        >
          [ ALEX NEURAL ]
        </motion.div>
        
        <div className="flex space-x-8">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`relative px-4 py-2 font-medium tracking-wider transition-all duration-300 ${
                currentPage === item.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
              {currentPage === item.id && (
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                  layoutId="activeTab"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              <motion.div
                className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary"
                whileHover={{ width: '100%', x: '-50%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

// Home Page Component
const HomePage = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />
          <NeuralNetwork />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <motion.div 
          className="text-center max-w-4xl px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 text-glow-cyan glitch"
            data-text="ARCHITECTING INTELLIGENCE"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            ARCHITECTING INTELLIGENCE
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-4xl font-light mb-8 text-glow-purple"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            ENGINEERING REALITY
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl mb-12 text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            GenAI & Backend Engineer specializing in scalable systems, 
            data pipelines, and intelligent model deployment.
          </motion.p>
          
          <motion.button
            onClick={() => setCurrentPage('projects')}
            className="btn-cyber text-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            EXPLORE MY WORK
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

// Timeline Item Component
const TimelineItem = ({ item, index }: {
  item: {
    year: string;
    title: string;
    company: string;
    description: string;
  };
  index: number;
}) => {
  return (
    <motion.div
      className="flex items-start space-x-6 mb-12"
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center">
        <motion.div
          className="w-4 h-4 rounded-full bg-primary animate-pulse-glow"
          whileInView={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        />
        {index < 3 && <div className="w-0.5 h-24 bg-gradient-to-b from-primary to-transparent mt-2" />}
      </div>
      
      <motion.div 
        className="flex-1 glass p-6 rounded-lg"
        whileHover={{ scale: 1.02, boxShadow: "0 0 30px hsl(var(--primary) / 0.3)" }}
      >
        <div className="text-sm text-primary font-mono mb-2">{item.year}</div>
        <h3 className="text-xl font-bold text-glow-cyan mb-1">{item.title}</h3>
        <div className="text-secondary mb-3 font-semibold">{item.company}</div>
        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
      </motion.div>
    </motion.div>
  );
};

// About Page Component
const AboutPage = () => {
  const timelineData = [
    {
      year: "2024",
      title: "Senior GenAI Engineer",
      company: "Neural Dynamics Corp",
      description: "Led development of next-gen AI models for enterprise automation. Built scalable inference pipelines handling 1M+ daily requests with 99.9% uptime."
    },
    {
      year: "2023",
      title: "Backend Architect",
      company: "DataFlow Systems",
      description: "Designed and implemented microservices architecture serving 50M+ users. Optimized database queries reducing response times by 60%."
    },
    {
      year: "2022",
      title: "ML Engineer",
      company: "AI Innovations Lab",
      description: "Developed and deployed machine learning models for real-time prediction systems. Specialized in NLP and computer vision applications."
    },
    {
      year: "2021",
      title: "Software Engineer",
      company: "TechStart Solutions",
      description: "Full-stack development with focus on backend systems. Built robust APIs and database architectures for high-performance applications."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 neural-grid">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-glow-purple mb-6">
            ABOUT THE ARCHITECT
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Philosophy Section */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-glow-cyan mb-6">
                Engineering Philosophy
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At the intersection of artificial intelligence and robust backend architecture, 
                  I craft systems that don't just process data—they understand it, learn from it, 
                  and evolve with it.
                </p>
                <p>
                  My expertise spans the entire AI lifecycle: from data pipeline architecture 
                  and model training to deployment optimization and real-time inference systems. 
                  I believe in building intelligent systems that are both powerful and maintainable.
                </p>
                <p>
                  Every line of code is written with scalability in mind, every database query 
                  optimized for performance, and every AI model designed for production reality.
                </p>
              </div>
            </div>

            <div className="glass p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-glow-pink mb-4">Core Competencies</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "GenAI & LLMs", "Python & PyTorch", "SQL Optimization", "Microservices",
                  "Cloud Architecture", "Data Pipelines", "API Design", "Model Deployment"
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="text-sm bg-muted/20 px-3 py-2 rounded border border-primary/30"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-glow-cyan mb-8">Journey Timeline</h2>
            <div className="relative">
              {timelineData.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ project, index, onExpand }: {
  project: {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    technologies: string[];
    highlights: string[];
  };
  index: number;
  onExpand: (project: any) => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="glass p-6 rounded-xl border border-primary/30 group cursor-pointer"
      whileHover={{ 
        scale: 1.02, 
        boxShadow: "0 0 40px rgba(0, 255, 255, 0.4)"
      }}
      onClick={() => onExpand(project)}
    >
      <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
        <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 5, 5]} intensity={1} color="#00ffff" />
          <pointLight position={[-5, -5, -5]} intensity={0.5} color="#ff00ff" />
          <ProjectCard3D title={project.title} />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={1}
          />
        </Canvas>
        
        {/* 3D Label Overlay */}
        <div className="absolute bottom-2 right-2 text-xs text-muted-foreground font-mono bg-background/20 px-2 py-1 rounded">
          3D_PROJECT.mesh
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-glow-cyan mb-2 group-hover:text-glow-pink transition-all">
        {project.title}
      </h3>
      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {project.technologies.slice(0, 4).map((tech, i) => (
          <span
            key={i}
            className="text-xs bg-primary/20 text-primary px-2 py-1 rounded border border-primary/30 font-mono"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="text-xs text-muted-foreground">
            +{project.technologies.length - 4} more
          </span>
        )}
      </div>
    </motion.div>
  );
};

// Project Modal Component
const ProjectModal = ({ project, onClose }: {
  project: any;
  onClose: () => void;
}) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute inset-0 bg-background/80 backdrop-blur-md"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      
      <motion.div
        className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto glass p-8 rounded-xl border border-primary/30"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground text-2xl"
        >
          ×
        </button>
        
        <h2 className="text-3xl font-bold text-glow-cyan mb-4">{project.title}</h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">{project.longDescription}</p>
        
        <div className="mb-6">
          <h3 className="text-xl font-bold text-glow-purple mb-3">Key Highlights</h3>
          <ul className="space-y-2">
            {project.highlights.map((highlight: string, index: number) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-primary">▶</span>
                <span className="text-muted-foreground">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-glow-pink mb-3">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string, index: number) => (
              <span
                key={index}
                className="bg-primary/20 text-primary px-3 py-1 rounded border border-primary/30 font-mono text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Projects Page Component
const ProjectsPage = () => {
  const [expandedProject, setExpandedProject] = useState<any>(null);

  const projects = [
    {
      id: "neural-pipeline",
      title: "Neural Processing Pipeline",
      description: "Scalable AI inference system processing 1M+ requests daily with sub-100ms latency.",
      longDescription: "A comprehensive AI model serving infrastructure built for enterprise-scale applications. The system handles multiple model types including NLP, computer vision, and recommendation engines with automatic scaling and load balancing.",
      technologies: ["Python", "PyTorch", "FastAPI", "Redis", "PostgreSQL", "Docker", "Kubernetes", "AWS"],
      highlights: [
        "99.9% uptime with automatic failover mechanisms",
        "Sub-100ms response times for real-time inference",
        "Horizontal scaling supporting 1M+ daily requests",
        "Multi-model serving with dynamic resource allocation",
        "Comprehensive monitoring and alerting system"
      ]
    },
    {
      id: "data-orchestrator",
      title: "Data Orchestration Engine",
      description: "Real-time data processing system handling multi-terabyte datasets with intelligent routing.",
      longDescription: "A sophisticated data pipeline orchestration system that processes, transforms, and routes large-scale datasets in real-time. Features intelligent data quality monitoring, automatic schema evolution, and fault-tolerant processing.",
      technologies: ["Apache Kafka", "Apache Spark", "Python", "SQL", "Apache Airflow", "Elasticsearch", "MongoDB"],
      highlights: [
        "Processing 10TB+ of data daily with zero data loss",
        "Real-time stream processing with microsecond precision",
        "Automated data quality validation and correction",
        "Self-healing pipeline architecture",
        "Cost-optimized storage and compute resources"
      ]
    },
    {
      id: "ai-chatbot",
      title: "Enterprise AI Assistant",
      description: "LLM-powered conversational AI with context awareness and enterprise integration.",
      longDescription: "An advanced conversational AI system built on state-of-the-art language models, featuring context-aware responses, enterprise system integration, and advanced natural language understanding capabilities.",
      technologies: ["OpenAI GPT", "LangChain", "Python", "React", "WebSocket", "PostgreSQL", "Azure"],
      highlights: [
        "Context-aware conversations with memory persistence",
        "Integration with 50+ enterprise systems",
        "Multi-language support with real-time translation",
        "Advanced intent recognition and entity extraction",
        "Customizable personality and response patterns"
      ]
    },
    {
      id: "ml-platform",
      title: "MLOps Platform",
      description: "End-to-end machine learning platform with automated training, deployment, and monitoring.",
      longDescription: "A comprehensive MLOps platform that streamlines the entire machine learning lifecycle from data ingestion to model deployment and monitoring. Features automated retraining, A/B testing, and comprehensive model performance tracking.",
      technologies: ["MLflow", "Kubeflow", "Python", "TensorFlow", "PyTorch", "Grafana", "Prometheus", "GCP"],
      highlights: [
        "Automated model training and hyperparameter optimization",
        "One-click model deployment with canary releases",
        "Real-time model performance monitoring and drift detection",
        "Integrated A/B testing framework for model validation",
        "Comprehensive experiment tracking and reproducibility"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-glow-purple mb-6">
            PROJECT SHOWCASE
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions at the intersection of AI and backend engineering
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onExpand={setExpandedProject}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {expandedProject && (
          <ProjectModal
            project={expandedProject}
            onClose={() => setExpandedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

// Contact Page Component
const ContactPage = () => {
  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "alex.neural@techmail.com",
      link: "mailto:alex.neural@techmail.com"
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "/in/alexneural",
      link: "https://linkedin.com/in/alexneural"
    },
    {
      icon: "🔗",
      label: "GitHub",
      value: "/alexneural",
      link: "https://github.com/alexneural"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 neural-grid relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 10] }}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} color="#00ffff" />
          <Stars radius={50} depth={50} count={500} factor={1} saturation={0} fade />
          <Float speed={0.5} rotationIntensity={0.2} floatIntensity={0.2}>
            <mesh position={[3, 2, -5]}>
              <sphereGeometry args={[1, 32, 32]} />
              <meshStandardMaterial
                color="#ff00ff"
                transparent
                opacity={0.1}
                roughness={0.4}
                metalness={0.3}
                emissive="#ff00ff"
                emissiveIntensity={0.05}
              />
            </mesh>
          </Float>
        </Canvas>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-glow-cyan mb-6">
            LET'S COLLABORATE
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to build the future together? Let's connect and create something extraordinary.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="glass p-12 rounded-2xl text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-glow-purple mb-8">
              Get In Touch
            </h2>
            
            <div className="grid sm:grid-cols-3 gap-8">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 rounded-xl border border-primary/30 hover:border-primary transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 0 30px hsl(var(--primary) / 0.4)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {contact.icon}
                  </div>
                  <h3 className="text-lg font-bold text-glow-cyan mb-2">
                    {contact.label}
                  </h3>
                  <p className="text-muted-foreground font-mono text-sm">
                    {contact.value}
                  </p>
                </motion.a>
              ))}
            </div>

            <motion.div
              className="mt-12 pt-8 border-t border-border/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <p className="text-muted-foreground mb-4">
                Currently available for freelance projects and full-time opportunities
              </p>
              <div className="flex justify-center space-x-4">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-green-500 font-mono">Available for hire</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// ==================== MAIN APP COMPONENT ====================

const Index = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const pageVariants = {
    initial: { opacity: 0, x: 100 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -100 }
  };

  const pageTransition = {
    type: "tween" as const,
    ease: "anticipate" as const,
    duration: 0.5
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          {renderCurrentPage()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Index;