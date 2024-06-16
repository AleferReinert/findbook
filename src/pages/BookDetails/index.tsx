import dayjs from 'dayjs'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CategoryTags } from '../../components/CategoryTags/CategoryTags'
import { Container } from '../../components/Container/Container'
import { Heading } from '../../components/Heading/Heading'
import { Logo } from '../../components/Logo/Logo'
import { SectionBookList } from '../../components/SectionBookList/SectionBookList'
import { BookProps, BooksContext } from '../../contexts/booksContext'

export function BookDetailsPage() {
	const { id } = useParams()
	const { books } = useContext(BooksContext)
	const [book, setBook] = useState<BookProps | null>()

	useEffect(() => {
		const findBook = books.find(book => book._id === id)
		setBook(findBook)
		if (findBook) document.title = findBook.title
	}, [books, id])

	return (
		<>
			<Container>
				<Logo />
				{book ? (
					<article className='mt-8 mb-8 lg:mt-16 pb-5 border-b border-gray-300 sm:pb-10 sm:mb-12 lg:mb-20 lg:gap-8'>
						<Heading title={book.title} as='h1' />
						{book.authors && (
							<h2 className='text-gray-500 mt-3 text-xl lg:text-2xl'>{book.authors.join(', ')}</h2>
						)}

						{book.categories && <CategoryTags categories={book.categories} size='normal' />}

						<div className='md:grid md:grid-cols-[auto_max-content] md:gap-10'>
							{book.thumbnailUrl && (
								<div className='md:order-2'>
									<img
										src={book.thumbnailUrl}
										alt='Book Cover'
										className='bg-slate-100 text-center mx-auto w-56 lg:w-72'
									/>
								</div>
							)}
							<div className='md:flex md:flex-col md:justify-between'>
								<p className='text-gray-600 mt-5 mb-3 text-base leading-7 md:mt-0'>
									{book.longDescription
										? book.longDescription
										: book.shortDescription || 'Descrição não disponível.'}
								</p>
								<table className='text-gray-600 text-left w-full text-sm'>
									<tbody className='[&_th]:font-medium odd:[&_>tr]:bg-slate-200/50 [&_>tr>*]:py-3 [&_>tr>*]:px-3'>
										<tr>
											<th>Data da publicação:</th>
											<td>{dayjs(book.publishedDate.$date).format('DD/MM/YYYY')}</td>
										</tr>
										<tr>
											<th>Páginas:</th>
											<td>{book.pageCount}</td>
										</tr>
										<tr>
											<th>ISBN:</th>
											<td>{book.isbn}</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</article>
				) : (
					<h1 className='mt-8 text-3xl text-gray-700 font-extrabold sm:text-4xl lg:text-5xl lg:mt-20'>
						Livro não encontrado
					</h1>
				)}
				<SectionBookList title='Recomendações com base nesse livro' books={books} />
			</Container>
		</>
	)
}
