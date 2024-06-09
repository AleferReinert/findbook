interface HeadingProps {
	title: string
}

export function Heading({ title }: HeadingProps) {
	return (
		<h2
			className='
				text-gray-700 font-extrabold text-2xl border-b-2 border-emerald-500 w-fit mt-11 mb-6 pb-2
				md:text-3xl md:mb-8 md:mt-16
				lg:text-4xl'
		>
			{title}
		</h2>
	)
}
