import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Layout from './components/Layout';
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        </Route>
      
    </Routes>
    </BrowserRouter>
   
  )
}

export default App
