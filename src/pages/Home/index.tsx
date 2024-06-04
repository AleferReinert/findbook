import { useCallback, useState } from 'react'
import { Button } from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import { Container } from '../../components/Container/Container'
import { Header } from '../../components/Header/Header'
import { Heading } from '../../components/Heading/Heading'
import { Input } from '../../components/Input/Input'

const categories = ['Comédia', 'Drama', 'Romance', 'Suspense', 'Auto ajuda']

export function HomePage() {
	const [selectedCategories, setSelectedCategories] = useState<string[]>([])

	const handleSelectCategories = useCallback(
		(category: string) => {
			// Se a categoria estiver selecionada, remove. Se não, adiciona.
			if (selectedCategories.includes(category)) {
				const removeCategory = selectedCategories.filter(item => item !== category)
				setSelectedCategories(removeCategory)
			} else {
				setSelectedCategories([...selectedCategories, category])
			}
		},
		[selectedCategories]
	)

	return (
		<>
			<Header />
			<Container>
				<Heading title='O que você quer ler hoje?' />

				<div className='flex gap-3 lg:gap-12 flex-wrap'>
					{categories.map((category, index) => (
						<Button
							key={index}
							filled={selectedCategories.includes(category)}
							onClick={() => handleSelectCategories(category)}
						>
							{category}
						</Button>
					))}
				</div>

				<Heading level='h3' title='Sobre o que você gostaria de receber uma recomendação de livro?' />
				<Input placeholder='Eu gostaria de ler...' />
				<Heading title='Livros recomendados' />
				<div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-11 mb-11'>
					<Card
						id='asd'
						image='xuxu.png'
						title='O Código Limpo'
						author='Robert C. Martin'
						tag='Computer Engineer'
						synopsis='lorem ipsum dolor'
					/>
				</div>
			</Container>
		</>
	)
}
