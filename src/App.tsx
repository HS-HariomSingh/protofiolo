/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import hariomPortrait from './assets/images/hariom_portrait_1793893779810.jpg';
import {
  Mail,
  Linkedin,
  ExternalLink,
  Copy,
  Check,
  Code2,
  BrainCircuit,
  Cloud,
  Award,
  GraduationCap,
  MapPin,
  Sparkles,
  ArrowUpRight,
  Terminal,
  Cpu,
  Layers,
  ChevronDown,
  ShieldCheck,
  Send,
  Github,
  GitBranch,
  FolderGit2,
  X,
  Info,
  Activity,
  Database,
  Server,
  Workflow,
} from 'lucide-react';

interface ProjectTechVisualProps {
  category: string;
  badge: string;
  title: string;
  metrics: string;
  className?: string;
}

function ProjectTechVisual({
  category,
  badge,
  title,
  metrics,
  className = '',
}: ProjectTechVisualProps) {
  return (
    <div
      className={`relative w-full h-36 sm:h-40 rounded-xl overflow-hidden mb-5 border border-slate-200/90 bg-slate-950 shadow-inner group/banner transition-all duration-300 ${className}`}
    >
      {/* 1. C++ SYSTEMS VISUAL */}
      {category === 'cpp' && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0B1224] to-[#1E1B4B]">
          {/* Circuit / Graph Grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf812_1px,transparent_1px),linear-gradient(to_bottom,#38bdf812_1px,transparent_1px)] bg-[size:16px_16px]" />

          {/* SVG Graph Theory Flow Diagram */}
          <svg
            className="absolute inset-0 w-full h-full opacity-75 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
            viewBox="0 0 320 160"
            preserveAspectRatio="none"
          >
            {/* Network flow edges */}
            <line x1="55" y1="95" x2="115" y2="45" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="55" y1="95" x2="135" y2="115" stroke="#38BDF8" strokeWidth="1.5" />
            <line x1="115" y1="45" x2="195" y2="60" stroke="#818CF8" strokeWidth="1.5" />
            <line x1="135" y1="115" x2="195" y2="60" stroke="#818CF8" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="195" y1="60" x2="265" y2="85" stroke="#38BDF8" strokeWidth="2" />

            {/* Vertices */}
            <circle cx="55" cy="95" r="9" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
            <circle cx="55" cy="95" r="4" fill="#38BDF8" />

            <circle cx="115" cy="45" r="11" fill="#0F172A" stroke="#818CF8" strokeWidth="2" />
            <circle cx="115" cy="45" r="5" fill="#818CF8" />

            <circle cx="135" cy="115" r="8" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
            <circle cx="135" cy="115" r="3" fill="#38BDF8" />

            <circle cx="195" cy="60" r="13" fill="#0F172A" stroke="#60A5FA" strokeWidth="2" />
            <circle cx="195" cy="60" r="6" fill="#60A5FA" />

            <circle cx="265" cy="85" r="10" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
            <circle cx="265" cy="85" r="4" fill="#38BDF8" />
          </svg>

          {/* Top-right Tech Identifier Tag */}
          <div className="absolute right-3 top-3 font-mono text-[10px] text-cyan-300 bg-cyan-950/70 border border-cyan-500/40 px-2 py-0.5 rounded-md flex items-center gap-1.5 backdrop-blur-xs shadow-sm">
            <Code2 className="w-3 h-3 text-cyan-400" />
            <span>C++20 · STL</span>
          </div>

          {/* Bottom Metatags */}
          <div className="absolute left-3 bottom-2.5 font-mono text-[10px] text-slate-400 flex items-center gap-2">
            <span className="px-1.5 py-0.5 rounded bg-slate-900/90 border border-slate-700/80 text-cyan-300 font-bold">
              O(V + E)
            </span>
            <span className="text-slate-400 text-[10px] hidden sm:inline">Hopcroft-Karp / Dinic</span>
          </div>

          <div className="absolute right-3 bottom-2.5 font-mono text-[10px] text-slate-400">
            <span className="text-cyan-400/90 font-semibold">[0x7FFE_HEAP]</span>
          </div>
        </div>
      )}

      {/* 2. PYTHON & DATA SCIENCE VISUAL */}
      {category === 'python' && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#141824] to-[#2B1B10]">
          {/* Dot matrix grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#f59e0b20_1px,transparent_1px)] [background-size:14px_14px]" />

          {/* SVG Statistical Curve & Scatter Plot */}
          <svg
            className="absolute inset-0 w-full h-full opacity-75 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
            viewBox="0 0 320 160"
            preserveAspectRatio="none"
          >
            {/* Axis gridlines */}
            <line x1="20" y1="135" x2="300" y2="135" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="20" y1="20" x2="20" y2="135" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />

            {/* Regression curve spline */}
            <path
              d="M 25 125 Q 90 115 140 75 T 235 42 T 295 32"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="2.5"
            />
            {/* Data points */}
            <circle cx="45" cy="118" r="3.5" fill="#FBBF24" opacity="0.9" />
            <circle cx="75" cy="102" r="4" fill="#38BDF8" opacity="0.8" />
            <circle cx="105" cy="110" r="3" fill="#FBBF24" opacity="0.9" />
            <circle cx="125" cy="80" r="4.5" fill="#38BDF8" opacity="0.8" />
            <circle cx="165" cy="65" r="3.5" fill="#FBBF24" opacity="0.9" />
            <circle cx="195" cy="55" r="4" fill="#38BDF8" opacity="0.8" />
            <circle cx="225" cy="38" r="4" fill="#FBBF24" opacity="0.9" />
            <circle cx="265" cy="40" r="3.5" fill="#38BDF8" opacity="0.8" />
            <circle cx="290" cy="28" r="4.5" fill="#FBBF24" opacity="0.9" />
          </svg>

          {/* Top-right Tech Identifier Tag */}
          <div className="absolute right-3 top-3 font-mono text-[10px] text-amber-300 bg-amber-950/70 border border-amber-500/40 px-2 py-0.5 rounded-md flex items-center gap-1.5 backdrop-blur-xs shadow-sm">
            <Database className="w-3 h-3 text-amber-400" />
            <span>Python 3.11 · DS</span>
          </div>

          {/* Bottom Metatags */}
          <div className="absolute left-3 bottom-2.5 font-mono text-[10px] text-slate-400 flex items-center gap-2">
            <span className="px-1.5 py-0.5 rounded bg-slate-900/90 border border-slate-700/80 text-amber-300 font-bold">
              NumPy / Pandas
            </span>
            <span className="text-slate-400 text-[10px] hidden sm:inline">Linear Algebra & SVD</span>
          </div>

          <div className="absolute right-3 bottom-2.5 font-mono text-[10px] text-slate-400">
            <span className="text-amber-400/90 font-semibold">matrix[N, D]</span>
          </div>
        </div>
      )}

      {/* 3. CLOUD SYSTEMS VISUAL */}
      {category === 'cloud' && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0B1528] to-[#0284C7]/30">
          {/* Cloud Network Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c718_1px,transparent_1px),linear-gradient(to_bottom,#0284c718_1px,transparent_1px)] bg-[size:18px_18px]" />

          {/* SVG Cloud Infrastructure Topology */}
          <svg
            className="absolute inset-0 w-full h-full opacity-75 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
            viewBox="0 0 320 160"
            preserveAspectRatio="none"
          >
            {/* VPC perimeter outline */}
            <rect
              x="25"
              y="22"
              width="270"
              height="116"
              rx="12"
              fill="none"
              stroke="#0284C7"
              strokeWidth="1.2"
              strokeDasharray="4 4"
              opacity="0.45"
            />

            {/* Distributed routing connections */}
            <line x1="75" y1="80" x2="160" y2="80" stroke="#38BDF8" strokeWidth="1.5" />
            <line x1="160" y1="80" x2="245" y2="80" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="160" y1="80" x2="160" y2="42" stroke="#34D399" strokeWidth="1.5" />

            {/* Compute instances & Pub/Sub broker */}
            <rect x="60" y="65" width="30" height="30" rx="6" fill="#0F172A" stroke="#0284C7" strokeWidth="1.5" />
            <rect x="145" y="65" width="30" height="30" rx="6" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
            <rect x="230" y="65" width="30" height="30" rx="6" fill="#0F172A" stroke="#34D399" strokeWidth="1.5" />
            <circle cx="160" cy="42" r="7" fill="#0F172A" stroke="#34D399" strokeWidth="1.5" />
          </svg>

          {/* Top-right Tech Identifier Tag */}
          <div className="absolute right-3 top-3 font-mono text-[10px] text-sky-300 bg-sky-950/70 border border-sky-500/40 px-2 py-0.5 rounded-md flex items-center gap-1.5 backdrop-blur-xs shadow-sm">
            <Cloud className="w-3 h-3 text-sky-400" />
            <span>Google Cloud</span>
          </div>

          {/* Bottom Metatags */}
          <div className="absolute left-3 bottom-2.5 font-mono text-[10px] text-slate-400 flex items-center gap-2">
            <span className="px-1.5 py-0.5 rounded bg-slate-900/90 border border-slate-700/80 text-sky-300 font-bold">
              Pub/Sub & IAM
            </span>
            <span className="text-slate-400 text-[10px] hidden sm:inline">Serverless Compute</span>
          </div>

          <div className="absolute right-3 bottom-2.5 font-mono text-[10px] text-slate-400">
            <span className="text-sky-400/90 font-semibold">GCP VPC: 10.0.0.0/16</span>
          </div>
        </div>
      )}

      {/* 4. AGENTIC AI VISUAL */}
      {category === 'ai' && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#062019] to-[#047857]/30">
          {/* Synapse grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#10b98125_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* SVG Multi-Agent Supervisor Network */}
          <svg
            className="absolute inset-0 w-full h-full opacity-75 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
            viewBox="0 0 320 160"
            preserveAspectRatio="none"
          >
            {/* Central Supervisor Node */}
            <circle cx="160" cy="80" r="16" fill="#0F172A" stroke="#10B981" strokeWidth="2" />
            <circle cx="160" cy="80" r="7" fill="#10B981" />

            {/* Orbiting Worker Agent Nodes */}
            <line x1="160" y1="80" x2="80" y2="48" stroke="#10B981" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="80" cy="48" r="11" fill="#0F172A" stroke="#34D399" strokeWidth="1.5" />
            <circle cx="80" cy="48" r="4" fill="#34D399" />

            <line x1="160" y1="80" x2="80" y2="112" stroke="#10B981" strokeWidth="1.5" />
            <circle cx="80" cy="112" r="11" fill="#0F172A" stroke="#34D399" strokeWidth="1.5" />
            <circle cx="80" cy="112" r="4" fill="#34D399" />

            <line x1="160" y1="80" x2="240" y2="48" stroke="#10B981" strokeWidth="1.5" />
            <circle cx="240" cy="48" r="11" fill="#0F172A" stroke="#34D399" strokeWidth="1.5" />
            <circle cx="240" cy="48" r="4" fill="#34D399" />

            <line x1="160" y1="80" x2="240" y2="112" stroke="#10B981" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="240" cy="112" r="11" fill="#0F172A" stroke="#34D399" strokeWidth="1.5" />
            <circle cx="240" cy="112" r="4" fill="#34D399" />
          </svg>

          {/* Top-right Tech Identifier Tag */}
          <div className="absolute right-3 top-3 font-mono text-[10px] text-emerald-300 bg-emerald-950/70 border border-emerald-500/40 px-2 py-0.5 rounded-md flex items-center gap-1.5 backdrop-blur-xs shadow-sm">
            <BrainCircuit className="w-3 h-3 text-emerald-400" />
            <span>Agentic AI</span>
          </div>

          {/* Bottom Metatags */}
          <div className="absolute left-3 bottom-2.5 font-mono text-[10px] text-slate-400 flex items-center gap-2">
            <span className="px-1.5 py-0.5 rounded bg-slate-900/90 border border-slate-700/80 text-emerald-300 font-bold">
              Multi-Agent
            </span>
            <span className="text-slate-400 text-[10px] hidden sm:inline">LLM Prompt Chain</span>
          </div>

          <div className="absolute right-3 bottom-2.5 font-mono text-[10px] text-slate-400">
            <span className="text-emerald-400/90 font-semibold">Chain-of-Thought</span>
          </div>
        </div>
      )}

      {/* Interactive hover hint */}
      <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover/banner:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
        <span className="px-3 py-1 rounded-full bg-slate-900/95 text-white font-mono text-[10px] uppercase tracking-wider border border-white/20 shadow-lg flex items-center gap-1.5 backdrop-blur-xs">
          <Info className="w-3 h-3 text-emerald-400" />
          Tech Stack Breakdown
        </span>
      </div>
    </div>
  );
}

