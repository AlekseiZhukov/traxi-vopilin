import React, {useState, useEffect} from 'react'
import {useMediaQuery} from "react-responsive";
import css from './Conditions.module.css'
import cn from 'classnames'


const Conditions = ({...props}) => {
	const {conditionOff} = {...props}
	const [conditionOn, setConditionOn] = useState(false)
	const isNotMobile = useMediaQuery({ query: '(min-width: 577px)' })
	const conditionShow = () => {
		setConditionOn(true)
	}
	useEffect( () => {
		const onConditionShow = setInterval(conditionShow, 10)
		return () => clearInterval(onConditionShow);
	}, [])


		return (
			<div className={cn(css.conditions, {[css.conditionsOn]:conditionOn})}>

				<div className={cn(css.closeConditions, {[css.closeConditionsDesktop]:isNotMobile})} id='closeConditions' onClick={conditionOff}>
					X
				</div>
				<div className={css.conditionsWrapper}>
					<h1>Условия, правила, требования:</h1>
					<hr className={css.conditionsWrapperLine} />
					<ol>
						<li>
							<span className={css.conditionsWrapperLi}>
								Запрещается курение и распитие спиртных напитков в салоне
								автомобиля такси без согласия водителя. Согласие водителя не
								освобождает Вас от ответственности за порчу салона и не налагает
								на водителя или такси ответственность за порчу Ваших личных
								вещей вследствие указанных действий.
							</span>
						</li>
						<li>
							<span className={css.conditionsWrapperLi}>
								Такси и водитель не несут ответственности за вещи, забытые в
								автомобиле. Найденные предметы водитель передает в диспетчерскую
								Такси.
							</span>
						</li>
						<li>
							<span className={css.conditionsWrapperLi}>
								Возможность изменения параметров заказа определяет диспетчер
								Такси. При этом диспетчер сообщает об изменении стоимости
								заказа. При отказе от оплаты дополнительного времени заказа или
								дополнительного пробега обслуживание прекращается.
							</span>
						</li>
						<li>
							<span className={css.conditionsWrapperLi}>
								В случае неисправности заказанного автомобиля такси
								оставляет за собой право заменить его на равноценный автомобиль
								или автомобиль классом выше.
							</span>
						</li>
						<li>
							<span className={css.conditionsWrapperLi}>
								В случае поломки автомобиля клиент вправе отказаться от
								дальнейшего обслуживания с оплатой фактически отработанного
								времени/пройденного пробега, или потребовать замены автомобиля
								на аналогичный или более высокого класса. При этом время,
								потраченное на ремонт на месте или на предоставление другого
								автомобиля, не считается временем заказа.
							</span>
						</li>
						<li>
							<span className={css.conditionsWrapperLi}>
								Клиент не вправе требовать превышения установленной скорости и
								нарушения правил дорожного движения.
							</span>
						</li>
						<li>
							<span className={css.conditionsWrapperLi}>
								Все платные парковки, стоянки и проезды оплачиваются клиентом,
								кроме случаев, включенных в услуги ВИП Такси (например,
								трансфер).
							</span>
						</li>
						<li>
							<span className={css.conditionsWrapperLi}>
								Клиент несет материальную ответственность за разбитые,
								порезанные, испачканные предметы салона. При этом клиент
								выплачивает денежную компенсацию водителю.
							</span>
						</li>
						<li>
							<span className={css.conditionsWrapperLi}>
								Запрещается перевозить в автомобилях ВИП Такси крупных животных,
								а также других животных без специальных сумок-перевозок
								(контейнеров). О намерении перевозить животное необходимо
								заранее информировать диспетчера такси.
							</span>
						</li>
						<li>
							<span className={css.conditionsWrapperLi}>
								Запрещается перевозить источники резких неприятных запахов
								(например, химические реактивы в открытых емкостях), так как
								указанные запахи могут впитаться в отделку салона автомобиля.
								Автомобиль не сможет быть использован в дальнейшем вплоть до
								выветривания таких запахов.
							</span>
						</li>
					</ol>
				</div>
			</div>
		)

}

export default Conditions
