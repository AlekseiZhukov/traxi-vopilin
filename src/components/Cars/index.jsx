import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Parallax, Pagination, A11y} from 'swiper';
import 'swiper/swiper-bundle.css'

import {content} from "./content/content";
import css from './Cars.module.css'
import background from './assets/carsSlider.jpg'


SwiperCore.use([Navigation, Parallax, A11y, Pagination])

const CarsSlider = () => {

    return (
        <div className={css.wrapperSlider}>
            <Swiper
                loop
                parallax
                spaceBetween={10}
                navigation
                pagination={{
                    clickable: true
                }}
                className={css.mainSwiper}
            >
                <div slot="container-start" className={css.parallax} style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}} data-swiper-parallax="-23%" />
                {content.map(item => <SwiperSlide key={item.id}>

                    <div  className={css.slideSticky} >
                        <div className={css.sliderBlackout} />
                        <div className={css.contentWrap}>
                            <h3>{item.title}</h3>

                            <ul className={css.list}>{item.services && item.services.map(value =>
                                <li key={value}><span className={css.listMarkersColor}>{value}</span></li>
                            )}</ul>

                            <img src={item.img} alt="" className={css.image}/>
                            {item.description && <p className={css.description}>{item.description}</p>}

                        </div>
                    </div>
                </SwiperSlide>)}
            </Swiper>


        </div>
    );
};

export default CarsSlider;