import React from 'react'
import Header from './Header'

function DropQuestion() {
  return (
    <div>
<Header/>

<div class="max-w-md mx-auto">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="text-input">
                    Text Input
                </label>
                <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="text-input" type="text" placeholder="Enter text"></textarea>
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="select-input">
                  Category or industry
                </label>
                <div class="relative">
                    <select class="block appearance-none w-full bg-white border border-gray-400 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline" id="select-input">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M8.293 12.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-between">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Drop
                </button>
            </div>
        </form>


{/* lists  */}
<h1  className='text-dark-800' >Previous question</h1>

<dl class="max-w-md text-gray-900  dark:text-white dark:divide-gray-700 mt-5">
   
    <div class="flex flex-col pb-3 divide-y divide-gray-500 mb-4">
        <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400"> questiondate</dt>
        <dd class="text-lg text-dark-600 font-semibold"></dd>
    </div>

    <div class="flex flex-col pb-3 divide-y divide-gray-500 mb-6">
        <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400"> questiondate</dt>
        <dd class="text-lg text-dark-600 font-semibold"></dd>
    </div>


    <div class="flex flex-col pb-3 divide-y divide-gray-500 mb-4  ">
        <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400"> questiondate</dt>
        <dd class="text-lg text-dark-600 font-semibold"></dd>
    </div>
  
</dl>








        
    </div>





    </div>
  )
}

export default DropQuestion