import React from 'react'
import './services.css';
import btn from '../../assets/web.png'




const Box = ({ img, title,para, btn }) => {
    return (
      
      <div className="services-box">
        <div className='img-ser'>
        <img src={img} />
       </div>
        <h2 >{title}</h2>
        <p>{para}.</p>
        <button className='btn'>{btn}</button>
      </div>
      
    );
  };
  
const services = () => {
  return (
    <div className='services'>
      <div className='project_title'>
        <h1>Services</h1>
        <p>I can help you in many different ways such as</p>
      </div>
      <div className="grid-container">
        <Box img={btn} title="Web Development" para="I can design beautiful, mobile responsive, and  SEO friendly websites, landing pages, customized portfolios, and eCommerce systems for your business"  btn="Learn More" />
        <Box img={btn} title="Graphic / UI Design" para="I can design beautiful UI prototypes for your dream projects. Additionally, I can also help you in designing logos, mockups, ads and other stuff for your business" btn="Learn More" />
        </div>


    </div>
  )
}

export default services
