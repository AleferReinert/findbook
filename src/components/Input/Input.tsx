import { ComponentProps, forwardRef, useCallback, useState } from 'react'
import searchIcon from '../../assets/svg/search.svg'
import { BookProps } from '../../contexts/booksContext'
import { searchBooks } from '../../services/books'

interface InputProps extends ComponentProps<'input'> {
	placeholder: string
	setBooks: React.Dispatch<React.SetStateAction<BookProps[]>>
	selectedCategories: string[]
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ placeholder, setBooks, selectedCategories, ...props }: InputProps, ref) => {
		const [search, setSearch] = useState('')
		const handleSubmit = useCallback(
			async (e: React.FormEvent<HTMLFormElement>, search: string) => {
				e.preventDefault()
				console.log('deu submit! search: ', search)
				// todo: quando apaga o input rapidamente, o length não fica em 0 para poder esconder os resultados
				const searchBooksPrompt = `
					1. Solicitação do usuário: ${search}.
					2. Categorias que o usuário deseja:  ${selectedCategories || 'todas'}.
				`
				const response = await searchBooks(searchBooksPrompt)
				setBooks(response) // ao digitar no celular, essa função apaga toda a tela
			},
			[selectedCategories, setBooks]
		)

		console.log('search: ', search)

		return (
			<form className='relative mb-5' onSubmit={e => handleSubmit(e, search)}>
				<input
					onChange={e => setSearch(e.target.value)}
					id='recommendation-field'
					ref={ref}
					type='text'
					placeholder={placeholder}
					value={search}
					className='
					text-neutral-500 bg-transparent placeholder-current text-base py-3 pl-2 pr-12 w-full outline-none border border-neutral-500 
					sm:pl-5
					'
					{...props}
				/>
				<button type='submit' title='Pesquisar' className='absolute right-0 top-[1px] p-3 outline-none'>
					<img src={searchIcon} width={24} height={24} />
				</button>
			</form>
		)
	}
)
