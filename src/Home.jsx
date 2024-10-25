import axios from 'axios'
import React, { useEffect, useState } from 'react'
import login from './Login'
import img from './avatar_image.jpg'

function Home() {
  const [firstname,setfirstname]=useState("")
  const [lastname,setlastname]=useState("")
  const [username,setusername]=useState("")
  const [path,setpath]=useState("")
  const currentuser=localStorage.getItem("current")
  // useEffect(() => {
    // console.log('useEffect Triggered')
    useEffect(()=>{
      const checkvalid=()=>{
        if(!localStorage.getItem("current")){
          window.location.href='/login'
         }
      }
      console.log("Useeffect...",sessionStorage.getItem("IsValid"),window.location.href)
      checkvalid()
    },[])
    
    const fetchData = async () => {
      const body={
     "currentuser":currentuser
      }
      const res =await axios.post('http://localhost:3000/home',{...body})
      // res1=res
      console.log(res)
      setfirstname(res.data.firstname)
      setlastname(res.data.lastname)
      setusername(res.data.username)
  }
  fetchData()
  

 const logout=()=>{
  window.location.href='/login'
  localStorage.removeItem("current")
 }
  return (
    <>
    <div id='main' className='size-96 bg-white rounded-lg shadow-lg shadow-black text-left  ml-4'>
      <h2 className='font-extrabold text-xl pl-4'>MY PROFILE</h2>
      <img src={img} className='w-24 h-24 rounded-full border-black border-2 ml-32 mt-3'/>
      <div className=' w-11/12 h-auto ml-4 pb-4 mt-2'>
      <h3 className='ml-2 mt-2 font-bold'>Personal info:</h3>
      <h3 className='font-bold mt-4  w-11/12 ml-4 h-11 pt-2 pl-4 '>Firstname: {firstname}</h3>
      <h3 className='font-bold mt-4 w-11/12 ml-4 h-11 pt-2 pl-4 '>Lastname: {lastname}</h3>
      <h3 className='font-bold mt-4  w-11/12 ml-4 h-11 pt-2 pl-4'>Userame: {username}</h3>
      </div>
    </div>
    <a type='button' className='h-8 w-20 absolute text-center justify-center bg-red-600 text-white justify-items-center right-5 hover:bg-orange-600 hover:text-black top-5 pb-6 pt-2 mb-3 rounded-xl' href='/login' onClick={logout}><p className='top-1 right-3 absolute'>Logout</p></a>
    </>
  )
}

export default Home

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// function Home({ currentuser }) {
//   const [profile, setProfile] = useState({});

//   useEffect(() => {
//     if (currentuser) {
//       fetchData();
//     }
//   }, [currentuser]);

//   const fetchData = async () => {
//     try {
//       const res = await axios.post('http://localhost/home', { currentuser });
//       setProfile(res.data); // Assuming the response contains profile data
//     } catch (err) {
//       console.error("An error occurred while fetching the profile data.");
//     }
//   };

//   return (
//     <>
//       <div id='main' className='size-96 bg-white rounded-lg shadow-lg shadow-black'>
//         <h2 className='font-extrabold text-xl'>My profile</h2>
//         <h3 className='font-bold mt-4 bg-green-500 w-11/12 ml-4 h-11 pt-2'>
//           Username: {currentuser}
//         </h3>
//         {profile.firstname && (
//           <h3 className='font-bold mt-4 bg-green-500 w-11/12 ml-4 h-11 pt-2'>
//             Firstname: {profile.firstname}
//           </h3>
//         )}
//         {profile.lastname && (
//           <h3 className='font-bold mt-4 bg-green-500 w-11/12 ml-4 h-11 pt-2'>
//             Lastname: {profile.lastname}
//           </h3>
//         )}
//       </div>
//       <a
//         type='button'
//         className='h-8 w-20 absolute text-center justify-center bg-red-600 text-white justify-items-center right-5 hover:bg-orange-600 hover:text-black top-5 pb-6 pt-2 mb-3 rounded-xl'
//         href='/login'
//       >
//         <p className='top-1 right-3 absolute'>Logout</p>
//       </a>
//     </>
//   );
// }

// export default Home;
