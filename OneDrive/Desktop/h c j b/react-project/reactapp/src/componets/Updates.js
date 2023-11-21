import React from 'react'
import Header from './Header'
import "../styles/updates.css"
function Updates() {
  return (
    <div>
<Header/>


{/* search bar section start */}
<div className='maindiv'>

<form className='flex w-full cols maindiv mt-2 '>
  
  <input
    type="search"
    id="search-dropdown"
    className=" text-sm w-full lg:w-1/3 h-full  text-white bg-gray-800 rounded-l-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
    placeholder="Search Mockups, Logos, Design Templates..."
    required
  />
  <button className=' bg-blue-500 text-white rounded-r-lg px-4' >Search</button>

</form>

</div>

{/* search bar section end */}


{/* constent section */}

<div   className=' maindiv pt-5' >


<figure class="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-md dark:bg-gray-900 dark:border-gray-400">
      
    <figcaption class="flex space-x-6 mb-5 w-full">
        <img class="rounded-full w-9 h-9 mt-1" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture"></img>
        <div class="space-y-0.5 font-medium dark:text-white text-left">
            <div>Roberta Casas</div>
            <div class="text-sm text-gray-500 dark:text-gray-400">Lead designer at Dropbox</div>
        </div>
        <div  className='w-full flex justify-end text-blue-700 ' >
        <span  className='follow-btn' >+follow</span>
        </div>
      
    </figcaption>    
    
    <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Solid foundation for any project</h3>
        <p class="my-4">Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"</p>
    </blockquote>
      <div className=' w-full flex justify-end follow-btn' >
      <span className='text-blue-800' >read full..</span>

      </div>
</figure>

      

</div>




    </div>




  )
}



export default Updates