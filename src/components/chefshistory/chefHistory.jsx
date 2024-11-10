// AOS animations imports
import Aos from "aos";
import "aos/dist/aos.css";

// style imports
import "./ChefHistory.css";

// image imports
import ChefImage from "../../assets/images/ChefeApresentacao.avif";

import { useEffect } from "react";

export function ChefHistory() {

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <section id='Our Chef' className="chefs-history">
            <article className="chef-history" data-aos="fade-right" data-aos-duration="1500">
                <h2>Chefe Andrey Magunum</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus magna,
                    dignissim ac orci et, fringilla feugiat sapien.
                    Morbi quis tempor ipsum. Nunc eu est a ante tristique pharetra. Curabitur
                    eget felis vestibulum, scelerisque enim interdum,
                    lacinia tortor. Sed porta quam sit amet vehicula vehicula. Mauris magna dolor,
                    porta ut ante sit amet, dictum sodales erat.
                    Etiam felis nisl, porttitor ut justo non, eleifend tincidunt purus.
                    Aliquam sodales lacinia eros, sed scelerisque leo convallis quis. Nulla tempor
                    dui lectus, eget congue est viverra et. Ut vehicula ipsum et porttitor sodales.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisl sapien, laoreet ut diam ac, finibus egestas tellus. Quisque lobortis urna libero.
                </p>
            </article>
            <img src={ChefImage} alt="Imagem de Nosso Chefe Especializado em Confeitaria" data-aos="fade-left" data-aos-duration="1500" />
        </section>
    );
};
