import React from 'react'

function Container({children , className=''}) {
  return (
    <div className={`flex flex-wrap justify-between items-center mx-auto p-4 max-w-6xl ${className}`}>
        {children}
    </div>
  )
}

export default Container