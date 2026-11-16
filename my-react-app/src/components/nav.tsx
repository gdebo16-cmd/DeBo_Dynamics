import { useState } from 'react'

import MenuButton from './lotties/MenuButton';




interface NavProps {
    className?: string;
}

const Nav = ({className}: NavProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Resume', path: '/resume' },
        { name: 'Portfolio', path: '/portfolio' },
];
  return (
    <nav className={className}>
      {isOpen && (
        <ul className="list">
          {navLinks.map((link) => (
            <li className="links" id={`${link.name}-link`} key={link.path}>
              <a className="nav-buttons" href={link.path}>{link.name}</a>
            </li>
          ))}
        </ul>
      )}
      <MenuButton className="menu-button"onToggle={(open) => setIsOpen(open)}/>
    </nav>
  )
}

export default Nav