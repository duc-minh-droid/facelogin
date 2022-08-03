import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom"
import HomeContainer from './components/home/HomeContainer'
import LoginPage from './components/register/LoginPage'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function App() {

  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
          <ToastContainer />
        </Router>
    </div>
  )
}

export default App
