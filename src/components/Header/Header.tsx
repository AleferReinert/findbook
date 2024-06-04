import { Button } from '../Button/Button'
import { Container } from '../Container/Container'
import { HeaderTitle } from './HeaderTitle'

export function Header() {
	return (
		<header className='bg-header sm:bg-center bg-cover bg-no-repeat pb-24'>
			<Container>
				<HeaderTitle />
				<h2
					className='
						text-evergreen text-3xl font-bold mb-2 mt-16 
						md:text-5xl md:leading-normal md:mt-36 
						xl:text-7xl xl:leading-snug xl:mt-36
				'
				>
					Encontre livros que <br /> sejam a sua cara!
				</h2>
				<p className='text-neutral-500 text-xl mb-11'>Lorem ipsum dolor sit amet.</p>
				<Button>Pesquisar livros</Button>
			</Container>
		</header>
	)
}
