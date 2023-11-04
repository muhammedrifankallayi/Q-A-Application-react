import React from 'react'
import Header from './Header'
import Footer from './Footer'
import "../styles/home.css"

export default function Home() {
  return (
    <div>
<Header/>
{/* cards */}
<h1 className='text-2xl  font-bold pl-4  text-gray-800' >Categories</h1>

<div class="overflow-x-auto">
  <div class="flex flex-no-wrap -mx-4 p-4">
    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4 mb-4">
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="https://t3.ftcdn.net/jpg/05/35/47/38/360_F_535473874_OWCa2ohzXXNZgqnlzF9QETsnbrSO9pFS.jpg" class="w-full h-48 object-cover" alt="Card 1" />
        <div class="p-4">
          <h2 class="text-2xl font-bold">Finance</h2>
          <p class="text-gray-800"> Fix your doubts about finace </p>
        </div>
      </div>
    </div>

    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4 mb-4">
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="https://t3.ftcdn.net/jpg/05/35/47/38/360_F_535473874_OWCa2ohzXXNZgqnlzF9QETsnbrSO9pFS.jpg" class="w-full h-48 object-cover" alt="Card 2" />
        <div class="p-4">
          <h2 class="text-2xl font-bold">Technology</h2>
          <p class="text-gray-600">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>

    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4 mb-4">
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="https://img.freepik.com/premium-photo/abstract-rainbow-colorful-bright-feather-closeup-up-macro-view-background-plumage-texture-with-dew-drops_753134-644.jpg" class="w-full h-48 object-cover" alt="Card 3" />
        <div class="p-4">
          <h2 class="text-2xl font-bold">Health</h2>
          <p class="text-gray-600">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
    
    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4 mb-4">
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="https://t3.ftcdn.net/jpg/05/35/47/38/360_F_535473874_OWCa2ohzXXNZgqnlzF9QETsnbrSO9pFS.jpg" class="w-full h-48 object-cover" alt="Card 4" />
        <div class="p-4">
          <h2 class="text-2xl font-bold">Career</h2>
          <p class="text-gray-600">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>

    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4 mb-4">
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="https://t3.ftcdn.net/jpg/05/35/47/38/360_F_535473874_OWCa2ohzXXNZgqnlzF9QETsnbrSO9pFS.jpg" class="w-full h-48 object-cover" alt="Card 5" />
        <div class="p-4">
          <h2 class="text-2xl font-bold">Education</h2>
          <p class="text-gray-600">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>

    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4 mb-4">
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="https://img.freepik.com/premium-photo/abstract-rainbow-colorful-bright-feather-closeup-up-macro-view-background-plumage-texture-with-dew-drops_753134-644.jpg" class="w-full h-48 object-cover" alt="Card 6" />
        <div class="p-4">
          <h2 class="text-2xl font-bold">Science</h2>
          <p class="text-gray-600">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>

    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4 mb-4">
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="https://img.freepik.com/premium-photo/abstract-rainbow-colorful-bright-feather-closeup-up-macro-view-background-plumage-texture-with-dew-drops_753134-644.jpg" class="w-full h-48 object-cover" alt="Card 6" />
        <div class="p-4">
          <h2 class="text-2xl font-bold">Politics</h2>
          <p class="text-gray-600">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>

  </div>
</div>


{/* infromation card */}

<h1  className='info-text text-2xl'  >Guidlines</h1>

<div class="container mx-auto p-2">
<div class="grid grid-cols-2 sm:grid-cols-2 " > 
        <div class="max-w-sm  ml-auto mr-3 bg-white border border-gray-200 rounded-lg shadow ">
            <img src='https://images.pexels.com/photos/2566581/pexels-photo-2566581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="Image 1" />
            <p className='info-text'>hello i am muhammed rifan from kottakkal puthur hello for everyone then</p>
        </div>

        <div class="max-w-sm mr-auto ml-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img src='https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="Image 2" />
        </div>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-2  mt-4">
        <div class="max-w-sm ml-auto mr-3 bg-white border border-gray-200 rounded-lg shadow ">
        <img src='https://images.pexels.com/photos/7203727/pexels-photo-7203727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' ></img>
        <p className='info-text'>hello i am muhammed rifan from kottakkal puthur hello for everyone then</p>
       
        </div>

        <div class="max-w-sm mr-auto ml-3  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img src='https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' ></img>
       
        </div>
    </div>
</div>





{/* infromation card end */}

{/* cards end */}
<div class="card-container flex overflow-x-auto">
<div class=" w-full sm:w-1/2 md:w-1/2 lg:w-1/2 px-4 mb-4">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                    <img src='https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=400' ></img>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus-ring-blue-800">
                   Follow now
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>


    <div class=" w-full sm:w-1/2 md:w-1/2 lg:w-1/2 px-4 mb-4">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                    <img src='https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=400' ></img>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus-ring-blue-800">
                   Follow now
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>

    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 px-4 mb-4">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                <img src='https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=400' ></img>

                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus-ring-blue-800">
                    Read more
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 px-4 mb-4">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                <img src='https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=400' ></img>

                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus-ring-blue-800">
                    Read more
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>

    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 px-4 mb-4">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                <img src='https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=400' ></img>

                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus-ring-blue-800">
                    Read more
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>



</div>

<Footer/>
    </div>
  )
}

