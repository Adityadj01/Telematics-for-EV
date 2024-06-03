import {ChangeEvent, useState} from "react";
import './LoginSignup.css'
import {registerUser, userLogin} from "../Services/AuthService.tsx";

export const AuthenticationPage = () => {
    const [state, setState] = useState("Login");

    const [formData, setFormData] = useState({
        name: "",
        password: "",
        email: "",
    });

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const login = async () => {
        console.log("Login Function Executed", formData);
        userLogin(formData).then((data) => {
            console.log(data)
            localStorage.setItem('token', data.data.data.token)
            window.location.replace('/');
        }).catch((err) => {
            console.log(err)
            showAlert(err.response.data.msg); // Use showAlert function to display the error message
        });
    };

    const signup = async () => {
        console.log("Sign up Function Executed", formData);
        registerUser(formData).then((data) => {
            console.log(data)
            localStorage.setItem('token', data.data.data.token)
            window.location.replace('/');
        }).catch((err) => {
            console.log(err)
            showAlert(err.response.data.msg); // Use showAlert function to display the error message
        })
    };

    // Function to display the error message as a popup
    const showAlert = (message: string) => {
        alert(message);
    };

    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>{state}</h1>
                <div className="loginsignup-fields">
                    {state === "Sign up"? (
                        <>
                            <input
                                name="name"
                                value={formData.name}
                                onChange={(e) => changeHandler(e)}
                                type="text"
                                placeholder="Your Name"
                            />
                        </>
                    ) : (
                        <></>
                    )}
                    <input
                        name="email"
                        value={formData.email}
                        onChange={(e) => changeHandler(e)}
                        type="email"
                        placeholder="Email Address"
                    />
                    <input
                        name="password"
                        value={formData.password}
                        onChange={(e) => changeHandler(e)}
                        type="password"
                        placeholder="Password"
                    />
                </div>
                <button onClick={() => {
                    state === "Login"? login() : signup()
                }}>Continue
                </button>
                {state === "Sign up"? (
                    <p className="loginsignup-login">
                        Already have an account?{" "}
                        <span onClick={() => {
                            setState("Login")
                        }}>Login here</span>
                    </p>
                ) : (
                    <p className="loginsignup-login">
                        Create an account?{" "}
                        <span onClick={() => {
                            setState("Sign up")
                        }}>Click here</span>
                    </p>
                )}
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id=""/>
                    <p>
                        By continuing, i agree to the terms of use & privacy policy.
                    </p>
                </div>
            </div>
        </div>
    );
};
