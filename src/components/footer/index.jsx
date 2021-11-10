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
              <h1 className="font-24">Institucional </h1>
              <hr className="hr" />
            </div>
            <ul className="ml-20">
              <li><Link to={process.env.PUBLIC_URL + '/'} className="footer-li font-18 text-bold">Home</Link></li>
              <li><Link to={process.env.PUBLIC_URL + '/quem-somos'} className="footer-li font-18 text-bold">Quem somos</Link></li>
              <li><Link to={process.env.PUBLIC_URL + '/duvidas'} className="footer-li font-18 text-bold">Dúvidas</Link></li>
              <li><Link to={process.env.PUBLIC_URL + '/contato'} className="footer-li font-18 text-bold">Contato</Link></li>
            </ul>
          </div>

          <div className="container-atendimento">
            <div className="row">
              <h1 className="font-24">Atendimento </h1>
              <hr className="hr" />
            </div>
            <ul className="ml-20 text-primary-light">
              <li className="font-18 text-bold ">0800 500 7850</li>
              <li className="font-18 text-bold">smart_highways@smarthighways.com</li>
            </ul>
          </div>

          <div className="container-redes">
            <div className="row">
              <h1 className="font-24">Siga nas redes </h1>
              <hr className="hr" />
            </div>
            <div className=" space-around row">
              <FacebookIcon />
              <InstagramIcon className="font-18 text-bold" />
              <LinkedinIcon className="font-18 text-bold" />
              <TwitterIcon className="font-18 text-bold" />
            </div>
          </div >


        </div >
      </div >
    </>
  )
}
export default Footer;