import { useCallback, useState } from 'react'
import { books } from '../../assets/mock/books'
import { Button } from '../../components/Button/Button'
import { Container } from '../../components/Container/Container'
import { Header } from '../../components/Header/Header'
import { Heading } from '../../components/Heading/Heading'
import { Input } from '../../components/Input/Input'
import { SectionBookList } from '../../components/SectionBookList/SectionBookList'

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

				<div className='flex gap-2 flex-wrap'>
					{categories.sort().map((category, index) => (
						<Button
							key={index}
							size='small'
							selected={selectedCategories.includes(category)}
							onClick={() => handleSelectCategories(category)}
						>
							{category}
						</Button>
					))}
				</div>

				<label
					className='text-gray-700 font-bold text-xl mt-5 lg:mt-10 mb-5 block'
					htmlFor='recommendation-field'
				>
					Sobre o que você gostaria de receber uma recomendação?
				</label>
				<Input placeholder='Eu gostaria de ler...' />
			</Container>
			<SectionBookList title='Recomendados' books={books} />
		</>
	)
}
