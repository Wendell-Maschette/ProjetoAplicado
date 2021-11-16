import React from 'react';
import { Motorista } from '../../../helpers/image-bundle';
import isMobile from '../../../helpers/is-mobile-bundle';
import './styles.css';


export default function Block1() {
    return (
        <section className="about-block1-wrapper">
            <div className="about-block1-content">
                {!isMobile() ?
                    <div className="about-block1-content-image">
                        <img src={Motorista} className="about-block1-content-motorista" />
                    </div> : ""
                }
                <div className="about-block1-content-text">
                    <h1 className="about-block1-content-text-title"> NASCEMOS PARA QUE? </h1>
                    <p className="font-24"> Viemos para revolucionar o sistema de trânsito, 
                    onde milhões de pessoas se locomovem diariamente, de forma a priorizar a 
                    segurança e economizar aos cofres publicos ou empresas privadas proprietárias 
                    de estradas pelo mundo à fora. 
                    </p>
                </div>
                {isMobile() ?
                    <div className="about-block1-content-image">
                        <img src={Motorista} className="about-block1-content-motorista" />
                    </div> : ""
                }
            </div>



        </section>
    );
}
