import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import Logo from '../images/logo-suitmedia.png'

function Navigation() {
	const location = useLocation()
	const [isScrolled, setIsScrolled] = useState(false)
	const [isHidden, setIsHidden] = useState(false)
	const [prevScrollPos, setPrevScrollPos] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY

			setIsScrolled(currentScrollPos > 0)

			if (currentScrollPos > prevScrollPos && !isHidden) {
				setIsHidden(true)
			} else if (currentScrollPos < prevScrollPos && isHidden) {
				setIsHidden(false)
			}

			setPrevScrollPos(currentScrollPos)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [prevScrollPos, isHidden])

	return (
		<div className={`navigation ${isScrolled ? 'scrolled' : ''} ${isHidden ? 'hidden' : ''}`}>
			<div className="logo-container">
				<img className="logo" src={Logo} alt="" />
			</div>
			<div className="menu">
				<Link to="/work" className={`menu-item ${location.pathname === '/work' ? 'active' : ''}`}>
					Work
				</Link>
				<Link to="/product" className={`menu-item ${location.pathname === '/product' ? 'active' : ''}`}>
					Product
				</Link>
				<Link to="/services" className={`menu-item ${location.pathname === '/services' ? 'active' : ''}`}>
					Services
				</Link>
				<Link to="/ideas" className={`menu-item ${location.pathname === '/ideas' ? 'active' : ''}`}>
					Ideas
				</Link>
				<Link to="/careers" className={`menu-item ${location.pathname === '/careers' ? 'active' : ''}`}>
					Careers
				</Link>
				<Link to="/contact" className={`menu-item ${location.pathname === '/contact' ? 'active' : ''}`}>
					Contact
				</Link>
			</div>
		</div>
	)
}

export default Navigation
