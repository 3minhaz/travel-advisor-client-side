import React from 'react';
import useAuth from '../hooks/useAuth/useAuth';


const Login = () => {
    const { user, googleSignIn } = useAuth();

    return (
        <div>
            <button onClick={googleSignIn}>Google Sign in</button>
        </div>
    );
};

export default Login;