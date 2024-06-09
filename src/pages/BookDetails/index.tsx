import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from '../../components/Container/Container'
import { Logo } from '../../components/Logo/Logo'
import { SectionBookList } from '../../components/SectionBookList/SectionBookList'
import { CategoryTag } from '../../components/Tag/Tag'
import { BookProps, BooksContext } from '../../contexts/booksContext'

export function BookDetailsPage() {
	const { id } = useParams()
	const { books } = useContext(BooksContext)
	const [book, setBook] = useState<BookProps | null>()

	useEffect(() => {
		const findBook = books.find(book => book._id === id)
		setBook(findBook)
	}, [books, id])

	return (
		<>
			<Container>
				<Logo />
				{book ? (
					<article className='my-8 grid gap-12 justify-between lg:mt-20 lg:grid-cols-3 lg:gap-8'>
						<div className='lg:col-span-2'>
							<h1 className='text-3xl text-gray-700 font-extrabold sm:text-4xl lg:text-5xl lg:mt-2'>
								{book.title}
							</h1>

							{book.authors && (
								<h2 className='text-gray-500 mt-3 text-xl lg:text-2xl'>{book.authors.join(', ')}</h2>
							)}

							{book.categories && (
								<div className='flex gap-2'>
									{book.categories.map((category, index) => (
										<CategoryTag key={index} title={category} size='normal' />
									))}
								</div>
							)}

							<p className='text-gray-500 mt-5 text-base leading-7'>
								{book.longDescription
									? book.longDescription
									: book.shortDescription || 'Descrição não disponível.'}
							</p>
						</div>
						{book.thumbnailUrl && (
							<div>
								<img
									src={book.thumbnailUrl}
									alt='Book Cover'
									width='412'
									height='583'
									className='bg-slate-100 text-center mx-auto'
								/>
							</div>
						)}
					</article>
				) : (
					<h1 className='mt-8 text-3xl text-gray-700 font-extrabold sm:text-4xl lg:text-5xl lg:mt-20'>
						Livro não encontrado
					</h1>
				)}
			</Container>
			<SectionBookList title='Recomendações com base nesse livro' books={books} />
		</>
	)
}
