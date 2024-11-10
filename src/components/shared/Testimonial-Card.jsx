import { SwiperSlide } from "swiper/react";

export function TestimonialCard({ clientPhoto, imgAltText, name, ocuppation, testimony }) {
    return (
            <div className="testimonial-card">
                <div className="testimonial-header">
                    <img src={clientPhoto} alt={imgAltText} />
                    <div className="client-info">
                        <h3>{name}</h3>
                        <p>{ocuppation}</p>
                    </div>
                </div>
                <p className="testimony">{testimony}</p>
            </div>
    );
};
