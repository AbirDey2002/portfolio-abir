// Socials Page Component (inspired by Uiverse.io by vinodjangid07)
const SocialsPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 flex items-center justify-center">
      <div className="card relative w-[260px] h-[260px] rounded-3xl overflow-hidden border-2 border-white/80 shadow-xl">
        <div className="background absolute inset-0" />
        <div className="logo absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 transition-all duration-700 text-white tracking-[3px] font-semibold text-lg">
          Socials
        </div>

        <a href="#" className="absolute inset-0">
          <div className="box box1 absolute p-2 text-right bg-white/40 border-t-2 border-white rounded-[10%_13%_42%_0%/10%_12%_75%_0%] shadow-[rgba(100,100,111,0.36)_-7px_7px_29px_0px] transition-all duration-1000">
            <span className="icon inline-block w-5 h-5">
              <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" className="svg w-full fill-white/80 transition-all duration-500"><path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path></svg>
            </span>
          </div>
        </a>

        <a href="#" className="absolute inset-0">
          <div className="box box2 absolute p-2 text-right bg-white/40 border-t-2 border-white rounded-[10%_13%_42%_0%/10%_12%_75%_0%] shadow-[rgba(100,100,111,0.36)_-7px_7px_29px_0px] transition-all duration-1000">
            <span className="icon inline-block w-5 h-5">
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="svg w-full fill-white/80 transition-all duration-500"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
            </span>
          </div>
        </a>

        <a href="#" className="absolute inset-0">
          <div className="box box3 absolute p-2 text-right bg-white/40 border-t-2 border-white rounded-[10%_13%_42%_0%/10%_12%_75%_0%] shadow-[rgba(100,100,111,0.36)_-7px_7px_29px_0px] transition-all duration-1000">
            <span className="icon inline-block w-5 h-5">
              <svg viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" className="svg w-full fill-white/80 transition-all duration-500"><path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path></svg>
            </span>
          </div>
        </a>

        <div className="box box4 absolute p-2 bg-white/40 border-t-2 border-white rounded-[10%_13%_42%_0%/10%_12%_75%_0%] shadow-[rgba(100,100,111,0.36)_-7px_7px_29px_0px] transition-all duration-1000" />
      </div>

      <style>{`
        .card:hover { transform: scale(1.1); }
        .card:hover .box { bottom: -1px; left: -1px; }
        .card:hover .logo { transform: translate(70px, -52px); letter-spacing: 0px; }
        .box1 { width: 70%; height: 70%; bottom: -70%; left: -70%; }
        .box2 { width: 50%; height: 50%; bottom: -50%; left: -50%; transition-delay: .2s; }
        .box3 { width: 30%; height: 30%; bottom: -30%; left: -30%; transition-delay: .4s; }
        .box4 { width: 10%; height: 10%; bottom: -10%; left: -10%; transition-delay: .6s; }
        .box1::before, .box2::before, .box3::before { content: ""; position: absolute; inset: 0; border-radius: inherit; opacity: 0; transition: all .5s ease-in-out; }
        .box1:hover::before { opacity: 1; background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #ff53d4 60%, #62c2fe 90%); }
        .box2:hover::before { opacity: 1; background: radial-gradient(circle at 30% 107%, #91e9ff 0%, #00ACEE 90%); }
        .box3:hover::before { opacity: 1; background: radial-gradient(circle at 30% 107%, #969fff 0%, #b349ff 90%); }
        .box:hover .svg { filter: drop-shadow(0 0 5px white); fill: white; }
      `}</style>
    </div>
  );
};
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
  OrbitControls, 
  PresentationControls, 
  Float,
  Stars,
  Text,
  Billboard,
  useTexture
} from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';

// Helper to resolve asset URLs correctly under GitHub Pages subpath
const resolveAsset = (relativePath: string): string => {
  const base = (import.meta.env.BASE_URL || '/');
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  return new URL(relativePath, origin + base).href;
};

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

// (Removed 3D project card rendering in favor of static image previews)

// 3D Skills Sphere Component
const SkillsSphere = ({ skills }: { skills: string[] }) => {
  // Distribute points approximately evenly on a sphere using the golden spiral method
  const radius = 6;
  const texture = useTexture(resolveAsset('/profile.jpg'));
  const points = useMemo(() => {
    const phi = Math.PI * (3 - Math.sqrt(5));
    const base = skills.map((_, i) => {
      const y = 1 - (i / (skills.length - 1)) * 2; // y from 1 to -1
      const r = Math.sqrt(1 - y * y);
      const theta = phi * i;
      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r;
      return new THREE.Vector3(x, y, z).multiplyScalar(radius);
    });

    // Exclude labels from a cone in front of the camera (profile image area)
    const forward = new THREE.Vector3(0, 0, -1);
    const yAxis = new THREE.Vector3(0, 1, 0);
    const minCosine = 0.95; // within ~18° of forward
    const shiftAngle = 0.8; // radians (~46°)

    return base.map((v, idx) => {
      const cosine = v.clone().normalize().dot(forward);
      if (cosine > minCosine) {
        const angle = (idx % 2 === 0 ? 1 : -1) * shiftAngle;
        const shifted = v.clone().applyAxisAngle(yAxis, angle);
        return shifted;
      }
      return v;
    });
  }, [skills]);

  // Gentle rotation
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Inside sphere surface for subtle ambiance */}
      <mesh scale={[-radius - 0.2, radius + 0.2, radius + 0.2]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#0a0a0a" side={THREE.BackSide} transparent opacity={0.6} />
      </mesh>

      {/* Profile image placed on inner sphere surface in front of initial camera */}
      <Billboard position={[0, 0, -(radius - 0.05)]} follow>
        <group>
          <mesh>
            <circleGeometry args={[1.6, 64]} />
            <meshBasicMaterial map={texture} toneMapped={false} />
          </mesh>
          {/* subtle glow */}
          <mesh position={[0, 0, -0.02]}> 
            <circleGeometry args={[1.9, 64]} />
            <meshBasicMaterial color="#00ffff" transparent opacity={0.12} />
          </mesh>
        </group>
      </Billboard>

      {points.map((pos, i) => (
        <Billboard key={i} position={pos.toArray()} follow>
          <Float speed={2} rotationIntensity={0.2} floatIntensity={0.4}>
            <Text
              fontSize={0.6}
              color="#cde9ff"
              anchorX="center"
              anchorY="middle"
              outlineWidth={0.005}
              outlineColor="#0ea5e9"
            >
              {skills[i]}
            </Text>
          </Float>
        </Billboard>
      ))}
    </group>
  );
};

