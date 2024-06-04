import { forwardRef } from 'react'

interface InputProps {
	placeholder: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ placeholder, ...rest }: InputProps, ref) => {
	return (
		<input
			ref={ref}
			type='text'
			placeholder={placeholder}
			className='text-neutral-500 text-xl py-4 px-7 mb-5 rounded-2xl w-full shadow-default outline-none'
			{...rest}
		/>
	)
})
