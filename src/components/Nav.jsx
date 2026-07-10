import { NavLink, Link } from 'react-router-dom';
import { BsRobot } from 'react-icons/bs';

const links = [
  { to: '/work', num: '01', label: 'Work' },
  { to: '/about', num: '02', label: 'About' },
  { to: '/contact', num: '03', label: 'Contact' },
];

export default function Nav({ chatOpen, setChatOpen }) {
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
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button
            className="nav-chat-btn"
            onClick={() => setChatOpen((o) => !o)}
            aria-label={chatOpen ? 'Close chat' : 'Open chat with Rocky'}
          >
            <BsRobot size={16} />
          </button>
          <Link to="/contact" className="nav-cta">Get in touch</Link>
        </div>
      </div>
    </nav>
  );
}
