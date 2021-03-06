import React, { Component } from 'react'
import { auth, signInWithGoogle } from '../../firebase/firebase.util';
import CustomButton from '../customButton/CustomButtom';
import FormInput from '../formInput/FormInput';

import './SignIn.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);

            this.setState({
                email: '',
                password: ''
            })

        } catch (error) {
            console.log(error);
        }

    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    < FormInput
                        name='email'
                        type='email'
                        label='email'
                        value={this.state.email}
                        hadnleChange={this.handleChange}
                        required />

                    <FormInput
                        name='password'
                        type='password'
                        label='password'
                        hadnleChange={this.handleChange}
                        value={this.state.password} required />

                    <div className='button'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;