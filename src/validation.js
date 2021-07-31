const Validation = (values) => {
    let errors = {};
    if(!values.Fullname)
    {
        errors.Fullname="*Name is required."
    }
    if(!values.email)
    {
        errors.email="*email is required."
    }else if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email))
    {
        errors.email="Email is invalid!"
    }
    if(!values.password)
    {
        errors.password="*Password is required";
    }else if(values.password.length < 5)
    {
        errors.password="*Password must be more than 5 characters";
    }
    if(!values.username)
    {
        errors.username="*User Name is required";
    }
    return errors
}
 
export default Validation;