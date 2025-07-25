import React, { useRef, useEffect, useState } from 'react';
import './About.css';

function useFadeInOnScroll() {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

const About = () => {
  const [ref, visible] = useFadeInOnScroll();
  return (
    <section className={`about fade-in${visible ? ' visible' : ''}`} ref={ref}>
      <div className="section-inner">
        <h2 className="section-title">Hakkımda</h2>
        <p>
          Ben Mustafa Yiğit Acar, bilgisayar mühendisliği öğrencisiyim. Yazılım geliştirme, yapay zeka ve modern web teknolojileri alanlarında kendimi geliştirmekteyim. Takım çalışmasına yatkın, analitik düşünceye sahip ve yenilikçi bir mühendis adayıyım.
        </p>
        <div className="about-details">
          <div>
            <h3>Eğitim</h3>
            <ul>
              <li><b>2021 - Devam</b> — Bilgisayar Mühendisliği, Fırat Üniversitesi</li>
              <li><b>2017 - 2021</b> — Trabzon Yomra Fen Lisesi</li>
            </ul>
          </div>
          <div>
            <h3>Sertifikalar</h3>
            <ul>
              <li>Şuanda bulunmamaktadır.</li>
              
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 