import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import cn from 'classnames'
import SwiperCore, { Navigation, Parallax, Pagination, A11y} from 'swiper';
import 'swiper/swiper-bundle.css'
import './cars.css'
import {useMediaQuery} from "react-responsive";
import {content} from "./content/content";
import css from './Cars.module.css'
import background from './assets/carsSlider.jpg'



SwiperCore.use([Navigation, Parallax, A11y, Pagination])

const CarsSlider = () => {
    const isNotMobile = useMediaQuery({minWidth: 577})
    const isBigDesktop = useMediaQuery({minWidth: 1280})
    return (
        <div className={css.wrapperSlider} id='cars'>
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
                <div slot="container-start" className={css.parallax} style={!isNotMobile
                    ? {backgroundImage: `url(${background})`, backgroundSize: 'cover'}
                    : {backgroundImage: `url(${background})`,backgroundPosition: '50% 70%', backgroundSize: 'cover'}
                } data-swiper-parallax="-23%" />
                {content.map(item => <SwiperSlide key={item.id}>

                    <div  className={cn(css.slideSticky, {
                        [css.slideStickyDesktop]:isNotMobile,
                        [css.slideStickyBigDesktop]:isBigDesktop
                    })} >
                        <div className={css.sliderBlackout} />
                        <div className={css.contentWrap}>
                            <h3>{item.title}</h3>

                            <ul className={cn(css.list, {
                                [css.listDesktop]:isNotMobile,
                                [css.listBigDesktop]: isBigDesktop
                            })}>{item.services && item.services.map(value =>
                                <li key={value}><span className={css.listMarkersColor}>{value}</span></li>
                            )}</ul>

                            <img src={item.img} alt="" className={cn(css.image, {
                                [css.imageDesktop]:isNotMobile,
                                [css.imageBigDesktop]: isBigDesktop
                            })}/>
                            {item.description && <p className={css.description}>{item.description}</p>}

                        </div>
                    </div>
                </SwiperSlide>)}
            </Swiper>


        </div>
    );
};

export default CarsSlider;