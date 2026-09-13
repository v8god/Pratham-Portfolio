import { useEffect, useState, type CSSProperties, type MouseEvent } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from 'lucide-react';

type Project = {
  number: string;
  title: string;
  type: string;
  description: string;
  tags: string[];
  tone: string;
  url: string;
};

const projects: Project[] = [
  {
    number: '01',
    title: 'WiseBlockForge',
    type: 'AI code generation',
    description:
      'An agent that writes, runs, and checks its own code inside a sandboxed Docker loop. Failures feed directly into the next generation pass.',
    tags: ['React', 'FastAPI', 'MongoDB', 'Docker'],
    tone: 'amber',
    url: 'https://github.com/v8god/WiseBlockForge',
  },
  {
    number: '02',
    title: 'Desktop Buddy',
    type: 'Animated Windows companion',
    description:
      'A desktop companion that stays with you on Windows, helps with tasks, and uses expressive animations, typing states, and joyful feedback to show what it is doing.',
    tags: ['Windows', 'Python', 'Automation', 'Animation'],
    tone: 'blue',
    url: 'https://github.com/v8god/Desktop_buddy',
  },
  {
    number: '03',
    title: 'Satellite Vision',
    type: 'Independent research',
    description:
      'A self-supervised SimCLR + ViT pipeline for satellite imagery, with data-integrity checks that caught near-duplicate train/test leakage.',
    tags: ['PyTorch', 'SimCLR', 'ViT', 'Research'],
    tone: 'green',
    url: 'https://github.com/v8god',
  },
  {
    number: '04',
    title: 'EviDoc AI',
    type: 'Document research assistant',
    description:
      'Upload a document, get a clear summary, ask questions about its contents, and optionally research the ideas inside it when you want more context.',
    tags: ['AI', 'RAG', 'Document Q&A', 'Research'],
    tone: 'coral',
    url: 'https://github.com/v8god/EvidenceDocumentAi',
  },
];

const skills = ['Python', 'TypeScript', 'PyTorch', 'React', 'FastAPI', 'Docker', 'Supabase', 'Cloudflare', 'MongoDB', 'Flutter'];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const sections = ['home', 'work', 'about', 'contact'];
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0);
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        return element && window.scrollY >= element.offsetTop - 180;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 },
    );
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <header className="site-header">
        <button className="wordmark" onClick={() => scrollTo('home')} aria-label="Go to top">
          PG<span>.</span>
        </button>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
          {['home', 'work', 'about', 'contact'].map((section) => (
            <button key={section} className={activeSection === section ? 'active' : ''} onClick={() => scrollTo(section)}>
              <span>0{['home', 'work', 'about', 'contact'].indexOf(section) + 1}</span>{section}
            </button>
          ))}
        </nav>
        <a className="header-availability" href="mailto:prathamgoyal7411@gmail.com"><span /> Available for work</a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main>
        <section className="hero section-grid" id="home">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="eyebrow-line" /> Software engineer & AI builder</p>
            <h1>I build the<br /><em>unreasonable.</em></h1>
            <p className="hero-intro">End-to-end AI systems, shipped with care. I move between research and product until the line disappears.</p>
            <div className="hero-actions">
              <button className="primary-button" onClick={() => scrollTo('work')}>Explore the work <ArrowDownRight size={17} /></button>
              <a className="text-link" href="mailto:prathamgoyal7411@gmail.com">Get in touch <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="hero-visual reveal reveal-delay">
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <div className="portrait-frame">
              <img src="/Futuristic_coder_lair_with_mystic_vibes.png" alt="Pratham Goyal in his workspace" />
              <div className="portrait-glow" />
              <div className="portrait-label">Delhi, IN <span>•</span> 28.61° N</div>
            </div>
            <div className="hero-stamp"><span>PG</span><small>build<br />break<br />repeat</small></div>
          </div>
          <div className="hero-meta reveal">
            <span>Currently studying</span>
            <strong>B.Tech Computer Science<br />Amity University, Noida</strong>
          </div>
          <div className="hero-side-note">Scroll to explore <ArrowDownRight size={15} /></div>
        </section>

        <section className="marquee-band" aria-label="Areas of expertise">
          <div className="marquee-track"><span>AI SYSTEMS</span><b>✳</b><span>PRODUCT ENGINEERING</span><b>✳</b><span>RESEARCH</span><b>✳</b><span>AI SYSTEMS</span><b>✳</b><span>PRODUCT ENGINEERING</span><b>✳</b></div>
        </section>

        <section className="work section-grid section" id="work">
          <div className="section-heading reveal"><p className="eyebrow"><span className="eyebrow-line" /> Selected work</p><h2>Things I’ve<br /><em>made real.</em></h2><p className="heading-note">A few projects where the interesting part was making the whole thing work.</p></div>
          <div className="project-list">
            {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
          </div>
        </section>

        <section className="about section-grid section" id="about">
          <div className="about-art reveal"><div className="grid-lines" /><div className="about-orb"><BrainCircuit size={42} strokeWidth={1.2} /></div><span className="art-caption">thinking in<br />systems</span></div>
          <div className="about-copy reveal reveal-delay"><p className="eyebrow"><span className="eyebrow-line" /> A little context</p><h2>Curious by<br /><em>default.</em></h2><p className="about-lede">I’m Pratham — a computer science student who likes difficult problems, clean interfaces, and the moment a messy idea clicks into place.</p><p className="about-body">My work lives somewhere between machine learning research and thoughtful software. I’ve built local AI assistants, edge-deployed RAG products, and tools that critique their own output. I care less about the label and more about whether the thing is useful, honest, and actually shipped.</p><div className="skill-cloud">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>
        </section>

        <section className="contact section-grid section" id="contact">
          <div className="contact-copy reveal"><p className="eyebrow"><span className="eyebrow-line" /> Open channel</p><h2>Have a good<br /><em>problem?</em></h2><p>Let’s make something that earns its place in the world.</p><a className="contact-email" href="mailto:prathamgoyal7411@gmail.com">prathamgoyal7411@gmail.com <ArrowUpRight size={19} /></a></div>
          <div className="contact-card reveal reveal-delay"><div className="contact-card-top"><span>PG / 2025</span><Mail size={18} /></div><div className="contact-card-center">Let’s<br /><strong>talk<span>.</span></strong></div><div className="contact-card-bottom"><a href="https://github.com/v8god" target="_blank" rel="noreferrer"><Github size={17} /> Github</a><a href="https://www.linkedin.com/in/pratham-goyal-4ab529311?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a></div></div>
        </section>
      </main>
      <footer><span>© 2025 Pratham Goyal</span><span>Designed & built with intent</span><span>New Delhi / India</span></footer>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const handleMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 5;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -5;
    event.currentTarget.style.setProperty('--rotate-x', `${y}deg`);
    event.currentTarget.style.setProperty('--rotate-y', `${x}deg`);
  };
  const resetMove = (event: MouseEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty('--rotate-x', '0deg');
    event.currentTarget.style.setProperty('--rotate-y', '0deg');
  };
  return <a className={`project-card ${project.tone} reveal`} href={project.url} target="_blank" rel="noreferrer" onMouseMove={handleMove} onMouseLeave={resetMove} style={{ '--delay': `${index * 90}ms` } as CSSProperties}>
    <div className="project-index">{project.number}</div><div className="project-body"><div><p className="project-type">{project.type}</p><h3>{project.title}</h3></div><p className="project-description">{project.description}</p><div className="project-footer"><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><span className="project-arrow"><ArrowUpRight size={20} /></span></div></div>
  </a>;
}

export default App;
