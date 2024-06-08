import axios from 'axios'

export const searchBooks = async (input: string) => {
	try {
		const response = await axios.get(import.meta.env.VITE_BASE_URL + '/books', {
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
