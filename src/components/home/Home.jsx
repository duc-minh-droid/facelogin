import React from 'react'
import {useNavigate} from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage';

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage('isLoggedIn', true)
  const navigate = useNavigate()
  
  const handleLogout = () => {
    setIsLoggedIn(false)
    navigate('/login')
    toast.success("Signed Out!", {toastId: 5})
  }

  return (
    <div>
        Home
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleLogout}>Log Out</button>
    </div>
  )
}

export default Home