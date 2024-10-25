import React, { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'
function Register(){
  useEffect(()=>{
    const checkvalid=()=>{
      if(localStorage.getItem("current")){
        window.location.href='/home'
       }
    }
    console.log("Useeffect...",localStorage.getItem("current"),window.location.href)
    checkvalid()
  },[])
   const [firstname,setfirstname]=useState("")
   const [lastname,setlastname]=useState("")
   const [username,setusername]=useState("")
   const [password,setpassword]=useState("")
   const [confirmpassword,setconfirmpassword]=useState("")
   const [valid,isValid] = useState('')
   const [style,setstyle]=useState('')
   let body
   let message="hello"
   let msg
  
  function validate(){
    if(!firstname || !lastname || !username || !password || !confirmpassword){
      isValid("Please Enter all the field")
      setstyle("text-red-500 mb-4")
    }else 
   if(password==confirmpassword){
    body={
      "firstname":firstname,
      "lastname":lastname,
      "username":username,
      "password":password
    }   
     submit()
   }else{
    isValid('The passwords are not same')
    setstyle("text-red-500 mb-4")
   }
}
   let result
   async function submit(){
    //  const response=await fetch('http://localhost:3000/signup',{
    //   method:"POST",
    //   body:{...body},
    //   mode:"no-cors",
    //   referrerPolicy:"strict-origin-when-cross-origin"
    // })
  

     const res = await axios.post('http://localhost:3000/signup',{...body}) 
  result=res.data.message
    console.log(res.data.message)
    if(res.data.isValid){
     isValid(res.data.message)
     setstyle("text-blue-500 mb-4")
     localStorage.setItem("current",username)
     window.location.href="/home"
    }else{
      isValid(res.data.message)
      setstyle("text-red-500 mb-4")
    }
   }
   let a
   return(
    <>
    <div className="border-none border-black rounded-xl size-auto w-96 h-auto shadow-black shadow-lg border-l-2 border-r-2 border-b-2">
    <h3 className="font-bold text-2xl mt-3 pt-3">Welcome</h3>
    <h3 className="font-bold text-2xl">Sign up</h3>
    <div>
    <label className="mr-64 font-bold">Firstname:</label>
    <input placeholder="First Name" className="border shadow-lg w-11/12 p-2 mt-1 mb-8" type="email" onChange={e=>{
      a=e.target.value
      setfirstname(e.target.value)
    }}/>
    <p>{a}</p>
    </div>
    <div>
  <label className="mr-64 font-bold">Lastname:</label>
  <input placeholder="Last Name" className="border shadow-lg w-11/12 p-2 mt-1 mb-8" type="email" onChange={e=>{
      setlastname(e.target.value)
    }}/>
    </div>
    <div>
      <label className="mr-64 font-bold">Username:</label>
    <input placeholder="Email Address" className="border shadow-lg w-11/12 p-2 mt-1 mb-8" type="email" onChange={e=>{
      setusername(e.target.value)
    }}/>
    </div>
    <div>
       <label className="mr-64 font-bold">Password:</label>
    <input  placeholder="Password" className="border shadow-lg w-11/12 p-2 mt-1 mb-8" type="password" onChange={e=>{
      setpassword(e.target.value)
    }}/>
    </div>
    <div>
       <label className="mr-48 font-bold">Re-Type Password:</label>
    <input  placeholder="Confirm Password" className="border shadow-lg w-11/12 p-2 mt-1 mb-5" type="password" onChange={e=>{
      setconfirmpassword(e.target.value)
    }}/>
    <p className={style}>{valid}</p>
    </div>
    <div>
    <button className="w-11/12 bg-green-400 text-white mb-4 hover:text-black hover:bg-white transf" onClick={validate}>Sign up</button>
    <p className="mb-5 pb-4">Already having an account? <a className="text-green-400" href="/login">click here</a></p>
    </div>
    </div>
    </>
   )
}
export default Register

// import React, { useState } from "react";
// import axios from 'axios';

// function Register() {
//   const [firstname, setfirstname] = useState("");
//   const [lastname, setlastname] = useState("");
//   const [username, setusername] = useState("");
//   const [password, setpassword] = useState("");
//   const [confirmpassword, setconfirmpassword] = useState("");
//   const [valid, setValid] = useState("");
  
//   const validate = async () => {
//     if (!firstname || !lastname || !username || !password || !confirmpassword) {
//       setValid("Please enter all the fields");
//     } else if (password === confirmpassword) {
//       const body = {
//         firstname,
//         lastname,
//         username,
//         password
//       };
//       await submit(body);
//     } else {
//       setValid('The passwords are not the same');
//     }
//   };

//   const submit = async (body) => {
//     try {
//       const res = await axios.post('http://localhost:3000/signup', body);
//       setValid(res.data.message);
//       if (res.data.isValid) {
//         window.location.href = "/home";
//       }
//     } catch (err) {
//       setValid("An error occurred during registration.");
//     }
//   };

//   return (
//     <>
//       <div className="border-none border-black rounded-xl size-auto w-96 h-auto shadow-black shadow-lg border-l-2 border-r-2 border-b-2">
//         <h3 className="font-bold text-2xl mt-3 pt-3">Welcome</h3>
//         <h3 className="font-bold text-2xl">Sign up</h3>
//         <div>
//           <label className="mr-64 font-bold">Firstname:</label>
//           <input
//             placeholder="First Name"
//             className="border shadow-lg w-11/12 p-2 mt-1 mb-8"
//             type="text"
//             onChange={e => setfirstname(e.target.value)}
//           />
//         </div>
//         <div>
//           <label className="mr-64 font-bold">Lastname:</label>
//           <input
//             placeholder="Last Name"
//             className="border shadow-lg w-11/12 p-2 mt-1 mb-8"
//             type="text"
//             onChange={e => setlastname(e.target.value)}
//           />
//         </div>
//         <div>
//           <label className="mr-64 font-bold">Username:</label>
//           <input
//             placeholder="Email Address"
//             className="border shadow-lg w-11/12 p-2 mt-1 mb-8"
//             type="email"
//             onChange={e => setusername(e.target.value)}
//           />
//         </div>
//         <div>
//           <label className="mr-64 font-bold">Password:</label>
//           <input
//             placeholder="Password"
//             className="border shadow-lg w-11/12 p-2 mt-1 mb-8"
//             type="password"
//             onChange={e => setpassword(e.target.value)}
//           />
//         </div>
//         <div>
//           <label className="mr-48 font-bold">Re-Type Password:</label>
//           <input
//             placeholder="Confirm Password"
//             className="border shadow-lg w-11/12 p-2 mt-1 mb-8"
//             type="password"
//             onChange={e => setconfirmpassword(e.target.value)}
//           />
//           <p>{valid}</p>
//         </div>
//         <div>
//           <button
//             className="w-11/12 bg-green-400 text-white mb-4 hover:text-black hover:bg-white"
//             onClick={validate}
//           >
//             Sign up
//           </button>
//           <p className="mb-5 pb-4">Already have an account? <a className="text-green-400" href="/login">click here</a></p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Register;
