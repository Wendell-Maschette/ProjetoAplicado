import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';



// import { Container } from './styles';

function Navigation() {

  return (
    <>
      <div className="nav-bar">
        <div className="nav-bar-home font font-24" id="links-pages">
          <Link className="nav-bar-link" to={process.env.PUBLIC_URL + '/'}>Home</Link>
          <div className="nav-bar-links-pages">
            <Link className="nav-bar-link" to={process.env.PUBLIC_URL + '/quem-somos'}>Quem somos</Link>
            <Link className="nav-bar-link" to={process.env.PUBLIC_URL + '/duvidas'}>Duvidas</Link>
            <Link className="nav-bar-link" to={process.env.PUBLIC_URL + '/contato'}>Contato</Link>
          </div>
        </div>
      </div>
    </>
  )
}
export default Navigation;