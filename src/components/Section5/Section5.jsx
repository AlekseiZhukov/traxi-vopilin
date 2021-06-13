import React from 'react'
import css from './Section5.module.css'

import yandex from './img/yandextaxi.svg'
import hotel from './img/marinsHotel.svg'


const Section5 = () => {
	return (
		<div className={css.section5}>
			<h3>Наши партнеры</h3>
			<div className={css.section5Wrapper}>
				<div className={css.section5WrapperBox}>
					<a
						href='https://taxi.yandex.ru/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img
							src={yandex}
							className={css.section5WraInfo}
							alt='Яндекс Такси'
						/>
					</a>
					<p>
						VIP taxi Нижний Новгород является официальным партнером ЯНДЕКС ТАКСИ
						НИЖНИЙ НОВГОРОД.
					</p>
				</div>
				<div className={css.section5WrapperBox}>
					<a
						href='https://marinsparkhotels.ru/nn/rooms'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img
							src={hotel}
							className={css.section5WraInfo}
							alt='Маринс Парк Отель'
						/>
					</a>
					<p>
						VIP taxi Нижний Новгород является официальным партнером и
						перевозчиком Маринс Парк Отель — Нижний Новгород (Marines Park
						Hotel).
					</p>
				</div>
			</div>
			<p className={css.section5Address}>
				для связи по условиям партнерства <br/>тел: +7 (831) 415 99 89, <br/>e-mail:
				vip-taxinn@mail.ru
			</p>
		</div>
	)
}

export default Section5
