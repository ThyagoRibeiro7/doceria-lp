// AOS animations imports
import Aos from "aos";
import "aos/dist/aos.css";

// style imports
import "./hero.css"

// image imports
import heroImage from "../../assets/images/ImagemPrincipal.png";
import heroChefImage from "../../assets/images/ChefeComentario.avif"

import { useEffect } from "react";

export function Hero() {

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <main id='Home' className="hero-section">
            <img src={heroImage} alt="Imagem de Uma Pilha de Cookies de Chocolate" className="hero-image" />
            <section className="hero-text" data-aos="fade-left" data-aos-duration="2000">
                <h2>Todas as <span>Doçuras</span> em um só lugar!</h2>
                <section className="chefs-testimonial" data-aos="fade-left" data-aos-duration="1500">
                    <img src={heroChefImage} alt="Imagem do Chefe Roberto" />
                    <div className="chef-testimonial">
                        <h2>Chefe Roberto</h2>
                        <span>Especializado em Confeitaria</span>
                        <p>Docini é uma das melhores confeitarias do Brasil!</p>
                    </div>
                </section>
                <div className="cta-btns">
                    <button>Pedir Agora!</button>
                    <button>Cadastrar-se</button>
                </div>
            </section>
        </main>
    );
};
