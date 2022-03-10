import React from 'react'
import banner from 'assets/images/home-banner.svg'
import './PageWrapper.css'

const PageWrapper = ({children}) => {
  return (
    <div className="container">
      <div className="page-wrapper">
        <img src={banner} alt="banner" />
        {children}
      </div>
    </div>
  )
}

export default PageWrapper
