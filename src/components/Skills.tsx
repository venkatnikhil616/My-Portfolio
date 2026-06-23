'use client';

import React, { useState } from 'react';
import { 
  Code, 
  Terminal, 
  Cpu, 
  Database, 
  Server, 
  Wrench, 
  Coffee, 
  BarChart,
  BrainCircuit
} from 'lucide-react';

interface Skill {
  name: string;
  category: 'languages' | 'frameworks' | 'cloud' | 'databases';
  level: number; // percentage
  levelText: string;
  icon: React.ReactNode;
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState<'all' | 'languages' | 'frameworks' | 'cloud' | 'databases'>('all');

  const skills: Skill[] = [
    // Languages
    { name: 'Python', category: 'languages', level: 90, levelText: 'Advanced', icon: <Terminal size={18} /> },
    { name: 'Java', category: 'languages', level: 85, levelText: 'Advanced', icon: <Coffee size={18} /> },
    { name: 'JavaScript', category: 'languages', level: 80, levelText: 'Intermediate', icon: <Code size={18} /> },
    { name: 'C & C++', category: 'languages', level: 75, levelText: 'Intermediate', icon: <Code size={18} /> },
    { name: 'Bash', category: 'languages', level: 70, levelText: 'Intermediate', icon: <Code size={18} /> },
    
    // Frameworks & Libraries
    { name: 'HTML%', category: 'frameworks', level: 85, levelText: 'Advanced', icon: <Cpu size={18} /> },
    { name: 'Flask', category: 'frameworks', level: 80, levelText: 'Intermediate', icon: <Cpu size={18} /> },
    { name: 'React', category: 'frameworks', level: 80, levelText: 'Intermediate', icon: <Server size={18} /> },
    { name: 'CSS', category: 'frameworks', level: 80, levelText: 'Intermediate', icon: <Server size={18} /> },
    { name: 'FastAPI', category: 'frameworks', level: 75, levelText: 'Intermediate', icon: <Server size={18} /> },
    { name: 'Tailwind CSS', category: 'frameworks', level: 80, levelText: 'Advanced', icon: <BarChart size={18} /> },
    
    // Cloud & Cyber Security
    { name: 'Google Cloud', category: 'cloud', level: 80, levelText: 'Intermediate', icon: <BrainCircuit size={18} /> },
    { name: 'AWS IAM', category: 'cloud', level: 80, levelText: 'Intermediate', icon: <BrainCircuit size={18} /> },
    { name: 'Linux Administration', category: 'cloud', level: 85, levelText: 'Advanced', icon: <BrainCircuit size={18} /> },
    { name: 'Network Security', category: 'cloud', level: 75, levelText: 'Intermediate', icon: <Cpu size={18} /> },
    { name: 'Cloud Security', category: 'cloud', level: 70, levelText: 'Intermediate', icon: <Cpu size={18} /> },
    { name: 'Threat Detection', category: 'cloud', level: 85, levelText: 'Advanced', icon: <BarChart size={18} /> },
    { name: 'Ethical Hacking Fundamentals', category: 'cloud', level: 85, levelText: 'Advanced', icon: <BarChart size={18} /> },
    
    // Databases & Tools
    { name: 'MySQL', category: 'databases', level: 80, levelText: 'Intermediate', icon: <Database size={18} /> },
    { name: 'SQLite', category: 'databases', level: 85, levelText: 'Advanced', icon: <Database size={18} /> },
    { name: 'Postman', category: 'databases', level: 70, levelText: 'Intermediate', icon: <Database size={18} /> },
    { name: 'Git & GitHub', category: 'databases', level: 85, levelText: 'Advanced', icon: <Wrench size={18} /> },
    { name: 'VS Code', category: 'databases', level: 90, levelText: 'Advanced', icon: <Wrench size={18} /> },
    { name: 'Nmap', category: 'databases', level: 90, levelText: 'Advanced', icon: <Wrench size={18} /> },
    { name: 'WireShark', category: 'databases', level: 0, levelText: 'Advanced', icon: <Wrench size={18} /> },
  ];

  const filteredSkills = activeTab === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeTab);

  const tabs = [
    { id: 'all', label: 'All Skills' },
    { id: 'languages', label: 'Languages' },
    { id: 'frameworks', label: 'Web & Frameworks' },
    { id: 'cloud', label: 'cloud & Cyber Security' },
    { id: 'databases', label: 'Databases & Tools' },
  ] as const;

  return (
    <section id="skills" className="container">
      <h2 className="section-title">My Skills</h2>

      {/* Tabs navigation */}
      <div className="skills-nav-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`skills-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {filteredSkills.map((skill, idx) => (
          <div key={idx} className="glass-card skill-card fade-in-up" style={{ animationDelay: `${idx * 0.05}s` }}>
            <div className="skill-icon-box">
              {skill.icon}
            </div>
            <div className="skill-info">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level-text">{skill.levelText}</span>
              </div>
              <div className="skill-bar-container">
                <div 
                  className="skill-bar-fill" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
