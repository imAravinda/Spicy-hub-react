import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Validation from "./validation";
const SignUp = ({transferForm}) => {
    const [values,setValues]=useState({
        Fullname:"",
        email:"",
        password:""
    })
    const history=useHistory();
    const handleTransfer = () => {
        transferForm(true);
    }
    const [errors,setErrors]=useState({})
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        const blog = {...values};
        fetch('http://localhost:5000/blogs',{
            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            history.push('/');
        })
    }
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]:event.target.value,
        })
    }
    return ( 
        <div className="Sign" id="sign">
            <form action="" className="SignUp" name="SignIn" onSubmit={handleSubmit}>
                <h3>Register</h3>
                <hr />
                <label htmlFor="FullName">Full Name</label><br />
                <FontAwesomeIcon icon={faUser} className="logI"/>
                <input type="text" name="Fullname"  required placeholder="Full Name" value={values.Fullname} onChange={handleChange}/>
                {errors.Fullname && <p className="errors">{errors.Fullname}</p>}<br />
                <label htmlFor="Email">Email</label><br />
                <FontAwesomeIcon icon={faEnvelope} className="logI"/>
                <input type="email" name="email"  required placeholder="Mail@gmail.com" value={values.email} onChange={handleChange}/>
                {errors.email && <p className="errors">{errors.email}</p>}<br />
                <label htmlFor="">Password</label><br />
                <FontAwesomeIcon icon={faLock} className="logI"/>
                <input type="password" name="password"  required placeholder="Password" value={values.password} onChange={handleChange}/>
                {errors.password && <p className="errors">{errors.password}</p>}<br />
                <button className="Log" onClick={handleSubmit}>Register</button><br />
                <span id="signup">Already have an account ? <button onClick={handleTransfer} class="click" > Sign In </button></span>
            </form>
        </div>
     );
}
 
export default SignUp;