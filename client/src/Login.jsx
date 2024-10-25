import React, { useEffect, useState } from "react";
import Register from "./Register";
import axios from "axios";
function Login(){
  useEffect(()=>{
    const checkvalid=()=>{
      if(localStorage.getItem("current")){
        window.location.href='/home'
       }
    }
    console.log("Useeffect...",localStorage.getItem("current"),window.location.href)
    checkvalid()
  },[])
   const [username,setusername]=useState("")
   const [password,setpassword]=useState("")
   const [valid,isValid]=useState("")
   const [style,setstyle]=useState("")
   const body={ 
    "username":username,
    "password":password 
  }

   async function submit(e){
    e.preventDefault()
    // const response=await fetch("http://localhost:3000/login",{
    //   method:"GET",
    //   headers:{
    //     "content-type":"application/json"
    //   },
    //   mode:"no-cors"
    // })st

  const res=await axios.post("http://localhost:3000/login",{...body})
  if(res.data.isValid){
   isValid(res.data.message)
   localStorage.setItem("current",username)
   sessionStorage.setItem("IsValid",true)
   setstyle("text-blue-400 mt-4")
   setTimeout(()=>{
   window.location.href="/home"
   },2000)
   
  }else{
    setstyle("text-red-400 mt-4")
    isValid(res.data.message)
  }

}
let checkvalid=()=>{
  if(sessionStorage.getItem("IsValid")==true){
   window.location.href='/home'
  }
}


    return(
    <>
    <div className="border-none border-black rounded-xl w-96 h-auto shadow-black shadow-lg border-l-2 border-r-2 border-b-2 pl-3">
    <h3 className="font-bold text-2xl mt-3 pt-4 text-center">Welcome</h3>
    <h3 className="font-bold text-2xl">Login</h3>
    <form onSubmit={submit}>
    <div className="mb-4">
      <label className="pl-0 mr-64">Username:</label>
    <input placeholder="Username" className="border-2 shadow-lg w-11/12 p-2 mt-4 rounded-lg hover:border-blue-600" type="text" onChange={e=>{
      setusername(e.target.value)
      console.log(e)
    }}/>
    </div>
    <div className="mb-6">
    <label className="pl-0 mr-64">Password:</label>
    <input placeholder="Password" className="border-2 shadow-lg w-11/12 p-2 mt-2 rounded-lg hover:border-blue-600" type="password" onChange={e=>{
      setpassword(e.target.value)
      console.log(e)
    }}/>
    </div>
    <div>
    <button className="w-11/12 bg-green-500 text-white hover:bg-white hover:text-black" type="submit">Login</button>
    </div>
    </form>
    <p className={style}>{valid}</p>
   <div className="p-8">
   <a className="text-green-500 pb-3 mt-0" href="#">Forgot Password?</a>
    <p className="pt-3">Don't have an account? <a className="text-green-500" href="/signup">Sign Up for free</a></p>
    </div>
    </div>

    </>
    )
}
export default Login;

// import React, { useState } from "react";
// import axios from "axios";

// function Login({ setcurrentuser }) {
//   const [username, setusername] = useState("");
//   const [password, setpassword] = useState("");
//   const [valid, setValid] = useState("");

//   const body = { username, password };

//   async function submit(e) {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:3000/login", body);
//       if (res.data.isValid) {
//         setValid(res.data.message);
//         setcurrentuser(username);
//         localStorage.setItem("current", username);
//         window.location.href = "/home";
//       } else {
//         setValid(res.data.message);
//       }
//     } catch (err) {
//       setValid("An error occurred during login.");
//     }
//   }

//   return (
//     <>
//       <div className="border-none border-black rounded-xl w-96 h-auto shadow-black shadow-lg border-l-2 border-r-2 border-b-2 pl-3">
//         <h3 className="font-bold text-2xl mt-3 pt-4 text-center">Welcome</h3>
//         <h3 className="font-bold text-2xl">Login</h3>
//         <form onSubmit={submit}>
//           <div className="mb-4">
//             <label className="pl-0 mr-64">Username:</label>
//             <input
//               placeholder="Username"
//               className="border-2 shadow-lg w-11/12 p-2 mt-4 rounded-lg hover:border-blue-600"
//               type="text"
//               onChange={e => setusername(e.target.value)}
//             />
//           </div>
//           <div className="mb-6">
//             <label className="pl-0 mr-64">Password:</label>
//             <input
//               placeholder="Password"
//               className="border-2 shadow-lg w-11/12 p-2 mt-2 rounded-lg hover:border-blue-600"
//               type="password"
//               onChange={e => setpassword(e.target.value)}
//             />
//           </div>
//           <div>
//             <button
//               className="w-11/12 bg-green-500 text-white hover:bg-white hover:text-black"
//               type="submit"
//             >
//               Login
//             </button>
//           </div>
//         </form>
//         <p>{valid}</p>
//         <div className="p-8">
//           <a className="text-green-500 pb-3" href="#">
//             Forgot Password?
//           </a>
//           <p className="pt-3">
//             Don't have an account?{" "}
//             <a className="text-green-500" href="/signup">
//               Sign Up for free
//             </a>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;
