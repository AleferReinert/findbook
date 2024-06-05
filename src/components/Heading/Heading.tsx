interface HeadingProps {
	title: string
}

export function Heading({ title }: HeadingProps) {
	return (
		<h2
			className='
				text-gray-700 font-bold text-2xl border-b-4 border-emerald-500 w-fit mt-11 mb-6 pb-1
				md:text-3xl md:mb-8'
		>
			{title}
		</h2>
	)
}
