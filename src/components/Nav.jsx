import { NavLink, Link } from 'react-router-dom';

const links = [
  { to: '/work', num: '01', label: 'Work' },
  { to: '/about', num: '02', label: 'About' },
  { to: '/contact', num: '03', label: 'Contact' },
];

export default function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link to="/" className="nav-brand">prasan.dev</Link>
        <div className="nav-links">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <span className="mono nav-num">{l.num}</span>{l.label}
            </NavLink>
          ))}
        </div>
        <Link to="/contact" className="nav-cta">Get in touch</Link>
      </div>
    </nav>
  );
}
