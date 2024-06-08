import { useCallback, useContext, useState } from 'react'

import { Button } from '../../components/Button/Button'
import { Container } from '../../components/Container/Container'
import { Header } from '../../components/Header/Header'
import { Heading } from '../../components/Heading/Heading'
import { Search } from '../../components/Search/Search'
import { SectionBookList } from '../../components/SectionBookList/SectionBookList'
import { BooksContext } from '../../contexts/booksContext'
import { searchBooks } from '../../services/books'

const categories = ['Comédia', 'Drama', 'Romance', 'Suspense', 'Autoajuda']

export function HomePage() {
	const [search, setSearch] = useState('')
	// const [status, setStatus] = useState('')
	const [selectedCategories, setSelectedCategories] = useState<string[]>([])
	const { books, setBooks } = useContext(BooksContext)

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

	const handleSubmit = useCallback(
		async (e: React.FormEvent<HTMLFormElement>, search: string) => {
			e.preventDefault()
			const searchBooksPrompt = `
				1. Solicitação do usuário: ${search}.
				2. Categorias que o usuário deseja:  ${selectedCategories.length ? selectedCategories : 'qualquer uma'}.
			`
			const response = await searchBooks(searchBooksPrompt)
			setBooks(response)
		},
		[selectedCategories, setBooks]
	)

	return (
		<>
			<Header />
			<Container>
				<form className='mb-5' onSubmit={e => handleSubmit(e, search)}>
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

					<Search placeholder='Eu gostaria de ler...' search={search} setSearch={setSearch} />
				</form>
			</Container>
			<SectionBookList title='Recomendados' books={books} />
		</>
	)
}
