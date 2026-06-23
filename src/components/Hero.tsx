'use client';

import React, { useState, useEffect } from 'react';
import { Mail, Phone, Download, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/SocialIcons';

const words = ["Cyber Security Engineer", "Linux Administrator", "Cloud Security & Linux Enthusiast"];

export default function Hero() {
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const handleTyping = () => {
      const fullWord = words[currentWordIdx];
      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullWord) {
          // Pause at the complete word
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(40);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIdx((prev) => (prev + 1) % words.length);
          setTypingSpeed(150);
          return;
        }
      }

      timer = setTimeout(handleTyping, typingSpeed);
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIdx, typingSpeed]);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 70,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="container hero-wrapper fade-in-up">
      <div className="hero-content">
        <span className="badge hero-badge">Welcome to my Portfolio</span>
        <h1 className="hero-name">
          Hi, I am <span className="gradient-text">Venkat Nikhil Vallamsetty</span>
        </h1>
        
        <div className="hero-subtitle-container">
          <div className="hero-subtitle">
            I am a <span>{currentText}</span>
          </div>
        </div>

        <p className="hero-description">
          Motivated and detail-oriented Computer Science and Engineering student. Experienced in Cloud Computing, Cybersecurity, Linux Administration, and Full-Stack Web Development. Skilled in building secure web applications, developing AI-powered security solutions, and working with AWS Cloud, network security, and machine learning technologies. Passionate about solving real-world challenges through technology and cybersecurity innovation.
        </p>

        <div className="hero-ctas">
          <button onClick={() => handleScrollTo('projects')} className="btn btn-primary">
            View My Projects <ArrowRight size={18} />
          </button>
          <button onClick={() => handleScrollTo('contact')} className="btn btn-secondary">
            Let&apos;s Connect
          </button>
        </div>

        <div className="hero-socials">
          <a href="https://github.com/venkatnikhil616/" target="_blank" rel="noopener noreferrer" className="hero-social-link" title="GitHub">
            <GithubIcon size={20} />
          </a>
          <a href="https://www.linkedin.com/in/venkat-nikhil-vallamsetty-293216367" target="_blank" rel="noopener noreferrer" className="hero-social-link" title="LinkedIn">
            <LinkedinIcon size={20} />
          </a>
          <a href="mailto:venkatnikhil616@gmail.com" className="hero-social-link" title="Email">
            <Mail size={20} />
          </a>
          <a href="tel:+919848654484" className="hero-social-link" title="Phone">
            <Phone size={20} />
          </a>
          <a href="/Venkat_Nikhil_resume_23-06-2026.pdf" download className="btn btn-secondary" style={{ borderRadius: '24px', padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}>
            <Download size={16} /> Download CV
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-orb-container">
          <div className="hero-inner-glass"></div>
          <span className="hero-core-tech">&lt; / &gt;</span>
        </div>
      </div>
    </section>
  );
}
