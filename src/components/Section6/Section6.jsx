import React from 'react'
import cn from 'classnames'
import style from './Section6.module.css'
import {useMediaQuery} from "react-responsive";

const Section6 = () => {
	const isNotMobile = useMediaQuery({minWidth: 577})
	const isBigDesktop = useMediaQuery({minWidth: 1280})

	return (
		<div className={style.section6M} id='section6'>
			<div className={style.section6Wrapper}>
				<div className={cn(style.section6WrapperBox,{
					[style.section6WrapperBoxDesktop]: isNotMobile
				})}>
					<h4>контакты диспетчерской службы</h4>
						<div className={cn(style.headerTel, {
							[style.headerTelDesktop]: isNotMobile
						})}><a href="tel:+78314159989">+7 (831) 415 99 89</a></div>
					<ul>
						<li>vip-taxinn@mail.ru</li>
						<li>г. Нижний Новгород, ул. Советская 12, гостиница Маринс Парк Отель</li>
					</ul>
					<iframe
						className={cn(style.section6Frame, {
							[style.section6FrameDesktop]: isNotMobile
						})}
						title='вип такаси нижний новгород'
						src='https://yandex.ru/map-widget/v1/?um=constructor%3Ae4720e86e912bf54f636efabffabfd80af04eb56b0bce246eccf65ef1571aef9&amp;source=constructor'
						frameBorder='0'
					></iframe>
				</div>
			</div>
		</div>
	)
}

export default Section6
