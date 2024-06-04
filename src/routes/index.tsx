import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BookDetailsPage } from '../pages/BookDetails'
import { HomePage } from '../pages/Home'

export const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/:id' element={<BookDetailsPage />} />
			</Routes>
		</BrowserRouter>
	)
}
