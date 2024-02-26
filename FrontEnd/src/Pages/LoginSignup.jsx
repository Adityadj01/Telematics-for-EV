import React from 'react'
import './CSS/LoginSignup.css'

/* The `const LoginSignup = () => { ... }` function is a React functional component in JavaScript. It
defines a component called `LoginSignup` that represents a sign-up form UI. Inside the component, it
returns JSX (a syntax extension for JavaScript that looks similar to HTML) which describes the
structure of the sign-up form. */
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
