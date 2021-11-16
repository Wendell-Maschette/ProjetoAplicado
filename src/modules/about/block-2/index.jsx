import React from 'react';
import { Caminho } from '../../../helpers/image-bundle';
import isMobile from '../../../helpers/is-mobile-bundle';
import './styles.css';


export default function Block2() {
    return (
        <section className="about-block2-wrapper">
            <div className="about-block2-content">
                <div className="about-block2-content-text">
                    <h1 className="about-block2-content-text-title"> NOSSA HISTÓRIA </h1>
                    <p className="font-24"> A Smart Highways foi fundada em 2019 pelos profissionais
                        em tecnologia da informação Bruna Caroline, Igor Garcia, Julia Aleixo e Wendell Maschette.
                        Em 2020, ganhou prêmios mundiais, sendo considerada a start-up mais promossora do ano.
                    </p>
                    <br/>
                    <p className="font-24"> A ideia inicial era criar uma estrada tecnológica que interagisse bastante
                     com os motoristas que transitam diariamente em estradas. Mas com a o desenvolvimento do projeto, 
                     foi viabilizado o uso de outras tecnologias além da informática, que melhoravam também a 
                     sustentabilidade das estradas, como o uso de energia solar.
                    </p>
                </div>
                <div className="about-block2-content-image">
                    <img src={Caminho} className="about-block2-content-caminho" />
                </div>
            </div>
        </section>
    );
}
