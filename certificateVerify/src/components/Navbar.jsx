import React from 'react'
import Container from './Container'

function Navbar() {

  return (
    <nav className="top-0 z-50 sticky bg-white shadow-md">
    <Container>
      <div>
        <h1 className='mr-0 text-neutral-900 text-3xl'> CertifyChain </h1>
      </div>
        <div className='flex justify-center gap-8'>
          <div className='flex flex-row justify-center items-center p-2 border border-neutral-200 rounded-xl text-neutral-600 hover:text-neutral-400'>
            <svg xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="ml-2 size-5">
          <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" 
          />
          </svg>
          <button className='ml-3 px-1.5 rounded-xl text-center'>login</button>
          </div>

          <div className='flex justify-center items-center bg-blue-500 hover:bg-blue-400 text-shadow-lg p-2 border border-neutral-200 rounded-xl text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            class="size-6">
            <path d="M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z" 
            />
          </svg>
          <button className='ml-3 rounded-xl text-center'> Connect MetaMask</button>
          </div>
        </div>
    </Container>
    </nav>

  )
}

export default Navbar