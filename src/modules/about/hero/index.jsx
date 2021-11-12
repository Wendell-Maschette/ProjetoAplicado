import React from 'react';
import { Highway } from '../../../helpers/image-bundle';
import './styles.css';


function Hero() {
    return <>
        <section className="about-hero-wrapper">
            <div className="about-hero-content">
                <div className="about-hero-content-text">
                    <h1 className="about-hero-title"> QUEM SOMOS? </h1>
                    <p className="font-24"> Trata-se de um sistema sustentável que absorve energia solar durante o dia e
                        libera essa iluminação através de um rele em forma de luz de led no período noturno.
                        Além disso, as Smart Highways informam sobre as condições da estrada, sinalizam com
                        cores chamativas e sinalizações sonoras que se adaptam à qualquer situação.
                    </p>
                </div>
                <div className="about-hero-content-image">
                    <img src={Highway}  className="about-hero-content-highway"/>
                </div>
            </div>



        </section>
    </>;
}

export default Hero;