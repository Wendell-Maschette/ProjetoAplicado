import React from 'react';
import { Missao, Valores, Visao } from '../../../helpers/image-bundle';
import isMobile from '../../../helpers/is-mobile-bundle';
import './styles.css';

export default function Block3() {
    return (
        <section className="about-block3-wrapper">
            <h1 className="about-block3-title"> MISSÃO, VISÃO E VALORES </h1>
            <ul className="about-block3-list-itens" style={!isMobile() ? {display:"flex"} : {display:"initial"}}>
                <li className="about-block3-item">
                    <h1 className="about-block3-item-title"> MISSÃO </h1>
                    <img className="about-block3-item-image" src={Missao}/>
                    <p className="font-24">Expandir o mercado de estradas tecnológicas, melhorar a
                        segurança e sustentabilidade das estradas e reduzir os custos gerais de vias
                        pelo mundo.
                    </p>
                </li>

                <li className="about-block3-item">
                    <h1 className="about-block3-item-title"> Visão </h1>
                    <img className="about-block3-item-image" src={Visao}/>
                    <p className="font-24"> Se manter líder e sendo a maior referência no mercado,
                        trazendo inovação, tecnologia e segurança.
                    </p>
                </li>

                <li className="about-block3-item">
                    <h1 className="about-block3-item-title"> Valores </h1>
                    <img className="about-block3-item-image" src={Valores}/>
                    <p className="font-24"> Inovar com responsabilidade e compromisso de melhorar as
                        rodovias e estradas pelo mundo, com uma maior comunicação, acessibilidade e
                        segurança dos motoristas e passageiros dos veículos transeuntes.
                    </p>
                </li>
            </ul>
        </section>
    );
}
