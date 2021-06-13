import React from 'react'
import { useMediaQuery } from 'react-responsive'
import cn from 'classnames'
import css from './Header.module.css'
import logo from './assets/status_logo.svg'

//import { Link } from 'react-router-dom'

const Header = () => {

	// const isMobile = useMediaQuery({ query: '(max-device-width: 576px)' })
	const isNotMobile = useMediaQuery({ query: '(min-width: 577px)' })

		return (
			<div className={css.header}>
				<div className={css.headerWrapper}>
					<div className={css.headerBox}>

						    <img src={logo}  alt={'logo'} className={cn (css.statusLogo, {
						    	[css.statusLogoDesktop] : isNotMobile
						    })}/>


                        {isNotMobile ? <div className='nav-box'>

							<ul className='nav'>
								<li>
									<a className='heder-heading_link' href='#cars'>
										тарифы и автомобили
									</a>
								</li>

								<li>
									<span className='heder-heading_link' >
										правила
									</span>
								</li>
								<li>
									<a className='heder-heading_link' href='#section6'>
										контакты
									</a>
								</li>
							</ul>
						</div> : null}

							<div ><a className={cn(css.headerTel ,{
								[css.headerTelDesktop]:isNotMobile
							})} href="tel:+78314159989">+7 (831) 415 99 89</a></div>


					</div>
				</div>
			</div>
		)

	}


export default Header
