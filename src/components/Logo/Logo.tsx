import { Link } from 'react-router-dom'

interface LogoProps {
	theme?: 'light' | 'dark'
}

export function Logo({ theme = 'dark' }: LogoProps) {
	return (
		<Link
			to='/'
			className={`
					${theme === 'light' ? 'text-zinc-300 ' : 'text-gray-80 '}
					font-extralight text-xl pt-4 inline-block relative outline-non
				`}
		>
			Find
			<span
				className={`
				${theme === 'light' ? 'text-zinc-200 ' : 'text-gray-700 '}
				font-medium
			`}
			>
				Book
			</span>
		</Link>
	)
}
