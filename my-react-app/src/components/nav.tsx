import { useState } from 'react'
import ThemeToggle from './ThemeToggle';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Settings', path: '/settings' },
];
  return (
    <nav>
      <div className="logo"></div>

      {isOpen && (
      <ul className="nav-links-list">
        {navLinks.map((link) => (
            <li className="nav-links" key={link.path}>
              <a className="nav-link-buttons" href={link.path}>{link.name}</a>
            </li>
        ))}
        <li className="nav-links"><ThemeToggle /></li>
      </ul>
      )}
      <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>☰</button>
    </nav>
  )
}

export default Nav