// ==================== UI COMPONENTS ====================

// Navigation Component
const Navigation = ({ currentPage, setCurrentPage }: {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
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
          Abir Dey
        </motion.div>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-8">
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

        {/* Mobile burger */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded hover:bg-white/10 focus:outline-none"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 2.5H25" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M3 10H25" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M3 17.5H25" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="md:hidden absolute right-4 top-16 z-50 rounded-lg p-2 w-48 border border-border/30 backdrop-blur-md bg-black/80">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setCurrentPage(item.id); setMenuOpen(false); }}
              className={`block w-full text-left px-3 py-2 rounded hover:bg-white/10 ${
                currentPage === item.id ? 'text-primary' : 'text-foreground'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
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
            className="text-4xl sm:text-5xl md:text-8xl font-bold mb-4 md:mb-6 text-glow-cyan glitch"
            data-text="ARCHITECTING INTELLIGENCE"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            ARCHITECTING INTELLIGENCE
          </motion.h1>
          
          <motion.h2 
            className="text-xl sm:text-2xl md:text-4xl font-light mb-6 md:mb-8 text-glow-purple"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            ENGINEERING REALITY
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl mb-8 md:mb-12 text-muted-foreground max-w-2xl mx-auto leading-relaxed"
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
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  const skillsData = [
    {
      name: "GenAI & LLMs",
      subSkills: ["OpenAI", "Anthropic", "Gemini", "Grok", "HuggingFace"]
    },
    {
      name: "Python",
      subSkills: ["PyTorch", "Scikit-learn", "NumPy", "Matplotlib", "Flask", "Pandas"]
    },
    {
      name: "React",
      subSkills: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React Router", "Redux/Zustand", "Hooks", "Component Libraries"]
    },
    {
      name: "SQL Optimization", 
      subSkills: ["Software Design", "SQLAlchemy", "Alembic", "PostgreSQL", "Oracle", "MongoDB", "Normalization", "ACID Compliance"]
    },
    {
      name: "Microservices",
      subSkills: ["FastAPI", "Docker", "Kubernetes", "gRPC", "Service Mesh", "Load Balancing", "Circuit Breakers"]
    },
    {
      name: "Data Pipelines",
      subSkills: ["Apache Kafka", "Apache Spark", "Apache Airflow", "ETL/ELT", "Stream Processing", "Batch Processing"]
    },
    {
      name: "API Design",
      subSkills: ["REST APIs", "GraphQL", "OpenAPI/Swagger", "Rate Limiting", "Authentication", "Versioning"]
    },
    {
      name: "Cloud Architecture",
      subSkills: ["AWS", "Azure", "GCP", "Terraform", "CI/CD", "Auto Scaling", "Load Balancers", "Containerization"]
    },
    {
      name: "Model Deployment",
      subSkills: ["MLOps", "Docker", "Kubernetes", "Model Serving", "A/B Testing", "Model Monitoring", "Inference Optimization"]
    }
  ];

  const timelineData = [
    {
      year: "2024-25",
      title: "Data Scientist",
      company: "Intellect Design Arena",
      description: "Engineered Expert Agents powered by Purple Fabric for LOB-level automation solutions. Developed AI-driven testing platforms including TestGen.AI and PixelPerfect.AI, spanning UI testing and automation across iGTB, iGCB, and iAI product lines. Led RM-EA/Ops-EA optimization and OnboardingEA maintenance initiatives."
    },
    {
      year: "2022",
      title: "ML Intern",
      company: "Teachnook Bengaluru",
      description: "Trained generative models for synthetic handwriting data creation to augment vision model datasets. Focused on developing robust data generation pipelines for handwritten text recognition systems, improving model performance through diverse synthetic training samples."
    },
    {
      year: "2020-24",
      title: "CSE student specializing in AI/ML",
      company: "VIT Bhopal",
      description: "Graduated with 8.75 CGPA specializing in AI/ML, with focus on machine learning, deep learning, and natural language processing. Worked on various projects including image classification, object detection, and natural language processing with a final year project on LLM-RAG based job search platform."
    },
    {
      year: "2018-20",
      title: "Science Student",
      company: "Higher Secondary Education",
      description: "Excelled in Science stream with CGPA of 8.7 in Class XII and 9.4 in Class X. Achieved 94th percentile in JEE examination, demonstrating strong foundation in mathematics, physics, and analytical problem-solving that laid the groundwork for engineering excellence."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 neural-grid branded-scroll overflow-y-auto">
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

        {/* Profile Image replaced with 3D Skills Sphere preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass rounded-full overflow-hidden mb-16 mx-auto max-w-xl"
        >
          <div className="aspect-square h-auto">
            <Canvas camera={{ position: [0, 0, 0.1], fov: 60 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
              <pointLight position={[-10, -10, -10]} intensity={0.6} color="#ff00ff" />
              <SkillsSphere
                skills={["GenAI", "LLMs", "OpenAI", "Anthropic", "Gemini", "Grok", "HuggingFace", "Python", "PyTorch", "Scikit-learn", "NumPy", "Matplotlib", "Pandas", "FastAPI", "Kafka", "Spark", "Airflow", "ETL", "ELT", "Streaming", "SQL", "PostgreSQL", "MongoDB", "SQLAlchemy", "Alembic", "ACID", "Microservices", "Docker", "Kubernetes", "gRPC", "Service Mesh", "REST", "GraphQL", "OpenAPI", "AWS", "Azure", "GCP", "Terraform", "CI/CD", "Deployment", "Model Serving", "Monitoring", "React", "Next.js", "Tailwind", "Framer Motion", "TypeScript"]}
              />
              <OrbitControls enablePan={false} enableZoom={true} />
            </Canvas>
          </div>
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
              <div className="space-y-4">
                {skillsData.map((skillCategory, index) => (
                  <div key={skillCategory.name}>
                    <motion.button
                      className="w-full text-left text-sm bg-muted/20 px-3 py-2 rounded border border-primary/30 hover:border-primary transition-all duration-300 flex items-center justify-between group"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setExpandedSkill(expandedSkill === skillCategory.name ? null : skillCategory.name)}
                    >
                      <span className="group-hover:text-glow-cyan transition-all duration-300">
                        {skillCategory.name}
                      </span>
                      <motion.span 
                        className="text-primary ml-2"
                        animate={{ rotate: expandedSkill === skillCategory.name ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        ▼
                      </motion.span>
                    </motion.button>
                    
                    <AnimatePresence>
                      {expandedSkill === skillCategory.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, y: -10 }}
                          animate={{ opacity: 1, height: "auto", y: 0 }}
                          exit={{ opacity: 0, height: 0, y: -10 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="mt-3 ml-4 grid grid-cols-2 gap-2"
                        >
                          {skillCategory.subSkills.map((subSkill, subIndex) => (
                            <motion.div
                              key={subSkill}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: subIndex * 0.1, duration: 0.3 }}
                              className="bg-blue-600 text-blue-100 px-3 py-2 rounded-lg text-xs font-medium hover:bg-blue-700 transition-all duration-300 cursor-default border border-blue-500/50 hover:border-blue-400"
                              whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)" }}
                            >
                              {subSkill}
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
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

            {/* Removed second Skills Sphere to avoid duplication */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Project Card Component (Netflix-style)
const ProjectCard = ({ project, index, isSelected, onSelect, setRef }: {
  project: {
    id: string;
    title: string;
    description: string;
    image?: string;
    longDescription: string;
    technologies: string[];
    highlights: string[];
  };
  index: number;
  isSelected: boolean;
  onSelect: (index: number, open: boolean) => void;
  setRef: (el: HTMLDivElement | null) => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => onSelect(index, true)}
      className={`relative cursor-pointer rounded-xl overflow-hidden group ${isSelected ? 'opacity-100' : 'opacity-60 hover:opacity-80'}`}
      style={{
        minWidth: isSelected ? '70%' : '24%',
        maxWidth: isSelected ? '70%' : '24%'
      }}
      whileHover={{}}
      layout
      ref={setRef}
    >
      <div className="relative w-full h-[26rem]">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className={`absolute inset-0 w-full h-full ${isSelected ? 'object-contain' : 'object-cover blur-[2px] scale-110 opacity-70'} transition-all duration-500`} 
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 text-muted-foreground">
            No preview
          </div>
        )}
        {/* Overlay text */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-300`} />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 truncate">{project.title}</h3>
          <p className="text-sm md:text-base text-white/80 max-w-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 line-clamp-2">
            {project.description}
          </p>
        </div>
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
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute inset-0 bg-background/80 backdrop-blur-md"
        onClick={onClose}
        onWheel={(e) => { e.stopPropagation(); e.preventDefault(); }}
        onTouchMove={(e) => { e.stopPropagation(); e.preventDefault(); }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      
      <motion.div
        className="relative max-w-6xl w-full h-[70vh] overflow-y-auto overscroll-contain project-modal-scroll glass p-8 pr-6 rounded-xl border border-primary/30"
        onWheel={(e) => { e.stopPropagation(); }}
        onTouchMove={(e) => { e.stopPropagation(); }}
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

        {project.link && (
          <div className="mb-6">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber inline-block"
            >
              Visit Site ↗
            </a>
          </div>
        )}
        
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

        {/* Branded scrollbar styling for modal content */}
        <style>{`
          .project-modal-scroll { scrollbar-width: thin; scrollbar-color: #7de3ff1a transparent; }
          .project-modal-scroll::-webkit-scrollbar { width: 10px; }
          .project-modal-scroll::-webkit-scrollbar-track { background: rgba(15, 18, 24, 0.6); border-radius: 8px; }
          .project-modal-scroll::-webkit-scrollbar-thumb { background: #7de3ff; border-radius: 8px; box-shadow: 0 0 10px #7de3ffaa; }
          .project-modal-scroll::-webkit-scrollbar-thumb:hover { background: #aef0ff; box-shadow: 0 0 12px #aef0ffaa; }
        `}</style>
      </motion.div>
    </motion.div>
  );
};

