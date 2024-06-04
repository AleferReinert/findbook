import { ComponentProps, ReactNode } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
	children: ReactNode
	filled?: boolean // selected items
	size?: 'default' | 'small'
}

export function Button({ children, filled = false, size = 'default', onClick }: ButtonProps) {
	const styleFilled = 'bg-evergreen-light text-white shadow '
	const styleOutlined = 'text-evergreen-light '
	const styleSizeDefault = 'text-xl px-7 border-2 '
	const styleSizeSmall = 'text-sm px-5 border '

	return (
		<button
			onClick={onClick}
			className={`
				font-semibold rounded-lg border-evergreen-light py-2 
				${filled ? styleFilled : styleOutlined}
				${size === 'default' ? styleSizeDefault : styleSizeSmall}
			`}
		>
			{children}
		</button>
	)
}
