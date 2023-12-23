import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import IdeasPage from './pages/IdeasPage'

function App() {
	return (
		<div>
			<Navigation />
			<Routes>
				<Route path="/ideas" element={<IdeasPage />} />
			</Routes>
		</div>
	)
}

export default App
