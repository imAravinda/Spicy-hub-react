import {faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Validation from "./validation";
const SignIn = () => {
    const [values,setValues]=useState({
        Fullname:"",
        email:"",
        password:""
    })
    const [errors,setErrors]=useState({})
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
    }
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]:event.target.value,
        })
    }
    return ( 
        <div className="Sign" id="sign">
            <form action="" className="SignIn" name="SignIn">
                <h3>Login</h3>
                <hr />
                <label htmlFor="UserName">User Name</label><br />
                <FontAwesomeIcon icon={faUser} className="logI"/>
                <input type="text" name="username"  required placeholder="User Name" value={values.username} onChange={handleChange}/>
                {errors.username && <p className="errors">{errors.username}</p>}<br />
                <label htmlFor="">Password</label><br />
                <FontAwesomeIcon icon={faLock} className="logI"/>
                <input type="password" name="password"  required placeholder="Password" value={values.password} onChange={handleChange}/>
                {errors.password && <p className="errors">{errors.password}</p>}<br />
                <button className="Log" onClick={handleSubmit}>Log In</button><br />
                <span id="signup">Don't have an account ? <button class="click"> Sign Up </button></span>
            </form>
        </div>
     );
}
 
export default SignIn;