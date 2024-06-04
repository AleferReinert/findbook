import { ComponentProps, ReactNode } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
	children: ReactNode
	filled?: boolean // selected items
	size?: 'default' | 'small'
}

export function Button({ children, filled = false, size = 'default', onClick }: ButtonProps) {
	const styleDefault = 'font-semibold rounded-lg border-emerald-500 py-2 transition '
	const styleFilled = 'bg-emerald-500 text-white shadow-button hover:bg-gray-700 hover:border-gray-700 '
	const styleOutlined = 'text-emerald-500 hover:border-gray-700 hover:text-gray-700 '
	const styleSizeDefault = 'text-xl px-7 border-2 '
	const styleSizeSmall = 'text-sm px-5 border '

	return (
		<button
			onClick={onClick}
			className={
				styleDefault +
				(filled ? styleFilled : styleOutlined) +
				(size === 'default' ? styleSizeDefault : styleSizeSmall)
			}
		>
			{children}
		</button>
	)
}
