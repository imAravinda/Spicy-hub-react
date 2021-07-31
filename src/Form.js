import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Form = () => {
    const [wrap,setWrap]=useState(false);
    const transferForm = () => {
        setWrap(true);
    }
    return ( 
        <div className="Form" >
            {!wrap ? <SignUp transferForm={transferForm}/> : <SignIn/> }
        </div>
     );
}
 
export default Form;