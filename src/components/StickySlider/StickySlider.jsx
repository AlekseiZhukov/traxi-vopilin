import React, {useState}from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Thumbs, A11y} from 'swiper';
import {useMediaQuery} from "react-responsive";
import {content} from "./content/content";
import css from './StickySlider.module.css'
import cn from 'classnames'
import 'swiper/swiper-bundle.css'
import './swiper-bundle-castom.css'
import 'swiper/components/thumbs/thumbs.min.css'

SwiperCore.use([Navigation, Thumbs, A11y])

const StickySlider = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    const isNotMobile = useMediaQuery({minWidth: 577})
    const isBigDesktop = useMediaQuery({minWidth: 1280})

    return (
        <div className={cn(css.wrapperSlider, {[css.wrapperSliderDesktop]:isNotMobile})}>
        <Swiper
            loop
            centeredSlides
            spaceBetween={10}
            thumbs={{swiper: thumbsSwiper}}
            className={css.mainSwiper}
            >
            { content.map(item => <SwiperSlide key={item.id}>

                <div  style={!isNotMobile
                    ? {background: `url(${item.image}) no-repeat center center`, backgroundSize: 'cover'}
                    : {background: `url(${item.imageBig}) no-repeat center center`, backgroundSize: 'cover'}}
                      className={css.slideSticky}
                >
                    <div className={css.sliderBlackout} />
                    <div className={cn(css.contentWrap, {
                        [css.scontentWrapDesktop]:isNotMobile,

                    })}>
                        <h3 className={cn(css.slideStickyH3, {
                            [css.slideStickyH3Desktop]:isNotMobile,
                            [css.slideStickyH3BigDesktop]: isBigDesktop
                        })}>{item.title}</h3>

                        <ul className={cn(css.list,{
                            [css.listDesktop]: isNotMobile,
                            [css.listBigDesktop]: isBigDesktop
                        })}>{item.services && item.services.map(value =>
                            <li className={cn (css.listLi, {[css.listLiDesktop]:isNotMobile})} key={value}><span className={css.listMarkersColor}>{value}</span></li>
                        )}</ul>
                        {item.description && <p className={cn(css.description, {[css.descriptionDesktop]: isNotMobile})}>{item.description}</p>}

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
                    <div className={cn(css.svgWrap, {[css.svgWrapDesktop]:isNotMobile})}>
                        <img className={cn(css.svg, {[css.svgDesktop]: isNotMobile})} src={item.svg} alt={''}/>
                        <p className={css.subTitle}>{item.subTitle}</p>
                    </div>

                </SwiperSlide>)}
            </Swiper>


    </div>
    );
};

export default StickySlider;