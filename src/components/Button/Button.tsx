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
	const commonStyles = 'font-semibold border-emerald-500 py-2 transition outline-none '
	const filledStyles = 'bg-emerald-500 text-white hover:bg-emerald-700 hover:border-emerald-700 '
	const outlinedStyles = 'text-emerald-500 hover:bg-emerald-500 hover:border-emerald-500 hover:text-white '
	const sizeNormalStyles = 'text-xl px-7 border-2 '
	const sizeSmallStyles = 'text-sm px-5 border '
	const selectedStyles =
		'bg-emerald-900 text-white border-emerald-900 hover:bg-emerald-900 hover:border-emerald-900 '

	return (
		<button
			onClick={onClick}
			className={
				commonStyles +
				(filled ? filledStyles : outlinedStyles) +
				(selected ? selectedStyles : '') +
				(size === 'normal' ? sizeNormalStyles : sizeSmallStyles)
			}
		>
			{props.children}
		</button>
	)
}
