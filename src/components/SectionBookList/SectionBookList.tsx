import { BookProps } from '../../contexts/booksContext'
import Card from '../Card/Card'
import { Container } from '../Container/Container'
import { Heading } from '../Heading/Heading'

interface SectionBookListProps {
	title: string
	books: BookProps[]
}

export function SectionBookList({ title, books }: SectionBookListProps) {
	return (
		<Container>
			<section className='mb-11'>
				<Heading title={title} />

				{books && books.length > 0 ? (
					<ul className='grid gap-3 mb-11 lg:grid-cols-2 lg:gap-5 xl:grid-cols-3'>
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
					<p className='text-gray-700'>Nenhum livro encontrado.</p>
				)}
			</section>
		</Container>
	)
}
