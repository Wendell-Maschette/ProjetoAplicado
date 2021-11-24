import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import isMobile from '../../helpers/is-mobile-bundle';
import './styles.css';
import { Sling as Hamburger } from 'hamburger-react'

function Navigation() {

  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <div className="nav-bar">
        {!isMobile() ?
          <div className="nav-bar-home font font-24" id="links-pages">
            <Link className="nav-bar-link" to={process.env.PUBLIC_URL + '/'}>HOME</Link>
            <div className="nav-bar-links-pages">
              <Link className="nav-bar-link" to={process.env.PUBLIC_URL + '/quem-somos'}>SOBRE NÓS</Link>
              <Link className="nav-bar-link" to={process.env.PUBLIC_URL + '/duvidas'}>DÚVIDAS</Link>
              <Link className="nav-bar-link" to={process.env.PUBLIC_URL + '/contato'}>CONTATO</Link>
            </div>
          </div>
          : <>
            <Hamburger toggled={isOpen} toggle={setOpen} color="#fff" style={{left: '0'}}/>
            <div className={` ${!isOpen ? "nav-mobile-wrapper-desactive" : "nav-mobile-wrapper"}`} >
              <ul className="nav-mobile-list-links font font-24" hidden={!isOpen}>
                <li><Link className="nav-mobile-link" to={process.env.PUBLIC_URL + '/'}>Home</Link></li>
                <li><Link className="nav-mobile-link" to={process.env.PUBLIC_URL + '/quem-somos'}>Quem somos</Link></li>
                <li><Link className="nav-mobile-link" to={process.env.PUBLIC_URL + '/duvidas'}>Duvidas</Link></li>
                <li><Link className="nav-mobile-link" to={process.env.PUBLIC_URL + '/contato'}>Contato</Link></li>
              </ul>
            </div>
          </>
        }
      </div>
    </>
  )
}
export default Navigation;