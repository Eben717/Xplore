import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar glass">
      <div className="container nav-content">
        <Link href="/" className="logo text-gradient">
          XPLORE
        </Link>
        <nav className="nav-links">
          <Link href="#services">Services</Link>
          <Link href="#about">About</Link>
          <Link href="#contact" className="btn btn-primary">
            Get in touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
