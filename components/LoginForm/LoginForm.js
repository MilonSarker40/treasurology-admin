import React, { useState } from 'react';
import Image from 'next/image';
import LoginLogo from '../../public/images/login-logo.png';
import CaptchaIcon from '../../public/images/recaptcha-icon.png';

const LoginForm = () => {
    // State variables to hold form values
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [subscribeNewsletter, setSubscribeNewsletter] = useState(false);
    const [captchaChecked, setCaptchaChecked] = useState(false);
    const [encryptedusername, setEncryptedusername] = useState("");
    const [encryptedpassword, setEncryptedpassword] = useState("");

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

    var details = {
        'username': encryptedusername,
        'password': encryptedpassword,
        'grant_type': 'password',
        'client_id': 'Test',
        'client_secret': 'test123',
        'scope': 'offline_access'
    };

    var formBody = [];
    for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    // Function to handle form submission
    const handleLogin = () => {
        // Check if all required fields are filled and captcha is checked
        if (email && password && agreeTerms && captchaChecked) {
            let userquery = `https://api.treasury.arthik.io/api/Authorization/rsaEncrypt/${email}`
            let passquery = `https://api.treasury.arthik.io/api/Authorization/rsaEncrypt/${password}`

            console.log("userquery : ", userquery);
            console.log("passquery : ", passquery);

            fetch(userquery, {
                method: 'GET',
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
              })
                .then(response => response.text())
                .then(text => setEncryptedusername(text))
                .catch(error => console.error('Error fetching username:', error));

            fetch(passquery, {
                method: 'GET',
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
              })
                .then(response => response.text())
                .then(text => setEncryptedpassword(text))
                .catch(error => console.error('Error fetching password:', error));

            // Make API call
            console.log(`form body : ${formBody}`)
            fetch('https://api.treasury.arthik.io/api/connect/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Access-Control-Allow-Origin':'*',
                    
                },
                // body: JSON.stringify({
                //     email,
                //     password,
                //     subscribeNewsletter,
                // }),
                body: formBody,
            })
                .then(response => response.json())
                .then(data => {
                    // Handle API response
                    console.log(data);

                    localStorage.setItem("access_token", data.access_token)
                    localStorage.setItem("expires_in", data.expires_in)
                    localStorage.setItem("refresh_token", data.refresh_token)
                    localStorage.setItem("token_type", data.token_type)
                    localStorage.setItem("Email", data.Email)
                    localStorage.setItem("FullName", data.FullName)
                    localStorage.setItem("loginState", true)
                    location.reload()
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

export default LoginForm;