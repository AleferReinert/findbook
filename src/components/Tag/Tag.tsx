import { useCallback } from 'react'

interface TagProps {
	title: string
}

export function Tag({ title }: TagProps) {
	// Cores aleatórias para background e texto
	const randomColors = useCallback(() => {
		const hue = Math.floor(Math.random() * 360)
		const lightness = `hsl(${hue}, 100%, 92%)`
		const darkness = `hsl(${hue}, 100%, 10%)`

		return { lightness, darkness }
	}, [])

	return (
		<p
			style={{ backgroundColor: randomColors().lightness, color: randomColors().darkness }}
			className='rounded-xl text-xxs font-medium w-fit px-2 py-1 my-2 sm:my-4'
		>
			{title}
		</p>
	)
}
