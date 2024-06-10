import { useCallback, useContext, useState } from 'react'

import { CategoryButton } from '../../components/CategoryButton/CategoryButton'
import { Container } from '../../components/Container/Container'
import { Header } from '../../components/Header/Header'
import { Heading } from '../../components/Heading/Heading'
import { Loading } from '../../components/Loading/Loading'
import { Search } from '../../components/Search/Search'
import { SectionBookList } from '../../components/SectionBookList/SectionBookList'
import { BooksContext } from '../../contexts/booksContext'
import { searchBooks } from '../../services/books'

const categories = ['Comédia', 'Drama', 'Romance', 'Suspense', 'Autoajuda']

export function HomePage() {
	const [search, setSearch] = useState('')
	const [selectedCategories, setSelectedCategories] = useState<string[]>([])
	const { books, setBooks } = useContext(BooksContext)
	const [loading, setLoading] = useState(false)

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

	// Rola a página para a posição da pesquisa após fazer a busca e após o resultado ser carregado
	const scrollToSearchElement = () => {
		const recommendationLabel = document.getElementById('recommendation-label')
		recommendationLabel?.scrollIntoView({
			behavior: 'smooth'
		})
	}

	const handleSubmit = useCallback(
		async (e: React.FormEvent<HTMLFormElement>, search: string) => {
			e.preventDefault()
			setLoading(true)
			setBooks([])
			scrollToSearchElement()

			const searchBooksPrompt = `
			1. Solicitação do usuário: ${search}.
			2. Categorias que o usuário deseja:  ${selectedCategories.length ? selectedCategories : 'qualquer uma'}.
			`
			const response = await searchBooks(searchBooksPrompt)
			setBooks(response)
			setTimeout(() => {
				scrollToSearchElement(), 50
				setLoading(false)
			})
		},
		[selectedCategories, setBooks]
	)

	return (
		<>
			<Loading show={loading} />
			<Header />
			<Container>
				<form className='mb-5' onSubmit={e => handleSubmit(e, search)}>
					<Heading title='O que gostaria de ler?' />

					<div className='flex gap-2 flex-wrap mb-10'>
						{categories.sort().map((category, index) => (
							<CategoryButton
								key={index}
								selected={selectedCategories.includes(category)}
								onClick={() => handleSelectCategories(category)}
							>
								{category}
							</CategoryButton>
						))}
					</div>

					<label
						className='text-gray-700 font-medium text-base-lg pt-3 pb-2 mt-2 lg:mt-10 block'
						htmlFor='recommendation-field'
						id='recommendation-label'
					>
						Pesquise no campo abaixo para ver as recomendações:
					</label>

					<Search placeholder='Eu gostaria de ler...' search={search} setSearch={setSearch} />
				</form>
			</Container>
			<SectionBookList title='Recomendados' books={books} />
		</>
	)
}
