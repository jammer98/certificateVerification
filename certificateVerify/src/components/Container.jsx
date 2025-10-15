import React from 'react'

function Container({children}) {
  return (
    <div className='flex flex-wrap justify-between items-center mx-auto p-4 max-w-6xl'>
        {children}
    </div>
  )
}

export default Container