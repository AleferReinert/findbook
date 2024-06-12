interface HeadingProps {
	title: string
	as: 'h1' | 'h2' | 'h3'
	lineBottom?: boolean
}

export function Heading({ title, as, lineBottom = false }: HeadingProps) {
	const lineStyles = 'w-fit border-b-2 border-emerald-500 pb-2'
	const commonStyles = `text-gray-700 font-extrabold ${lineBottom ? lineStyles : ''} `

	return (
		<>
			{as === 'h1' && <h1 className={commonStyles + 'text-3xl sm:text-4xl lg:text-5xl'}>{title}</h1>}
			{as === 'h2' && <h2 className={commonStyles + 'text-2xl sm:text-3xl lg:text-4xl'}>{title}</h2>}
			{as === 'h3' && <h3 className={commonStyles + 'text-xl sm:text-2xl lg:text-3xl'}>{title}</h3>}
		</>
	)
}
