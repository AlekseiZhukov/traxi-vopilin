import React from 'react'
import style from './Section6.module.css'
/*import styled, { keyframes } from 'styled-components'
import { pulse } from 'react-animations'
const Pulse = styled.div`
	animation: infinite 1s ${keyframes`${pulse}`};
`*/
const Section6 = () => {
	return (
		<div className={style.section6M} id='section6'>
			<div className={style.section6Wrapper}>

				<div className={style.section6WrapperBox}>
					<h4>контакты диспетчерской службы</h4>

						<div className={style.headerTel}><a href="tel:+78314159989">+7 (831) 415 99 89</a></div>

					<ul>

						<li>vip-taxinn@mail.ru</li>
						<li>
							г. Нижний Новгород, ул. Советская 12, гостиница Маринс Парк Отель
						</li>
					</ul>
					<iframe
						className={style.section6Frame}
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
