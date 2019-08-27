import React from "react"
import { Link } from "gatsby";

import headerStyles from './header.module.scss'

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">
          Moonshine Blog
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
          <Link className={headerStyles.link} to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">Sobre a Moonshine</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
