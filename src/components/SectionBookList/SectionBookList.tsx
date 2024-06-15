import { useEffect, useState } from 'react'
import { BookProps } from '../../contexts/booksContext'
import Card from '../Card/Card'
import { Heading } from '../Heading/Heading'

interface SectionBookListProps {
	title: string
	books: BookProps[]
}

export function SectionBookList({ title, books }: SectionBookListProps) {
	const [isFirstRender, setIsFirstRender] = useState(true)
	const [emptyMessage, setEmptyMessage] = useState('Faça uma pesquisa e suas recomendações aparecerão aqui.')

	useEffect(() => {
		if (isFirstRender) {
			setIsFirstRender(false)
		} else {
			setEmptyMessage('Nenhum livro encontrado.')
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className='mb-6'>
			<Heading title={title} as='h3' />

			{books && books.length > 0 ? (
				<ul className='grid gap-3 mt-4 md:grid-cols-2 lg:gap-5 xl:grid-cols-3'>
					{books.map((book, index) => (
						<li key={index} className='flex'>
							<Card
								id={book._id}
								image={book.thumbnailUrl}
								title={book.title}
								author={book.authors[0]}
								category={book.categories[0]}
								shortDescription={book.shortDescription}
								longDescription={book.longDescription}
							/>
						</li>
					))}
				</ul>
			) : (
				<p className='text-gray-700 mt-4'>{emptyMessage}</p>
			)}
		</div>
	)
}
