import { Button } from '../Button/Button'
import { Container } from '../Container/Container'
import { Logo } from '../Logo/Logo'

export function Header() {
	function setSearchFocus() {
		const input = document.getElementById('recommendation-field')
		input?.focus()
	}
	return (
		<header className='bg-header bg-center bg-cover bg-no-repeat relative '>
			<Container>
				<Logo />
				<div className='z-20 relative py-10'>
					<h1
						className='
							text-gray-700 text-3xl font-bold mb-2
							md:text-5xl
							xl:text-7xl xl:leading-tight
					'
					>
						Encontre livros que <br /> sejam a sua cara!
					</h1>
					<p className='text-neutral-500 text-xl mb-10'>Lorem ipsum dolor sit amet.</p>
					<Button filled onClick={setSearchFocus}>
						Pesquisar livros
					</Button>
				</div>
				<div
					className='
						bg-float aspect-square bg-cover w-72 opacity-20 absolute bottom-0 right-0 z-10
						sm:opacity-100 sm:w-80 lg:w-2/6
				'
				></div>
			</Container>
		</header>
	)
}
