import { ReactNode, createContext, useState } from 'react'

export interface BookProps {
	_id: string
	title: string
	isbn: string
	pageCount: number
	publishedDate: { $date: string }
	thumbnailUrl: string
	shortDescription: string
	longDescription: string
	status: string
	authors: string[]
	categories: string[]
	score: number
}

interface BooksContextProps {
	books: BookProps[]
	setBooks: React.Dispatch<React.SetStateAction<BookProps[]>>
}

export const BooksContext = createContext({} as BooksContextProps)

interface BooksProviderProps {
	children: ReactNode
}

export function BooksProvider({ children }: BooksProviderProps) {
	const [books, setBooks] = useState<BookProps[]>([])

	return <BooksContext.Provider value={{ books, setBooks }}>{children}</BooksContext.Provider>
}
