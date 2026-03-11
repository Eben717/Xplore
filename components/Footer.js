import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer border-t">
      <div className="container footer-content">
        <div className="footer-brand">
          <h2 className="text-gradient">XPLORE</h2>
          <p>Comprehensive Tech & Business Solutions</p>
        </div>
        <div className="footer-links">
          <div>
            <h3>Services</h3>
            <ul>
              <li>Accounting & Taxation</li>
              <li>Cybersecurity</li>
              <li>AI Solutions</li>
            </ul>
          </div>
          <div>
            <h3><br/></h3>
            <ul>
              <li>IT Support</li>
              <li>Networking</li>
              <li>Software Dev</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Xplore. All rights reserved.</p>
      </div>
    </footer>
  );
}
