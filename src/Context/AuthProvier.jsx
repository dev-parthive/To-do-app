import { createContext,  useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signOut, signInWithPopup, updateProfile, signInWithEmailAndPassword } from 'firebase/auth'
export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const AuthProvider = ({ children }) => {
  const [dark, setDark] = useState(false)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)



  // 1. create user 
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

//  2. update user 
const updateUser = (name, photo) =>{
  setLoading(true)
  return updateProfile(auth.currentUser , {
    displayName : name, 
    photoURL: photo
  })
}

// 3. Email verify 
const verifyEmail = () =>{
  setLoading(true)
  return sendEmailVerification(auth.currentUser)

}

// 4.Logout
const logout = () =>{
  setLoading(true)
  return signOut(auth)

}

// 5. Google SignIn
const signWithGoogle = () =>{
  setLoading(true)
  return signInWithPopup(auth, googleProvider)
}

// 6. Github sign in 

const signInWithGithub = () =>{
  setLoading(true)
  return signInWithPopup(auth, githubProvider)
}
 
// 7. observer to observer user login logOut 
useEffect(()=>{
  // setLoading(true)
  //this part will execute once the component it mounted 
  const unSubscribe = onAuthStateChanged(auth, currentUser =>{
    console.log(currentUser)
    setUser(currentUser)
    setLoading(false)
  }); 
  console.log(user)
  return () =>{
    //this part will execute once the component is unmounted
    return unSubscribe;
  }
}, [])
// 8 Login 
const login = (email, password) =>{
  setLoading(true)

  return signInWithEmailAndPassword(auth, email, password) 
}
// 9. Reset passwrod Link 
const resetPassword = (email) =>{
  setLoading(true)
  return  sendPasswordResetEmail(auth, email)
}
  const authInfo = {
    user,
    setUser, 
    createUser ,
    signWithGoogle, 
    updateUser, 
    verifyEmail, 
    logout, 
    login, 
    signInWithGithub, 
    loading, 
    setLoading, 
    resetPassword


  };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;