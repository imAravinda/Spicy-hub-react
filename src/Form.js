import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Form = () => {
    const [wrap,setWrap]=useState(false);
    const transferForm = () => {
        setWrap(true);
    }
    const transferFormagain = () => {
        setWrap(false);
    }
    return ( 
        <div className="Form" >
            {!wrap ? <SignUp transferForm={transferForm}/> : <SignIn transferForm={transferFormagain}/> }
        </div>
     );
}
 
export default Form;