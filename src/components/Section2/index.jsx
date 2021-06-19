import React from 'react'
import cn from 'classnames'
import css from './Section2.module.css'
import {content} from "./content/content";
import {useMediaQuery} from "react-responsive";


const Section2 = () => {
    const isNotMobile = useMediaQuery({minWidth: 577})

    return (
        <div className={cn(css.sectionWrap, {
            [css.sectionWrapDesktop]:isNotMobile
        })}>
        {content.map(item => <div key={item.id} className={cn(css.sectionBox, {
            [css.sectionBoxDesktop]:isNotMobile
            })}>
            <img className={cn(css.svg, {
                [css.svgDesktop]:isNotMobile
            })} src={item.svg} alt={''} />
                <div className={cn(css.textWrap, {
                    [css.textWrapDesktop]:isNotMobile
                })}>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
            </div>
                </div>
        )}
        </div>

    )

}

export default Section2