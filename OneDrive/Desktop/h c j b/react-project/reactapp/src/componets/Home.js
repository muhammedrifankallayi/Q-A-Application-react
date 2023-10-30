import React from 'react'
import Header from './Header'
import Footer from './Footer'
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





{/* cards end */}

<h1 className='text-2xl  font-bold pl-4  text-gray-800' >Latest trends</h1>


<div class="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700 m-3">
        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3>
            <p class="my-4">If you care for your time, I hands down would go with this."</p>
        </blockquote>
        <figcaption class="flex items-center justify-center space-x-3">
            <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"></img>
            <div class="space-y-0.5 font-medium dark:text-white text-left">
                <div>Bonnie Green</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">Developer at Open AI</div>
            </div>
        </figcaption>    
    </figure>
    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700 m-3">
        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Solid foundation for any project</h3>
            <p class="my-4">Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"</p>
        </blockquote>
        <figcaption class="flex items-center justify-center space-x-3">
            <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture"></img>
            <div class="space-y-0.5 font-medium dark:text-white text-left">
                <div>Roberta Casas</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">Lead designer at Dropbox</div>
            </div>
        </figcaption>    
    </figure>
    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700 m-3">
        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Mindblowing workflow</h3>
            <p class="my-4">Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."</p>
        </blockquote>
        <figcaption class="flex items-center justify-center space-x-3">
            <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture"></img>
            <div class="space-y-0.5 font-medium dark:text-white text-left">
                <div>Jese Leos</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">Software Engineer at Facebook</div>
            </div>
        </figcaption>    
    </figure>
    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700 m-3">
        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Efficient Collaborating</h3>
            <p class="my-4">You have many examples that can be used to create a fast prototype for your team."</p>
        </blockquote>
        <figcaption class="flex items-center justify-center space-x-3">
            <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture"></img>
            <div class="space-y-0.5 font-medium dark:text-white text-left">
                <div>Joseph McFall</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">CTO at Google</div>
            </div>
        </figcaption>    
    </figure>
</div>

<Footer/>
    </div>
  )
}

