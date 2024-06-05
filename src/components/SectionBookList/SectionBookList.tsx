import Card from '../Card/Card'
import { Container } from '../Container/Container'
import { Heading } from '../Heading/Heading'

export interface BookProps {
	id: string
	image: string
	title: string
	author: string
	tag: string
	synopsis: string
}

interface SectionBookListProps {
	title: string
	books: BookProps[]
}

export function SectionBookList({ title, books }: SectionBookListProps) {
	return (
		<>
			<Container>
				<Heading title={title} />

				<ul className='grid gap-3 mb-11 lg:grid-cols-2 lg:gap-5 xl:grid-cols-3'>
					{books.map((book, index) => (
						<li key={index} className='flex'>
							<Card
								id={book.id}
								image={book.image}
								title={book.title}
								author={book.author}
								tag={book.tag}
								synopsis={book.synopsis}
							/>
						</li>
					))}
				</ul>
			</Container>
		</>
	)
}
