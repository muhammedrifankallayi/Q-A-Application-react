import React, { useState } from 'react'
import Header from './Header'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

function EditProfile() {

const intiailForm = {username:"",email:"",education:"",profession:""}

const [formData,setFormData] = useState(intiailForm)

const [err,setErr]= useState({})
const [img ,setImg] = useState("")




const handleChange = (e)=>{
    const {name , value} = e.target
    setFormData({
        ...formData ,[name]:value
    })
}

const SubmitForm = async(e)=>{
e.preventDefault()
 const err =  validate()
 setErr(err)
 if("email" in err || "username" in err){
 console.log(err);
    
 }else{ 
    console.log(formData);
    toast.success("success")
 }

}

function validate(){
    const err={}

    if(formData.username==""){
    err.username = "please enter the username"
    }

    if(isEmailValid(formData.email)===false){
        err.email = "please enter valid email"
    }

    return err
    
}




const isEmailValid = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };


  const HandleFiles = (e)=>{
     img = e.target.files[0]
       setImg(img)
  }

  const HandleSubmit = async(e)=>{
    e.preventDefault()
   


  }



  return (
    <div>

<Header/>
<div className='w-full flex justify-center pt-5' >

<form className='lg:w-1/3 md:w-1/2 sm:w-full border border-gray-200 p-3 bg-gray-700  ' >
    <div className='mb-6' >
        <h1><strong>Edit</strong> profile</h1>
    </div>
    <div class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"> profile image</label>
    <input type="file"  onChange={HandleFiles} name='image' id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="username" required></input>
  </div>
  <div class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"> username</label>
    <input type="email"  onChange={handleChange} name='username' id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="username" required></input>
  </div>
  <div class="mb-6">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">email</label>
    <input type="text"  onChange={handleChange} name='email' id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder='email' required></input>
  </div>
  <div class="mb-6">
    <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">education</label>
    <input type="text"  onChange={handleChange} name='education'  id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"   placeholder='education' required></input>
  </div>
  <div class="mb-6">
    <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Profession</label>
    <input type="text"  onChange={handleChange}  name='profession'  id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"    placeholder='profession' required></input>
  </div>
  <div class="flex justify-center mb-6">
 <Link to={"/profile"} > <button  type="button" class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">back</button></Link>

  <button type="submit"  onClick={SubmitForm} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-2"   >update</button>
   
  </div>
</form>
</div>
</div>

  )
}

export default EditProfile