// Projects Page Component
const ProjectsPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [, forceRender] = useState(0);
  const progressRef = useRef(0); // displayed progress [0..1]
  const targetRef = useRef(0);   // target progress [0..1]
  const rafIdRef = useRef<number | null>(null);

  // Easing helpers
  const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
  const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

  useEffect(() => {
    const SCROLL_GAIN = 0.0006; // reduced wheel sensitivity
    const DAMPING = 0.12;       // inertial smoothing (0..1)

    const handleWheel = (e: WheelEvent) => {
      // If a modal is open and the event originated inside it, let it scroll
      const targetEl = e.target as HTMLElement | null;
      if (targetEl && targetEl.closest('.project-modal-scroll')) {
        return; // allow modal to handle scrolling
      }
      e.preventDefault();
      targetRef.current = clamp01(targetRef.current + e.deltaY * SCROLL_GAIN);
      if (rafIdRef.current === null) startRaf();
    };

    const startRaf = () => {
      const loop = () => {
        // Smoothly approach target
        const delta = targetRef.current - progressRef.current;
        progressRef.current += delta * DAMPING;

        // Stop when very close to target to save CPU
        if (Math.abs(delta) < 0.0005) {
          progressRef.current = targetRef.current;
          rafIdRef.current = null;
          return;
        }
        // Trigger a repaint for visual update
        forceRender((v) => (v + 1) & 0xffff);
        rafIdRef.current = requestAnimationFrame(loop);
      };
      rafIdRef.current = requestAnimationFrame(loop);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }
    return () => {
      if (container) container.removeEventListener('wheel', handleWheel);
      if (rafIdRef.current !== null) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  // Use the same skills shown on other pages (e.g., About and SkillsSphere)
  const baseSkills: string[] = [
    "GenAI", "LLMs", "OpenAI", "Anthropic", "Gemini", "Grok", "HuggingFace",
    "Python", "PyTorch", "Scikit-learn", "NumPy", "Matplotlib", "Pandas",
    "FastAPI", "Kafka", "Spark", "Airflow", "ETL", "ELT", "Streaming",
    "SQL", "PostgreSQL", "MongoDB", "SQLAlchemy", "Alembic", "ACID",
    "Microservices", "Docker", "Kubernetes", "gRPC", "Service Mesh",
    "REST", "GraphQL", "OpenAPI", "AWS", "Azure", "GCP", "Terraform",
    "CI/CD", "Deployment", "Model Serving", "Monitoring", "React",
    "Next.js", "Tailwind", "Framer Motion", "TypeScript"
  ];

  const cssGridItems: (string | null)[] = (() => {
    const items = [...baseSkills];
    // Insert a special center cell around the 11th position like the original
    const insertIndex = Math.min(10, items.length);
    items.splice(insertIndex, 0, null);
    return items;
  })();

  // Projects data (images may reside in /public)
  const projects = [
    {
      id: "cortexa",
      title: "Cortexa – AI Testing Agent",
      description: "AI agent that ingests CRs, FSDs, BRDs to auto‑generate test suites in minutes.",
      longDescription: "Cortexa accelerates QA by turning product documents (change requests, functional specs, business requirements, etc.) into executable test collateral. Powered by Claude Sonnet 4 and domain‑tuned prompts, it extracts entities, constraints, flows, and edge cases, then generates requirement statements, test scenarios, and detailed test cases with clear steps, data, and expected results. The React UI streams results live with traceability to source spans.",
      image: resolveAsset('/cortexa.png'),
      link: "https://example.com/cortexa",
      technologies: ["React", "TypeScript", "Tailwind CSS", "FastAPI", "Python", "PostgreSQL", "Claude Sonnet 4", "LangChain", "Docker"],
      highlights: [
        "Automated parsing of BRDs/FSDs/CRs",
        "Pipeline from requirements → scenarios → test cases",
        "Edge‑case discovery with broad coverage",
        "Traceability to source paragraphs"
      ]
    },
    {
      id: "data-orchestrator",
      title: "Data Orchestration Engine",
      description: "Real-time processing with schema evolution and self-healing pipelines.",
      longDescription: "A sophisticated orchestration system to process, transform, and route large-scale datasets in real-time. Features intelligent data quality monitoring, automatic schema evolution, and fault-tolerant processing.",
      technologies: ["Apache Kafka", "Apache Spark", "Python", "SQL", "Airflow", "Elasticsearch", "MongoDB"],
      highlights: [
        "10TB+/day throughput",
        "Microsecond stream processing",
        "Automated data quality",
        "Cost-optimized compute"
      ]
    },
    {
      id: "ai-chatbot",
      title: "Enterprise AI Assistant",
      description: "LLM-powered assistant with memory and enterprise integrations.",
      longDescription: "Context-aware conversational AI with enterprise integrations, multi-language support, and advanced NLU.",
      technologies: ["OpenAI GPT", "LangChain", "Python", "React", "WebSocket", "PostgreSQL", "Azure"],
      highlights: [
        "Persistent memory",
        "50+ integrations",
        "Real-time translation",
        "Customizable behavior"
      ]
    },
    {
      id: "portfolio",
      title: "Portfolio Website",
      description: "Production‑grade personal portfolio showcasing engineering work with immersive motion design, 3D scenes, parallax, and scroll‑driven storytelling.",
      longDescription: "This portfolio is engineered as a performant, interactive showcase of my work. It blends React + TypeScript with Tailwind and Framer Motion for smooth micro‑interactions, and integrates Three.js via @react-three/fiber for 3D scenes. Sections are sequenced with scroll‑driven animation and staged transitions (e.g., parallax background, center‑zoom project reveals). The architecture emphasizes clarity and component reusability, with carefully tuned accessibility, prefers‑reduced‑motion fallbacks, and responsive layouts. The result is a narrative experience that puts real projects first while keeping the UI fast, vivid, and discoverable.",
      image: resolveAsset('/portfolio.png'),
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "Three.js"],
      highlights: [
        "3D scenes via @react-three/fiber with lightweight materials",
        "Center‑zoom project sequencing with inertial scroll handling",
        "Parallax text grid with depth, blur, and easing",
        "Responsive, accessible motion with reduced‑motion support",
        "Typed React components and maintainable styling with Tailwind"
      ]
    }
  ];

  const [modalProject, setModalProject] = useState<any>(null);
  const [imageRatios, setImageRatios] = useState<Record<string, number>>({});

  const handleImageLoad = (id: string) => (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    if (img.naturalWidth && img.naturalHeight) {
      const ratio = img.naturalWidth / img.naturalHeight;
      setImageRatios((prev) => ({ ...prev, [id]: ratio }));
    }
  };

  // Determine how each card should appear across progress [0..1], one after another
  const getCardStyle = (index: number, progress: number): React.CSSProperties => {
    // Each card owns a window after the center title finishes
    // Start shortly after 0.50 so "Project Showcase" completes before first card
    const start = 0.28 + index * 0.18; // start a bit earlier after title
    const end = start + 0.15;          // slightly shorter window to create clear gaps
    const t = (progress - start) / (end - start);

    // Outside window: fully hidden and non-interactive
    if (t <= 0 || t >= 1) {
      return {
        opacity: 0,
        transform: 'translate(-50%, -50%) scale(0.01)',
        pointerEvents: 'none'
      };
    }

    // Phases: 0..0.45 zoom in; 0.45..0.80 hold; 0.80..1 fade out/zoom past (linger more)
    let scale: number;
    let opacity: number;
    if (t < 0.45) {
      const u = t / 0.45; // 0..1
      const ease = u * u * (3 - 2 * u); // smoothstep
      scale = 0.01 + (1.0 - 0.01) * ease; // 1% -> 100% size
      opacity = Math.min(1, u / 0.2); // quick fade in
    } else if (t < 0.8) {
      scale = 1.0;
      opacity = 1.0;
    } else {
      const u = (t - 0.8) / 0.2; // 0..1
      scale = 1.0 + 0.08 * u; // slight push past center
      opacity = 1.0 - u;      // fade out
    }

    return {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: 'min(80vw, 1100px)',
      maxHeight: '80vh',
      transform: `translate(-50%, -50%) scale(${scale})`,
      opacity,
      pointerEvents: t > 0.2 && t < 0.8 ? 'auto' : 'none'
    };
  };

  const getAnimationProgress = (index: number, progress: number): { transform: string; opacity: number; filter: string; backfaceVisibility: 'hidden' } => {
    const ranges: Record<number, [number, number]> = {
      1: [0.40, 0.50], 2: [0.20, 0.30], 3: [0.52, 0.62], 4: [0.50, 0.60], 5: [0.45, 0.55],
      6: [0.10, 0.20], 7: [0.90, 1.00], 8: [0.30, 0.40], 9: [0.80, 0.90], 10: [0.70, 0.80],
      11: [-0.10, 0.50], 12: [0.52, 0.62], 13: [0.15, 0.25], 14: [0.07, 0.17], 15: [0.75, 0.85],
      16: [0.03, 0.13], 17: [0.87, 0.97], 18: [0.42, 0.52], 19: [0.57, 0.67], 20: [0.37, 0.47],
      21: [0.12, 0.22], 22: [0.08, 0.18], 23: [0.84, 0.94], 24: [0.33, 0.43], 25: [0.48, 0.58],
      26: [0.13, 0.23], 27: [0.78, 0.88], 28: [0.62, 0.72], 29: [0.31, 0.41], 30: [0.08, 0.18],
      31: [0.04, 0.14], 32: [0.74, 0.84], 33: [0.61, 0.71], 34: [0.26, 0.36], 35: [0.63, 0.73],
      36: [0.11, 0.21], 37: [0.89, 0.99], 38: [0.33, 0.43], 39: [0.88, 0.98], 40: [0.22, 0.32],
      41: [0.16, 0.26], 42: [0.26, 0.36], 43: [0.66, 0.76], 44: [0.03, 0.13], 45: [0.44, 0.54],
      46: [0.11, 0.21], 47: [0.23, 0.33], 48: [0.39, 0.49], 49: [0.59, 0.69], 50: [0.06, 0.16],
      999: [0.95, 1.00] // END label appears at the very end
    };

    const [start, end] = ranges[index] || [0, 1];
    const range = end - start;
    const local = (progress - start) / range;

    // Out of range: keep far away and blurred
    if (local < 0 || local > 1) {
      return { transform: 'translate3d(0,0,-2200px)', opacity: 0, filter: 'blur(8px)', backfaceVisibility: 'hidden' };
    }

    // Ease for smoother acceleration through Z
    const eased = easeInOutQuad(local);

    const NEAR_Z = -2200;  // starts far behind
    const MID_Z = 0;       // in focus
    const FAR_Z = 2200;    // flies past camera
    const BLUR_MAX = 8;

    let z: number;
    let opacity: number;
    let blur: number;

    if (eased < 0.5) {
      const t = eased * 2; // 0..1 to reach MID_Z
      z = NEAR_Z + (MID_Z - NEAR_Z) * t;
      opacity = t;
      blur = BLUR_MAX * (1 - t);
    } else {
      const t = (eased - 0.5) * 2; // 0..1 from MID_Z to FAR_Z
      z = MID_Z + (FAR_Z - MID_Z) * t;
      opacity = 1 - t;
      blur = BLUR_MAX * t;
    }

    return {
      transform: `translate3d(0,0,${z}px)`,
      opacity,
      filter: `blur(${blur}px)`,
      backfaceVisibility: 'hidden'
    };
  };

  // END label style: approach center then stay fixed in focus without flying past
  const getEndStyle = (progress: number): { transform: string; opacity: number; filter: string; backfaceVisibility: 'hidden' } => {
    const [start, end] = [0.95, 1.0];
    const range = end - start;
    const local = (progress - start) / range;
    if (local < 0) {
      return { transform: 'translate3d(0,0,-2200px)', opacity: 0, filter: 'blur(8px)', backfaceVisibility: 'hidden' };
    }
    const eased = easeInOutQuad(Math.min(1, Math.max(0, local)));
    const NEAR_Z = -2200;
    const MID_Z = 0;
    const BLUR_MAX = 8;

    if (eased < 0.5) {
      const t = eased * 2; // approach center
      const z = NEAR_Z + (MID_Z - NEAR_Z) * t;
      const opacity = t;
      const blur = BLUR_MAX * (1 - t);
      return { transform: `translate3d(0,0,${z}px)`, opacity, filter: `blur(${blur}px)`, backfaceVisibility: 'hidden' };
    }
    // Lock at center with full opacity and no blur
    return { transform: 'translate3d(0,0,0px)', opacity: 1, filter: 'blur(0px)', backfaceVisibility: 'hidden' };
  };

  const getGridArea = (index: number): string => {
    const areas: Record<number, string> = {
      1: '1/1', 2: '1/2', 3: '1/3', 4: '1/4', 5: '2/1', 6: '2/2',
      7: '2/3', 8: '2/4', 9: '3/1', 10: '3/2', 11: '3/3', 12: '3/4',
      13: '4/1', 14: '4/2', 15: '4/3', 16: '4/4', 17: '2/1', 18: '2/2',
      19: '2/3', 20: '2/4', 21: '3/1', 22: '3/2', 23: '3/3', 24: '3/4',
      25: '1/1', 26: '1/2', 27: '1/3', 28: '1/4', 29: '4/1', 30: '4/2',
      31: '4/3', 32: '4/4', 33: '2/1', 34: '2/2', 35: '2/3', 36: '2/4',
      37: '3/1', 38: '3/2', 39: '3/3', 40: '3/4', 41: '1/1', 42: '1/2',
      43: '1/3', 44: '1/4', 45: '4/1', 46: '4/2', 47: '4/3', 48: '4/4',
      49: '3/1', 50: '3/2'
    };
    return areas[index] || '1/1';
  };

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 overflow-hidden"
      style={{
        perspective: '700px',
        transformStyle: 'preserve-3d'
      }}
    >
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 place-items-center" style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}>
        {cssGridItems.map((item, index) => {
          if (item === null) {
            const style = getAnimationProgress(11, progressRef.current);
            return (
              <div
                key={index}
                className="col-span-2 row-span-2 text-glow-cyan font-bold"
                style={{
                  gridRow: '2 / span 2',
                  gridColumn: '2 / span 2',
                  transformStyle: 'preserve-3d',
                  fontSize: '5vmin',
                  fontWeight: 300,
                  whiteSpace: 'nowrap',
                  willChange: 'transform, opacity, filter',
                  color: '#7de3ff',
                  ...style
                }}
              >
                <b style={{ fontSize: '15vmin' }} className="text-glow-cyan font-bold">PROJECT SHOWCASE</b>
              </div>
            );
          }
          const style = getAnimationProgress(index + 1, progressRef.current);
          return (
            <div
              key={index}
              style={{
                gridArea: getGridArea(index + 1),
                transformStyle: 'preserve-3d',
                fontSize: '5vmin',
                fontWeight: 300,
                whiteSpace: 'nowrap',
                willChange: 'transform, opacity, filter',
                color: '#7de3ff',
                ...style
              }}
              className="text-glow-cyan"
            >
              {item}
            </div>
          );
        })}
        {/* END label at the tail of the sequence */}
        <div
          className="col-span-2 row-span-2 text-glow-cyan font-bold"
          style={{
            gridRow: '2 / span 2',
            gridColumn: '2 / span 2',
            transformStyle: 'preserve-3d',
            fontSize: '5vmin',
            fontWeight: 300,
            whiteSpace: 'nowrap',
            willChange: 'transform, opacity, filter',
            color: '#7de3ff',
            ...getEndStyle(progressRef.current)
          }}
        >
          <b style={{ fontSize: '15vmin' }} className="text-glow-cyan font-bold">END</b>
        </div>
      </div>

      {/* Foreground project cards; they appear sequentially with progress */}
      <div className="absolute inset-0 z-20" style={{ pointerEvents: 'none' }}>
        {projects.map((p, i) => (
          <div
            key={p.id}
            className="rounded-xl overflow-hidden border shadow-xl bg-black"
            style={{
              ...getCardStyle(i, progressRef.current),
              borderColor: '#7de3ff66',
              boxShadow: '0 0 24px rgba(125, 227, 255, 0.35), 0 0 60px rgba(125, 227, 255, 0.25)'
            }}
            onClick={() => setModalProject(p)}
          >
            <div
              className="relative w-full"
              style={{
                aspectRatio: imageRatios[p.id] ? String(imageRatios[p.id]) : '16 / 9',
                maxHeight: '80vh'
              }}
            >
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-contain"
                  onLoad={handleImageLoad(p.id)}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-muted-foreground">
                  No preview
                </div>
              )}
              {/* Text below image on small screens; overlay on md+ */}
              <div className="hidden md:block absolute inset-x-0 bottom-0 p-6 pointer-events-none">
                <div className="bg-gradient-to-t from-black/80 via-black/20 to-transparent absolute inset-x-0 bottom-0 top-1/2" />
                <div className="relative">
                  <div className="text-2xl font-bold text-glow-cyan mb-2" style={{ color: '#7de3ff', textShadow: '0 0 10px rgba(125,227,255,0.7), 0 0 20px rgba(125,227,255,0.5)' }}>{p.title}</div>
                  <div className="text-sm max-w-3xl text-glow-cyan" style={{ color: '#7de3ff', textShadow: '0 0 8px rgba(125,227,255,0.6)' }}>{p.description}</div>
                </div>
              </div>
            </div>
            {/* Mobile text section */}
            <div className="md:hidden p-4">
              <div className="text-lg font-bold text-glow-cyan mb-1" style={{ color: '#7de3ff' }}>{p.title}</div>
              <div className="text-sm text-muted-foreground">{p.description}</div>
            </div>
          </div>
          ))}
        </div>

        <AnimatePresence>
          {modalProject && (
            <ProjectModal
              project={modalProject}
            onClose={() => setModalProject(null)}
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
      value: "abirdey43@gmail.com",
      link: "mailto:abirdey43@gmail.com"
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "/in/abir-dey-42ab19235/",
      link: "https://www.linkedin.com/in/abir-dey-42ab19235/"
    },
    {
      icon: "🔗",
      label: "GitHub",
      value: "/AbirDey2002",
      link: "https://github.com/AbirDey2002"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 neural-grid relative overflow-hidden branded-scroll overflow-y-auto">
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
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-glow-cyan mb-6">
            LET'S COLLABORATE
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to build the future together? Let's connect and create something extraordinary.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6" />
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            className="social-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="background"></div>
            <div className="logo">CONTACT</div>

            <a href={contactInfo[1].link} target="_blank" rel="noopener noreferrer"><div className="box box1"><span className="icon"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="svg"><path d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zM8 19H5V9h3v10zM6.5 7.75C5.67 7.75 5 7.08 5 6.25S5.67 4.75 6.5 4.75 8 5.42 8 6.25 7.33 7.75 6.5 7.75zM20 19h-3v-5.6c0-3.36-4-3.11-4 0V19h-3V9h3v1.56c1.39-2.59 7-2.78 7 2.48V19z"/></svg></span></div></a>

            <a href={contactInfo[2].link} target="_blank" rel="noopener noreferrer"><div className="box box2"><span className="icon"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="svg"><path d="M12 .297C5.37.297 0 5.67 0 12.3c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.261.82-.577 0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.611-4.042-1.611-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.289-1.552 3.295-1.23 3.295-1.23.655 1.652.243 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.805 5.625-5.476 5.922.43.372.823 1.102.823 2.222 0 1.606-.015 2.901-.015 3.293 0 .319.216.694.825.576 4.765-1.589 8.2-6.085 8.2-11.386 0-6.627-5.373-12-12-12z"/></svg></span></div></a>

            <a href={contactInfo[0].link}><div className="box box3"><span className="icon"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="svg"><path d="M12 13.065L.015 6h23.97L12 13.065zM12 15.5L0 8.5V18c0 1.104.896 2 2 2h20c1.103 0 2-.896 2-2V8.5l-12 7z"/></svg></span></div></a>

            <div className="box box4"></div>

            <style>{`
              .social-card { position: relative; width: 260px; height: 260px; background: lightgrey; border-radius: 30px; overflow: hidden; box-shadow: 0 0 24px rgba(125,227,255,0.35), 0 0 60px rgba(125,227,255,0.25), 0px 7px 29px rgba(0,0,0,0.2); transition: all 1s ease-in-out; border: 2px solid rgba(125,227,255,0.6); animation: neonGlow 4s ease-in-out infinite alternate; }
              .social-card .background { position: absolute; inset: 0; background-color: #4158D0; background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%); }
              .social-card .logo { position: absolute; right: 50%; bottom: 50%; transform: translate(50%, 50%); transition: all .6s ease-in-out; font-size: 1.3em; font-weight: 600; color: #fff; letter-spacing: 3px; }
              .social-card .icon { display: inline-block; width: 20px; height: 20px; }
              .social-card .icon .svg { fill: rgba(255,255,255,.797); width: 100%; transition: all .5s ease-in-out; }
              .social-card .box { position: absolute; padding: 10px; text-align: right; background: rgba(255,255,255,.389); border-top: 2px solid #fff; border-right: 1px solid #fff; border-radius: 10% 13% 42% 0%/10% 12% 75% 0%; box-shadow: rgba(100,100,111,.364) -7px 7px 29px 0px; transform-origin: bottom left; transition: all 1s ease-in-out; }
              .social-card .box::before { content: ""; position: absolute; inset: 0; border-radius: inherit; opacity: 0; transition: all .5s ease-in-out; }
              .social-card .box:hover .svg { fill: #fff; }
              .social-card .box1 { width: 70%; height: 70%; bottom: -70%; left: -70%; }
              .social-card .box1::before { background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #ff53d4 60%, #62c2fe 90%); }
              .social-card .box1:hover::before { opacity: 1; }
              .social-card .box1:hover .icon .svg { filter: drop-shadow(0 0 5px #fff); }
              .social-card .box2 { width: 50%; height: 50%; bottom: -50%; left: -50%; transition-delay: .2s; }
              .social-card .box2::before { background: radial-gradient(circle at 30% 107%, #91e9ff 0%, #00ACEE 90%); }
              .social-card .box2:hover::before { opacity: 1; }
              .social-card .box2:hover .icon .svg { filter: drop-shadow(0 0 5px #fff); }
              .social-card .box3 { width: 30%; height: 30%; bottom: -30%; left: -30%; transition-delay: .4s; }
              .social-card .box3::before { background: radial-gradient(circle at 30% 107%, #969fff 0%, #b349ff 90%); }
              .social-card .box3:hover::before { opacity: 1; }
              .social-card .box3:hover .icon .svg { filter: drop-shadow(0 0 5px #fff); }
              .social-card .box4 { width: 10%; height: 10%; bottom: -10%; left: -10%; transition-delay: .6s; }
              .social-card:hover { transform: scale(1.1); box-shadow: 0 0 32px rgba(125,227,255,0.55), 0 0 90px rgba(125,227,255,0.4), 0 10px 40px rgba(0,0,0,0.25); }
              .social-card:hover .box { bottom: -1px; left: -1px; }
              .social-card:hover .logo { transform: translate(70px, -52px); letter-spacing: 0px; }
              @keyframes neonGlow { 0% { box-shadow: 0 0 18px rgba(125,227,255,0.25), 0 0 40px rgba(125,227,255,0.15), 0 7px 29px rgba(0,0,0,0.2); } 100% { box-shadow: 0 0 28px rgba(125,227,255,0.5), 0 0 80px rgba(125,227,255,0.35), 0 10px 40px rgba(0,0,0,0.25); } }
            `}</style>
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

      {/* Global branded scrollbar styles for all pages and scrollable areas */}
      <style>{`
        :root {
          --scroll-track: rgba(15, 18, 24, 0.6);
          --scroll-thumb: #7de3ff;
          --scroll-thumb-hover: #aef0ff;
        }

        /* Apply branding to page scrollbars */
        html, body {
          scrollbar-width: thin;
          scrollbar-color: var(--scroll-thumb) transparent;
        }
        /* WebKit */
        ::-webkit-scrollbar { width: 10px; height: 10px; }
        ::-webkit-scrollbar-track { background: var(--scroll-track); border-radius: 8px; }
        ::-webkit-scrollbar-thumb { background: var(--scroll-thumb); border-radius: 8px; box-shadow: 0 0 10px var(--scroll-thumb); }
        ::-webkit-scrollbar-thumb:hover { background: var(--scroll-thumb-hover); box-shadow: 0 0 12px var(--scroll-thumb-hover); }

        /* Utility classes for any scrollable containers */
        .branded-scroll,
        .project-modal-scroll {
          scrollbar-width: thin;
          scrollbar-color: var(--scroll-thumb) transparent;
        }
        .branded-scroll::-webkit-scrollbar,
        .project-modal-scroll::-webkit-scrollbar { width: 10px; height: 10px; }
        .branded-scroll::-webkit-scrollbar-track,
        .project-modal-scroll::-webkit-scrollbar-track { background: var(--scroll-track); border-radius: 8px; }
        .branded-scroll::-webkit-scrollbar-thumb,
        .project-modal-scroll::-webkit-scrollbar-thumb { background: var(--scroll-thumb); border-radius: 8px; box-shadow: 0 0 10px var(--scroll-thumb); }
        .branded-scroll::-webkit-scrollbar-thumb:hover,
        .project-modal-scroll::-webkit-scrollbar-thumb:hover { background: var(--scroll-thumb-hover); box-shadow: 0 0 12px var(--scroll-thumb-hover); }
      `}</style>
    </div>
  );
};

export default Index;