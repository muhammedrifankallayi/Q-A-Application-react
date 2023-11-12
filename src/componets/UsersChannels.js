import React, { useEffect, useState } from 'react'
import Header from './Header'
import toast, { Toaster } from 'react-hot-toast';
import { request } from '../axios/axios'

function UsersChannels() {

const [userdata,setUserdata] = useState([])
const [searchval,setSearchval] = useState(" ")
const [temp,setTemp]= useState([])





useEffect(()=>{
getdata()

},[])

 const dropdown = ()=>{
  document.getElementById("dropdown").classList.toggle("hidden")
 }

 const toggleHide = ()=>{
const btn = document.getElementById("dropdown")

  btn.classList.add("hidden")

 }

 const getdata = async()=>{
  try {
    request({
      url:"/api/user/getusers",
      method:"get"
    }).then((res)=>{
setUserdata(res.data.data)
setTemp(res.data.data)

    })
  } catch (error) {
    console.log(error.message);
  }
 }

 const search = (e)=>{
  
 const term  = e.target.value
 
  const filteredItems = temp.filter(item =>
    item.username.toLowerCase().includes(term.toLowerCase())
    
  );

  setUserdata(filteredItems)

 }



  return (
    <div>
      <Toaster/>
<Header/>

<div className='maindiv'>

<form className='flex w-full cols maindiv mt-2 '>
  
  <input
    type="search"
    id="search-dropdown"
  onChange={search}
    className=" text-sm w-full lg:w-1/3 h-full  text-white bg-gray-800 rounded-l-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
    placeholder="Search Mockups, Logos, Design Templates..."
    required
  />
  <button  onClick={search} className=' bg-blue-500 text-white rounded-r-lg px-4' >Search</button>

</form>

</div>
        <div  class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-4 ml-7">
        {userdata?.map((data,index)=>(
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

      



<div key={index} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="flex justify-end px-4 pt-4">
        <button id="dropdownButton" onClick={dropdown} data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            <span className="sr-only">Open dropdown</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
            </svg>
        </button>
        <div id="dropdown" onClick={toggleHide} class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute">
            <ul  className="py-2" aria-labelledby="dropdownButton">
            <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
            </li>
            <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
            </li>
            <li>
                <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
            </li>
            </ul>
        </div>
    </div>
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{data?.username}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
        <div class="flex mt-4 md:mt-6">
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3">Message</a>
        </div>
    </div>
</div>


    </div>

))}





</div>




        
    </div>
  )
}

export default UsersChannels