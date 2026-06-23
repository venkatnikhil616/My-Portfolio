'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/SocialIcons';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="container footer-content">
        {/* Brand */}
        <div className="footer-logo" onClick={handleScrollToTop} style={{ cursor: 'pointer' }}>
          VENU <span>CHANDAKA</span>
        </div>

        {/* Text */}
        <div className="footer-text">
          &copy; {new Date().getFullYear()} Chandaka Venu. All Rights Reserved. Built with Next.js.
        </div>

        {/* Links */}
        <div className="footer-links">
          <a 
            href="https://github.com/venkatnikhil616/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link"
            title="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a 
            href="https://www.linkedin.com/in/venkat-nikhil-vallamsetty-293216367" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link"
            title="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <button 
            onClick={handleScrollToTop} 
            className="footer-link" 
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            title="Back to Top"
          >
            <ArrowUp size={18} style={{ color: 'var(--primary-orange)' }} />
          </button>
        </div>
      </div>
    </footer>
  );
}
