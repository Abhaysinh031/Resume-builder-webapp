import React from 'react'
import "./About.css"

function About() {
  return (
    <>
      <div className='about-head'>About</div>
      <div className='about'>
        This is react resume builder made by Abhaysinh Deshmukh. This project is made by using complete React.js with poppular
        react packages like react-redux, redux-persist, react-hook-form, react-router-dom, react-icons
        and Nhost services like Postgres Database, GraphQl API and Storage has been used.

        <div className={"mt-3"}>
          
        </div>
        <a className={"mt-2 anchor-link"} href={"https://github.com/Amyx000/React-Resume-Builder"} target="_blank" rel="noopener noreferrer">Star our Github Repo</a>
        {/* <a className={"mt-2 anchor-link"} href={"https://hustles.reactplay.io/hackrplay/2022/home"} target="_blank" rel="noopener noreferrer">Hack-R-Play Website</a> */}
      </div>
    </>
  )
}

export default About