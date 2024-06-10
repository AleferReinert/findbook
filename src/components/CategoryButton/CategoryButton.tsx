import { ComponentProps } from 'react'

interface CategoryButtonProps extends ComponentProps<'button'> {
	selected?: boolean
}

export function CategoryButton({ selected = false, onClick, ...props }: CategoryButtonProps) {
	return (
		<button
			type='button'
			onClick={onClick}
			className={
				'font-medium py-2 transition outline-none text-sm px-5 border text-zinc-500 border-zinc-500 ' +
				(selected &&
					'bg-emerald-900 !text-zinc-100 border-emerald-900 hover:bg-emerald-900 hover:border-emerald-900')
			}
		>
			{props.children}
		</button>
	)
}
