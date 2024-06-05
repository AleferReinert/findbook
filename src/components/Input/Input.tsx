import { forwardRef } from 'react'

interface InputProps {
	placeholder: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ placeholder, ...rest }: InputProps, ref) => {
	return (
		<input
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
})
