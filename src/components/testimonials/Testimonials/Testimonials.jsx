// swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

// style imports
import './testimonials.css';

// component import
import { TestimonialCard } from "../../shared/testimonialCard";

import data from '../../../assets/clients/clients.json'

// image imports
import Client1 from "../../../assets/images/Cliente1.avif";
import Client2 from "../../../assets/images/Cliente2.avif";
import Client3 from "../../../assets/images/Cliente3.avif";
import Client4 from "../../../assets/images/Cliente4.avif";
import Client5 from "../../../assets/images/Cliente5.avif";
import Client6 from "../../../assets/images/Cliente6.avif";

export function Testimonials() {
    return (
        <div className="testimonials">
            <Swiper
                navigation={true}
                slidesPerView={1}
                breakpoints={{
                    800: {
                        slidesPerView: 2,
                    },
                    1100: {
                        slidesPerView: 3
                    },
                    1500: {
                        slidesPerView: 4
                    }

                }}
                spaceBetween={50}
                modules={[Navigation]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <TestimonialCard
                        clientPhoto={Client1}
                        imgAltText="Imagem do cliente 1"
                        name="Natália Gomes"
                        ocuppation="Dentista"
                        testimony='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed risus magna, dignissim ac orci et, fringilla feugiat sapien. 
                    Morbi quis tempor ipsum.' />
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonialCard
                        clientPhoto={Client2}
                        imgAltText="Imagem do cliente 2"
                        name="Pedro Almeida"
                        ocuppation="Engenheiro Civil"
                        testimony='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed risus magna, dignissim ac orci et, fringilla feugiat sapien. 
                    Morbi quis tempor ipsum.'/>
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonialCard
                        clientPhoto={Client3}
                        imgAltText="Imagem do cliente 3"
                        name="Maria Silva"
                        ocuppation="Doutora em Medicina"
                        testimony='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed risus magna, dignissim ac orci et, fringilla feugiat sapien. 
                    Morbi quis tempor ipsum.'/>
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonialCard
                        clientPhoto={Client4}
                        imgAltText="Imagem do cliente 4"
                        name="Maria Gomes"
                        ocuppation="Designer UI"
                        testimony='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed risus magna, dignissim ac orci et, fringilla feugiat sapien. 
                    Morbi quis tempor ipsum.'/>
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonialCard
                        clientPhoto={Client5}
                        imgAltText="Imagem do cliente 5"
                        name="Roberta Magnum"
                        ocuppation="Nutricionista"
                        testimony='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed risus magna, dignissim ac orci et, fringilla feugiat sapien. 
                    Morbi quis tempor ipsum.'/>
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonialCard
                        clientPhoto={Client6}
                        imgAltText="Imagem do cliente 6"
                        name="Joaquim Souza"
                        ocuppation="Jornalista"
                        testimony='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed risus magna, dignissim ac orci et, fringilla feugiat sapien. 
                    Morbi quis tempor ipsum.'/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