export default function App() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'ai' | 'dsa' | 'cloud'>('all');
  const [projectFilter, setProjectFilter] = useState<'all' | 'cpp' | 'python' | 'cloud' | 'ai'>('all');
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const sectionIds = ['about', 'skills', 'projects', 'certifications', 'education', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsContactVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const email = 'hariom18august@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/hariom-singh-507493384';
  const githubUrl = 'https://github.com';

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const certifications = [
    {
      title: 'Generative AI & Prompt Engineering',
      issuer: 'Google, Microsoft & Anthropic',
      category: 'ai',
      description:
        'Completed intensive learning sprint covering foundational LLM architectures, agentic workflows, structured prompting, and system prompt design.',
      highlight: 'Advanced Multi-Agent Workflows',
    },
    {
      title: 'Google Cloud Career Launchpad',
      issuer: 'Google Cloud',
      category: 'cloud',
      description:
        'Participant in hands-on cloud computing, backend infrastructure, compute services, and scalable cloud engineering tracks.',
      highlight: 'Cloud Infrastructure & Backend',
    },
    {
      title: 'Python (Programming Language)',
      issuer: 'Verified Credential',
      category: 'dsa',
      description:
        'Comprehensive assessment in core Python, OOP, algorithm design, data manipulation, and automation scripting.',
      highlight: 'Core Systems & Automation',
    },
    {
      title: 'Python Essentials',
      issuer: 'Programming Institute',
      category: 'dsa',
      description:
        'Fundamental and intermediate software development principles, standard library tooling, and algorithm implementations.',
      highlight: 'Data Structures & Logic',
    },
    {
      title: 'AI Skill Fest',
      issuer: 'AI Industry Collaborative',
      category: 'ai',
      description:
        'Practical deep-dive into cutting-edge AI toolchains, model fine-tuning intuition, and real-world deployment challenges.',
      highlight: 'Agentic Systems & Hackathon',
    },
    {
      title: 'Google Certifications',
      issuer: 'Google',
      category: 'cloud',
      description:
        'Recognition of technical competency across Google technology suites, machine learning fundamentals, and developer ecosystems.',
      highlight: 'Ecosystem & ML Basics',
    },
  ];

  const filteredCerts =
    activeTab === 'all'
      ? certifications
      : certifications.filter((c) => c.category === activeTab);

  const projects = [
    {
      id: 'graph-algo-engine',
      title: 'High-Performance Graph Theory & Network Flow Engine',
      category: 'cpp',
      stack: ['C++', 'STL', 'Algorithms', 'Graph Theory'],
      badge: 'C++ Systems',
      description:
        'A zero-dependency algorithmic suite engineered in modern C++ implementing Hopcroft-Karp maximum bipartite matching, Dinic’s algorithm for blocking flows, and Dijkstra with indexed priority queues for sub-millisecond sparse network routing.',
      metrics: 'O(V + E) Traversals · Sub-ms Benchmarks',
      githubLink: 'https://github.com',
      demoLink: 'https://github.com',
      featured: true,
      breakdown: {
        architecture: 'Cache-conscious adjacency lists with contiguous vertex array mapping and memory pools to eliminate heap churn.',
        runtimeComplexity: 'O(E * sqrt(V)) for Hopcroft-Karp, O(V^2 * E) max-flow, O((V + E) log V) routing',
        stackDetails: [
          { role: 'Core Language', name: 'C++20 (GCC/Clang)', detail: 'Templates, concepts, zero-overhead abstractions, and custom allocators.' },
          { role: 'Containers & Structures', name: 'STL & Custom Heap', detail: 'Indexed binary heap, flat adjacency vectors, and bitset visited masks.' },
          { role: 'Profiling & Tuning', name: 'Valgrind & Perf', detail: 'Zero memory leaks, L1/L2 data cache hit rate exceeding 94% on dense graphs.' },
          { role: 'Benchmarking Suite', name: 'Google Benchmark', detail: 'Automated microbenchmarking across generated Erdős-Rényi and scale-free networks.' }
        ],
        highlights: [
          'Hand-optimized Dinic blocking flow phase using Level Graph BFS and recursive DFS scaling.',
          'Zero dynamic memory allocations inside tight graph traversal loops.',
          'Comprehensive LeetCode Hard test suites verifying topological cuts and boundary cycles.'
        ]
      }
    },
    {
      id: 'agentic-ai-workflow',
      title: 'Multi-Agent Autonomous Research & Reasoning Pipeline',
      category: 'ai',
      stack: ['Python', 'Generative AI', 'Agentic Workflows', 'LLMs'],
      badge: 'Agentic AI',
      description:
        'An agentic orchestration architecture built in Python leveraging Chain-of-Thought planning and structured prompt engineering. Coordinates multiple specialized agent workers to decompose complex research questions, verify sources, and assemble executive briefs.',
      metrics: 'Multi-Agent Coordination · Structured Tool Calling',
      githubLink: 'https://github.com',
      demoLink: 'https://github.com',
      featured: true,
      breakdown: {
        architecture: 'Hub-and-spoke agent supervisor with asynchronous tool dispatch, citation verification, and self-correcting validation loops.',
        runtimeComplexity: 'Concurrent async I/O with bounded latency and token budget throttling',
        stackDetails: [
          { role: 'Core Orchestrator', name: 'Python 3.11 AsyncIO', detail: 'Structured concurrency, Pydantic type schemas, and exception boundaries.' },
          { role: 'Agent Framework', name: 'State Graph / Supervisor Pattern', detail: 'Deterministic state machine coordinating Researcher, Synthesizer, and Verifier agents.' },
          { role: 'Foundation Models', name: 'Gemini & Anthropic APIs', detail: 'System instruction tuning, function calling schemas, and few-shot calibration.' },
          { role: 'Memory & Context', name: 'Sliding Window & Vector Stores', detail: 'Semantic chunk retrieval with deduplication to minimize token waste.' }
        ],
        highlights: [
          'Self-correcting validator node that checks output claims against retrieved source grounding.',
          'Deterministic JSON extraction with automatic retry on malformed outputs.',
          'Completed during intensive GenAI & Prompt Engineering sprint with industry leader curricula.'
        ]
      }
    },
    {
      id: 'cloud-serverless-pipeline',
      title: 'Cloud-Native Scalable Data Stream & Compute Worker',
      category: 'cloud',
      stack: ['Google Cloud', 'Python', 'Cloud Functions', 'Pub/Sub', 'IAM'],
      badge: 'Cloud Infrastructure',
      description:
        'Serverless cloud pipeline deployed via Google Cloud infrastructure for event-driven telemetry and dataset preprocessing. Implements secure IAM roles, structured monitoring, and automated compute scaling under bursting data loads.',
      metrics: 'Zero-Idle Cost · Automatic Cloud Scaling',
      githubLink: 'https://github.com',
      demoLink: 'https://github.com',
      featured: true,
      breakdown: {
        architecture: 'Event-driven serverless mesh with asynchronous message queues, dead-letter topics, and least-privilege IAM service accounts.',
        runtimeComplexity: 'Elastic horizontal scaling from 0 to 500+ concurrent worker instances',
        stackDetails: [
          { role: 'Cloud Platform', name: 'Google Cloud Platform (GCP)', detail: 'Serverless execution on Cloud Run / Cloud Functions Gen2.' },
          { role: 'Message Broker', name: 'Google Cloud Pub/Sub', detail: 'Decoupled at-least-once message delivery with dead-letter queue routing.' },
          { role: 'Security & Auth', name: 'Cloud IAM & Secret Manager', detail: 'Zero hardcoded secrets, short-lived service account tokens.' },
          { role: 'Observability', name: 'Google Cloud Logging & Monitoring', detail: 'Structured JSON logging, SLI/SLA alert policies, and latency tracing.' }
        ],
        highlights: [
          'Engineered as part of the Google Cloud Career Launchpad curriculum.',
          'Cold-start mitigation strategies reducing container initiation under 250ms.',
          'Resilient error handling with exponential backoff and message replay.'
        ]
      }
    },
    {
      id: 'monotonic-stack-visualizer',
      title: 'Monotonic Stack & Algorithmic Range Query Optimizer',
      category: 'cpp',
      stack: ['C++', 'Data Structures', 'LeetCode Hard', 'Memory Profiling'],
      badge: 'Competitive Programming',
      description:
        'Interactive execution and profiling tool evaluating monotonic stack variants across next-greater-element permutations, maximal histogram rectangles, and sliding-window min/max tracking with cache-friendly contiguous memory layouts.',
      metrics: 'O(N) Amortized Time · Strict Cache Alignment',
      githubLink: 'https://github.com',
      demoLink: 'https://github.com',
      featured: false,
      breakdown: {
        architecture: 'Non-allocating contiguous vector buffers maintaining invariant monotonic sorting for single-pass linear scans.',
        runtimeComplexity: 'Strict O(N) amortized time, each element pushed and popped at most once',
        stackDetails: [
          { role: 'Language Engine', name: 'C++17 / C++20', detail: 'Strict inline methods, constexpr index lookup tables, and fast I/O optimizations.' },
          { role: 'Algorithmic Primitives', name: 'Monotonic Stack & Deque', detail: 'Increasing/Decreasing stack variants with pair index-value packing.' },
          { role: 'Memory Optimization', name: 'Stack Allocation & Reserve', detail: 'Elimination of vector reallocations by pre-sizing input capacity.' },
          { role: 'Verification Suite', name: 'Competitive Coding Harness', detail: 'Automated fuzz testing against brute-force O(N^2) models to prove correctness.' }
        ],
        highlights: [
          'Maximal Rectangle in Histogram solved in a single O(N) pass with sentinel padding.',
          'Sliding Window Maximum logic utilizing monotonic double-ended queue (deque).',
          'Extensively battle-tested on LeetCode competitive problem archives.'
        ]
      }
    },
    {
      id: 'ds-predictive-suite',
      title: 'Exploratory Data Science & Mathematical Modeling Suite',
      category: 'python',
      stack: ['Python', 'NumPy', 'Pandas', 'Linear Algebra', 'Data Science'],
      badge: 'Data Science',
      description:
        'Comprehensive Data Science workbench engineered during IIIT Bhopal coursework, featuring statistical hypothesis testing, multi-variable regression, dimensionality reduction (PCA), and high-dimensional vector embeddings manipulation.',
      metrics: 'IIIT Bhopal CSE-DS · Mathematical Rigor',
      githubLink: 'https://github.com',
      demoLink: 'https://github.com',
      featured: false,
      breakdown: {
        architecture: 'Vectorized scientific compute pipelines utilizing BLAS/LAPACK backends for high-dimensional matrix transformations.',
        runtimeComplexity: 'Vectorized SIMD execution with vectorized parallel array operations',
        stackDetails: [
          { role: 'Scientific Computing', name: 'NumPy & SciPy', detail: 'Vectorized broadcasting, matrix decomposition (SVD/Eigendecomposition).' },
          { role: 'Data Manipulation', name: 'Pandas', detail: 'High-throughput data wrangling, missing-value imputation, and multi-index aggregation.' },
          { role: 'Statistical Modeling', name: 'Scikit-Learn', detail: 'Supervised classification, regularized ridge/lasso regression, and cross-validation.' },
          { role: 'Academic Focus', name: 'IIIT Bhopal CSE-DS', detail: 'Grounding in probability theory, multivariate calculus, and linear algebra.' }
        ],
        highlights: [
          'Full mathematical derivation and implementation of Principal Component Analysis from scratch.',
          'Robust outlier rejection pipeline based on Mahalanobis distance and IQR gating.',
          'Applied to real-world statistical datasets with interactive exploratory visualization.'
        ]
      }
    },
    {
      id: 'cloud-career-blueprint',
      title: 'Google Cloud Infrastructure Automation & Deployment Blueprint',
      category: 'cloud',
      stack: ['Cloud Architecture', 'GCP', 'DevOps', 'Compute Engine'],
      badge: 'Google Cloud',
      description:
        'Infrastructure-as-Code automation templates and containerized deployment scripts developed through the Google Cloud Career Launchpad sprint, demonstrating resilient microservice topology and VPC network security.',
      metrics: 'Cloud Career Launchpad · Production Topology',
      githubLink: 'https://github.com',
      demoLink: 'https://github.com',
      featured: false,
      breakdown: {
        architecture: 'Tiered cloud topology with private subnets, Cloud NAT, firewall boundaries, and automated container startup hooks.',
        runtimeComplexity: 'High availability multi-zone deployment with health-checked instance groups',
        stackDetails: [
          { role: 'Compute Infrastructure', name: 'Compute Engine & GKE', detail: 'Custom machine types, managed instance groups, and container orchestrations.' },
          { role: 'Network Architecture', name: 'VPC & Cloud Armor', detail: 'Custom CIDR subnets, Private Google Access, and stateful egress routing.' },
          { role: 'IaC & Automation', name: 'Cloud Deployment / Bash', detail: 'Reproducible cluster bootstrapping and automated environment provisioning.' },
          { role: 'Storage Solutions', name: 'Cloud Storage & Cloud SQL', detail: 'Multi-region bucket policies and private service connections.' }
        ],
        highlights: [
          'Hands-on completion of Google Cloud Career Launchpad technical milestones.',
          'Strict zero-trust security postures with locked-down perimeter firewalls.',
          'Demonstrates production-ready DevOps standards for modern cloud-native systems.'
        ]
      }
    },
  ];

  const filteredProjects =
    projectFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === projectFilter);

  const skillsList = [
    {
      category: 'Problem Solving & DSA',
      icon: Code2,
      skills: [
        'C++ (Competitive Programming)',
        'Data Structures & Algorithms',
        'Tree & Graph Theory',
        'Monotonic Stacks',
        'Bipartite Matching & Flow',
        'Time & Space Optimization',
      ],
    },
    {
      category: 'Languages & Core Systems',
      icon: Terminal,
      skills: [
        'Python (Programming Language)',
        'C (Programming Language)',
        'C++ Standard Template Library',
        'Object-Oriented Programming',
        'Algorithmic Debugging',
        'Memory & Complexity Analysis',
      ],
    },
    {
      category: 'AI & Agentic Systems',
      icon: BrainCircuit,
      skills: [
        'Basics of Prompt Engineering',
        'Multi-Agent Workflows',
        'Generative AI Models',
        'Prompt Optimization & Tuning',
        'Agentic Task Planning',
        'Reasoning & Chain-of-Thought',
      ],
    },
    {
      category: 'Cloud & Infrastructure',
      icon: Cloud,
      skills: [
        'Google Cloud Career Launchpad',
        'Cloud Infrastructure Fundamentals',
        'Git & Distributed Version Control',
        'Continuous Learning',
        'Collaborative Teamwork',
        'Technical Documentation',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 selection:bg-emerald-200 selection:text-emerald-950 font-sans transition-colors duration-300">
      {/* Floating Pill-Style Navigation */}
      <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none transition-all duration-300">
        <div className="pointer-events-auto bg-white/75 backdrop-blur-xl border border-slate-200/80 rounded-full px-3 sm:px-4 py-2 sm:py-2.5 shadow-lg shadow-slate-900/5 flex items-center justify-between gap-4 sm:gap-8 max-w-[1300px] w-full">
          {/* Left Brand with Pill badge */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus-visible:outline-none pl-1 shrink-0"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50/90 border border-emerald-300/80 shadow-xs group-hover:bg-emerald-100/90 transition-all duration-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-xs shadow-emerald-400" />
              <div className="flex flex-col text-left leading-none font-mono font-bold text-[10px] sm:text-[11px] text-emerald-800 tracking-wider">
                <span>IIIT</span>
                <span>BHOPAL</span>
              </div>
            </div>
            <span className="font-grotesk text-lg sm:text-xl uppercase tracking-wider text-slate-900 group-hover:text-emerald-600 transition-colors hidden xl:inline-block">
              HARIOM SINGH
            </span>
          </a>

          {/* Navigation Items: Floating Pill styling with small monospace numbering, green active indicator, smooth underline transitions */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-11">
            {[
              { id: 'about', num: '01', label: 'ABOUT' },
              { id: 'skills', num: '02', label: 'SKILLS' },
              { id: 'projects', num: '03', label: 'PROJECTS' },
              { id: 'certifications', num: '04', label: 'CERTIFICATIONS' },
              { id: 'education', num: '05', label: 'EDUCATION' },
              { id: 'contact', num: '06', label: 'CONTACT' },
            ].map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`group relative flex flex-col items-center py-1 transition-all duration-300 ${
                    isActive ? 'text-emerald-700' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {/* Monospace Number & Active Dot */}
                  <div className="flex items-center gap-1 mb-0.5">
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    )}
                    <span
                      className={`font-mono text-[10px] tracking-widest transition-colors ${
                        isActive
                          ? 'text-emerald-600 font-bold'
                          : 'text-slate-400 group-hover:text-emerald-500'
                      }`}
                    >
                      {item.num}.
                    </span>
                  </div>

                  {/* Section Label */}
                  <span
                    className={`font-mono text-xs tracking-wider transition-colors duration-200 ${
                      isActive ? 'font-bold text-slate-900' : 'font-medium'
                    }`}
                  >
                    {item.label}
                  </span>

                  {/* Subtle Underline Animation */}
                  <span
                    className={`absolute bottom-[-2px] left-1/2 -translate-x-1/2 h-[2px] rounded-full transition-all duration-300 ${
                      isActive
                        ? 'w-full bg-emerald-500'
                        : 'w-0 bg-emerald-400/70 group-hover:w-3/4'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Action Hub */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 pr-1">
            <button
              onClick={() => copyToClipboard(email)}
              title="Copy email to clipboard"
              className="flex items-center gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 text-xs font-mono uppercase border border-slate-200 hover:border-emerald-500 hover:text-emerald-600 text-slate-700 rounded-full bg-white/90 hover:bg-emerald-50/50 shadow-xs hover:shadow-sm active:scale-95 transition-all duration-200 cursor-pointer"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600 font-semibold">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span className="hidden sm:inline">Copy Email</span>
                  <span className="sm:hidden">Email</span>
                </>
              )}
            </button>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hariom Singh LinkedIn Profile"
              className="px-3.5 sm:px-4 py-1.5 sm:py-2 flex items-center gap-1.5 text-xs font-mono uppercase bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 shadow-xs hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Hero Section (With the signature video & layout requested) */}
      <section className="relative overflow-hidden min-h-screen pt-16 sm:pt-20">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          ref={(el) => {
            if (el) {
              el.defaultMuted = true;
              el.muted = true;
              el.play().catch(() => {});
            }
          }}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4"
            type="video/mp4"
          />
        </video>

        {/* Content wrapper */}
        <div className="relative max-w-[1831px] mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 z-10">
          {/* ROW 1 (top) */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 mb-12 sm:mb-16 md:mb-20">
            {/* Child A -- The heading */}
            <h2 className="font-grotesk text-[32px] sm:text-[48px] md:text-[60px] font-normal uppercase leading-[1.05] sm:leading-[1] md:leading-[1] text-cream relative">
              Hello!<br />
              I'm hariom
              <span className="font-condiment text-[36px] sm:text-[52px] md:text-[68px] font-normal normal-case text-neon mix-blend-exclusion leading-[0.79] tracking-[0.03em] absolute right-[-8px] bottom-[-20px] sm:bottom-[-30px] md:bottom-[-40px] -rotate-1 opacity-90 select-none animate-float">
                Hariom
              </span>
            </h2>

            {/* Child B -- The paragraph */}
            <div className="flex flex-col gap-3 max-w-[340px]">
              <p className="font-mono text-[14px] sm:text-[15px] md:text-[16px] uppercase text-cream leading-relaxed">
                DS Enthusiast | DSA & Competitive Programming | Problem Solving | Teamwork | Continuous Learner | IIIT Bhopal
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-neon">
                <MapPin className="w-3.5 h-3.5" />
                <span>Greater Bhopal Area · India</span>
              </div>
            </div>
          </div>

          {/* Interactive Badges Bar with rounded smoothed corners */}
          <div className="my-8 sm:my-12 flex flex-wrap gap-3 sm:gap-4 font-mono text-xs uppercase">
            <span className="px-4 py-2 bg-slate-900/60 backdrop-blur-md border border-neon/30 text-neon rounded-full flex items-center gap-2 shadow-xs hover:scale-105 hover:bg-slate-900/80 transition-all duration-300">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              IIIT Bhopal · CSE (Data Science)
            </span>
            <span className="px-4 py-2 bg-slate-900/60 backdrop-blur-md border border-cream/20 text-cream rounded-full flex items-center gap-2 shadow-xs hover:scale-105 hover:bg-slate-900/80 transition-all duration-300">
              <Code2 className="w-3.5 h-3.5 text-neon" />
              C++ Algorithmic Logic & LeetCode
            </span>
            <span className="px-4 py-2 bg-slate-900/60 backdrop-blur-md border border-cream/20 text-cream rounded-full flex items-center gap-2 shadow-xs hover:scale-105 hover:bg-slate-900/80 transition-all duration-300">
              <BrainCircuit className="w-3.5 h-3.5 text-neon" />
              Generative AI & Prompt Engineering
            </span>
            <span className="px-4 py-2 bg-slate-900/60 backdrop-blur-md border border-cream/20 text-cream rounded-full flex items-center gap-2 shadow-xs hover:scale-105 hover:bg-slate-900/80 transition-all duration-300">
              <Cloud className="w-3.5 h-3.5 text-neon" />
              Google Cloud Career Launchpad
            </span>
          </div>

          {/* ROW 2 (bottom) */}
          <div className="flex justify-between items-start">
            {/* Child A -- Left text column */}
            <div className="flex flex-col gap-5 max-w-[335px]">
              <p className="font-mono text-[14px] sm:text-[15px] md:text-[16px] uppercase lg:text-cream text-[#010828] opacity-10 leading-relaxed">
                A digital object fixed beyond time and place. An exploration of distance, form, and silence in space
              </p>
              <p className="font-mono text-[14px] sm:text-[15px] md:text-[16px] uppercase lg:text-cream text-[#010828] opacity-10 leading-relaxed">
                A digital object fixed beyond time and place. An exploration of distance, form, and silence in space
              </p>
            </div>

            {/* Child B -- Right text column */}
            <div className="hidden lg:flex flex-col gap-5 max-w-[335px]">
              <p className="font-mono text-[14px] sm:text-[15px] md:text-[16px] uppercase lg:text-cream text-[#010828] opacity-10 leading-relaxed">
                A digital object fixed beyond time and place. An exploration of distance, form, and silence in space
              </p>
              <p className="font-mono text-[14px] sm:text-[15px] md:text-[16px] uppercase lg:text-cream text-[#010828] opacity-10 leading-relaxed">
                A digital object fixed beyond time and place. An exploration of distance, form, and silence in space
              </p>
            </div>
          </div>

          {/* Scroll cue */}
          <div className="mt-16 flex items-center justify-center">
            <a
              href="#about"
              className="flex flex-col items-center gap-2 font-mono text-xs uppercase tracking-widest text-cream/70 hover:text-neon transition-colors duration-200 group"
            >
              <span className="group-hover:tracking-[0.2em] transition-all duration-300">Explore Portfolio</span>
              <ChevronDown className="w-4 h-4 animate-bounce text-neon" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 01: About & Summary */}
      <section
        id="about"
        className="relative py-24 sm:py-32 border-t border-slate-200/80 bg-white"
      >
        <div className="max-w-[1831px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <span className="font-mono text-[11px] uppercase tracking-widest text-emerald-800 font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80">
                  SECTION 01
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-slate-400 font-medium">
                  EXECUTIVE SUMMARY
                </span>
              </div>
              <h2 className="font-grotesk text-4xl sm:text-6xl md:text-7xl uppercase text-slate-900 leading-none">
                THE ANALYTICAL MINDSET
              </h2>
            </div>
            <div className="font-mono text-xs uppercase tracking-wider text-slate-500 max-w-sm">
              Data Science @ IIIT Bhopal · Problem Solver · Algorithmic Thinker · Tactical Chess Strategist
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Portrait & Identity Card */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Studio Portrait Showcase Card */}
              <div className="relative group rounded-3xl overflow-hidden border border-slate-200/90 bg-white p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-emerald-500/50">
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-950">
                  <img
                    src={hariomPortrait}
                    alt="Hariom Singh - B.Tech CSE Data Science, IIIT Bhopal"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/assets/hariom_portrait.jpg';
                    }}
                  />
                  {/* Subtle vignette gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Top Floating Tags */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
                    <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-white bg-slate-900/80 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      IIIT Bhopal · '25
                    </span>
                    <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-emerald-300 bg-emerald-950/80 backdrop-blur-md border border-emerald-500/30 px-3 py-1 rounded-full shadow-sm">
                      CSE (Data Science)
                    </span>
                  </div>

                  {/* Bottom Portrait Caption Card */}
                  <div className="absolute bottom-3 left-3 right-3 p-3.5 backdrop-blur-md bg-slate-900/85 border border-white/10 rounded-xl text-white font-mono flex items-center justify-between gap-3 shadow-lg">
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold tracking-wide text-white">
                        Hariom Singh
                      </span>
                      <span className="text-[11px] text-slate-300">
                        DS & Algorithmic Specialist
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-semibold px-2.5 py-1 rounded-md bg-emerald-950/70 border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Open to Connect
                    </div>
                  </div>
                </div>
              </div>

              {/* Profile Coordinates Matrix */}
              <div className="p-6 bg-white border border-slate-200/90 rounded-2xl shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col gap-4">
                <h3 className="font-grotesk text-xl uppercase tracking-wider text-slate-900 flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-emerald-600" />
                  Profile Coordinates
                </h3>

                <div className="space-y-3.5 font-mono text-xs">
                  <div className="border-b border-slate-100 pb-2.5 flex justify-between items-center">
                    <span className="text-slate-400">STATUS</span>
                    <span className="text-emerald-700 font-semibold px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/70">
                      B.Tech Student (CSE-DS)
                    </span>
                  </div>
                  <div className="border-b border-slate-100 pb-2.5">
                    <span className="text-slate-400 block mb-1">INSTITUTION</span>
                    <span className="text-slate-900 font-medium">Indian Institute of Information Technology Bhopal</span>
                  </div>
                  <div className="border-b border-slate-100 pb-2.5">
                    <span className="text-slate-400 block mb-1">LOCATION</span>
                    <span className="text-slate-800 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                      Greater Bhopal Area, India
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-1">DIRECT CHANNELS</span>
                    <div className="flex flex-col gap-2 mt-2">
                      <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200/80">
                        <span className="text-slate-700 truncate max-w-[210px] text-[11px]">
                          {email}
                        </span>
                        <button
                          type="button"
                          onClick={() => copyToClipboard(email)}
                          className="px-2 py-1 text-[11px] bg-white border border-slate-200 rounded-md hover:bg-emerald-50 hover:text-emerald-700 transition-colors flex items-center gap-1"
                        >
                          {copiedEmail ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                          {copiedEmail ? 'Copied' : 'Copy'}
                        </button>
                      </div>
                      <a
                        href={linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs transition-colors shadow-xs"
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                        Connect on LinkedIn
                        <ArrowUpRight className="w-3 h-3 ml-0.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Narrative & Philosophy Column */}
            <div className="lg:col-span-7 flex flex-col gap-6 font-mono text-slate-700 text-sm sm:text-base leading-relaxed">
              <div className="p-6 sm:p-8 bg-slate-50/90 border border-slate-200/90 rounded-2xl relative shadow-xs hover:shadow-md transition-shadow duration-300">
                <div className="absolute top-6 left-0 w-1.5 h-16 bg-emerald-500 rounded-r-md" />
                <p className="text-base sm:text-lg text-slate-900 font-sans font-medium mb-4">
                  "I'm Hariom Singh, a B.Tech student specialising in Data Science at IIIT Bhopal with a deep passion for problem-solving and building intelligent systems."
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Right now, I'm in the thick of building a robust foundation in Computer Science. I consistently grind Data Structures and Algorithms on LeetCode, specializing in C++ to tackle complex logic across trees, heaps, and graph theory. Every algorithmic challenge I debug—from monotonic stacks to bipartite matchings—sharpens how I think, and I genuinely enjoy the process of optimizing my code.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  At the same time, I am diving headfirst into the world of modern AI automation and agentic systems. I recently completed a massive learning sprint, earning certifications in Generative AI and Prompt Engineering from Google, Microsoft, and Anthropic. I'm also actively expanding my backend and infrastructure skills as a participant in the Google Cloud Career Launchpad.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Whether I'm mapping out multi-agent workflows, compiling highly structured study notes for complex mathematics, or strategizing my next move as Black on the chessboard, I believe in approaching every challenge with a clear, tactical, and analytical mindset. I'm constantly experimenting, building, and looking for the next technical milestone.
                </p>
              </div>

              {/* 3 Core Competency Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 bg-white border border-slate-200/80 rounded-xl shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-2.5">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <h4 className="font-grotesk text-sm uppercase text-slate-900 mb-1">C++ & DSA</h4>
                  <p className="text-[11px] text-slate-500 leading-normal">
                    Complex algorithmic logic, graph flows, trees, and continuous LeetCode problem solving.
                  </p>
                </div>

                <div className="p-4 bg-white border border-slate-200/80 rounded-xl shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-2.5">
                    <BrainCircuit className="w-4 h-4" />
                  </div>
                  <h4 className="font-grotesk text-sm uppercase text-slate-900 mb-1">Agentic AI</h4>
                  <p className="text-[11px] text-slate-500 leading-normal">
                    Multi-agent orchestration, Chain-of-Thought prompting, and LLM reasoning pipelines.
                  </p>
                </div>

                <div className="p-4 bg-white border border-slate-200/80 rounded-xl shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-2.5">
                    <Cloud className="w-4 h-4" />
                  </div>
                  <h4 className="font-grotesk text-sm uppercase text-slate-900 mb-1">Cloud Systems</h4>
                  <p className="text-[11px] text-slate-500 leading-normal">
                    Google Cloud Career Launchpad, serverless pipelines, and scalable backend infrastructure.
                  </p>
                </div>
              </div>

              {/* Tactical Philosophy Card */}
              <div className="p-5 sm:p-6 bg-slate-50 border border-slate-200/80 rounded-2xl shadow-xs flex flex-col gap-2.5">
                <h3 className="font-grotesk text-lg uppercase tracking-wider text-emerald-700 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-emerald-600" />
                  Tactical Philosophy & Chess Mindset
                </h3>
                <p className="font-mono text-xs text-slate-600 leading-relaxed">
                  Approaching engineering with chess-like precision: dissecting edge cases, planning moves ahead in dynamic programming, and maintaining algorithmic resilience when under constraint. Every problem is an optimization surface.
                </p>
              </div>

              {/* Callout Quote */}
              <div className="p-5 sm:p-6 bg-emerald-50/70 border border-emerald-200/90 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
                <p className="font-mono text-xs sm:text-sm text-emerald-950">
                  "If you're a fellow developer, a student navigating the same path, or someone who enjoys talking tech, AI, and web design, I'd love to connect and grow together. Feel free to reach out!"
                </p>
                <a
                  href="#contact"
                  className="shrink-0 px-5 py-2.5 font-mono text-xs uppercase bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
                >
                  Reach Out
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02: Skills & Technical Matrix */}
      <section
        id="skills"
        className="relative py-24 sm:py-32 border-t border-slate-200/80 bg-[#F1F5F9]/70"
      >
        <div className="max-w-[1831px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <span className="font-mono text-[11px] uppercase tracking-widest text-emerald-800 font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80">
                  SECTION 02
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-slate-400 font-medium">
                  CORE EXPERTISE & SKILLS
                </span>
              </div>
              <h2 className="font-grotesk text-4xl sm:text-6xl md:text-7xl uppercase text-slate-900 leading-none">
                TECHNICAL CAPABILITIES
              </h2>
            </div>
            <p className="font-mono text-xs uppercase tracking-wider text-slate-500 max-w-md">
              Specialized in LeetCode problem solving with C++, Data Science in Python, Agentic AI, and Cloud Infrastructure.
            </p>
          </div>

          {/* Grid of skill categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsList.map((skillGroup, idx) => {
              const IconComp = skillGroup.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-white border border-slate-200/90 rounded-2xl hover:border-emerald-500/80 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group shadow-xs"
                >
                  <div>
                    <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white text-emerald-600 group-hover:scale-110 transition-all duration-300 shadow-xs">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="font-grotesk text-xl uppercase tracking-wider text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors">
                      {skillGroup.category}
                    </h3>
                    <ul className="space-y-2.5 font-mono text-xs text-slate-600">
                      {skillGroup.skills.map((skill, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400 group-hover:text-emerald-600 transition-colors">
                    <span>STATUS: ACTIVE</span>
                    <span className="font-semibold text-emerald-600">VERIFIED</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Algorithmic Focus Breakdown */}
          <div className="mt-12 p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl shadow-xs">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <Code2 className="w-6 h-6 text-emerald-600" />
                <h3 className="font-grotesk text-2xl uppercase tracking-wider text-slate-900">
                  Competitive Programming & DSA Breakdown
                </h3>
              </div>
              <span className="font-mono text-xs text-emerald-700 px-3.5 py-1.5 bg-emerald-50 border border-emerald-200 rounded-xl font-semibold">
                Primary Language: C++ (STL)
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
              <div className="p-4 bg-slate-50/80 border border-slate-200/80 rounded-xl hover:bg-slate-100/80 transition-colors">
                <div className="text-emerald-600 font-bold mb-1">01. Trees & Graph Theory</div>
                <div className="text-slate-600">
                  BFS/DFS traversals, Dijkstra, DAGs, cycle detection, topological sorting, and bipartite graph verification.
                </div>
              </div>

              <div className="p-4 bg-slate-50/80 border border-slate-200/80 rounded-xl hover:bg-slate-100/80 transition-colors">
                <div className="text-emerald-600 font-bold mb-1">02. Heaps & Priority Queues</div>
                <div className="text-slate-600">
                  Min/Max heap logic, k-way merging, streaming medians, and greedy scheduling optimization.
                </div>
              </div>

              <div className="p-4 bg-slate-50/80 border border-slate-200/80 rounded-xl hover:bg-slate-100/80 transition-colors">
                <div className="text-emerald-600 font-bold mb-1">03. Monotonic Stacks</div>
                <div className="text-slate-600">
                  Next greater elements, histogram maximal area computations, sliding window minimums, and linear range queries.
                </div>
              </div>

              <div className="p-4 bg-slate-50/80 border border-slate-200/80 rounded-xl hover:bg-slate-100/80 transition-colors">
                <div className="text-emerald-600 font-bold mb-1">04. Bipartite Matchings</div>
                <div className="text-slate-600">
                  Augmenting paths, Hopcroft-Karp principles, maximum flow reductions, and network logic.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03: Featured Projects */}
      <section
        id="projects"
        className="relative py-24 sm:py-32 border-t border-slate-200/80 bg-white"
      >
        <div className="max-w-[1831px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <span className="font-mono text-[11px] uppercase tracking-widest text-emerald-800 font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80">
                  SECTION 03
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-slate-400 font-medium">
                  ENGINEERING & IMPLEMENTATIONS
                </span>
              </div>
              <h2 className="font-grotesk text-4xl sm:text-6xl md:text-7xl uppercase text-slate-900 leading-none">
                FEATURED PROJECTS
              </h2>
            </div>

            {/* Filter Tabs with rounded smoothed edges */}
            <div className="flex flex-wrap gap-2 font-mono text-xs uppercase p-1 bg-slate-100 rounded-2xl border border-slate-200">
              {(
                [
                  { id: 'all', label: 'All Projects' },
                  { id: 'cpp', label: 'C++ Systems' },
                  { id: 'python', label: 'Python & DS' },
                  { id: 'cloud', label: 'Cloud' },
                  { id: 'ai', label: 'Agentic AI' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setProjectFilter(tab.id)}
                  className={`px-4 py-2 rounded-xl transition-all duration-200 cursor-pointer font-medium ${
                    projectFilter === tab.id
                      ? 'bg-emerald-600 text-white font-bold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="p-5 sm:p-6 bg-white border border-slate-200/90 rounded-2xl hover:border-emerald-500/80 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex flex-col justify-between group relative shadow-xs cursor-pointer select-none"
              >
                <div>
                  {/* Visual Technology Placeholder Image/Banner */}
                  <ProjectTechVisual
                    category={project.category}
                    badge={project.badge}
                    title={project.title}
                    metrics={project.metrics}
                  />

                  {/* Top Bar with Badge & Category */}
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <span className="font-mono text-[11px] text-emerald-700 font-semibold uppercase tracking-wider px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full flex items-center gap-1.5">
                      {project.category === 'cpp' && <Code2 className="w-3.5 h-3.5 text-cyan-600" />}
                      {project.category === 'python' && <Database className="w-3.5 h-3.5 text-amber-600" />}
                      {project.category === 'cloud' && <Cloud className="w-3.5 h-3.5 text-sky-600" />}
                      {project.category === 'ai' && <BrainCircuit className="w-3.5 h-3.5 text-emerald-600" />}
                      {project.badge}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="flex items-center gap-1.5 font-mono text-[11px] text-slate-500 group-hover:text-emerald-700 hover:text-emerald-800 transition-colors bg-slate-50 group-hover:bg-emerald-50 px-2 py-0.5 rounded-md border border-slate-200/60 group-hover:border-emerald-200"
                    >
                      <Info className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="font-semibold">Tech Breakdown</span>
                    </button>
                  </div>

                  {/* Title */}
                  <h3 className="font-grotesk text-2xl uppercase tracking-wider text-slate-900 mb-2.5 group-hover:text-emerald-700 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="font-mono text-xs text-slate-600 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills/Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.stack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-700 rounded-lg font-mono text-[11px] uppercase tracking-wider shadow-2xs group-hover:border-emerald-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer with Performance Metric and Action Links */}
                <div>
                  <div className="py-2.5 px-3.5 mb-4 bg-slate-50 border border-slate-200/80 rounded-xl font-mono text-[11px] text-slate-500 flex items-center justify-between shadow-2xs group-hover:border-emerald-200 transition-colors">
                    <span className="text-slate-400 uppercase">METRIC:</span>
                    <span className="text-emerald-700 font-semibold">{project.metrics}</span>
                  </div>

                  <div className="pt-3.5 border-t border-slate-200/80 flex items-center justify-between gap-3">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 py-2.5 px-3 bg-white border border-slate-300 hover:border-emerald-500 text-slate-700 hover:text-emerald-700 font-mono text-xs uppercase tracking-wider rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-2xs hover:shadow-xs active:scale-95"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code Repo</span>
                    </a>

                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 py-2.5 px-3 bg-emerald-600 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-emerald-700 rounded-xl shadow-xs hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Breakdown Modal */}
          {selectedProject && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200"
              onClick={() => setSelectedProject(null)}
            >
              <div
                className="bg-white border border-slate-200/90 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative animate-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-xs text-emerald-700 font-semibold uppercase tracking-wider px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full flex items-center gap-1.5">
                        {selectedProject.category === 'cpp' && <Code2 className="w-3.5 h-3.5 text-cyan-600" />}
                        {selectedProject.category === 'python' && <Database className="w-3.5 h-3.5 text-amber-600" />}
                        {selectedProject.category === 'cloud' && <Cloud className="w-3.5 h-3.5 text-sky-600" />}
                        {selectedProject.category === 'ai' && <BrainCircuit className="w-3.5 h-3.5 text-emerald-600" />}
                        {selectedProject.badge}
                      </span>
                      <span className="font-mono text-xs text-slate-400 uppercase">
                        // ARCHITECTURAL DOSSIER
                      </span>
                    </div>
                    <h3 className="font-grotesk text-2xl sm:text-3xl uppercase tracking-wider text-slate-900">
                      {selectedProject.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Visual Banner */}
                <div className="mt-4">
                  <ProjectTechVisual
                    category={selectedProject.category}
                    badge={selectedProject.badge}
                    title={selectedProject.title}
                    metrics={selectedProject.metrics}
                    className="h-28 sm:h-32 mb-0"
                  />
                </div>

                {/* Modal Content Body */}
                <div className="py-6 space-y-6">
                  {/* System Architecture */}
                  <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl">
                    <div className="flex items-center gap-2 font-mono text-xs text-emerald-700 font-semibold uppercase mb-1.5">
                      <Workflow className="w-4 h-4 text-emerald-600" />
                      <span>System Architecture</span>
                    </div>
                    <p className="font-mono text-xs text-slate-700 leading-relaxed">
                      {selectedProject.breakdown.architecture}
                    </p>
                  </div>

                  {/* Runtime Complexity / Performance */}
                  <div className="p-4 bg-emerald-50/60 border border-emerald-200/80 rounded-2xl">
                    <div className="flex items-center gap-2 font-mono text-xs text-emerald-800 font-semibold uppercase mb-1.5">
                      <Activity className="w-4 h-4 text-emerald-600" />
                      <span>Complexity & Scale</span>
                    </div>
                    <p className="font-mono text-xs text-emerald-950 font-medium leading-relaxed">
                      {selectedProject.breakdown.runtimeComplexity}
                    </p>
                  </div>

                  {/* Tech Stack Breakdown Table */}
                  <div>
                    <div className="flex items-center gap-2 font-mono text-xs text-slate-500 uppercase tracking-wider mb-3">
                      <Server className="w-4 h-4 text-emerald-600" />
                      <span>Component & Module Breakdown</span>
                    </div>

                    <div className="space-y-3">
                      {selectedProject.breakdown.stackDetails.map((detail, dIdx) => (
                        <div
                          key={dIdx}
                          className="p-3.5 bg-white border border-slate-200 rounded-xl hover:border-emerald-300 transition-colors shadow-2xs"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                            <span className="font-mono text-[11px] text-slate-400 uppercase">
                              {detail.role}
                            </span>
                            <span className="font-mono text-xs text-emerald-700 font-bold">
                              {detail.name}
                            </span>
                          </div>
                          <p className="font-mono text-xs text-slate-600">
                            {detail.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Engineering Highlights */}
                  <div>
                    <div className="flex items-center gap-2 font-mono text-xs text-slate-500 uppercase tracking-wider mb-3">
                      <Database className="w-4 h-4 text-emerald-600" />
                      <span>Technical Implementation Highlights</span>
                    </div>

                    <ul className="space-y-2 font-mono text-xs text-slate-700">
                      {selectedProject.breakdown.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="font-mono text-[11px] text-slate-400">
                    Press <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-300 rounded text-slate-600 text-[10px]">Esc</kbd> or click outside to dismiss
                  </span>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-initial py-2.5 px-4 bg-white border border-slate-300 hover:border-emerald-500 text-slate-700 hover:text-emerald-700 font-mono text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-2xs"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Code</span>
                    </a>

                    <a
                      href={selectedProject.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-initial py-2.5 px-4 bg-emerald-600 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-emerald-700 rounded-xl shadow-xs transition-all flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Launch Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* GitHub Activity Banner */}
          <div className="mt-12 p-6 sm:p-7 bg-gradient-to-r from-emerald-50 via-slate-50 to-white border border-emerald-200 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="flex items-center gap-4">
              <div className="p-3.5 bg-emerald-600 text-white rounded-xl shadow-xs">
                <GitBranch className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-grotesk text-xl uppercase text-slate-900">
                  Continuous Algorithmic & Open-Source Commits
                </h4>
                <p className="font-mono text-xs text-slate-600">
                  Actively pushing C++ algorithmic solutions, Python data pipeline experiments, and cloud blueprints.
                </p>
              </div>
            </div>

            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-emerald-600 hover:text-white text-slate-800 font-mono text-xs uppercase tracking-wider rounded-xl transition-all duration-200 border border-slate-300 hover:border-emerald-600 shadow-xs hover:shadow-md hover:-translate-y-0.5 active:scale-95"
            >
              <Github className="w-4 h-4" />
              <span>Explore GitHub</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 04: Certifications Showcase */}
      <section
        id="certifications"
        className="relative py-24 sm:py-32 border-t border-slate-200/80 bg-[#F1F5F9]/70"
      >
        <div className="max-w-[1831px] mx-auto px-4 sm:px-6 md:px-8">
          {/* Header with Google & Microsoft accreditation images */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <span className="font-mono text-[11px] uppercase tracking-widest text-emerald-800 font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80">
                  SECTION 04
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-slate-400 font-medium">
                  CREDENTIALS & SPRINT ACHIEVEMENTS
                </span>
              </div>
              <h2 className="font-grotesk text-4xl sm:text-6xl md:text-7xl uppercase text-slate-900 leading-none">
                VERIFIED CERTIFICATIONS
              </h2>
            </div>

            {/* Google, Microsoft & Anthropic Authority Logos */}
            <div className="flex items-center gap-3 py-2 px-4 bg-white/90 border border-slate-200/90 rounded-2xl shadow-xs">
              <span className="font-mono text-[10px] uppercase text-slate-400 tracking-wider">
                Partner Curricula:
              </span>
              <div className="flex items-center gap-3">
                {/* Google Logo */}
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-50 border border-slate-200/70 rounded-lg" title="Google & Google Cloud Certified">
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                  <span className="font-mono text-xs font-semibold text-slate-700">Google</span>
                </div>

                {/* Microsoft Logo */}
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-50 border border-slate-200/70 rounded-lg" title="Microsoft Verified Credentials">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 23 23">
                    <path fill="#f35325" d="M1 1h10v10H1z"/>
                    <path fill="#81bc06" d="M12 1h10v10H12z"/>
                    <path fill="#05a6f0" d="M1 12h10v10H1z"/>
                    <path fill="#ffba08" d="M12 12h10v10H12z"/>
                  </svg>
                  <span className="font-mono text-xs font-semibold text-slate-700">Microsoft</span>
                </div>
              </div>
            </div>

            {/* Filter Tabs with rounded smoothed edges */}
            <div className="flex flex-wrap gap-2 font-mono text-xs uppercase p-1 bg-white rounded-2xl border border-slate-200 shadow-2xs">
              {(
                [
                  { id: 'all', label: 'All Certifications' },
                  { id: 'ai', label: 'AI & GenAI' },
                  { id: 'dsa', label: 'Python & DSA' },
                  { id: 'cloud', label: 'Google Cloud' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-xl transition-all duration-200 cursor-pointer font-medium ${
                    activeTab === tab.id
                      ? 'bg-emerald-600 text-white font-bold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCerts.map((cert, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 bg-white border border-slate-200/90 rounded-2xl hover:border-emerald-500/70 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative group shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-[11px] text-emerald-700 font-semibold uppercase tracking-wider px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full">
                      {cert.issuer}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  </div>

                  <h3 className="font-grotesk text-2xl uppercase tracking-wider text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {cert.title}
                  </h3>

                  <p className="font-mono text-xs text-slate-600 leading-relaxed mb-6">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-slate-500 uppercase">
                    Focus: <strong className="text-slate-800">{cert.highlight}</strong>
                  </span>
                  <button
                    onClick={() => copyToClipboard(`${cert.title} - ${cert.issuer}`)}
                    title="Copy credential details"
                    className="text-slate-400 hover:text-emerald-600 transition-colors p-1 rounded-lg hover:bg-slate-50 cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Highlights Banner */}
          <div className="mt-12 p-6 sm:p-7 bg-gradient-to-r from-emerald-50 via-slate-50 to-white border border-emerald-200 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="flex items-center gap-4">
              <div className="p-3.5 bg-emerald-600 text-white rounded-xl shadow-xs">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-grotesk text-xl uppercase text-slate-900">
                  Intensive Learning Sprints
                </h4>
                <p className="font-mono text-xs text-slate-600">
                  Continuous upskilling in Generative AI, Prompt Architecture, and Cloud Infrastructure through industry leader programs.
                </p>
              </div>
            </div>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-emerald-600 hover:text-white text-slate-800 font-mono text-xs uppercase tracking-wider rounded-xl transition-all duration-200 border border-slate-300 hover:border-emerald-600 shadow-xs hover:shadow-md hover:-translate-y-0.5 active:scale-95"
            >
              <span>View On LinkedIn</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 05: Education */}
      <section
        id="education"
        className="relative py-24 sm:py-32 border-t border-slate-200/80 bg-white"
      >
        <div className="max-w-[1831px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <span className="font-mono text-[11px] uppercase tracking-widest text-emerald-800 font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80">
                  SECTION 05
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-slate-400 font-medium">
                  ACADEMIC FOUNDATION
                </span>
              </div>
              <h2 className="font-grotesk text-4xl sm:text-6xl md:text-7xl uppercase text-slate-900 leading-none">
                EDUCATION TIMELINE
              </h2>
            </div>
            <p className="font-mono text-xs uppercase tracking-wider text-slate-500 max-w-sm">
              Rooted in premier engineering education with an intense focus on computational theory and Data Science.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* IIIT Bhopal Card */}
            <div className="p-8 bg-slate-50/80 border border-emerald-300/80 rounded-2xl relative shadow-xs hover:shadow-lg transition-all duration-300">
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-emerald-600 text-white font-mono text-xs font-bold uppercase tracking-wider rounded-tr-2xl rounded-bl-xl shadow-xs">
                CURRENT
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-50 rounded-xl border border-emerald-200">
                  <GraduationCap className="w-6 h-6 text-emerald-600" />
                </div>
                <span className="font-mono text-xs text-emerald-700 font-semibold tracking-widest uppercase">
                  Higher Education
                </span>
              </div>

              <h3 className="font-grotesk text-3xl sm:text-4xl uppercase text-slate-900 mb-2">
                Indian Institute of Information Technology Bhopal
              </h3>
              <p className="font-mono text-sm sm:text-base text-emerald-700 font-medium mb-4">
                Bachelor of Technology - BTech, CSE-DS · Class of (2025)
              </p>

              <div className="font-mono text-xs text-slate-600 space-y-3 leading-relaxed border-t border-slate-200/80 pt-4">
                <p>
                  Specializing in <strong>Computer Science & Engineering with Data Science (CSE-DS)</strong>.
                </p>
                <p>
                  Immersed in deep theoretical computer science, linear algebra, discrete mathematics, algorithm optimization, and applied data engineering. Active contributor to collegiate technical initiatives and competitive coding circles.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 font-mono text-[11px] text-slate-700">
                <span className="px-3 py-1 bg-white border border-slate-200 rounded-lg shadow-2xs">Data Science</span>
                <span className="px-3 py-1 bg-white border border-slate-200 rounded-lg shadow-2xs">Algorithms</span>
                <span className="px-3 py-1 bg-white border border-slate-200 rounded-lg shadow-2xs">Systems Design</span>
                <span className="px-3 py-1 bg-white border border-slate-200 rounded-lg shadow-2xs">Mathematics</span>
              </div>
            </div>

            {/* Schooling Card */}
            <div className="p-8 bg-slate-50/50 border border-slate-200/90 rounded-2xl flex flex-col justify-between shadow-xs hover:shadow-lg transition-all duration-300">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-slate-100 rounded-xl border border-slate-200">
                    <Layers className="w-6 h-6 text-slate-500" />
                  </div>
                  <span className="font-mono text-xs text-slate-500 tracking-widest uppercase">
                    Foundational Schooling
                  </span>
                </div>

                <h3 className="font-grotesk text-3xl sm:text-4xl uppercase text-slate-900 mb-2">
                  Sant Atulanand Convent School
                </h3>
                <p className="font-mono text-sm text-slate-600 mb-4">
                  Secondary & Senior Secondary Education
                </p>

                <div className="font-mono text-xs text-slate-600 space-y-3 leading-relaxed border-t border-slate-200/80 pt-4">
                  <p>
                    Developed early interest and strong fundamentals in Mathematics, Physics, and analytical reasoning that laid the foundation for competitive coding and engineering studies.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200/80 font-mono text-xs text-slate-400 flex items-center justify-between">
                <span>ACADEMIC FOUNDATION</span>
                <span className="text-emerald-700 font-semibold">COMPLETED</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06: Contact & Connect */}
      <section
        id="contact"
        ref={contactRef}
        className="relative py-24 sm:py-32 border-t border-slate-200/80 bg-[#F1F5F9]/70 overflow-hidden"
      >
        <div className="max-w-[1831px] mx-auto px-4 sm:px-6 md:px-8">
          {/* Header with Fade-Up */}
          <div
            className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 transition-all duration-700 ease-out ${
              isContactVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <span className="font-mono text-[11px] uppercase tracking-widest text-emerald-800 font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80">
                  SECTION 06
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-slate-400 font-medium">
                  INITIATE CONTACT
                </span>
              </div>
              <h2 className="font-grotesk text-4xl sm:text-6xl md:text-7xl uppercase text-slate-900 leading-none">
                LET'S CONNECT & COLLABORATE
              </h2>
            </div>
            <p className="font-mono text-xs uppercase tracking-wider text-slate-500 max-w-sm">
              Open to technical exchanges, algorithmic discussions, AI project collaborations, and career opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Quick Contact Cards with Staggered Fade-Up */}
            <div
              className={`lg:col-span-5 flex flex-col gap-6 transition-all duration-700 delay-150 ease-out ${
                isContactVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Email Direct Card */}
              <div className="p-6 sm:p-8 bg-white border border-emerald-300 rounded-2xl flex flex-col justify-between shadow-xs hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-emerald-700 font-semibold uppercase tracking-wider">
                      PRIMARY EMAIL
                    </span>
                    <div className="p-2 bg-emerald-50 rounded-xl text-emerald-600">
                      <Mail className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-grotesk text-2xl sm:text-3xl text-slate-900 mb-2 break-all">
                    {email}
                  </h3>
                  <p className="font-mono text-xs text-slate-600 leading-relaxed mb-6">
                    Direct inbox for developer inquiries, hackathons, and technical roles. Monitored regularly.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => copyToClipboard(email)}
                    className="flex-1 py-3 px-4 bg-emerald-600 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-emerald-700 rounded-xl shadow-xs hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Copied to Clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Email Address</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${email}`}
                    className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl border border-slate-200 transition-all duration-200 flex items-center justify-center active:scale-95"
                    title="Open mail client"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* LinkedIn Direct Card */}
              <div className="p-6 sm:p-8 bg-white border border-slate-200/90 rounded-2xl flex flex-col justify-between shadow-xs hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">
                      PROFESSIONAL NETWORK
                    </span>
                    <div className="p-2 bg-blue-50 rounded-xl text-blue-600">
                      <Linkedin className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-grotesk text-2xl sm:text-3xl text-slate-900 mb-2">
                    LinkedIn Profile
                  </h3>
                  <p className="font-mono text-xs text-slate-600 leading-relaxed mb-6 break-all">
                    www.linkedin.com/in/hariom-singh-507493384
                  </p>
                </div>

                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 bg-slate-50 border border-slate-200 hover:border-emerald-500 text-slate-800 hover:text-emerald-700 font-mono text-xs uppercase tracking-wider rounded-xl shadow-2xs hover:shadow-xs hover:-translate-y-0.5 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <span>Connect On LinkedIn</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Location Card */}
              <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-xs flex items-center gap-4">
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[11px] text-slate-400 uppercase">LOCATION BASE</div>
                  <div className="font-grotesk text-xl text-slate-900">Greater Bhopal Area, India</div>
                </div>
              </div>
            </div>

            {/* Right Column: Direct Message Composer with Staggered Fade-Up */}
            <div
              className={`lg:col-span-7 p-6 sm:p-8 bg-white border border-slate-200/90 rounded-2xl flex flex-col justify-between shadow-xs hover:shadow-lg transition-all duration-700 delay-300 ease-out ${
                isContactVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-emerald-600" />
                    <span className="font-grotesk text-xl uppercase tracking-wider text-slate-900">
                      Quick Message Composer
                    </span>
                  </div>
                  <span className="font-mono text-xs text-emerald-600 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    STATUS: READY
                  </span>
                </div>

                <div className="space-y-4 font-mono text-xs">
                  <div>
                    <label className="block text-slate-600 mb-2 uppercase tracking-wider">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      value={contactSubject}
                      onChange={(e) => setContactSubject(e.target.value)}
                      placeholder="e.g., Tech Discussion / Project Collaboration / Opportunity"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white focus:outline-none px-4 py-3 text-slate-900 placeholder:text-slate-400 rounded-xl transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-600 mb-2 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      placeholder="Hello Hariom, I came across your portfolio and wanted to reach out regarding..."
                      className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white focus:outline-none px-4 py-3 text-slate-900 placeholder:text-slate-400 rounded-xl transition-all resize-none"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="font-mono text-[11px] text-slate-500">
                  Sends directly to <span className="text-emerald-700 font-semibold">{email}</span>
                </p>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
                        contactSubject || 'Portfolio Inquiry for Hariom Singh'
                      )}&body=${encodeURIComponent(contactMessage)}`;
                      window.location.href = mailtoUrl;
                    }}
                    className="flex-1 sm:flex-initial px-6 py-3 bg-emerald-600 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-emerald-700 rounded-xl shadow-xs hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Launch In Mail</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200/80 bg-slate-50 font-mono text-xs text-slate-500">
        <div className="max-w-[1831px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="font-grotesk text-lg text-slate-900 tracking-wider">
              HARIOM SINGH
            </span>
            <span>·</span>
            <span>IIIT BHOPAL (CSE-DS)</span>
            <span>·</span>
            <span>GREATER BHOPAL AREA</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#about"
              className="hover:text-emerald-600 transition-colors"
            >
              Top
            </a>
            <a
              href="#projects"
              className="hover:text-emerald-600 transition-colors"
            >
              Projects
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-600 transition-colors"
            >
              GitHub
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-600 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${email}`}
              className="hover:text-emerald-600 transition-colors"
            >
              Email
            </a>
            <span>© 2026 Hariom Singh</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
