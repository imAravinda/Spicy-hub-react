import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SignIn = () => {

    return ( 
        <div className="Sign">
            <form action="" className="SignIn" name="SignIn">
                <h3>Sign In</h3>
                <hr />
                <label htmlFor="UserName">User Name</label><br />
                <FontAwesomeIcon icon={faUser} className="logI"/>
                <input type="text" name="username" id ="username" value="" required placeholder="User Name"/><br />
                <label htmlFor="">Password</label><br />
                <FontAwesomeIcon icon={faLock} className="logI"/>
                <input type="password" name="password" id="password" required placeholder="Password"/><br />
                <button className="Log">Log In</button><br />
                <span id="signup">Don't have an account ? <a href="#"> Sign Up </a></span>
            </form>
        </div>
     );
}
 
export default SignIn;