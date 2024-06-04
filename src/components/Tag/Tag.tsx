import { useCallback } from 'react'

interface TagProps {
	title: string
}

export function Tag({ title }: TagProps) {
	const randomColors = useCallback(() => {
		const hue = Math.floor(Math.random() * 360)
		const lightness = `hsl(${hue}, 100%, 95%)`
		const darkness = `hsl(${hue}, 100%, 20%)`

		return { lightness, darkness }
	}, [])
	return (
		<p
			style={{ backgroundColor: randomColors().lightness, color: randomColors().darkness }}
			className='rounded-lg text-xs w-fit px-2 py-1 my-4'
		>
			{title}
		</p>
	)
}
