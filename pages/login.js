import React from 'react';
import Image from 'next/image';
import LoginLogo from '../public/images/login-logo.png';
import CaptchaIcon from '../public/images/recaptcha-icon.png';

const Login = () => {
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
                        <input type='email' />
                    </div>
                    <div className='login__input'>
                        <label>Password</label>
                        <input type='text' />
                        <i class="ri-eye-off-fill"></i>
                        <span>Use 8 or more characters with a mix of letters, numbers & symbols</span>
                    </div>
                    <div className='inputtype-checkbox'>
                        <label class="container">Agree to our <a href='#'>Terms</a> of use and <a href='#'>Privacy Policy</a>  
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="container">Subscribe to our monthly newsletter  
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <div className='login__captcha'>
                        <button className='inputtype-checkbox'>
                            <label class="container">I’m not a robot  
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                            <Image src={CaptchaIcon} width='48px' height='46px' />
                        </button>
                    </div>
                    <div className='login__input__btn'>
                        <button>Log In</button>
                        <p>Do not have an account? <a href='#'>Sign Up</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
