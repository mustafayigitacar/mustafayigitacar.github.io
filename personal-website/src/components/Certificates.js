import React from 'react';
import './Certificates.css';

const certificates = [
 /* {
    title: 'Python ile Makine Öğrenmesi',
    org: 'Coursera',
    date: '2023',
     logo: process.env.PUBLIC_URL + '/coursera.png',
    link: '#'
  },
  {
    title: 'React Geliştirici Sertifikası',
    org: 'Udemy',
    date: '2022',
    logo: process.env.PUBLIC_URL + '/udemy.png',
    link: '#'
  }*/{
    title: 'Bulunmamakta',
    org: '',
    date: '2025',
     logo: process.env.PUBLIC_URL + '',
    link: '#'
  }
];

const Certificates = () => (
  <section className="certificates-section">
    <div className="section-inner">
      <h2 className="section-title">Sertifikalar</h2>
      <div className="certificates-list">
        {certificates.map((cert, idx) => (
          <a className="certificate-btn" key={idx} href={cert.link} target="_blank" rel="noopener noreferrer">
            <img src={cert.logo} alt={cert.org} className="certificate-logo" />
            <div>
              <h3>{cert.title}</h3>
              <span>{cert.org} &bull; {cert.date}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Certificates; 