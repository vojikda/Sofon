// Redeploy trigger: trivial comment to force GitHub Actions
// Force redeploy: remove unused imports
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Atom, Cpu, Eye, Zap, Brain, Globe, Box, BookOpen } from 'lucide-react';

type Section = 'overview' | 'quantum' | 'sophons' | 'applications' | 'timeline' | 'demo' | 'dimensions' | 'fairytales';

function App() {
  const [activeSection, setActiveSection] = useState<Section>('overview');

  const sections = [
    { id: 'overview', label: 'Overview', icon: Globe },
    { id: 'quantum', label: 'Quantum Computing', icon: Cpu },
    { id: 'sophons', label: 'Sophon Technology', icon: Atom },
    { id: 'applications', label: 'Applications', icon: Brain },
    { id: 'timeline', label: 'Timeline', icon: Eye },
    { id: 'demo', label: 'Interactive Demo', icon: Zap },
    { id: 'dimensions', label: '10D Space', icon: Box },
    { id: 'fairytales', label: 'Fairy Tales for Trisolaris', icon: BookOpen }
  ];

  const SophonIllustration = () => (
    <div className="sophon-illustration">
      <svg width="300" height="300" viewBox="0 0 300 300" className="sophon-svg">
        {/* Outer quantum field */}
        <defs>
          <radialGradient id="quantumField" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00ff88" stopOpacity="0.8"/>
            <stop offset="70%" stopColor="#00bfff" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#ff6b6b" stopOpacity="0.1"/>
          </radialGradient>
          <radialGradient id="coreGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff"/>
            <stop offset="50%" stopColor="#00ff88"/>
            <stop offset="100%" stopColor="#00bfff"/>
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Quantum field background */}
        <circle cx="150" cy="150" r="140" fill="url(#quantumField)" opacity="0.6">
          <animate attributeName="r" values="140;150;140" dur="4s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.6;0.8;0.6" dur="3s" repeatCount="indefinite"/>
        </circle>
        
        {/* Orbiting quantum particles */}
        {[...Array(8)].map((_, i) => (
          <g key={i}>
            <circle
              cx={150 + 80 * Math.cos(i * Math.PI / 4)}
              cy={150 + 80 * Math.sin(i * Math.PI / 4)}
              r="3"
              fill="#00ff88"
              filter="url(#glow)"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                values={`0 150 150; 360 150 150`}
                dur={`${3 + i * 0.5}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}
        
        {/* Sophon core - unfolded proton */}
        <g transform="translate(150, 150)">
          {/* Central core */}
          <circle cx="0" cy="0" r="20" fill="url(#coreGradient)" filter="url(#glow)">
            <animate attributeName="r" values="20;25;20" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          {/* Quantum computing circuits */}
          <path
            d="M-15 -15 L15 -15 L15 15 L-15 15 Z"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1"
            opacity="0.8"
          >
            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1.5s" repeatCount="indefinite"/>
          </path>
          
          {/* Data streams */}
          {[...Array(6)].map((_, i) => (
            <line
              key={i}
              x1={-30 * Math.cos(i * Math.PI / 3)}
              y1={-30 * Math.sin(i * Math.PI / 3)}
              x2={-50 * Math.cos(i * Math.PI / 3)}
              y2={-50 * Math.sin(i * Math.PI / 3)}
              stroke="#00ff88"
              strokeWidth="1"
              opacity="0.6"
            >
              <animate attributeName="opacity" values="0.6;1;0.6" dur={`${1 + i * 0.2}s`} repeatCount="indefinite"/>
            </line>
          ))}
        </g>
        
        {/* Energy waves */}
        {[...Array(3)].map((_, i) => (
          <circle
            key={i}
            cx="150"
            cy="150"
            r={60 + i * 20}
            fill="none"
            stroke="#00bfff"
            strokeWidth="1"
            opacity="0.3"
          >
            <animate attributeName="r" values={`${60 + i * 20};${80 + i * 20};${60 + i * 20}`} dur={`${2 + i}s`} repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.3;0.6;0.3" dur={`${1.5 + i * 0.5}s`} repeatCount="indefinite"/>
          </circle>
        ))}
      </svg>
      <p className="illustration-caption">Sophon: A quantum computer embedded in an unfolded proton</p>
    </div>
  );

  const renderOverview = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="section-content">
        <div className="overview-header">
          <div className="overview-text">
            <p>
              Sophon technology represents the pinnacle of Trisolaran scientific achievement, 
              combining quantum computing, subatomic manipulation, and artificial intelligence 
              to create the most advanced surveillance and computational system in the universe.
            </p>
          </div>
          <SophonIllustration />
        </div>
        
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

  const renderDimensions = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="section-content">
        <p>
          The concept of 10-dimensional space is fundamental to understanding sophon technology 
          and the advanced physics that Trisolarans have mastered. While humans perceive only 
          three spatial dimensions, higher-dimensional spaces contain possibilities that seem 
          like magic to our limited perspective.
        </p>
        
        <div className="dimensions-visualization">
          <h3>Visualizing 10-Dimensional Space</h3>
          <div className="dimension-grid">
            <div className="dimension-card">
              <h4>1D - Line</h4>
              <div className="dimension-visual">
                <div className="line-1d"></div>
              </div>
              <p>Forward and backward only</p>
            </div>
            
            <div className="dimension-card">
              <h4>2D - Plane</h4>
              <div className="dimension-visual">
                <div className="plane-2d"></div>
              </div>
              <p>Left, right, forward, backward</p>
            </div>
            
            <div className="dimension-card">
              <h4>3D - Space</h4>
              <div className="dimension-visual">
                <div className="cube-3d"></div>
              </div>
              <p>Up, down, left, right, forward, backward</p>
            </div>
            
            <div className="dimension-card">
              <h4>4D - Time</h4>
              <div className="dimension-visual">
                <div className="time-4d"></div>
              </div>
              <p>Past, present, future + 3D space</p>
            </div>
            
            <div className="dimension-card">
              <h4>5D+ - Higher Dimensions</h4>
              <div className="dimension-visual">
                <div className="higher-dimensions"></div>
              </div>
              <p>Compactified dimensions, parallel universes</p>
            </div>
          </div>
        </div>
        
        <div className="tech-grid">
          <div className="tech-card">
            <h3>🌌 Compactified Dimensions</h3>
            <p>
              In string theory, the extra 6 dimensions are "curled up" or compactified 
              at scales smaller than atoms. Sophons can access these dimensions, 
              allowing them to bypass normal spatial constraints.
            </p>
          </div>
          
          <div className="tech-card">
            <h3>🔗 Quantum Entanglement Across Dimensions</h3>
            <p>
              Sophons use higher-dimensional connections to maintain instant 
              communication across vast distances, appearing to violate 
              the speed of light from our 3D perspective.
            </p>
          </div>
          
          <div className="tech-card">
            <h3>🎭 Reality Manipulation</h3>
            <p>
              By accessing higher dimensions, sophons can create impossible 
              phenomena in our 3D world - objects appearing and disappearing, 
              particles existing in multiple places simultaneously.
            </p>
          </div>
          
          <div className="tech-card">
            <h3>🧠 Human Perception Limits</h3>
            <p>
              Our brains evolved to process only 3 spatial dimensions. 
              Higher-dimensional phenomena appear as "magic" or impossible 
              physics, just as a 2D being would see 3D objects as 
              incomprehensible.
            </p>
          </div>
        </div>
        
        <div className="dimension-explanation">
          <h3>How 10D Space Appears to Humans</h3>
          <p>
            Imagine you're a 2D being living on a piece of paper. A 3D object passing through 
            your world would appear as a shape that changes size and appears/disappears 
            mysteriously. Similarly, 10D phenomena in our 3D world appear as:
          </p>
          <ul>
            <li><strong>Quantum tunneling:</strong> Particles appearing to pass through solid barriers</li>
            <li><strong>Spooky action at a distance:</strong> Instant correlation between separated particles</li>
            <li><strong>Wave-particle duality:</strong> Objects existing as both waves and particles</li>
            <li><strong>Virtual particles:</strong> Matter appearing from "nothing" in quantum fluctuations</li>
          </ul>
          <p>
            Sophons exploit these higher-dimensional connections to perform their surveillance 
            and manipulation tasks, making them appear as supernatural entities to human observers.
          </p>
        </div>
      </div>
    </motion.div>
  );

  const renderFairyTales = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="section-content">
        <p>
          The three fairy tales told to Trisolaris represent humanity's attempt to communicate 
          complex concepts through allegory and metaphor. These stories contain hidden meanings 
          about human civilization, technology, and the nature of the universe itself.
        </p>
        
        <div className="fairy-tales-container">
          <div className="fairy-tale">
            <h3>🌙 The Tale of the Princess and the Prince</h3>
            <div className="tale-content">
              <h4>The Story</h4>
              <p>
                A princess lives in a castle with no doors or windows, communicating with the outside 
                world only through a mirror. A prince from another kingdom falls in love with her 
                reflection and sends her gifts through the mirror. The princess, unable to leave her 
                castle, sends her own reflection back to the prince.
              </p>
              
              <h4>The Hidden Meaning</h4>
              <p>
                This tale represents the fundamental problem of communication between civilizations 
                separated by vast distances. The "castle" symbolizes a planet, the "mirror" represents 
                electromagnetic communication, and the "reflections" are the messages sent between 
                worlds. The story illustrates how civilizations can only know each other through 
                their "reflections" - the information they choose to send.
              </p>
              
              <div className="tale-symbolism">
                <h5>Key Symbols:</h5>
                <ul>
                  <li><strong>Castle:</strong> A planet or civilization</li>
                  <li><strong>Mirror:</strong> Communication technology</li>
                  <li><strong>Reflections:</strong> Messages and information</li>
                  <li><strong>No doors/windows:</strong> Physical isolation in space</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="fairy-tale">
            <h3>🎭 The Tale of the Fisherman and the Bottle</h3>
            <div className="tale-content">
              <h4>The Story</h4>
              <p>
                A fisherman finds a bottle containing a genie who offers to grant three wishes. 
                The genie warns that each wish will come with a terrible price. The fisherman 
                wishes for wealth, which brings him enemies. He wishes for power, which brings 
                him fear. Finally, he wishes to return to his simple life, but the genie reveals 
                that the bottle itself was the trap - once opened, it can never be closed.
              </p>
              
              <h4>The Hidden Meaning</h4>
              <p>
                This tale represents the dangers of technological advancement and the concept of 
                the "technological trap." Once a civilization begins to develop advanced technology, 
                it cannot go back to a simpler state. The "genie" represents scientific knowledge, 
                and the "wishes" are technological breakthroughs that come with unintended consequences. 
                The story warns about the irreversible nature of technological progress.
              </p>
              
              <div className="tale-symbolism">
                <h5>Key Symbols:</h5>
                <ul>
                  <li><strong>Genie:</strong> Scientific knowledge and technology</li>
                  <li><strong>Three wishes:</strong> Major technological breakthroughs</li>
                  <li><strong>Terrible price:</strong> Unintended consequences of technology</li>
                  <li><strong>Unclosable bottle:</strong> Irreversible technological advancement</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="fairy-tale">
            <h3>🌌 The Tale of the Three Painters</h3>
            <div className="tale-content">
              <h4>The Story</h4>
              <p>
                Three painters are commissioned to paint a wall. The first painter paints a beautiful 
                landscape, but it's destroyed by rain. The second painter paints a waterproof mural, 
                but it's covered by the third painter's work. The third painter creates a painting 
                that changes with the weather and time, becoming more beautiful with each change. 
                The wall itself becomes a living work of art.
              </p>
              
              <h4>The Hidden Meaning</h4>
              <p>
                This tale represents the evolution of civilizations and the concept of the "Dark Forest" 
                theory. The first painter represents early civilizations that are vulnerable to cosmic 
                threats. The second painter represents civilizations that try to hide or protect themselves. 
                The third painter represents advanced civilizations that adapt and evolve, becoming 
                part of the cosmic ecosystem itself.
              </p>
              
              <div className="tale-symbolism">
                <h5>Key Symbols:</h5>
                <ul>
                  <li><strong>Wall:</strong> The universe or cosmic environment</li>
                  <li><strong>Rain:</strong> Cosmic threats and natural disasters</li>
                  <li><strong>Waterproof mural:</strong> Defensive strategies and hiding</li>
                  <li><strong>Living painting:</strong> Adaptive and evolving civilizations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="fairy-tales-explanation">
          <h3>The Deeper Significance</h3>
          <p>
            These fairy tales serve multiple purposes in the context of the Three-Body Problem:
          </p>
          <ul>
            <li><strong>Communication:</strong> They attempt to explain human concepts to an alien civilization</li>
            <li><strong>Warning:</strong> They convey the dangers and responsibilities of advanced technology</li>
            <li><strong>Philosophy:</strong> They express humanity's understanding of the universe and civilization</li>
            <li><strong>Strategy:</strong> They may contain hidden strategies or information for humanity's survival</li>
          </ul>
          <p>
            The Trisolarans, despite their advanced technology, may not fully understand the allegorical 
            nature of these stories, making them both a form of communication and a potential weapon 
            in the cosmic game of survival.
          </p>
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
      case 'dimensions':
        return renderDimensions();
      case 'fairytales':
        return renderFairyTales();
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

export default App; 