import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="section-inner">
        <h2 className="section-title">İletişim</h2>
        <div className="contact-content">
          <div className="contact-form" style={{minWidth:260, maxWidth:350}}>
            <p style={{fontSize:'1.1rem', textAlign:'center'}}>
              İletişim saatlerim şunlardır: <b>09:00 - 18:00 saatleri arasında pazar günü hariç her gün</b>.<br/>
              Yanda bulunan bilgilerimden bana ulaşabilirsiniz.
            </p>
          </div>
          <div className="contact-links-modern">
            <a className="contact-link-btn" href="mailto:mustafayigitacr@gmail.com" target="_blank" rel="noopener noreferrer">
              <span className="contact-link-icon">📧</span>
              <span className="contact-link-label">E-posta Gönder</span>
              <span className="contact-link-value">mustafayigitacr@gmail.com</span>
            </a>
            <a className="contact-link-btn" href="https://tr.linkedin.com/in/mustafa-yi%C4%9Fit-acar-b4b30928a?trk=people-guest_people_search-card" target="_blank" rel="noopener noreferrer">
              <span className="contact-link-icon">🔗</span>
              <span className="contact-link-label">LinkedIn Profilim</span>
              <span className="contact-link-value">linkedin.com/in/mustafayigitacar</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 