import React from 'react'
import SignUp from '../../components/sign-up/SignUp';
import SignIn from '../../components/signIn/SignIn';

import './signInAndSignUp.scss';

function signInAndSignUp() {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default signInAndSignUp;
