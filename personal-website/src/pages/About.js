import React, { useState, useRef, useEffect } from 'react';
import './AboutPage.css';
import { FaJs, FaPython, FaJava, FaReact, FaDatabase, FaGitAlt } from 'react-icons/fa';

const skills = [
  { name: 'JavaScript', icon: <FaJs />, level: 70 },
  { name: 'Python', icon: <FaPython />, level: 40 },
  { name: 'Java', icon: <FaJava />, level: 85 },
  { name: 'React', icon: <FaReact />, level: 70 },
  { name: 'SQL/MongoDB', icon: <FaDatabase />, level: 15 },
  { name: 'Git', icon: <FaGitAlt />, level: 60 },
];

const About = () => {
  const [barPercents, setBarPercents] = useState(Array(skills.length).fill(0));
  const intervals = useRef([]);

  useEffect(() => {
    skills.forEach((skill, idx) => {
      clearInterval(intervals.current[idx]);
      intervals.current[idx] = setInterval(() => {
        setBarPercents(current => {
          const next = [...current];
          if (next[idx] < skill.level) {
            next[idx] = Math.min(next[idx] + 1, skill.level); // Daha yavaş dolum için +1
          }
          if (next[idx] >= skill.level) {
            clearInterval(intervals.current[idx]);
          }
          return next;
        });
      }, 20); // Daha yavaş animasyon için 20ms
    });
    return () => {
      intervals.current.forEach(clearInterval);
    };
  }, []);

  return (
    <section className="about-page-section">
      <div className="section-inner">
        <h2 className="section-title">Hakkımda</h2>
        <p>
          Ben Mustafa Yiğit Acar, bilgisayar mühendisliği öğrencisiyim. Yazılım geliştirme, yapay zeka ve modern web teknolojileri alanlarında kendimi geliştirmekteyim. Takım çalışmasına yatkın, analitik düşünceye sahip ve yenilikçi bir mühendis adayıyım.
        </p>
        <h3 className="skills-title">Yetenekler</h3>
        <div className="skills-grid">
          {skills.map((skill, idx) => (
            <div className="skill-card" key={idx}>
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <div className="skill-bar-bg">
                  <div
                    className="skill-bar"
                    style={{ width: barPercents[idx] + '%' }}
                  />
                </div>
                <span className="skill-level">{barPercents[idx]}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About; 