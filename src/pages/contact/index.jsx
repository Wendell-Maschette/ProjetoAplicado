import React from 'react';
import Navigation from '../../components/navigation';
import Footer from '../../components/footer';
import './styles.css';
import { SmartHighway, SmartHighwayMobile } from '../../helpers/image-bundle';
import isMobile from '../../helpers/is-mobile-bundle';


function Contact() {
  return (
    <main className="wrapper-contact" >
      <Navigation />
      <div className="wrapper-contact-modal">
      {isMobile() ?
        ""
        : <img
          src={SmartHighway}
          alt="Smart Highway"
          className="contact-img-web" />
      }
        <div className="container-contact-modal">
          <ul className="contact-modal">
            <h1 style={{textAlign :'center', lineHeight: '1'}}>Em que podemos ajudar?</h1>
            <li className="item-contact-modal">
              <p className="text-item-contact-modal font font-24">Nome</p>
              <input type="text" placeholder="Ex: Roberto"/>
            </li>
            <li className="item-contact-modal">
              <p className="text-item-contact-modal font font-24">Endereço da empresa</p>
              <input type="text" placeholder="Ex: Av Paulista, 123, SP" />
            </li>
            <li className="item-contact-modal">
              <p className="text-item-contact-modal font font-24">Telefone para contato</p>
              <input type="tel" placeholder="Ex: 11 1234-5678"/>
            </li>
            <li className="item-contact-modal">
              <p className="text-item-contact-modal font font-24">E-mail para contato</p>
              <input type="email" placeholder="Ex: smart.highways@exemplo.com"/>
            </li>
            <li className="item-contact-modal">
              <p className="text-item-contact-modal font font-24">Motivo do contato</p>
              <input type="text" placeholder="Ex: Olá, boa tarde..."/>
            </li>
            <button className="btn-submit-contact">Enviar</button>
          </ul>
        </div>
      </div>
      <Footer/>
    </main>
  );
}

export default Contact;