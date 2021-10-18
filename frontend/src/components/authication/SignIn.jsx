import React, { useState } from 'react';
import axios from 'axios';
import { CgSpinner, CgFacebook, CgGoogle } from 'react-icons/cg';
import { BiEnvelope, BiLockOpenAlt } from 'react-icons/bi';
import { Link, useHistory, useLocation } from 'react-router-dom';
import loginImg from '../../assets/images/loginImg.svg';
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import firebaseConfig from '../../config/firebase';
import { useDispatch } from 'react-redux';
import { customAuthAction, googleSignUpAction } from '../../redux/action/action';
import { useForm } from 'react-hook-form';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// email signIn
const SignIn = () => {
  const location = useLocation()
  let { from } = location.state || { from: { pathname: "/" } };

  const history = useHistory();
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const { handleSubmit, register } = useForm();

  const onSubmit = async (data) => {
    const userData = {
      email: data.email,
      password: data.password,
    }
    setLoading(true);
    try {
      const res = await axios({
        method: 'post',
        url: 'https://fastexpress.herokuapp.com/api/auth/login',
        data: userData
      });
      console.log(res);
      dispatch(customAuthAction(res.data.others));
      if (res) {
        history.replace(from)
      }
    } catch (err) {
      setError(true);
      setLoading(false);
      console.log(err);
    }
  }

  //google singIn 
  const provider = new GoogleAuthProvider();
  const GoogleSigning = async () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const { email, displayName, photoURL } = result.user;
        setUser({
          email,
          displayName,
          photoURL,
          role: 'user',
          token
        })
        const signInUser = { email };
        dispatch(googleSignUpAction({
          email,
          displayName,
          photoURL,
          role: 'user',
          token
        }));

        if (signInUser) {
          history.push("/dashboard")
        }
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
      setError(false);
    try {
      const res = await axios({
        method: 'post',
        url: 'https://fastexpress.herokuapp.com/api/auth/login',
        data: user
      });

      if (res) {
        history.push("/dashboard")
      }

    } catch (err) {
      setError(true);
      console.log(err);
    }
  }

  //Facebook signIn
  const fbProvider = new FacebookAuthProvider();
  const facebookSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, fbProvider)
      .then((result) => {
        const user = result.user;
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        console.log("user info", user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = FacebookAuthProvider.credentialFromError(error);
        console.log(errorCode,errorMessage,email,credential)
      });
  }

  return (
    <div className="container mx-auto my-10">
      <div className="flex flex-wrap w-full mx-auto">
        <div className="flex flex-col w-full md:w-1/2 py-8">
          <div className="flex flex-col container w-full max-w-md  py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8">
            <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
              Login To Your Account
            </div>
            <div className="flex gap-4 item-center">
              <button onClick={() => facebookSignIn()} type="button" className="py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                <CgFacebook />
                Facebook
              </button>
              <button onClick={() => GoogleSigning()} type="button" className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                <CgGoogle className="mr-1" />
                Google
              </button>
            </div>
            <div className="mt-8">
              <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <div className="flex flex-col mb-2">
                  <div className="flex relative ">
                    <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                      <BiEnvelope />
                    </span>
                    <input {...register("email")} type="text" id="sign-in-email" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your email" />
                  </div>
                </div>
                <div className="flex flex-col mb-6">
                  <div className="flex relative ">
                    <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                      <BiLockOpenAlt />
                    </span>
                    <input {...register("password")} type="password" id="sign-in-email" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your password" />
                  </div>
                </div>
                <div className="flex items-center mb-6 -mt-4">
                  <div className="flex ml-auto">
                    <Link to="/" className="inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white">
                      Forgot Your Password?
                    </Link>
                  </div>
                </div>
                <div class="flex w-full">
                  <button type="submit" class="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none rounded">
                    {loading ?
                      <CgSpinner class="animate-spin text-xl" /> : "Login"
                    }
                  </button>
                </div>
              </form>
            </div>
            {error && <span style={{ color: 'red', marginTop: '10px' }}>Something went wrong!</span>}
            <div className="flex items-center justify-center mt-6">
              <Link to="/signup" className="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white">
                <span className="ml-2">
                  You don&#x27;t have an account?
                </span>
              </Link>
            </div>
          </div>

        </div>
        <div className="w-1/2 p-10">
          <img className="hidden md:block" src={loginImg} alt="Login img" />
        </div>
      </div>

    </div>
  );
};

export default SignIn;

