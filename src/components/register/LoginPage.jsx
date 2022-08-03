import React, {useEffect, useState, useContext} from 'react'
import useLocalStorage from 'react-use-localstorage';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import {db} from '../../firebase-config'
import {collection, getDocs, addDoc, updateDoc, doc, query, where} from 'firebase/firestore'

function LoginPage() {
  let faceio;
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage('isLoggedIn', false);
  const [userId, setUserId] = useLocalStorage('userId', false);
  const usersCollectionRef = collection(db, "users")
  const navigate = useNavigate()

  const createUser = async (data) => {
    await addDoc(usersCollectionRef, {facialId: data.facialId?data.facialId:null, details: data.details, imageUrl: null, userName: null})
  }

  useEffect(() => {
      faceio = new faceIO("fioa2aa1");
  }, [isLoggedIn]);

  const handleSignIn = async () => {
    try {
      let response = await faceio.enroll({
        locale: "auto",
      });
      createUser(response)
      toast.success("Sign in success!", {toastId: 1})
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
      console.log(response.facialId)
      const q = query(usersCollectionRef, where("facialId","==",response.facialId))
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        if (doc.exists()) {
          console.log(doc.data())
          setUserId(doc.data())
          // setIsLoggedIn(true)
          // navigate('/')
        } else {
          toast.warn("No such user exists! Please try sign in again", {toastId: 6})
          console.log('fail')
        }
      });
      toast.success("Log in successfully!", {toastId: 3});
    } catch (error) {
      toast.warn("Log in failed!", {toastId: 4})
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