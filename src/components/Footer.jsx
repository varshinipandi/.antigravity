import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-section">
          <h3>KYRONX 2026</h3>
          <p>A premier symposium bringing together the brightest minds in coding and innovative skills.</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/company/srm-madurai/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="https://www.instagram.com/srmmcet.ece?igsh=MTRhNzBucDlhNGtwaQ==" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="18" cy="6" r="1" fill="currentColor" />
              </svg>
            </a>
            <a href="https://www.youtube.com/@srm_mcet?si=w-e-LR27cCRmitEx" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.083 0 12 0 12s0 3.917.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.872.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.917 24 12 24 12s0-3.917-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a href="https://www.facebook.com/share/17uRDu5csD/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#timeline">About</a></li>
            <li><a href="#coordinators">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Event Info</h4>
          <ul>
            <li>📅 March 27, 2026</li>
            <li>📍 Pottapalayam,Sivagangai District-630512</li>
            <li>🕐 8:00 AM - 5:00 PM</li>
            <li>👥 300+ Participants</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul>
            <li>📧srmmcetece@gmail.com</li>
            <li>📍 Pottapalayam,Sivagangai District-630512</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-divider"></div>
        <p className="copyright">
          © {currentYear} KYRONX Technology Symposium. All rights reserved.
        </p>
        <div className="footer-credits">
          <span>Built with </span>
          <span className="heart">❤</span>
          <span> and Code</span>
        </div>
      </div>

      <div className="footer-glow">
        <div className="glow-element"></div>
      </div>
    </footer>
  );
}

export default Footer;
