import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  const go = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div style={{ marginBottom: 16 }}>
              <button
                onClick={() => go('/')}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                aria-label="InkwellCX home"
              >
                <img src="./InkWell1.png" alt="InkwellCX" style={{ height: 40, width: 'auto' }} />
              </button>
            </div>
            <p className="footer-desc">
              We build and manage high-converting websites for ambitious South African businesses.
              Design, SEO, hosting, and ongoing optimisation — all in one place.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              <a href="#" className="footer-links" aria-label="LinkedIn"
                style={{
                  width: 32, height: 32, background: '#111820', border: '1px solid #21262D',
                  borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Space Mono', monospace", fontSize: 11, color: '#7D8590',
                  textDecoration: 'none',
                }}
              >in</a>
              <a href="#" aria-label="Twitter"
                style={{
                  width: 32, height: 32, background: '#111820', border: '1px solid #21262D',
                  borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Space Mono', monospace", fontSize: 11, color: '#7D8590',
                  textDecoration: 'none',
                }}
              >𝕏</a>
            </div>
          </div>

          <div>
            <div className="footer-col-title">Services</div>
            <ul className="footer-links">
              <li><button onClick={() => go('/services')} style={linkBtnStyle}>Website Design</button></li>
              <li><button onClick={() => go('/services')} style={linkBtnStyle}>Hosting &amp; Management</button></li>
              <li><button onClick={() => go('/audit')} style={linkBtnStyle}>Website Audits</button></li>
              <li><button onClick={() => go('/seo')} style={linkBtnStyle}>SEO &amp; Growth</button></li>
              <li><button onClick={() => go('/services')} style={linkBtnStyle}>Analytics &amp; Reporting</button></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Company</div>
            <ul className="footer-links">
              <li><button onClick={() => go('/about')} style={linkBtnStyle}>About Us</button></li>
              <li><button onClick={() => go('/services')} style={linkBtnStyle}>Our Work</button></li>
              <li><button onClick={() => go('/contact')} style={linkBtnStyle}>Contact</button></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Get Started</div>
            <ul className="footer-links">
              <li><button onClick={() => go('/contact')} style={linkBtnStyle}>Free Audit</button></li>
              <li><button onClick={() => go('/contact')} style={linkBtnStyle}>Request a Quote</button></li>
              <li>
                <a href="https://wa.me/27710921755" target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: '#7D8590', textDecoration: 'none' }}
                >WhatsApp Us</a>
              </li>
            </ul>
            <div style={{ marginTop: 20 }}>
              <button className="btn-primary" onClick={() => go('/contact')} style={{ fontSize: 11 }}>
                → Free Audit
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 InkwellCX. All rights reserved. South Africa.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const linkBtnStyle = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontFamily: "'Space Mono', monospace",
  fontSize: 11,
  color: '#7D8590',
  padding: 0,
  textAlign: 'left',
  transition: 'color 0.2s',
};
