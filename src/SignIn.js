const SignIn = () => {
    return ( 
        <div className="Sign">
            <form action="" name="SignIn">
                <label htmlFor="UserName">User Name</label>
                <input type="text" name="UName" value="" required/>
                <label htmlFor="">Password</label>
                <input type="password" name="password" id="pwd" required/>
            </form>
            <form action="" name="SignUp">
                <label htmlFor="FullName">Full Name</label>
                <input type="text" name="FName" value="" required/>
                <label htmlFor="Phone">Contact</label>
                <input type="text" name="contactNum" required/>
                <label htmlFor="Email">Email</label>
                <input type="text" name="Email" value="" required/>
                <label htmlFor="Password">Enter Password</label>
                <input type="password" name="password" id="pwd" required/>
                <label htmlFor="Password">Confirm Password</label>
                <input type="password" name="password" id="pwd" required/>
            </form>
        </div>
     );
}
 
export default SignIn;