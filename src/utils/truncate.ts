// Limite o texto e coloca 3 pontos no final
export function truncate(text: string, maxLength: number) {
	const truncated = text.slice(0, maxLength)
	const lastSpaceIndex = truncated.lastIndexOf(' ')

	if (text.length <= maxLength) {
		return text
	}
	return `${truncated.slice(0, lastSpaceIndex)}...`
}
