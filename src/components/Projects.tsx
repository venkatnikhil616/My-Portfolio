'use client';

import React, { useState } from 'react';
import { 
  ExternalLink, 
  Sparkles, 
  Sprout, 
  GraduationCap, 
  X, 
  ArrowRight 
} from 'lucide-react';
import { GithubIcon } from '@/components/SocialIcons';

interface Project {
  id: string;
  title: string;
  category: 'ai-ml' | 'web-dev';
  categoryLabel: string;
  period: string;
  shortDesc: string;
  longDesc: string;
  tech: string[];
  features: string[];
  githubUrl: string;
  demoUrl?: string;
  icon: React.ReactNode;
  accolade?: string;
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai-ml' | 'web-dev'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'Rothschild NIDS',
      title: 'Rothschild NID System',
      category: 'ai-ml',
      categoryLabel: 'CyberSecurity & Machine Learning',
      shortDesc: 'Real-time Network Intrusion Detection System using machine learning to analyze, classify, and detect malicious network traffic and cybersecurity threats.',
      longDesc: 'Rothschild-NIDS is a real-time Network Intrusion Detection System designed to identify and classify malicious network traffic using machine learning techniques. Built using Flask, Scikit-learn, and SQLite, the system processes network traffic data, detects suspicious activities, and performs threat analysis for cybersecurity monitoring. The application focuses on intrusion detection, anomaly identification, and real-time security monitoring to enhance network protection and cybersecurity awareness.',
      tech: ['Python','Flask','Scikit-learn','SQLite','Machine Learning','Network Security'],
      features: [
        'Processed and analysed over 10,000 network traffic records for intrusion detection.',
        'Implemented machine learning models for real-time malicious traffic classification.',
        'Integrated SQLite database for traffic logging, monitoring, and Threat analysis.',
        'Focused on anomaly detection, cyber security monitoring, and network threat prevention.'
      ],

      githubUrl: 'https://github.com/venkatnikhil616/',
      icon: <Sparkles size={24} />,
      accolade: '1st Place – Sudoku & Project Expo (Pragyan 2026)'
    },
    {
      id: 'AI based Phishing URL Detection System',
      title: 'Phishing URL Detection System',
      category: 'ai - Cyber security',
      categoryLabel: 'AI &  Cyber Security',
      shortDesc: 'An AI-based phishing URL detection system designed to identify malicious and fraudulent websites through URL analysis and threat prediction techniques.',
      longDesc: 'Developed an AI-powered phishing URL detection system using machine learning techniques to identify malicious and fraudulent websites. Built with Python and Scikit-learn, the system uses Logistic Regression for threat classification, along with URL feature extraction and preprocessing techniques to improve detection accuracy. The application focuses on real-time phishing detection and cybersecurity protection against online threats.',
      tech: ['Python', 'Scikit-learn', 'Logistic Regression', 'Pandas', 'Numpy'],
      features: [
        'Achieved 95% phishing URL detection accuracy using Logistic Regression.',
        'Implemented URL feature extraction and preprocessing techniques for threat analysis.',
        'Developed real-time malicious URL prediction and classification functionality.',
        'Enhanced cybersecurity protection against phishing attacks and fraudulent websites.'
      ],
      
      githubUrl: 'https://github.com/venkastnikhil616/',
      icon: <Sprout size={24} />
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="container">
      <h2 className="section-title">My Projects</h2>

      {/* Filter Tabs */}
      <div className="projects-filter-bar">
        <button 
          className={`skills-tab-btn ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          All Projects
        </button>
        <button 
          className={`skills-tab-btn ${activeFilter === 'ai-ml' ? 'active' : ''}`}
          onClick={() => setActiveFilter('ai-ml')}
        >
          AI &amp; ML
        </button>
        <button 
          className={`skills-tab-btn ${activeFilter === 'web-dev' ? 'active' : ''}`}
          onClick={() => setActiveFilter('web-dev')}
        >
          Web Development
        </button>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project, idx) => (
          <div key={project.id} className="glass-card fade-in-up" style={{ animationDelay: `${idx * 0.15}s` }}>
            <div className="project-card-inner">
              <div className="project-top-line">
                <div className="project-icon">{project.icon}</div>
                <div className="project-links">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link-btn" title="GitHub Source">
                    <GithubIcon size={18} />
                  </a>
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link-btn" title="Live Demo">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <div className="project-details">
                <span className="badge" style={{ width: 'fit-content' }}>{project.categoryLabel}</span>
                <h3 className="project-title" onClick={() => setSelectedProject(project)}>
                  {project.title}
                </h3>
                <p className="project-desc">{project.shortDesc}</p>
                <div className="project-tags">
                  {project.tech.slice(0, 3).map((t, tIdx) => (
                    <span key={tIdx} className="badge" style={{ background: 'rgba(255,255,255,0.03)', color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="badge" style={{ background: 'rgba(255,255,255,0.03)', color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="project-view-more" onClick={() => setSelectedProject(project)}>
                Explore details <ArrowRight size={14} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Details Glass Modal overlay */}
      <div className={`modal-overlay ${selectedProject ? 'open' : ''}`} onClick={() => setSelectedProject(null)}>
        {selectedProject && (
          <div className="glass-panel modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)} aria-label="Close modal">
              <X size={18} />
            </button>

            <div className="modal-header">
              <span className="badge" style={{ width: 'fit-content' }}>{selectedProject.categoryLabel}</span>
              <h3 className="modal-title">{selectedProject.title}</h3>
              <div className="modal-meta">
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Developed: {selectedProject.period}</span>
                {selectedProject.accolade && (
                  <span className="badge">{selectedProject.accolade}</span>
                )}
              </div>
            </div>

            <div className="modal-body">
              <div>
                <h4 className="modal-subheading">Project Overview</h4>
                <p>{selectedProject.longDesc}</p>
              </div>

              <div>
                <h4 className="modal-subheading">Key Features</h4>
                <ul className="modal-features">
                  {selectedProject.features.map((feature, fIdx) => (
                    <li key={fIdx}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="modal-subheading">Technologies Used</h4>
                <div className="project-tags" style={{ marginTop: '0.3rem' }}>
                  {selectedProject.tech.map((t, tIdx) => (
                    <span key={tIdx} className="badge" style={{ background: 'var(--badge-bg)', color: 'var(--badge-text)' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-actions">
                <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <GithubIcon size={18} /> View Source Code
                </a>
                {selectedProject.demoUrl && (
                  <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    <ExternalLink size={18} /> Visit Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
