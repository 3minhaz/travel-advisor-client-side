import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
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
        <div>
            <div className="text-center m-5">
                <button className="btn btn-primary" onClick={googleLogIn}>Google Sign in</button>
            </div>
            <Link to='/signup'>Not Register?Click to sign up.</Link>
        </div>
    );
};

export default Login;