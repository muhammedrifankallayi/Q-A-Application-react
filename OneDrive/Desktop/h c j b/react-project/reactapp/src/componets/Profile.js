import React from 'react'
import "../styles/profile.css"
import { Link } from 'react-router-dom'

function Profile() {
  return (
    <div className='image-div'  style={{ height: "100vh" }}>
    <div style={{ height: "30%" }}>
    
    </div>
    <div  className='content-div dark:bg-gray-100' style={{ height: "67%" }}>
      {/* Your content */}

      <div class="w-full  px-4 text-center pt-10">
      <p  className='lg:mt-11 lg:ml-5   ' ><strong>missy cooper</strong></p>
      <p className='text-center lg:ml-3'  >web developer</p>
          <div class="flex  py-4 lg:pt-4 pt-5 lg:justify-center ">
       
            <div class="mr-4 p-3 text-center">
              <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                22
              </span>
              <span class="text-sm text-blueGray-400">followers</span>
            </div>
            <div class="mr-4 p-3 text-center">
              <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                10
              </span>
              <span class="text-sm text-blueGray-400">following</span>
            </div>
            <div class="lg:mr-4 p-3 text-center">
              <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                89
              </span>
              <span class="text-sm text-blueGray-400">posted questions</span>
            </div>
            
          </div>
       
        </div>


<div className='text-center'  >
<button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">drop question</button>
 <Link  to={"/editprofile"} > <button type="button"
   class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Edit profile</button></Link>
  <h1>Education</h1>

<div  className='flex justify-center' >
  <ul class=" divide-y divide-gray-200 dark:divide-gray-700 ">
 
 
   <li class="py-3 sm:py-4">
      <div class="flex items-center space-x-4">
        
         <div class="flex-1 min-w-0">
           
            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
            Toatal questions posted : 8
            </p>
         </div>
       
      </div>
   </li>
   <li class="py-3 sm:py-4">
      <div class="flex items-center space-x-4">
         <div class="flex-1 min-w-0">
            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
            Total response  :  50
         
            </p>
         </div>
         
      </div>
   </li>
   <li class="pt-3 pb-0 sm:pt-4">
     
   </li>
</ul>

</div>

</div>

        {/* send row */}


        <div class="w-full px-4 text-center ">
        
        </div>


      {/* content end */}
    </div>
    <div className="avatar">
      <img  src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px" alt="Profile" />
   
      
    </div>
  </div>
  
  )
}

export default Profile