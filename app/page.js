import "./page.css";

const services = [
  { id: "accounting", title: "Accounting", desc: "Precision and transparency for your financial peace of mind. We balance your books to perfection.", icon: "📊" },
  { id: "taxation", title: "Taxation", desc: "Expert tax planning and compliance to minimize liability and maximize your growth.", icon: "🛡️" },
  { id: "cybersecurity", title: "Cybersecurity", desc: "Elite protection for your critical data. We identify vulnerabilities before they are exploited.", icon: "🔒" },
  { id: "ai", title: "AI Solutions", desc: "Harness the power of Artificial Intelligence to automate processes and uncover actionable insights.", icon: "🧠" },
  { id: "it-support", title: "IT Support", desc: "Reliable, round-the-clock technical assistance ensuring seamless business operations.", icon: "💻" },
  { id: "networking", title: "Networking", desc: "Robust and scalable network infrastructure tailored to your organizational demands.", icon: "🌐" },
  { id: "software", title: "Software Development", desc: "Custom, cutting-edge software applications designed to propel your business forward.", icon: "⚙️" },
];

export default function Home() {
  return (
    <main className="page-wrapper">
      {/* Hero Section */}
      <section className="hero">
        <div className="bg-aurora"></div>
        <div className="container hero-content animate-fade-in">
          <div className="badge glass">Innovate • Protect • Grow</div>
          <h1 className="hero-title">
             Empowering Your Business With <br />
            <span className="text-gradient">Next-Generation Solutions</span>
          </h1>
          <p className="hero-subtitle">
            From precision Accounting and Taxation to elite Cybersecurity and AI. Xplore is the definitive partner for your digital and financial transformation.
          </p>
          <div className="hero-actions">
            <a href="#services" className="btn btn-primary lg-btn">Explore Services</a>
            <a href="#contact" className="btn btn-secondary lg-btn glass">Contact Us</a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our <span className="text-gradient">Expertise</span></h2>
            <p className="section-desc">Comprehensive solutions tailored to navigate the complexities of modern business.</p>
          </div>
          
          <div className="services-grid">
            {services.map((s) => (
              <div key={s.id} className="service-card glass">
                <div className="service-icon">{s.icon}</div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <div className="service-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
