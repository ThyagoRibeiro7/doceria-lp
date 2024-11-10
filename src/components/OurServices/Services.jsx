import { ServiceCard } from "../shared/service-Card";
import './Services.css';
import ImagemCaixa from '../../assets/images/ImagemCaixa.avif';
import ImagemDonut from '../../assets/images/ImagemDonut.avif';
import ImagemMedalha from '../../assets/images/ImagemMedalha.avif';
export function ServicesSection () {
    return (
        <section className="services-section container">
            <div className="services-cards">
                <ServiceCard 
                image={ImagemCaixa} 
                altText={'Imagem de Uma Caixa 3d Com um Relógio Simbolizando o Rápido Serviço'}
                title={'Rápido Delivery!'}
                description={
                    'Nosso dever é demonstrar uma incrível experiência até em nosso delivery!'
                }
                />
                <ServiceCard 
                image={ImagemDonut} 
                altText={'Imagem de um Donut 3d Simbolizando a Qualidade dos Doces'}
                title={'Doces Fresquinhos!'}
                description={
                    'Nossos doces são sempre preparados com o maior carinho!'
                }
                />
                <ServiceCard 
                image={ImagemMedalha}
                altText={'Imagem de uma medalha 3d Simbolizando a Qualidade da Loja'}
                title={'Doces Fresquinhos!'}
                description={
                    'Somos Reconhecidos pelos maiores chefes especializados em confeitaria!'
                }
                />
            </div>
        </section>
    );
} 
