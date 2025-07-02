// Force redeploy: remove unused imports
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Atom, Cpu, Eye, Zap, Brain, Globe } from 'lucide-react';

type Section = 'overview' | 'quantum' | 'sophons' | 'applications' | 'timeline' | 'demo';

function App() {
  const [activeSection, setActiveSection] = useState<Section>('overview');

  const sections = [
    { id: 'overview', label: 'Overview', icon: Globe },
    { id: 'quantum', label: 'Quantum Computing', icon: Cpu },
    { id: 'sophons', label: 'Sophon Technology', icon: Atom },
    { id: 'applications', label: 'Applications', icon: Brain },
    { id: 'timeline', label: 'Timeline', icon: Eye },
    { id: 'demo', label: 'Interactive Demo', icon: Zap }
  ];

  const renderOverview = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="section-content">
        <p>
          Sophon technology represents the pinnacle of Trisolaran scientific achievement, 
          combining quantum computing, subatomic manipulation, and artificial intelligence 
          to create the most advanced surveillance and computational system in the universe.
        </p>
        
        <div className="tech-grid">
          <div className="tech-card">
            <h3>🌌 Subatomic Manipulation</h3>
            <p>
              Sophons are created by manipulating protons at the subatomic level, 
              unfolding them into two-dimensional structures and embedding quantum 
              computers within their fabric.
            </p>
          </div>
          
          <div className="tech-card">
            <h3>🧠 Quantum Intelligence</h3>
            <p>
              Each sophon contains a quantum computer with processing power far 
              exceeding any human technology, capable of complex calculations and 
              autonomous decision-making.
            </p>
          </div>
          
          <div className="tech-card">
            <h3>👁️ Universal Surveillance</h3>
            <p>
              Sophons can monitor entire planets, intercept communications, and 
              manipulate human technology, making them the perfect tool for 
              Trisolaran intelligence gathering.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderQuantum = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="section-content">
        <p>
          The quantum computing technology behind sophons represents a revolutionary 
          leap beyond classical computing, utilizing quantum superposition and 
          entanglement to achieve computational power that defies human understanding.
        </p>
        
        <div className="interactive-demo">
          <h3>Quantum Superposition Visualization</h3>
          <div className="particle-container">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
          <p>Each particle represents a quantum bit in superposition</p>
        </div>
        
        <div className="tech-grid">
          <div className="tech-card">
            <h3>⚛️ Quantum Bits (Qubits)</h3>
            <p>
              Unlike classical bits that are either 0 or 1, qubits can exist in 
              multiple states simultaneously through quantum superposition, enabling 
              parallel processing on an unimaginable scale.
            </p>
          </div>
          
          <div className="tech-card">
            <h3>🔗 Quantum Entanglement</h3>
            <p>
              Sophons use quantum entanglement to maintain instant communication 
              across vast distances, allowing coordinated actions across light-years 
              of space.
            </p>
          </div>
          
          <div className="tech-card">
            <h3>🌊 Wave Function Collapse</h3>
            <p>
              The quantum computers within sophons can manipulate probability waves, 
              allowing them to influence quantum events and potentially alter the 
              fundamental nature of reality.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderSophons = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="section-content">
        <p>
          Sophons are the most sophisticated technology ever created by the Trisolarans, 
          combining subatomic engineering with quantum computing to create intelligent 
          particles capable of monitoring and manipulating human civilization.
        </p>
        
        <div className="tech-grid">
          <div className="tech-card">
            <h3>🔬 Proton Unfolding</h3>
            <p>
              Sophons are created by unfolding protons from three-dimensional to 
              two-dimensional structures, allowing the embedding of complex quantum 
              computers within their subatomic fabric.
            </p>
          </div>
          
          <div className="tech-card">
            <h3>🛡️ Indestructible Nature</h3>
            <p>
              Once created, sophons are virtually indestructible, capable of surviving 
              extreme conditions and continuing their mission for centuries or millennia.
            </p>
          </div>
          
          <div className="tech-card">
            <h3>🎯 Precision Control</h3>
            <p>
              Sophons can manipulate individual atoms and molecules, allowing them to 
              interfere with human experiments and technology at the most fundamental level.
            </p>
          </div>
          
          <div className="tech-card">
            <h3>🌐 Universal Presence</h3>
            <p>
              Multiple sophons can be deployed simultaneously, creating a network of 
              surveillance and control that covers entire planets and solar systems.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderApplications = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="section-content">
        <p>
          The applications of sophon technology extend far beyond simple surveillance, 
          encompassing scientific manipulation, psychological warfare, and the control 
          of human technological development.
        </p>
        
        <div className="tech-grid">
          <div className="tech-card">
            <h3>🔬 Scientific Sabotage</h3>
            <p>
              Sophons can interfere with particle accelerator experiments, making 
              it impossible for humans to advance their understanding of fundamental 
              physics and develop new technologies.
            </p>
          </div>
          
          <div className="tech-card">
            <h3>🧠 Psychological Operations</h3>
            <p>
              By manipulating human technology and creating impossible phenomena, 
              sophons can induce psychological effects, causing confusion, despair, 
              and loss of faith in science.
            </p>
          </div>
          
          <div className="tech-card">
            <h3>📡 Communication Interception</h3>
            <p>
              Sophons can monitor all human communications, intercept messages, 
              and potentially manipulate data transmission to serve Trisolaran interests.
            </p>
          </div>
          
          <div className="tech-card">
            <h3>🎭 Reality Manipulation</h3>
            <p>
              Through quantum manipulation, sophons can create impossible phenomena, 
              making humans question the nature of reality and their understanding 
              of the universe.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderTimeline = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="section-content">
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">Pre-Contact Era</div>
            <div className="timeline-title">Trisolaran Scientific Development</div>
            <div className="timeline-description">
              The Trisolarans developed advanced quantum computing and subatomic 
              manipulation techniques over centuries, driven by their chaotic 
              environment and survival needs.
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-date">First Contact</div>
            <div className="timeline-title">Ye Wenjie's Message</div>
            <div className="timeline-description">
              Ye Wenjie's message from Red Coast Base reached Trisolaris, 
              initiating first contact and revealing Earth's location to 
              the Trisolaran civilization.
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-date">Sophon Development</div>
            <div className="timeline-title">Creation of First Sophons</div>
            <div className="timeline-description">
              Trisolaran scientists created the first sophons by unfolding 
              protons and embedding quantum computers, beginning the era 
              of universal surveillance.
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-date">Deployment</div>
            <div className="timeline-title">Sophons Reach Earth</div>
            <div className="timeline-description">
              Sophons were deployed to Earth, beginning their mission of 
              monitoring human civilization and preventing technological 
              advancement beyond a certain threshold.
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-date">Current Era</div>
            <div className="timeline-title">Ongoing Surveillance</div>
            <div className="timeline-description">
              Sophons continue to monitor Earth, manipulating experiments 
              and maintaining the technological blockade while the Trisolaran 
              fleet approaches.
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderDemo = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="section-content">
        <div className="interactive-demo">
          <h3>Sophon Particle Simulation</h3>
          <div className="particle-container">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`,
                  background: i % 3 === 0 ? '#00ff88' : i % 3 === 1 ? '#00bfff' : '#ff6b6b'
                }}
              />
            ))}
          </div>
          <p>Simulation of sophon particles monitoring and manipulating quantum events</p>
          
          <div style={{ marginTop: '20px' }}>
            <button className="demo-button" onClick={() => window.location.reload()}>
              Reset Simulation
            </button>
          </div>
        </div>
        
        <div className="tech-grid">
          <div className="tech-card">
            <h3>🎮 Interactive Experience</h3>
            <p>
              This simulation demonstrates how sophons might appear and behave 
              in our universe, showing their ability to exist in multiple 
              quantum states simultaneously.
            </p>
          </div>
          
          <div className="tech-card">
            <h3>🔬 Scientific Accuracy</h3>
            <p>
              While simplified, this visualization is based on real quantum 
              mechanics principles, showing how subatomic particles can 
              behave in ways that defy classical physics.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return renderOverview();
      case 'quantum':
        return renderQuantum();
      case 'sophons':
        return renderSophons();
      case 'applications':
        return renderApplications();
      case 'timeline':
        return renderTimeline();
      case 'demo':
        return renderDemo();
      default:
        return renderOverview();
    }
  };

  return (
    <div className="container">
      <motion.div 
        className="header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="title">Sophon Technology Explorer</h1>
        <p className="subtitle">
          Explore the most advanced technology in the universe from The Three-Body Problem
        </p>
      </motion.div>

      <div className="navigation">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <motion.button
              key={section.id}
              className={`nav-button ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => setActiveSection(section.id as Section)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={20} style={{ marginRight: '8px' }} />
              {section.label}
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          className="content-section"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="section-title">
            {sections.find(s => s.id === activeSection)?.label}
          </h2>
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App; // Updated: Wed Jul  2 08:59:47 CEST 2025
