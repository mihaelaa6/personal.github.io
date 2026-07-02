import React, { useState } from 'react';
import { useIntersection } from '../hooks/useIntersection';

export default function Slide({ data, mode }) {
  const [slideRef, isVisible] = useIntersection({ threshold: 0.25 });
  const content = mode === 'portfolio' ? data.portfolioContent : data.companyContent;

  // Local state for the contact form input fields
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const contentStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
    transition: 'all 1.0s ease-out',
    maxWidth: '1100px',
    width: '100%',
    display: 'flex',
    flexDirection: data.layoutType === 'split' ? 'row' : 'column',
    flexWrap: 'wrap',
    gap: '3rem',
    alignItems: 'center',
    justifyContent: 'space-between'
  };

  const sectionStyle = {
    backgroundColor: data.bgColor,
    color: data.textColor,
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '6rem 10%',
    transition: 'background-color 0.8s ease'
  };

  return (
    <section ref={slideRef} style={sectionStyle}>
      <div style={contentStyle}>
        
        {/* LEFT COLUMN: STANDARD TEXT BLOCK */}
        <div style={{ flex: '1', minWidth: '300px', textAlign: 'left' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.15em', opacity: 0.6, display: 'block', marginBottom: '1rem' }}>
            {data.subtitle}
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: '900', lineHeight: 1.2, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            {content.heading}
          </h2>
          <p style={{ fontSize: '1.15rem', lineHeight: 1.6, opacity: 0.8, marginBottom: content.hasResumeButton ? '2rem' : '0' }}>
            {content.body}
          </p>

          {/* Interactive Resume Button Option (Section 2) */}
          {content.hasResumeButton && (
            <button style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#0f172a',
              color: '#ffffff',
              border: 'none',
              fontWeight: 'bold',
              fontSize: '0.85rem',
              letterSpacing: '0.05em',
              cursor: 'pointer',
              textTransform: 'uppercase',
              borderBottom: '3px solid #eab308' // Accenting yellow marker line similar to your screenshot
            }}>
              Download Resume
            </button>
          )}
        </div>

        {/* RIGHT COLUMN ALTERNATIVES */}
        
        {/* Case A: Split Layout - Portrait Profile Image */}
        {data.layoutType === 'split' && (
          <div style={{ flex: '1', minWidth: '300px', display: 'flex', justifyContent: 'center' }}>
            <img 
              src={data.imageUrl} 
              alt="Profile / Representation" 
              style={{
                width: '100%',
                maxWidth: '400px',
                aspectRatio: '4/5',
                objectFit: 'cover',
                filter: 'grayscale(100%)', // Keeps aesthetic matching image_a60ea1.jpg
                borderRadius: '4px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
              }}
            />
          </div>
        )}

        {/* Case B: Dashboard Metrics Graphing */}
        {content.metrics && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', width: '100%' }}>
            {content.metrics.map((metric, idx) => (
              <div key={idx} style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', padding: '2rem 1.5rem', backdropFilter: 'blur(5px)' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: '600', opacity: 0.7, marginBottom: '1rem' }}>{metric.label}</div>
                <div style={{ fontSize: '3rem', fontWeight: '900', color: metric.color, marginBottom: '1rem', lineHeight: 1 }}>
                  {isVisible ? metric.value : 0}{metric.unit || "%"}
                </div>
                <div style={{ width: '100%', height: '6px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '999px', overflow: 'hidden' }}>
                  <div style={{ width: isVisible ? `${metric.value}%` : '0%', height: '100%', backgroundColor: metric.color, borderRadius: '999px', transition: `width 1.5s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.2}s` }} />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Case C: Interactive Contact Form Input Grid */}
        {data.layoutType === 'contact' && (
          <div style={{ flex: '1', minWidth: '320px', width: '100%' }}>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input 
                type="text" 
                placeholder={mode === 'portfolio' ? "Your Name" : "Company / Representative Name"}
                value={formState.name}
                onChange={(e) => setFormState({...formState, name: e.target.value})}
                style={{ padding: '1rem', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.2)', backgroundColor: 'rgba(255,255,255,0.05)', color: '#fff', fontSize: '1rem' }}
              />
              <input 
                type="email" 
                placeholder="Direct Contact Email"
                value={formState.email}
                onChange={(e) => setFormState({...formState, email: e.target.value})}
                style={{ padding: '1rem', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.2)', backgroundColor: 'rgba(255,255,255,0.05)', color: '#fff', fontSize: '1rem' }}
              />
              <textarea 
                rows="4" 
                placeholder={mode === 'portfolio' ? "Tell me about your project or open position..." : "Outline your enterprise engineering requirements..."}
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
                style={{ padding: '1rem', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.2)', backgroundColor: 'rgba(255,255,255,0.05)', color: '#fff', fontSize: '1rem', resize: 'vertical' }}
              />
              <button type="submit" style={{
                padding: '1rem',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: mode === 'portfolio' ? '#10b981' : '#6366f1',
                color: '#fff',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                transition: 'opacity 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                Send Request
              </button>
            </form>
          </div>
        )}

      </div>
    </section>
  );
}