import React, {useEffect} from 'react'
import useLocalStorage from 'react-use-localstorage';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function LoginPage() {
  let faceio;
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage('isLoggedIn', false);
  
  useEffect(() => {
      faceio = new faceIO("fioa2aa1");
  }, [isLoggedIn]);

  const handleSignIn = async () => {
    try {
      let response = await faceio.enroll({
        locale: "auto",
      });
      setIsLoggedIn(true)
      navigate('/')
      toast.success("Sign in success!", {toastId: 1})
      console.log(` Unique Facial ID: ${response.facialId}
      Enrollment Date: ${response.timestamp}
      Gender: ${response.details.gender}
      Age Approximation: ${response.details.age}`);
    } catch (error) {
      console.log(error);
      toast.warn("Sign in failed!", {toastId: 2})
    }
  };

  const handleLogIn = async () => {
    try {
      let response = await faceio.authenticate({
        locale: "auto",
      });
      setIsLoggedIn(true)
      navigate('/')
      toast.success("Log in successfully!", {toastId: 3})
      console.log(` Unique Facial ID: ${response.facialId}`);
    } catch (error) {
      toast.warn("Sign in failed!", {toastId: 4})
      console.log(error);
    }
  };

  return (
    <div>
        <section>
          <h1>Face Authentication by FaceIO</h1>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleSignIn}>Sign-in</button>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleLogIn}>Log-in</button>
        </section>
    </div>
  )
}

export default LoginPage