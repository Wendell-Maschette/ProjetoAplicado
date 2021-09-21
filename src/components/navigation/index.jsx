import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';



// import { Container } from './styles';

function Navigation() {

  return (
    <>
      <div className="nav-bar">
        <div className="grid grid-template-columns-2 font" id="links-pages">
          <Link to="/">Home</Link>
          <Link to="quem-somos">Quem somos</Link>
          <Link to="duvidas">Duvidas</Link>
          <Link to="contato">Contato</Link>
        </div>
      </div>
    </>
  )
}
export default Navigation;