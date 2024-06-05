import { ReactNode } from 'react'

interface ContainerProps {
	children: ReactNode
}

export function Container({ children }: ContainerProps) {
	return <div className='px-3 mx-auto max-w-7xl sm:px-5'>{children}</div>
}
