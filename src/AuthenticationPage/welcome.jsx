
import { signInWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React, { useState } from 'react';
import app from "../Firebase/firebase";
import { Link, useNavigate } from 'react-router-dom';
import './welcome.css'
import { collection, getDoc, doc, getFirestore } from 'firebase/firestore';

const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [myerror, setMyError] = useState('');
  const [toggleError, settoggleError] = useState({});
  const [loading, setLoading] = useState(false)
  const [loadingCWG, setLoadingCWG] = useState(false)

  const navigate = useNavigate();

  const handleSubmit = (e) => {

    setLoading(true)
    e.preventDefault();

    try {
      const auth = getAuth(app);
      const db = getFirestore(app);

      signInWithEmailAndPassword(auth, email, password).then(async (credential) => {

        const user = credential.user
        const docRef = doc(collection(db, "Users"), user.uid)
        const docSnap = await getDoc(docRef)
        const fieldData = docSnap.data()

        const dataToHome = {
          name: user.displayName,
          username: fieldData.username,
          phone: fieldData.phone,
          email: fieldData.email,
          profilepicurl: fieldData.profilepicurl
        }

        navigate('/home', { state: dataToHome });

      }).catch((error) => {

        console.log(error)
        setLoading(false)
        setMyError("Invalid Credentials !")
        showError()

        setTimeout(() => {
          hideError()
        }, 2000
        )
      });

    } catch (error) {
      console.log(error)
    }
  };

  const showError = () => {
    settoggleError({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      borderRadius: '15px',
      color: 'white',
      fontWeight: 'bold',
      boxShadow: '0px 0px 7px 0px rgb(68, 68, 68)',
      fontSize: '18px',
      fontFamily: "'Times New Roman', Times, serif",
      letterSpacing: '1px',
      bottom: '50px',
      height: '50px',
      width: '400px',
      backgroundColor: 'rgb(255, 40, 40)'
    });
  }

  const hideError = () => {
    settoggleError({
    });
    setMyError('')
  }

  const signInWithGoogle = () => {

    setLoadingCWG(true)
    const provider = new GoogleAuthProvider();

    try {
      const auth = getAuth(app);
      const db = getFirestore(app);

      signInWithPopup(auth, provider).then(async (credential) => {

        const user = credential.user

        let userData = {
          name: user.displayName,
          uid: user.uid,
          email: user.email
        }

        const docRef = doc(collection(db, "Users"), userData.uid)
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {

          const fieldData = docSnap.data()
          userData.username = fieldData.username
          userData.phone = fieldData.phone
          userData.profilepicurl = fieldData.profilepicurl

          navigate('/home', { state: userData })

        } else {
          navigate("/cwg", { state: userData })

        }
        setLoadingCWG(false)

      }).catch((error) => {

        console.log(error)
        setMyError("Check your Internet Connection !")
        showError()

        setTimeout(() => {
          hideError()
        }, 2000
        )
      });

    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <img id="logo" src="logo.png" alt="Logo" />

      <div>
        <img id='rect6' src="Rectangles/Rectangle 6.png" alt="Rectangle 6" />
        <img id='rect7' src="Rectangles/Rectangle 7.png" alt="Rectangle 7" />
        <img id='rect5' src="Rectangles/Rectangle 5.png" alt="Rectangle 5" />
        <img id='rect4' src="Rectangles/Rectangle 4.png" alt="Rectangle 4" />
        <img id='rect8' src="Rectangles/Rectangle 8.png" alt="Rectangle 8" />
        <img id='rect13' src="Rectangles/Rectangle 13.png" alt="Rectangle 13" />
        <img id='rect11' src="Rectangles/Rectangle 11.png" alt="Rectangle 11" />
        <img id='rect10' src="Rectangles/Rectangle 10.png" alt="Rectangle 10" />
      </div>

      <img id="slogan" src="slogan.svg" alt="Slogan" />

      <div id="containertop">

        <div id="login">

          <img id='lets' style={{ paddingTop: '75px', paddingLeft: '115px' }} src="lets.svg" alt="lets" />

          <div id='logincenter'>

            <img id="connecthead" src="connecthead.png" style={{ paddingTop: '90px', paddingBottom: '20px' }} alt="connecthead" />

            <form onSubmit={handleSubmit}>
              <input className='textbox'
                type="email"
                placeholder='Enter Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <br />
              <input className='textbox' minLength={8}
                type="password"
                placeholder='Enter Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <br />

              {loading ?
                <div id='loading'>
                  <img id='loadingBox' src='loading_box.gif' alt='loading...'></img>
                  <p id='loading-p'>Loading...</p>
                </div>
                :
                <button className='loginButton' type="submit" style={{ marginBottom: '40px', marginTop: '15px' }} >
                  Login
                </button>}

              <br />

              <div className='myLink' >
                <Link className="Link" to="/forgotpass">Forgot Password ?</Link>
              </div>

              <ul id='mySection'>
                <hr id='mySection-hr' />
                <p id='mySection-p'>or</p>
                <hr id='mySection-hr' />
              </ul>

              <div className='myLink'>
                <Link className='Link' to="/signup">Sign Up</Link>
              </div>
            </form>

            {loadingCWG ?
              <button className='cancelLoading' style={{ marginTop: '30px' }} onClick={() => setLoadingCWG(false)}><p className='cancelLoading-p'>Cancel</p></button>
              :
              <button className="myOutButton" onClick={signInWithGoogle} style={{ marginTop: '30px' }}>
                <img className='myOutButton-img' src="google.png" alt="continue with google" />
              </button>
            }

          </div>
        </div>

        <div style={toggleError}>
          {myerror}
        </div>
      </div>

      {loadingCWG ? <div id="loadingCWG" >
        <img id='loadingCWG-img' src="loading_leaf.gif" alt="loading..." />
        <img id='loadingCWG-img' src="loading_leaf.gif" alt="loading..." />
      </div> : ''}

    </>
  );
}

export default SignIn;