export const checkValidData=(email,password)=>{
    const emailid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const passwordcheck=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!emailid) return "Email Id is not Valid";
    if(!passwordcheck) return " Password is not Valid ";
    // Password contains at least 8 characters,one number ,both lower and uppercase letters and special character
    return null;
}