import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
	return (
		<header className='header'>
			<ul className='header__list'>
				<li className='header__item'>
					<NavLink
						end
						className='header__link'
						style={({ isActive }) => ({ color: isActive ? 'white' : 'black' })}
						to='/'>
						Главная
					</NavLink>
				</li>
				<li className='header__item'>
					<NavLink
						end
						className='header__link'
						style={({ isActive }) => ({ color: isActive ? 'white' : 'black' })}
						to='/stat'>
						Статистика
					</NavLink>
				</li>
			</ul>
		</header>
	)
}

export default Header
