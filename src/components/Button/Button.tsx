import { ComponentProps } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
	filled?: boolean
	selected?: boolean
	size?: 'normal' | 'small'
}

export function Button({
	filled = false,
	selected = false,
	size = 'normal',
	onClick,
	...props
}: ButtonProps) {
	const commonStyles = 'font-medium border-emerald-500 py-2 transition outline-none '
	const filledStyles = 'bg-emerald-500 text-white hover:bg-emerald-600 hover:border-emerald-600 '
	const outlinedStyles = 'text-zinc-500 border-zinc-500 hover:text-emerald-500 hover:border-emerald-500 '
	const sizeNormalStyles = 'text-xl px-7 border-2 '
	const sizeSmallStyles = 'text-sm px-5 border '
	const selectedStyles =
		'bg-emerald-900 text-zinc-100 border-emerald-900 hover:bg-emerald-900 hover:border-emerald-900 '

	return (
		<button
			type='button'
			onClick={onClick}
			className={
				commonStyles +
				(selected ? selectedStyles : filled ? filledStyles : outlinedStyles) +
				(size === 'normal' ? sizeNormalStyles : sizeSmallStyles)
			}
		>
			{props.children}
		</button>
	)
}
