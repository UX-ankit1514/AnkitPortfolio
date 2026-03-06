export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Ankit Anand. Crafted with care in Figma &amp; code.
        </p>
        <ul className="footer-links">
          <li><a href="#work">Work</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <a href="mailto:ankitanand812@gmail.com">Email</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
