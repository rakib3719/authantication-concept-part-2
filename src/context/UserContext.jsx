
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
 export const EmailContext = createContext(null)

const UserContext = ({children}) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true)
    const signUpOparation = (email, password) => {
 return createUserWithEmailAndPassword(auth, email, password);


 

    }

    const logInOparation = (email, password) => {
        setLoading(true)
      
       return signInWithEmailAndPassword(auth, email, password)
      
   
    }
  
    const logOut = ()=> {

        setLoading(true)
       return signOut(auth)
    }

    useEffect(()=>{

   const unsubscribe = onAuthStateChanged(auth, currentUser => {

    setUser(currentUser);
    setLoading(false)
    
})
return ()=> {
    unsubscribe();
}
    }, [])

    const authInfo = {signUpOparation, user, logOut, logInOparation, loading };
    return (
     
            <EmailContext.Provider  value={authInfo} >

{children}

            </EmailContext.Provider>
       
    );
};

UserContext.propTypes = {
    children: PropTypes.node
    
};

export default UserContext;