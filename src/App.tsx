import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MunicipioProvider from '@/hooks/MunicipioProvider'
import Home from '@/pages/Home'

function App() {
  return (
    <BrowserRouter>
      <MunicipioProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MunicipioProvider>
    </BrowserRouter>
  )
}

export default App
