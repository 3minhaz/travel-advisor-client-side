import initializeAuthentication from "../../firebase/firebase.init";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

initializeAuthentication();


const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const auth = getAuth();

    const googleSignIn = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                setIsLoading(false)
            })
            .catch(error => {
                const errorMessage = error.message;
            })
    }
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    useEffect(() => {
        setIsLoading(true);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        })
    }, [])
    return {
        googleSignIn,
        logout,
        user,
        isLoading,
        setUser
    }
}
export default useFirebase;