import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth/useAuth';


const Login = () => {
    const { googleSignIn, setUser, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const redirect_uri = location?.state?.from || '/home';
    const googleLogIn = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect_uri);
                setUser(result.user);

            })
            .finally(() => setIsLoading(false))

    }
    return (
        <div className="text-center m-5">
            <button className="btn btn-primary" onClick={googleLogIn}>Google Sign in</button>
        </div>
    );
};

export default Login;