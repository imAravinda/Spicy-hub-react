import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SignIn = () => {
    return ( 
        <div className="Sign">
            <h2>Spicy Hut</h2>
            <h3>Sign In</h3>
            <hr />
            <form action="" className="SignIn">
                <label htmlFor="UserName">User Name</label><br />
                <FontAwesomeIcon icon={faUser} className="logI"/>
                <input type="text" name="UName" value="" required placeholder="User Name"/><br />
                <label htmlFor="">Password</label><br />
                <FontAwesomeIcon icon={faLock} className="logI"/>
                <input type="password" name="password" id="pwd" required placeholder="Password"/><br />
                <button className="Log">Log In</button><br />
                <p>Don't have an account ? <a href="./">Sign Up</a></p>
            </form>
        </div>
     );
}
 
export default SignIn;