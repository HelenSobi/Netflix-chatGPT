export const formValidate=(email,password)=>{
    // const isFullnameValid = fullname ? /^[a-zA-Z]+(?: [a-zA-Z]+)+$/.test(fullname) : true;
     const isEmailValid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
     const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
     // if it is valid it returns true or false
     //if(!fullname) return "Please enter the Name";
     if(!isEmailValid) return "Please enter a valid email."
     if(!isPasswordValid) return "Please enter a valid Password."
 
     return null;
 }
 /*
 
 test@gmail.com
 Testing123
 
 */