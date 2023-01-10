import React from 'react'

export default function Info() {
  return (
    <div className='container'>
      <div className="info"></div>
      <h3 className='name'>Maryann Alonge</h3>
      <h5 className='title'>Full Stack Developer/Engineer</h5>
      <a className='web' href="https://www.linkedin.com/in/maryann-alonge-0946ba1a3/">maryannalonge.com</a>
      <button className='btn'><img src={require("../images/mail.png")} alt="" />Email</button>
    </div>
  )
}
