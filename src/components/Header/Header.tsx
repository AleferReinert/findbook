import { Button } from '../Button/Button'
import { Container } from '../Container/Container'
import { Logo } from '../Logo/Logo'

export function Header() {
	function setSearchFocus() {
		const label = document.getElementById('recommendation-label')
		const input = document.getElementById('recommendation-field')
		label?.scrollIntoView({ behavior: 'smooth' })
		setTimeout(() => input?.focus(), 200)
	}

	return (
		<header
			className='
			bg-header bg-center bg-cover bg-no-repeat relative 
			before:absolute before:inset-0 before:bg-black/55
		'
		>
			<Container>
				<Logo theme='light' />
				<div className='z-20 relative py-10 xl:py-16'>
					<h1
						className='
							text-zinc-50 text-3xl font-extrabold mb-2 drop-shadow-2xl
							md:text-5xl
							xl:text-7xl xl:leading-tight
					'
					>
						Encontre livros que <br /> sejam a sua cara
					</h1>
					<p className='text-zinc-300 text-lg mb-10 drop-shadow-2xl xl:text-xl'>
						Usamos IA para te dar as melhores recomendações!
					</p>
					<Button filled onClick={setSearchFocus}>
						Pesquisar livros
					</Button>
				</div>
			</Container>
		</header>
	)
}
