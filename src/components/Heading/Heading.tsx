interface HeadingProps {
	title: string
	level?: 'h1' | 'h2' | 'h3'
}

export function Heading({ title, level = 'h2' }: HeadingProps) {
	const commonStyles = 'text-evergreen font-bold '

	return (
		<div>
			{level === 'h2' && (
				<h2
					className={
						commonStyles +
						'text-2xl md:text-4xl border-b-4 border-evergreen-light w-fit mt-11 mb-6 md:mb-8 lg:mb-16'
					}
				>
					{title}
				</h2>
			)}

			{level === 'h3' && <h3 className={commonStyles + 'text-xl md:text-3xl mt-16 mb-6'}>{title}</h3>}
		</div>
	)
}
