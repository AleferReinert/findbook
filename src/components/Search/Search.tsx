import { ComponentProps, forwardRef } from 'react'
import searchIcon from '../../assets/svg/search.svg'

interface SearchProps extends ComponentProps<'input'> {
	placeholder: string
	search: string
	setSearch: React.Dispatch<React.SetStateAction<string>>
}

export const Search = forwardRef<HTMLInputElement, SearchProps>(
	({ placeholder, search, setSearch, ...props }: SearchProps, ref) => {
		return (
			<div>
				<label
					className='text-gray-700 font-medium text-base-lg pb-2 block'
					htmlFor='recommendation-field'
					id='recommendation-label'
				>
					Pesquise no campo abaixo para ver as recomendações:
				</label>
				<div className='relative'>
					<input
						onChange={e => setSearch(e.target.value)}
						id='recommendation-field'
						ref={ref}
						type='text'
						placeholder={placeholder}
						value={search}
						className='
					transition text-gray-700 placeholder-gray-500 bg-slate-200 placeholder-current text-base py-3 pl-2 pr-12 w-full outline-none border border-slate-200 
					focus:placeholder-gray-700
					sm:pl-5
					'
						{...props}
					/>

					<button type='submit' title='Pesquisar' className='absolute right-0 top-[1px] p-3 outline-none'>
						<img src={searchIcon} width={24} height={24} alt='' />
					</button>
				</div>
			</div>
		)
	}
)
