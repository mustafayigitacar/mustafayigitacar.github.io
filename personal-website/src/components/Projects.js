import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'CargoTrackingSystem',
    description: 'Bir kargo şirketinin gönderilerini takip etmek için geliştirilmiş, gönderi durumu takibi, adres yönetimi ve istatistik raporlama gibi özellikler sunan C# konsol uygulaması.',
    tech: ['C#', 'SOLID', 'Console App'],
    link: 'https://github.com/mustafayigitacar/CargoTrackingSystem'
  }
];

const Projects = () => (
  <section className="projects-section">
    <div className="section-inner">
      <h2 className="section-title">Projeler</h2>
      <div className="projects-list projects-buttons">
        {projects.map((project, idx) => (
          <a
            className="project-btn"
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            title={project.title}
          >
            <div className="project-btn-title">{project.title}</div>
            <div className="project-btn-desc">{project.description}</div>
            <div className="project-btn-tech">
              {project.tech.map((t, i) => <span key={i}>{t}</span>)}
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Projects; 