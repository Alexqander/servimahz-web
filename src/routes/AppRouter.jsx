import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'

export const AppRouter = () => {
  return (
      <Router>
          <Routes>
        <Route path="/home" element={<HomePage/> } />
          </Routes>
    </Router>
  )
}
