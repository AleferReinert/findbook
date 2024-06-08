import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Rola a página para o topo ao trocar de rotas
function ScrollToTop() {
	const { pathname } = useLocation()

	useEffect(() => {
		const body = document.getElementsByTagName('body')[0]
		body.scrollIntoView({ behavior: 'smooth' })
	}, [pathname])

	return null
}

export default ScrollToTop
