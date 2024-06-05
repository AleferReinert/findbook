import { ComponentProps } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
	filled?: boolean
	selected?: boolean
	size?: 'default' | 'small'
}

export function Button({
	filled = false,
	selected = false,
	size = 'default',
	onClick,
	...props
}: ButtonProps) {
	const commonStyles = 'font-semibold border-emerald-500 py-2 transition '
	const styleFilled = 'bg-emerald-500 text-white hover:bg-emerald-700 hover:border-emerald-700 '
	const styleOutlined = 'text-emerald-500 hover:bg-emerald-500 hover:border-emerald-500 hover:text-white '
	const styleSizeDefault = 'text-xl px-7 border-2 '
	const styleSizeSmall = 'text-sm px-5 border '
	const styleSelected =
		'bg-emerald-900 text-white border-emerald-900 hover:bg-emerald-900 hover:border-emerald-900 '

	return (
		<button
			onClick={onClick}
			className={
				commonStyles +
				(filled ? styleFilled : styleOutlined) +
				(selected ? styleSelected : '') +
				(size === 'default' ? styleSizeDefault : styleSizeSmall)
			}
		>
			{props.children}
		</button>
	)
}
