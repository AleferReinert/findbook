import axios from 'axios'

export const searchBooks = async (input: string) => {
	const url = import.meta.env.VITE_API_URL + '/books'

	try {
		const response = await axios.get(url, {
			params: {
				search: input
			}
		})

		return response.data.data
	} catch (error) {
		console.log('src/services/books.ts \n Error: ', error)
		return null
	}
}
