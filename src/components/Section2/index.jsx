import React from 'react'
import css from './Section2.module.css'
import {content} from "./content/content";


const Section2 = () => {

    return (
        <div className={css.sectionWrap}>
        {content.map(item => <div key={item.id} className={css.sectionBox}>
            <img className={css.svg} src={item.svg} alt={''} />
                <div className={css.textWrap}>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
            </div>
                </div>
        )}
        </div>

    )

}

export default Section2