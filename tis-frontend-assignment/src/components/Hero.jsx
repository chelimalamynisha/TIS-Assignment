import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <motion.div
            className="eyebrow"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            DEHRADUN · INDIA <span>•</span> EST. 2012
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Welcome to <em>Tulas</em><br />
            International School
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            TIS is one of India’s top boarding and day schools in Dehradun, built around academic excellence,
            character formation and a vibrant campus community.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <a className="btn primary" href="#admissions">
              Begin your journey
              <ArrowUpRight size={18} />
            </a>
            <a className="btn ghost" href="#about">
              <span className="play">
                <Play size={13} fill="currentColor" />
              </span>
              Explore TIS
            </a>
          </motion.div>

          <motion.div
            className="hero-meta"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <div className="hero-stat">
              <strong>22+</strong>
              <span>Acres</span>
            </div>
            <div className="hero-stat">
              <strong>16+</strong>
              <span>Sports</span>
            </div>
            <div className="hero-stat">
              <strong>6:1</strong>
              <span>Teacher ratio</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.2 }}
        >
          <div className="hero-photo" />
          <div className="hero-badge">
            <strong>2012</strong>
            <span>Founded with a vision for holistic education</span>
          </div>
          <div className="hero-float">INTELLIGENCE <b>+</b> CHARACTER</div>
        </motion.div>
      </div>

      <a className="scroll-cue" href="#about">
        <span>Scroll to explore</span>
        <ArrowDown size={17} />
      </a>
    </section>
  );
}
