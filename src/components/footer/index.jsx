import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon
} from "../../helpers/svg-bundle";




// import { Container } from './styles';

function Footer() {

  return (
    <>
      <div className="footer">
        <div className="content-footer">
          
          
          <div className="container-info">
            <div className="row">
              <h1 className="font font-24">INSTITUCIONAL </h1>
              <hr className="hr" />
            </div>
            <ul className="ml-20">
              <li><Link to={process.env.PUBLIC_URL + '/'} className="footer-li font font-18">Home</Link></li>
              <li><Link to={process.env.PUBLIC_URL + '/quem-somos'} className="footer-li font font-18">Quem somos</Link></li>
              <li><Link to={process.env.PUBLIC_URL + '/duvidas'} className="footer-li font font-18">Dúvidas</Link></li>
              <li><Link to={process.env.PUBLIC_URL + '/contato'} className="footer-li font font-18">Contato</Link></li>
            </ul>
          </div>

          <div className="container-atendimento">
            <div className="row">
              <h1 className="font font-24">ATENDIMENTO </h1>
              <hr className="hr" />
            </div>
            <ul className="ml-20 text-primary-light">
              <li className="font font-18">0800 500 7850</li>
              <li className="font font-18">smart_highways@smarthighways.com</li>
            </ul>
          </div>

          <div className="container-redes">
            <div className="row">
              <h1 className="font font-24">SIGA NAS REDES</h1>
              <hr className="hr" />
            </div>
            <div className=" space-around row">
              <FacebookIcon />
              <InstagramIcon/>
              <LinkedinIcon />
              <TwitterIcon />
            </div>
          </div >


        </div >
      </div >
    </>
  )
}
export default Footer;