// components import
import "./testimonials-section.css";
import { TestimonialHeader } from "./Testimonial-Header/testimonials-header";
import { Testimonials } from "./Testimonials/testimonials";

// image imports
import ImagemDonut from "../../assets/images/AbsoluteDonut.avif";
import ImagemBolo from "../../assets/images/AbsoluteBolo.avif";

export function TestimonialsSection() {
    return (
        <section id='Testimonials' className="testimonials-section container">
            <img src={ImagemDonut} alt="Imagem De Um Donut" />
            <TestimonialHeader />
            <Testimonials />
            <img src={ImagemBolo} alt="Imagem De Um Bolo" />
        </section>
    );
}
