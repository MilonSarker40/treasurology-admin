import React, { useState } from 'react';
import Image from 'next/image';
import LoginLogo from '../public/images/login-logo.png';
import CaptchaIcon from '../public/images/recaptcha-icon.png';

const Login = () => {
    // State variables to hold form values
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [subscribeNewsletter, setSubscribeNewsletter] = useState(false);
    const [captchaChecked, setCaptchaChecked] = useState(false);

    // Function to handle input change
    const handleInputChange = (e, setter) => {
        setter(e.target.value);
    };

    // Function to handle checkbox change
    const handleCheckboxChange = (e, setter) => {
        setter(e.target.checked);
    };

    // Function to handle checkbox toggle
    const handleCaptchaToggle = () => {
        setCaptchaChecked(!captchaChecked);
    };

    // Function to handle form submission
    const handleLogin = () => {
        // Check if all required fields are filled and captcha is checked
        if (email && password && agreeTerms && captchaChecked) {
            // Make API call
            fetch('your-api-endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                    subscribeNewsletter,
                }),
            })
            .then(response => response.json())
            .then(data => {
                // Handle API response
                console.log(data);
            })
            .catch(error => {
                // Handle errors
                console.error('Error:', error);
            });
        } else {
            // Display error message or handle invalid form submission
            console.error('Please fill all required fields and verify captcha.');
        }
    };

    return (
        <section className='login__sec__wrap prdLR30 clearfix'>
            <div className='login__lft'>
                <Image src={LoginLogo} width='180' height='100' /> 
            </div>
            <div className='login__rgt'>
                <div className='login__innr'>
                    <div className='login__dsc'>
                        <h5>Log in</h5>
                        <p>Sign up for free to access to in any of our products </p>
                    </div>
                    <div className='login__input'>
                        <label>Email address</label>
                        <input type='email' value={email} onChange={(e) => handleInputChange(e, setEmail)} />
                    </div>
                    <div className='login__input'>
                        <label>Password</label>
                        <input type='password' value={password} onChange={(e) => handleInputChange(e, setPassword)} />
                        <i className="ri-eye-off-fill"></i>
                        <span>Use 8 or more characters with a mix of letters, numbers & symbols</span>
                    </div>
                    <div className='inputtype-checkbox'>
                        <label className="container">Agree to our <a href='#'>Terms</a> of use and <a href='#'>Privacy Policy</a>  
                            <input type="checkbox" checked={agreeTerms} onChange={(e) => handleCheckboxChange(e, setAgreeTerms)} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">Subscribe to our monthly newsletter  
                            <input type="checkbox" checked={subscribeNewsletter} onChange={(e) => handleCheckboxChange(e, setSubscribeNewsletter)} />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className='login__captcha'>
                        <button className='inputtype-checkbox' onClick={handleCaptchaToggle}>
                            <label className="container">I’m not a robot  
                                <input type="checkbox" checked={captchaChecked} readOnly />
                                <span className="checkmark"></span>
                            </label>
                            <Image src={CaptchaIcon} width='48px' height='46px' />
                        </button>
                    </div>
                    <div className='login__input__btn'>
                        <button onClick={handleLogin}>Log In</button>
                        <p>Do not have an account? <a href='#'>Sign Up</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;