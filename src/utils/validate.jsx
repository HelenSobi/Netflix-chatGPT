export const formValidate=(email,password)=>{
    // const isFullnameValid = fullname ? /^[a-zA-Z]+(?: [a-zA-Z]+)+$/.test(fullname) : true;
     const isEmailValid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
     const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{5,}$/.test(password);
     //const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$/.test(password);
     // if it is valid it returns true or false
     //if(!fullname) return "Please enter the Name";
     if(!isEmailValid) return "Please provide a valid email"
     if(!isPasswordValid) return "Password must be minimum 5 Characters"
 
     return null;
 }
 /*
 
Email : test@gmail.com
Password : minimum 5 characters
 
 */