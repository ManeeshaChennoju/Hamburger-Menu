import Popup from 'reactjs-popup'
import React, {useState} from 'react'

import 'reactjs-popup/dist/index.css'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsInfoCircleFill} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const logoUrl =
  'https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png'

const overlayStyles = {
  width: '100%',
  height: '500px',
  display: 'flex',
}

const Header = () => {
  const [open, setOpen] = useState(false)
  const closeModal = () => setOpen(false)
  return (
    <nav className="header_container">
      <div className="logo">
        <Link to="/">
          <img src={logoUrl} alt="website logo" width={40} height={40} />
        </Link>
      </div>
      <div className="popup_container">
        <Popup
          trigger={
            <button type="button" data-testid="hamburgerIconButton">
              <GiHamburgerMenu width={40} height={40} />
            </button>
          }
          modal
        >
          {close => (
            <ul className="homeAndAbout">
              <button
                data-testid="closeButton"
                type="button"
                className="trigger_button"
                onClick={() => {
                  close()
                }}
              >
                <IoMdClose width={20} height={20} />
              </button>
              <Link to="/">
                <li>
                  <AiFillHome width={30} height={30} /> Home
                </li>
              </Link>
              <Link to="/about">
                <li>
                  <BsInfoCircleFill width={30} height={30} /> About
                </li>
              </Link>
            </ul>
          )}
        </Popup>
      </div>
    </nav>
  )
}

export default Header
