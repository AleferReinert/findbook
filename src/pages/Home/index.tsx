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

const categories = [
	'Aventura',
	'Autoajuda',
	'Espiritualidade',
	'Drama',
	'Ficção',
	'Mistério',
	'Programação',
	'Psicologia',
	'Romance',
	'Saúde Mental',
	'Suspense',
	'Terror',
	'Thriller'
]

export function HomePage() {
	const [search, setSearch] = useState('')
	const [selectedCategories, setSelectedCategories] = useState<string[]>([])
	const { books, setBooks } = useContext(BooksContext)
	// const [popularBooks, setPopularBooks] = useState<BookProps[]>([])
	const [loading, setLoading] = useState(false)
	document.title = 'FindBook - Encontre livros que sejam a sua cara'

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

	// Livros mais populares para não carregar página vazia
	// useEffect(() => {
	// 	const fetchBooks = async () => {
	// 		const searchBooksPrompt = `
	//       1. Solicitação do usuário: livros mais populares no momento.
	//       2. Categorias que o usuário deseja: qualquer uma.
	//     `
	// 		const response = await searchBooks(searchBooksPrompt)
	// 		setPopularBooks(response)
	// 	}

	// 	fetchBooks()
	// }, [])

	// Rola a página para a posição da pesquisa após fazer a busca e após o resultado ser carregado
	const scrollToSearchElement = () => {
		window.scrollTo({
			top: document.getElementById('recommendation-label')!.offsetTop - 16,
			behavior: 'smooth'
		})
	}

	const handleSubmit = useCallback(
		async (e: React.FormEvent<HTMLFormElement>, search: string) => {
			e.preventDefault()
			setLoading(true)
			setBooks([])
			scrollToSearchElement()

			const searchBooksPrompt = () => {
				if (!search && selectedCategories.length === 0) {
					alert('Digite uma busca ou selecione uma categoria.')
				}

				const prompt =
					(search ? `${search}.` : '') +
					(selectedCategories.length > 0
						? `Retorne livros das seguintes categorias categorias:  ${selectedCategories}`
						: '')
				return prompt
			}
			const response = await searchBooks(searchBooksPrompt())
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
				<form
					className='mt-10 flex flex-col gap-10 sm:mt-12 sm:gap-12 lg:mt-14 lg:gap-14'
					onSubmit={e => handleSubmit(e, search)}
				>
					<div>
						<Heading title='O que gostaria de ler?' as='h2' lineBottom />

						<div className='flex gap-2 flex-wrap mt-6'>
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
					</div>

					<Search placeholder='Eu gostaria de ler...' search={search} setSearch={setSearch} />
					<SectionBookList title='Recomendados' books={books} />
					{/* {popularBooks.length > 0 && <SectionBookList title='Populares' books={popularBooks} />} */}
				</form>
			</Container>
		</>
	)
}
