export const checkValidData=(email,password)=>{
    const emailid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const passwordcheck=/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/.test(password);
    if(!emailid) return "Email Id is not Valid";
    if(!passwordcheck) return " Password is not Valid ";
    // Password contains at least 8 characters,one number ,both lower and uppercase letters and special character
    return null;
}