// AOS animations imports
import Aos from "aos";
import "aos/dist/aos.css";

// styles import
import "./HighLights.css";

// image imports
import { HighLightImage } from "../shared/HighLight-Image";
import HighLightImage1 from "../../assets/images/ImagemDestaque1.avif";
import HighLightImage2 from "../../assets/images/ImagemDestaque2.avif";
import HighLightImage3 from "../../assets/images/ImagemDestaque3.jpg";

import { useEffect } from "react";

export function HighLights() {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <section id='HighLights' className="highlights-section container" data-aos="fade-up"
            data-aos-duration="2200">
            <div className="highlight-content">
                <h2>Destaques do Dia!</h2>
                <section className="highlight-images">
                    <HighLightImage
                        image={HighLightImage1}
                        altText="Imagem Destaque 1"
                        height={450}
                    />
                    <HighLightImage
                        image={HighLightImage2}
                        altText="Imagem Destaque 2"
                        height={220}
                    />
                    <HighLightImage image={HighLightImage3}
                        altText="Imagem Destaque 3"
                        height={220}
                    />
                </section>
            </div>
        </section>
    );
}
