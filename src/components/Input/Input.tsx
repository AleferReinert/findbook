import { ComponentProps, forwardRef, useCallback } from 'react'
import { BookProps } from '../../contexts/booksContext'
import { searchBooks } from '../../services/books'

interface InputProps extends ComponentProps<'input'> {
	placeholder: string
	setBooks: React.Dispatch<React.SetStateAction<BookProps[]>>
	selectedCategories: string[]
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ placeholder, setBooks, selectedCategories, ...rest }: InputProps, ref) => {
		const handleSubmit = useCallback(
			async (e: React.ChangeEvent<HTMLInputElement>) => {
				// todo: quando apaga o input rapidamente, o length não fica em 0 para poder esconder os resultados
				const userSearchValue = `
					1. Solicitação do usuário: ${e.target.value}.
					2. Categorias que o usuário deseja:  ${selectedCategories || 'todas'}.
				`
				const response = await searchBooks(userSearchValue)
				setBooks(response) // ao digitar no celular, essa função apaga toda a tela
			},
			[selectedCategories, setBooks]
		)

		return (
			<input
				onChange={e => handleSubmit(e)}
				id='recommendation-field'
				ref={ref}
				type='text'
				placeholder={placeholder}
				className='
				text-neutral-500 bg-transparent placeholder-current text-base py-3 px-2 mb-5 w-full outline-none border border-neutral-500
				sm:px-5
			'
				{...rest}
			/>
		)
	}
)
