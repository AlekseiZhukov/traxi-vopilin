import React from 'react'
import { useMediaQuery } from 'react-responsive'
import cn from 'classnames'
import css from './Header.module.css'
import logo from './assets/status_logo.svg'


const Header = ({...props}) => {
	const {conditionOn} = {...props}
	const isDesktop = useMediaQuery({minWidth: 577, maxWidth: 1280})
	const isBigDesktop = useMediaQuery({minWidth: 1280})

		return (
			<div className={cn(css.header ,{
				[css.headerDesktop]:isDesktop
			})}>
				<div className={css.headerWrapper}>
					<div className={css.headerBox}>

						    <img src={logo}  alt={'logo'} className={cn (css.statusLogo, {
						    	[css.statusLogoDesktop] : isDesktop | isBigDesktop,
						    })}/>


                        {isDesktop || isBigDesktop ? <div className={css.navBox}>

							<ul className={css.nav}>
								<li>
									<a className={css.headerHeadingLink} href='#cars'>
										автомобили
									</a>
								</li>

								<li>
									<span className={css.headerHeadingLink} onClick={conditionOn}>
										правила
									</span>
								</li>
								<li>
									<a className={css.headerHeadingLink} href='#section6'>
										контакты
									</a>
								</li>
							</ul>
						</div> : null}

							<div >
								<a className={cn(css.headerTel ,{
								[css.headerTelDesktop]:isDesktop,
								[css.headerTelBigDesktop]: isBigDesktop
							})} href="tel:+78314159989">+7 (831) 415 99 89</a>
								{!isDesktop && !isBigDesktop? <div className={css.conditions} onClick={conditionOn}>правила пользования такси</div> : null}
							</div>


					</div>
				</div>
			</div>
		)

	}


export default Header
