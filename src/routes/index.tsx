import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import { BookDetailsPage } from '../pages/BookDetails'
import { HomePage } from '../pages/Home'

export const AppRoutes = () => {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/:id' element={<BookDetailsPage />} />
			</Routes>
		</BrowserRouter>
	)
}
