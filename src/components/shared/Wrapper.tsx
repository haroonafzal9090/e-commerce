import React, { FC } from 'react'

const Wrapper:FC<{children : React.ReactNode}> = ({children}) => {
  return (
    <div className='max-w-screen-2xl mx-auto px-2 mt-5 max-lg:px-14 max-2xl:px-12 max-sm:px-10 '>
        {children}
    </div>
  )
}

export default Wrapper