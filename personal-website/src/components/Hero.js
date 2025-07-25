import React, { useEffect, useState } from 'react';
import Typical from 'react-typical';
import './Hero.css';

const titles = [
  'Bilgisayar Mühendisi',
  2000,
  'Yazılım Geliştirici',
  2000,
  'Yapay Zeka Meraklısı',
  2000
];

const codeSamples = [
  'function sum(a, b) {',
  '  let total = 0;',
  '  for (let i = a; i <= b; i++) {',
  '    total += i;',
  '  }',
  '  return total;',
  '}'
];

const mazePath = [
  [1,1],[2,1],[3,1],[4,1],[5,1],[5,2],[5,3],[5,4],[4,4],[3,4],[2,4],[1,4],[1,5],[2,5],[3,5],[4,5],[5,5],[5,6],[5,7],[4,7],[3,7],[2,7],[1,7]
];

const pacmanPath = [
  [2,2],[2,3],[2,4],[2,5],[3,5],[4,5],[5,5],[5,4],[5,3],[5,2],[4,2],[3,2],[2,2]
];
// Engeller: gridde yol dışında kalan tüm kareler
const pacmanWalls = [];
for (let x = 1; x <= 6; x++) {
  for (let y = 1; y <= 6; y++) {
    // Eğer bu koordinat yolun bir parçası değilse engel olarak ekle
    if (!pacmanPath.some(([px,py]) => px === x && py === y)) {
      pacmanWalls.push([x,y]);
    }
  }
}
// Yemler: sadece yolun dört köşesi
const pacmanCorners = [ [2,2],[2,5],[5,5],[5,2] ];

