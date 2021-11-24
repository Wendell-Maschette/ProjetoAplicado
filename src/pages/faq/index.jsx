import React from 'react';
import Navigation from '../../components/navigation';
import Dropdown from '../../components/dropdown';
import Footer from '../../components/footer';
import './styles.css';

// import { Container } from './styles';

function Faq() {
  return (
    <main >
      <Navigation />
      <section className="wrapper-faq">
        <h1 style={{textAlign: 'center'}} className="title-faq">DÚVIDAS FREQUENTES</h1>
        <Dropdown
          question="A estrada inteligente é exclusiva para o período noturno?"
          answer="Não. O software promove uma inteligência super avançada para que no período noturno os motoristas possam 
        dirigir em segurança com a estrada iluminada o suficiente para não causar acidente ou qualquer contratempo que 
        prejudique, já no período diurno, utilizamos as mais altas tecnologias para a comunicação com os motoristas e passageiros,
        tornando a viagem mais segura e com uma maior acessibilidade e comunicação."
        />
        <Dropdown
          question="O software é testado e aprovado?"
          answer="Sim. Nosso software foi um projetado e elaborado visando desempenho, segurança e sustentabilidade, sendo testado diversas vezes e aprovado por órgãos regulamentadores."
        />
        <Dropdown
          question="Como funciona o sistema do software, ele pode ser danificado?"
          answer="O software funciona através da luz solar que é absorvida durante o dia e transformada em energia no período noturno. Com isso, o sistema é 
        acionado para o software acender suas luzes de LED, deixando a pista devidamente iluminada. Caso o sistema seja danificado, nossos técnicos podem 
        ser acionados a qualquer momento."
        />
        <Dropdown
          question="E como entrar em contato com a empresa em caso de dúvida?"
          answer="É possível entrar em contato com a nossa empresa por meio da aba de contato ou em nossas redes socias, como o instagram e facebook."
        />
        <Dropdown
          question="É realmente seguro para os motoristas?"
          answer="Sim. As Smart Highways tem todos os sistemas de segurança, com todas as sinalizações sendo claras, objetivas e legíveis, avisando com antecedência sobre
        qualquer perigo que tenha a frente, tornando a estrada inteligente totalmente segura. "
        />
        <Dropdown
          question="Como faço o orçamento?"
          answer="Entre em contato na seção de contato ou nos chame em uma das redes sociais."
        />
        <Dropdown
          question="Tenho garantia de serviço? "
          answer="Sim, damos total suporte. "
        />
      </section>
      <Footer />
    </main>
  );
}

export default Faq;