import React from 'react'

function StudentDashBoard() {

  
  return (
    <div className='flex flex-col flex-warp justify-center items-center'>
      <div className='flex flex-warp justify-between items-center bg-white hover:bg-neutral-200 active:bg-neutral-200 focus:outline-2 focus:outline-neutral-200 focus:outline-offset-2' > 
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke-width="1.5" 
          stroke="currentColor" 
          class="size-6">
          <path stroke-linecap="round" 
          stroke-linejoin="round" 
          d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          <p>Back to home</p>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke-width="1.5" 
          stroke="currentColor" 
          class="size-6">
          <path stroke-linecap="round" 
          stroke-linejoin="round" 
          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" 
          />
          </svg>
        </div>
      </div>
      <div>
        <div className='flex flex-warp justify-start items-center'>
        <div>
          <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-10"
                >
             <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
            />
          </svg>
        </div>
        <div className='flex flex-col flex-warp items-center'>
          <div>Student Dashboard</div>
          <div>Student User(Metamask)</div>
        </div>
        </div>
        <div className='flex justify-between items-center felx-warp'>
          <p>My Certificates</p>
          <span> (var) Certificates</span>
        </div>
        <div className='flex flex-warp justify-center items-center'>
          real certificates
        </div>
      </div>

    </div>
  )
}

export default StudentDashBoard