const Hero = () => {
  const [typedLines, setTypedLines] = useState(['']);
  // Robotun konumu için state
  const [robotStep, setRobotStep] = useState(0);
  // Pacman için state
  const [pacmanStep, setPacmanStep] = useState(0);
  useEffect(() => {
    let line = 0;
    let idx = 0;
    let forward = true;
    let interval;
    function type() {
      if (forward) {
        const lines = codeSamples.slice(0, line);
        lines.push(codeSamples[line].slice(0, idx));
        setTypedLines(lines);
        idx++;
        if (idx > codeSamples[line].length) {
          line++;
          idx = 0;
          if (line >= codeSamples.length) {
            forward = false;
            setTimeout(type, 1200);
            return;
          }
        }
      } else {
        if (line === codeSamples.length) line--;
        const lines = codeSamples.slice(0, line);
        lines.push(codeSamples[line].slice(0, idx));
        setTypedLines(lines);
        idx--;
        if (idx < 0) {
          line--;
          if (line < 0) {
            forward = true;
            line = 0;
            idx = 0;
            setTimeout(type, 800);
            return;
          }
          idx = codeSamples[line].length;
        }
      }
      interval = setTimeout(type, 32);
    }
    type();
    return () => clearTimeout(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRobotStep(s => (s + 1) % mazePath.length);
    }, 350);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPacmanStep(s => (s + 1) % pacmanPath.length);
    }, 220);
    return () => clearInterval(interval);
  }, []);
  // Pacman'ın mevcut pozisyonu güvenli alınır
  const pacmanPos = pacmanPath[pacmanStep] || pacmanPath[0];

  return (
    <>
      <section className="hero">
        <div className="hero-bg-animation"></div>
        <div className="section-inner hero-flex">
          <div className="hero-logo-area">
            <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Site Logosu" className="hero-logo-large" />
          </div>
          <div className="hero-content">
            {/* Profil fotoğrafı */}
            <h1 className="hero-title">Mustafa Yiğit Acar</h1>
            <h2 className="hero-subtitle">
              <Typical steps={titles} loop={Infinity} wrapper="span" />
            </h2>
            <p>Yenilikçi, çözüm odaklı ve teknoloji tutkunu bir mühendis. Modern web teknolojileri, yapay zeka ve yazılım geliştirme alanlarında uzmanlaşmakta.</p>
            <div className="hero-socials">
              <a href="https://github.com/mustafayigitacar" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/mustafayigitacar" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:mustafayigit.acar@email.com">E-posta</a>
            </div>
          </div>
        </div>
      </section>
      {/* 4'lü animasyon alanı */}
      <div className="hero-quad-grid">
        {/* 1. Bölüm: Sinir ağı animasyonu */}
        <div className="hero-quad-item">
          <svg viewBox="0 0 900 400" width="100%" height="180" style={{ display: 'block', margin: '0 auto' }}>
            <defs>
              <radialGradient id="neuronGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#fff" stop-opacity="1" />
                <stop offset="60%" stop-color="#6366f1" stop-opacity="0.7" />
                <stop offset="100%" stop-color="#232526" stop-opacity="0.2" />
              </radialGradient>
              <linearGradient id="linkGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#38bdf8" />
                <stop offset="100%" stop-color="#6366f1" />
              </linearGradient>
            </defs>
            
            {/* Bağlantılar */}
            <g stroke="url(#linkGradient)" strokeWidth="2.5" opacity="0.38">
              {[0,1,2,3,4,5].map(i => [0,1,2,3,4,5,6,7].map(j => (
                <line key={`l1-${i}-${j}`} x1={120} y1={90+i*45} x2={400} y2={70+j*35} />
              )))}
              {[0,1,2,3,4,5,6,7].map(i => [0,1,2].map(j => (
                <line key={`l2-${i}-${j}`} x1={400} y1={70+i*35} x2={780} y2={130+j*70} />
              )))}
              {/* Girdi 6 → Gizli 8 → Çıktı 3 bağlantı çizgisi */}
              <polyline points="120,315 400,315 780,270" fill="none" />
            </g>
            {/* Sinyal 3: Girdi 6 (y=315) -> Gizli 8 (y=315) -> Çıktı 3 (y=270) */}
            <circle r="0">
              <animate attributeName="r" values="0;8;0" keyTimes="0;0.5;1" dur="5s" repeatCount="indefinite" />
              <animate attributeName="cx" values="120;400;780" keyTimes="0;0.5;1" dur="5s" repeatCount="indefinite" />
              <animate attributeName="cy" values="315;315;270" keyTimes="0;0.5;1" dur="5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;1;0.2" keyTimes="0;0.5;1" dur="5s" repeatCount="indefinite" />
              <animate attributeName="fill" values="#6366f1;#38bdf8;#facc15" keyTimes="0;0.5;1" dur="5s" repeatCount="indefinite" />
            </circle>
            {/* Nöronlar - Girdi Katmanı */}
            {[0,1,2,3,4,5].map(i => (
              <g key={`n1-${i}`}>
                <circle cx={120} cy={90+i*45} r={16} fill="url(#neuronGlow)" />
                <circle cx={120} cy={90+i*45} r={10} fill="#6366f1" />
              </g>
            ))}
            {/* Nöronlar - Gizli Katman */}
            {[0,1,2,3,4,5,6,7].map(i => (
              <g key={`n2-${i}`}>
                <circle cx={400} cy={70+i*35} r={16} fill="url(#neuronGlow)" />
                <circle cx={400} cy={70+i*35} r={10} fill="#232526" />
              </g>
            ))}
            {/* Nöronlar - Çıktı Katmanı */}
            {[0,1,2].map(i => (
              <g key={`n3-${i}`}>
                <circle cx={780} cy={130+i*70} r={16} fill="url(#neuronGlow)" />
                <circle cx={780} cy={130+i*70} r={10} fill="#38bdf8" />
              </g>
            ))}
            {/* Gerçekçi sinyal animasyonları - düğüm merkezlerinden */}
            {/* Sinyal 1: Girdi 3 -> Gizli 4 -> Çıktı 1 */}
            <circle r="0">
              <animate attributeName="r" values="0;12;0" keyTimes="0;0.5;1" dur="3.5s" repeatCount="indefinite" />
              <animate attributeName="cx" values="120;400;780" keyTimes="0;0.5;1" dur="3.5s" repeatCount="indefinite" />
              <animate attributeName="cy" values="180;315;130" keyTimes="0;0.5;1" dur="3.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;1;0.2" keyTimes="0;0.5;1" dur="3.5s" repeatCount="indefinite" />
              <animate attributeName="fill" values="#facc15;#38bdf8;#6366f1" keyTimes="0;0.5;1" dur="3.5s" repeatCount="indefinite" />
            </circle>
            {/* Sinyal 2: Girdi 1 -> Gizli 2 -> Çıktı 2 */}
            <circle r="0">
              <animate attributeName="r" values="0;10;0" keyTimes="0;0.5;1" dur="4.2s" repeatCount="indefinite" />
              <animate attributeName="cx" values="120;400;780" keyTimes="0;0.5;1" dur="4.2s" repeatCount="indefinite" />
              <animate attributeName="cy" values="135;140;200" keyTimes="0;0.5;1" dur="4.2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;1;0.2" keyTimes="0;0.5;1" dur="4.2s" repeatCount="indefinite" />
              <animate attributeName="fill" values="#38bdf8;#facc15;#6366f1" keyTimes="0;0.5;1" dur="4.2s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
        {/* 2. Bölüm: Pacman animasyonu */}
        <div className="hero-quad-item">
          <svg viewBox="0 0 180 180" width="100%" height="180" className="maze-svg">
            {/* Grid */}
            {[...Array(8)].map((_,i) => <line key={'h'+i} x1={20} y1={20+i*20} x2={160} y2={20+i*20} stroke="#eee" strokeWidth="1" />)}
            {[...Array(8)].map((_,i) => <line key={'v'+i} x1={20+i*20} y1={20} x2={20+i*20} y2={160} stroke="#eee" strokeWidth="1" />)}
            {/* Engeller */}
            {pacmanWalls.map(([x,y],i) => <rect key={i} x={20+x*20-10} y={20+y*20-10} width="20" height="20" fill="#232526" rx="4" />)}
            {/* Yemler: sadece köşelerde, güvenli opacity */}
            {pacmanCorners.map(([x,y],i) => {
              const idx = pacmanPath.findIndex(([px,py])=>px===x&&py===y);
              return <circle key={i} cx={20+x*20} cy={20+y*20} r="4" fill="#facc15" opacity={idx === pacmanStep ? 0.2 : 1} />;
            })}
            {/* Pacman */}
            <g>
              <circle cx={20+pacmanPos[0]*20} cy={20+pacmanPos[1]*20} r="10" fill="#ffe066" />
              <circle cx={20+pacmanPos[0]*20+4} cy={20+pacmanPos[1]*20-4} r="1.5" fill="#232526" />
            </g>
          </svg>
          
        </div>
        {/* 3. Bölüm: Kod animasyonu (en sağda) */}
        <div className="hero-quad-item">
          <div className="code-typing-anim">
            <span className="code-typing-text">{typedLines.map((l,i) => <React.Fragment key={i}>{l}{i < typedLines.length-1 && <br/>}</React.Fragment>)}</span>
          </div>
        </div>
       
        
      </div>
    </>
  );
};

export default Hero; 