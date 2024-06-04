import { Button } from '../Button/Button'
import { Container } from '../Container/Container'
import { HeaderTitle } from './HeaderTitle'

export function Header() {
	return (
		<header className='bg-header bg-center bg-cover bg-no-repeat relative '>
			<Container>
				<HeaderTitle />
				<div className='z-20 relative pb-24'>
					<h1
						className='
							text-gray-700 text-3xl font-bold mb-2 mt-12 lg:mt-16 
							md:text-5xl md:leading-snug 
							xl:text-7xl xl:mt-36 
					'
					>
						Encontre livros que <br /> sejam a sua cara!
					</h1>
					<p className='text-neutral-500 text-xl mb-11'>Lorem ipsum dolor sit amet.</p>
					<Button filled>Pesquisar livros</Button>
				</div>
				<div
					className='
						bg-float aspect-square bg-cover w-72 opacity-70 absolute bottom-0 right-0 z-10
						sm:opacity-100 sm:w-80 md:w-96 lg:w-1/2 xl:w-2/5
				'
				></div>
			</Container>
		</header>
	)
}
