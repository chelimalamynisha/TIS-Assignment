import {useState} from 'react';
import {Menu, X, Sun, Moon, ArrowUpRight} from 'lucide-react';
import Logo from './Logo';
import {navItems} from '../data/content';

export default function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="site-header">
      <div className="top-strip">
        <div className="container top-strip-inner">
          <a href="tel:+919837983791">ADMISSIONS HELPLINE NO. +91-9837983791</a>
          <button type="button" onClick={() => go('admissions')}>Enquire Now</button>
        </div>
      </div>

      <div className="navbar">
        <div className="nav-inner container">
          <Logo />

          <nav className={open ? 'nav-links open' : 'nav-links'}>
            {navItems.map(([label, id]) => (
              <button key={id} type="button" onClick={() => go(id)}>
                {label}
                <span>↗</span>
              </button>
            ))}
            <button type="button" className="nav-cta" onClick={() => go('admissions')}>
              Apply Now
              <ArrowUpRight size={16} />
            </button>
          </nav>

          <div className="nav-actions">
            <button
              type="button"
              className="theme-btn"
              onClick={() => setDark(!dark)}
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              type="button"
              className="menu-btn"
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

