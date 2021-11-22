import React from 'react';
import {
    FutureHighway,
    HighwayLightDay,
    InstalationHighway,
    WorkingHighway,
} from '../../../helpers/image-bundle';
import './styles.css';


function Hero() {

    return <>

        <section className="home-hero-content">
            <ul className="home-hero-wrapper">
                <li className="home-hero-content-element">
                    <div className="home-hero-content-element-textContent">
                        <p className="font-24 ">Você conectado com as ruas e rodovias em tempo real, vendo atualizações de trânsito.</p>
                    </div>
                    <img src={FutureHighway} className="home-hero-content-element-image" alt="rodovias do futuro" />
                </li>
                <li className="home-hero-content-element">
                    <div className="home-hero-content-element-textContent">
                        <p className="font-24">Todos os equipamentos necessários, estão disponíveis dentro do sistema para que não falte nada em sua simulação.</p>
                    </div>
                    <img src={HighwayLightDay} className="home-hero-content-element-image" alt="smart highways" />
                </li>
            </ul>
            <ul className="home-hero-wrapper">

                <li className="home-hero-content-element">
                    <div className="home-hero-content-element-textContent">
                        <p className="font-24">Fornecemos todo o suporte necessário para o sucesso dos projetos de sua empresa.</p>
                    </div>
                    <img src={InstalationHighway} className="home-hero-content-element-image" alt="smart highways à luz do luar" />
                </li>
                <li className="home-hero-content-element">
                    <div className="home-hero-content-element-textContent">
                        <p className="font-24">Software elaborado para atender todas as necessidades e quaisquer imprevistos para o sucesso dos seus negócios.</p>
                    </div>
                    <img src={WorkingHighway} className="home-hero-content-element-image" alt="equipamentos" />
                </li>
            </ul>

        </section>
    </>;
}

export default Hero;