import React, { useState, useEffect } from 'react';
import { storyData } from './storyData';
import Slide from './components/Slide';

export default function App() {
  const [mode, setMode] = useState('portfolio');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track the user's scroll position
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };

    // Attach the listener on mount
    window.addEventListener('scroll', handleScroll);
    
    // Clean up the listener on unmount to prevent memory leaks
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler to jump back to the very top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      
      {/* GLOBAL PROGRESS BAR CONTAINER */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '4px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        zIndex: 100 // Stays on top of everything
      }}>
        {/* Dynamic filling indicator line */}
        <div style={{
          width: `${scrollProgress}%`,
          height: '100%',
          backgroundColor: mode === 'portfolio' ? '#10b981' : '#6366f1', // Emerald for portfolio, Indigo for pitch
          transition: 'width 0.1s ease-out, background-color 0.5s ease'
        }} />
      </div>
      
      {/* FIXED HEADER */}
      <header style={{
        position: 'fixed',
        top: '4px', // Sits cleanly just below our progress bar
        left: 0,
        width: '100%',
        zIndex: 50,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem 2rem',
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(15, 23, 42, 0.3)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        color: '#ffffff'
      }}>
        <div style={{ fontWeight: '900', letterSpacing: '-0.05em', fontSize: '1.25rem' }}>
          {mode === 'portfolio' ? 'DEV.PORTFOLIO' : 'AGENCY.CORE'}
        </div>
        
        {/* BUTTON CONTROLS */}
        <div style={{ backgroundColor: 'rgba(0,0,0,0.5)', padding: '4px', borderRadius: '9999px', display: 'flex', gap: '4px' }}>
          <button
            onClick={() => setMode('portfolio')}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '9999px',
              border: 'none',
              fontSize: '0.75rem',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backgroundColor: mode === 'portfolio' ? '#ffffff' : 'transparent',
              color: mode === 'portfolio' ? '#0f172a' : '#94a3b8'
            }}
          >
            Portfolio Mode
          </button>
          <button
            onClick={() => setMode('company')}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '9999px',
              border: 'none',
              fontSize: '0.75rem',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backgroundColor: mode === 'company' ? '#ffffff' : 'transparent',
              color: mode === 'company' ? '#0f172a' : '#94a3b8'
            }}
          >
            Client Pitch Mode
          </button>
        </div>
      </header>

      {/* SLIDES MAIN CONTAINER */}
      <main>
        {storyData.map((slide) => (
          <Slide key={slide.id} data={slide} mode={mode} />
        ))}
      </main>

      {/* RECRUITER BRANDED SOCIAL FOOTER */}
      <footer style={{
        backgroundColor: '#ffffff',
        color: '#64748b',
        padding: '4rem 2rem 3rem 2rem',
        textAlign: 'center',
        borderTop: '1px solid #e2e8f0'
      }}>
        {/* Social Round Link Circles matching your example image */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}>
          {[
            { icon: '📁', url: 'https://github.com', label: 'GitHub' },
            { icon: '💼', url: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: '✉️', url: 'mailto:your-email@example.com', label: 'Email' }
          ].map((soc, i) => (
            <a 
              key={i} 
              href={soc.url} 
              target="_blank" 
              rel="noreferrer"
              title={soc.label}
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                border: '1px solid #cbd5e1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem',
                textDecoration: 'none',
                color: '#334155',
                transition: 'all 0.3s ease',
                backgroundColor: '#ffffff'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#0f172a';
                e.currentTarget.style.transform = 'scale(1.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#cbd5e1';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              {soc.icon}
            </a>
          ))}
        </div>
        
        {/* Dynamic Copyright statement */}
        <div style={{ fontSize: '0.85rem', fontWeight: '500', opacity: 0.8 }}>
          © {new Date().getFullYear()} Davis. All rights reserved.
        </div>
      </footer>

      {/* FLOATING BACK TO TOP BUTTON */}
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 60,
          padding: '0.75rem 1.25rem',
          borderRadius: '8px',
          border: '1px solid rgba(255,255,255,0.2)',
          backgroundColor: 'rgba(15, 23, 42, 0.6)',
          backdropFilter: 'blur(5px)',
          color: '#ffffff',
          fontWeight: 'bold',
          fontSize: '0.85rem',
          cursor: 'pointer',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          // Only show button if user has scrolled down past ~15% of the page
          opacity: scrollProgress > 15 ? 1 : 0,
          transform: scrollProgress > 15 ? 'translateY(0)' : 'translateY(20px)',
          pointerEvents: scrollProgress > 15 ? 'auto' : 'none'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#ffffff';
          e.currentTarget.style.color = '#0f172a';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(15, 23, 42, 0.6)';
          e.currentTarget.style.color = '#ffffff';
        }}
      >
        ↑ BACK TO TOP
      </button>
    </div>
  );
}