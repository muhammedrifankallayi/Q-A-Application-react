import React, { useState } from 'react'

import 'react-phone-input-2/lib/style.css';

import { Toaster , toast } from 'react-hot-toast';
import {useNavigate} from "react-router-dom"
import axios from 'axios';


 const ForgetPass = () => {

  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [otpOfBackend,setOtpOfBackend] = useState("")
  const [isOtpsend , setIsOtpsend] = useState(false)
  const [email , setEmail] = useState("")
  const [showReset,setShowReset] = useState(false)
  const [newPassword,setNewPassword]= useState("")
  const [confnewPassword,setConfNewPassword]= useState("")

let navigate = useNavigate()




const HandleOtpChange = (element, index) => {
  if (isNaN(element.value)) return;

  const newOtp = [...otp];
  newOtp[index] = element.value;
  setOtp(newOtp);

  if (element.nextSibling) {
    element.nextSibling.focus();
  }
};

// otp sending to email address 

const sendOtp = async(e)=>{
  e.preventDefault()
  if(email.length===0){
  toast.error("please enter the email")
  return
  }
 await axios.post("http://localhost:4500/api/user/sentotp",{email}).then((response)=>{
   setOtpOfBackend(response.data.otp)
   console.log(response);
   toast.success(`otp send to ${response.data.otp}`)
 setIsOtpsend(true)
 }).catch((err)=>{
  if (err.response) {
    toast.success("login succesfull!")
    alert(`Error: ${err.response.data.message}`);
  }
 })
 
}



// otp checking ... 

const submitOtp = (e)=>{
  try {
    e.preventDefault()
var bindedOtp = ''
for(let x=0;x<otp.length;x++){
  bindedOtp+=otp[x]
}

   
    if(otpOfBackend===bindedOtp){
      toast.success("otp entered successful")
     setShowReset(true)
  
    }else{
     toast.error("Incorrect otp")
    }
    
  } catch (error) {
    toast.error(error.message,"lb")
  }
}
 

// resetting otp 

const resetPassword = async(e)=>{
  e.preventDefault()
  const isvalid = validateNewPass()
  if(isvalid===true){
    await axios.patch("http://localhost:4500/api/user/resetpassword",{email:email ,password:newPassword}).then((res)=>{
      toast.success(res.data.message)
      navigate("/login")
    })
  }else{
  toast.error("please validate")
  }
}

function validateNewPass (){
if(newPassword.length===0 ){
  toast.error("please enter the password")
  return false
}
if(confnewPassword.length===0){
 toast.error("please confirm the password")
 return
}

if( newPassword!==confnewPassword){
  toast.error("confirm pass is not match")
  return
}
return true

}


  return (
    <div    >
<Toaster/>

{isOtpsend?(

<div>
  {showReset?(  <div class="w-full max-w-xs mx-auto mt-10">
    <h1 className='text-center' > <strong>Reset your password</strong> </h1>
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="password"
        type="password"
        placeholder="Password"
        value={newPassword}
        onChange={e=>setNewPassword(e.target.value)}
      />
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password-confirm">
        Confirm Password
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="password-confirm"
        type="password"
        placeholder="Confirm Password"
        value={confnewPassword}

        onChange={e=>setConfNewPassword(e.target.value)}

      />
    </div>
    <div class="flex items-center justify-between">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={resetPassword}
      >
        Reset
      </button>
    </div>
  </form>
</div>):

<div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
  
  <div class="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
    <div class="mx-auto flex w-full max-w-md flex-col space-y-16">
      <div class="flex flex-col items-center justify-center text-center space-y-2">
        <div class="font-semibold text-3xl">
          <p>Email Verification</p>
        </div>
        <div class="flex flex-row text-sm font-medium text-gray-400">
          <p>We have sent a code to your email ba**@dipainhouse.com</p>
        </div>
      </div>
      <div>
        <form >
          <div class="flex flex-col space-y-16">
          <div class="flex flex-row items-center justify-between mx-auto w-full max-w-xs p-4 m-5" >
        {otp.map((data, index) => {
          return (
            
          
            <input class="w-full h-full flex flex-col items-center justify-center text-center  outline-none  border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700 m-1" 
            type="text" name="" id=""
            maxLength={1}
            key={index}
            value={data}
            onChange={(e) => HandleOtpChange(e.target, index)}
            onFocus={(e) => e.target.select()}
            ></input>
  
          );
        })}
      </div>

            <div class="flex flex-col space-y-5">
              <div>
                <button class="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm" type='submit' onClick={submitOtp}  >
                  Verify Account
                 </button>
              </div>

              <div class="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                <p>Didn't recieve code?</p> <a class="flex flex-row items-center text-blue-600" href="http://" target="_blank" rel="noopener noreferrer">Resend</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>



}



</div>
):


<div>










<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"  >
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"></img>
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Enter your registered Email</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6">
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div class="mt-2 ">
        <input
  type="text"
  className="w-full h-10 px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  placeholder="type email"
value={email}
onChange={e=>setEmail(e.target.value)}
/>


        </div>
      </div>

     

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={sendOtp}   >Send Otp</button>
      </div>
      <div id='recaptcha' ></div>
    </form>

    <p class="mt-10 text-center text-sm text-gray-500">
     want to register?
      <a href="/" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">sign up now</a>
    </p>
  </div>
</div>


</div>

}

      </div>
   
  )
  
}

export default ForgetPass