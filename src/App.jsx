import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RollNoPage from './pages/RollNoPage'
import StudentMarksPage from './pages/StudentMarksPage'
import MarksheetDocPage from './pages/MarksheetDocPage'
import CertificateDocPage from './pages/CertificateDocPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/mark" element={<RollNoPage />} />
        <Route path="/marks/:regNo" element={<StudentMarksPage />} />
        <Route path="/marksheet/:regNo" element={<MarksheetDocPage />} />
        <Route path="/certificate/:regNo" element={<CertificateDocPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
