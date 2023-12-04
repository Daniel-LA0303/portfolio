import React from 'react'

const Projects = () => {
  return (
    <div className='my-10'>
      <div className='px-5  w-full md:w-4/6 my-5'>
          <p className='text-green-500 text-5xl mb-4'>Projects</p>
          <p className='text-white text-xl'>I have done several projects in both backend and frontend, however, 
            today I consider myself a backend developer in the area of microservices, 
            for more information I have put a link to the direct repository of my projects.
          </p>
      </div>
      
      <div className="text-white  flex items-center justify-center ">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">

          <div className="bg-black-card rounded-lg p-4">
            <img src="https://placehold.co/300x200/d1d4ff/352cb5.png" alt="Placeholder Image" className="w-full h-48 rounded-md object-cover" />
            <div className="px-1 py-4">
              <div className="font-bold text-xl mb-2">Blog Title</div>
              <p className="text-base">
                This is a simple blog card example using Tailwind CSS. You can replace this text with your own blog content.
              </p>
            </div>
            <div className="px-1 py-4">
              <button
                className="bg-green-500 hover:bg-green-700 py-2 px-4 rounded transition duration-300 ease-in-out"
              >
                View Repository
              </button>
            </div>
          </div>
          <div className="bg-black-card rounded-lg p-4">
            <img src="https://placehold.co/300x200/d1d4ff/352cb5.png" alt="Placeholder Image" className="w-full h-48 rounded-md object-cover" />
            <div className="px-1 py-4">
              <div className="font-bold text-xl mb-2">Blog Title</div>
              <p className="text-base">
                This is a simple blog card example using Tailwind CSS. You can replace this text with your own blog content.
              </p>
            </div>
            <div className="px-1 py-4">
              <button
                className="bg-green-500 hover:bg-green-700 py-2 px-4 rounded transition duration-300 ease-in-out"
              >
                View Repository
              </button>
            </div>
          </div>
          <div className="bg-black-card rounded-lg p-4">
            <img src="https://placehold.co/300x200/d1d4ff/352cb5.png" alt="Placeholder Image" className="w-full h-48 rounded-md object-cover" />
            <div className="px-1 py-4">
              <div className="font-bold text-xl mb-2">Blog Title</div>
              <p className="text-base">
                This is a simple blog card example using Tailwind CSS. You can replace this text with your own blog content.
              </p>
            </div>
            <div className="px-1 py-4">
              <button
                className="bg-green-500 hover:bg-green-700 py-2 px-4 rounded transition duration-300 ease-in-out"
              >
                View Repository
              </button>
            </div>
          </div>
          <div className="bg-black-card rounded-lg p-4">
            <img src="https://placehold.co/300x200/d1d4ff/352cb5.png" alt="Placeholder Image" className="w-full h-48 rounded-md object-cover" />
            <div className="px-1 py-4">
              <div className="font-bold text-xl mb-2">Blog Title</div>
              <p className="text-base">
                This is a simple blog card example using Tailwind CSS. You can replace this text with your own blog content.
              </p>
            </div>
            <div className="px-1 py-4">
              <button
                className="bg-green-500 hover:bg-green-700 py-2 px-4 rounded transition duration-300 ease-in-out"
              >
                View Repository
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Projects