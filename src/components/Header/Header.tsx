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
			bg-header-mobile bg-center bg-cover bg-no-repeat relative 
			before:absolute before:inset-0 before:bg-black/55
			sm:bg-header-desktop
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
					<button
						onClick={setSearchFocus}
						className='
							font-medium border-emerald-500 py-2 transition outline-none 
							bg-emerald-500 text-white text-xl px-7 border-2 
							hover:bg-emerald-600 hover:border-emerald-600 
						'
					>
						Pesquisar livros
					</button>
				</div>
			</Container>
		</header>
	)
}
