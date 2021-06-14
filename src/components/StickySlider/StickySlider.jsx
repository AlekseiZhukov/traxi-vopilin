import React, {useState}from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Thumbs, A11y} from 'swiper';
import 'swiper/swiper-bundle.css'
import {content} from "./content/content";
import css from './StickySlider.module.css'
import './swiper-bundle-castom.css'
import 'swiper/components/thumbs/thumbs.min.css'


SwiperCore.use([Navigation, Thumbs, A11y])

const StickySlider = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    return (
        <div className={css.wrapperSlider}>
        <Swiper
            loop
            centeredSlides
            spaceBetween={10}
            thumbs={{swiper: thumbsSwiper}}
            className={css.mainSwiper}
            >
            {content.map(item => <SwiperSlide key={item.id}>

                <div  style={{background: `url(${item.image}) no-repeat center center`, backgroundSize: 'cover'}} className={css.slideSticky} >
                    <div className={css.sliderBlackout} />
                    <div className={css.contentWrap}>
                        <h3>{item.title}</h3>

                        <ul className={css.list}>{item.services && item.services.map(value =>
                            <li key={value}><span className={css.listMarkersColor}>{value}</span></li>
                        )}</ul>
                        {item.description && <p className={css.description}>{item.description}</p>}

                    </div>
                </div>
            </SwiperSlide>)}
        </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                allowTouchMove={false}
                spaceBetween={10}
                slidesPerView={content.length}
                className={css.mySwiper}

            >
                {content.map(item => <SwiperSlide key={item.id}  >
                    <div className={css.svgWrap}>
                        <img className={css.svg} src={item.svg} alt={''}/>
                        <p className={css.subTitle}>{item.subTitle}</p>
                    </div>

                </SwiperSlide>)}
            </Swiper>

    </div>
    );
};

export default StickySlider;