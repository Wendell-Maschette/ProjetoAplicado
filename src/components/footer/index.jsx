import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon
} from "../../helpers/image-bundle";




// import { Container } from './styles';

function Footer() {

  return (
    <>
      <div className="footer">
        <div className="content-footer row">
          <div className="container-info">
            <div className="row">
              <h1 className="font-24">Institucional </h1>
              <hr className="hr" />
            </div>
            <ul className="ml-20">
              <li><Link className="font-18 text-bold">Home</Link></li>
              <li><Link className="font-18 text-bold">Quem somos</Link></li>
              <li><Link className="font-18 text-bold">Dúvidas</Link></li>
              <li><Link className="font-18 text-bold">Contato</Link></li>
            </ul>
          </div>
          <div className="container-atendimento">
            <div className="row">
              <h1 className="font-24">Atendimento </h1>
              <hr className="hr" />
            </div>
            <ul className="ml-20">
              <li className="font-18 text-bold">0800 500 7850</li>
              <li className="font-18 text-bold">smart_highways@smarthighways.com</li>
            </ul>
          </div>
          <div className="container-redes">
            <div className="row">
              <h1 className="font-24">Siga nas redes </h1>
              <hr className="hr" />
            </div>
            <div className=" space-around row">
              <FacebookIcon>Home</FacebookIcon>
              <InstagramIcon className="font-18 text-bold">Quem somos</InstagramIcon>
              <LinkedinIcon className="font-18 text-bold">Dúvidas</LinkedinIcon>
              <TwitterIcon className="font-18 text-bold">Contato</TwitterIcon>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Footer;