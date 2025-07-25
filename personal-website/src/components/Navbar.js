import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaProjectDiagram, FaCertificate, FaBlog, FaEnvelope, FaBars } from 'react-icons/fa';
import './Navbar.css';

const sections = [
  { path: '/', label: 'Ana Sayfa', icon: <FaHome /> },
  { path: '/about', label: 'Hakkımda', icon: <FaUser /> },
  { path: '/projects', label: 'Projeler', icon: <FaProjectDiagram /> },
  { path: '/certificates', label: 'Sertifikalar', icon: <FaCertificate /> },
  { path: '/blog', label: 'Blog', icon: <FaBlog /> },
  { path: '/contact', label: 'İletişim', icon: <FaEnvelope /> },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <button className="nav-hamburger" onClick={() => setMenuOpen(m => !m)}>
          <FaBars />
        </button>
        <div className={`nav-links${menuOpen ? ' open' : ''}`}>
          {sections.map(sec => (
            <NavLink
              key={sec.path}
              to={sec.path}
              className={({ isActive }) => `nav-btn${isActive || location.pathname === sec.path ? ' active' : ''}`}
              onClick={() => setMenuOpen(false)}
              title={sec.label}
              end={sec.path === '/'}
            >
              <span className="nav-icon">{sec.icon}</span>
              <span className="nav-label">{sec.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 