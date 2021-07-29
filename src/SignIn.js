import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SignIn = () => {

    return ( 
        <div className="Sign" id="sign">
            <form action="" className="SignUp" name="SignIn">
                <h3>Register</h3>
                <hr />
                <label htmlFor="UserName">User Name</label><br />
                <FontAwesomeIcon icon={faUser} className="logI"/>
                <input type="text" name="username" id ="username"  required placeholder="User Name"/><br />
                <label htmlFor="Email">Email</label><br />
                <FontAwesomeIcon icon={faEnvelope} className="logI"/>
                <input type="email" name="email" id ="email"  required placeholder="Mail@gmail.com"/><br />
                <label htmlFor="">Password</label><br />
                <FontAwesomeIcon icon={faLock} className="logI"/>
                <input type="password" name="password" id="password" required placeholder="Password"/><br />
                <button className="Log">Log In</button><br />
                <span id="signup">Already have an account ? <a href="/"> Sign In </a></span>
            </form>
        </div>
     );
}
 
export default SignIn;