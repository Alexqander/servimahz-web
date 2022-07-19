import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'

export const AppRouter = () => {
  return (
      <Router>
      <Routes>
            <Route path="*" element={<HomePage />} />
            <Route path="/home" element={<HomePage/> } />
            <Route path="/login" element={<LoginPage/> } />
      </Routes>

    </Router>
  )
}
