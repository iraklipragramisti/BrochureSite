import "./Header.scss"
import { useState } from "react"
import { AiOutlineMenu as Menu } from 'react-icons/ai'
import { CgCloseR as CloseMenu } from 'react-icons/cg'
import { Link, Events, animateScroll as scroll, scrollSpy, scroller  } from 'react-scroll'

const Header = () => {

  const [menu, setMenu] = useState(false)
  const openMenu = () => setMenu(!menu)
  const closeMenu = () => setMenu(false)



  return (
    <div className="div">
      <nav className="nav">
        <Link className="name-link" to="/" spy={true} smooth={true} duration={500}>
          <h1 className="name">Alageti Bike Tours</h1>
        </Link>
        <ul className={menu ? 'links active' : 'links'}>
          <Link className="link1" onClick={closeMenu} to="/" spy={true} smooth={true} duration={500}>
            <li>Home</li>
          </Link>
          <Link className="link2" onClick={closeMenu} to="services" spy={true} smooth={true} duration={500}>
            <li >Services</li>
          </Link>
          <Link className="link3" onClick={closeMenu} to="about" spy={true} smooth={true} duration={500}>
            <li  >About</li>
          </Link>
          <Link className="link4" onClick={closeMenu} to="faq" spy={true} smooth={true} duration={500}>
            <li >FAQ</li>
          </Link>
        </ul>
      </nav>
      <hr className="underline" />
      <div className="mobile-menu" onClick={openMenu}>
        {menu ?
          (<CloseMenu className="menu-icon" />)
          :
          (<Menu className="menu-icon" />)
        }

      </div>
    </div>
  )
}

export default Header
