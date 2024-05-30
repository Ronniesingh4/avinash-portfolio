import React from 'react';
import './home.css';
import msg from '../../assets/img5.jpg';
import github from '../../assets/github1.png';
import About from '../about/about';
import  Project from '../project/project';
import Services from '../services/services';
import Contact from '../contact/contact';
const Home = () => {
  const openGithubProfile = () => {
    window.open('https://github.com/Ronniesingh4');
  };

  const openResume = () => {
    window.open('https://docs.google.com/document/d/1YwdpHYjgRaz6kEGQ_7QIhy1cpJ1_ej3GUV60WK4_oYU/edit?usp=sharing');
  };

  return (
    <>
    <div className='allheader'>
      <div className='all_box_header'>
        <div className='hader_title'>
          <p>Hello, I'm</p>
          <h1> Avinash</h1>
          <div className='wrapper'>
            <ul className='dynamic-txts'>
              <li><span>Fullstack Web Developer</span></li>
              <li><span>Frontend Developer</span></li>
              <li><span>Backend Developer</span></li>
              <li><span>UX UI Developer</span></li>
              
            </ul>
          </div>
          <div className='all_doc'>
            <div className='resmue1'>
              <button onClick={openResume} className='resmue'><i className="fa-regular fa-file-lines"></i> Resume</button>
            </div>
            <div className='github'>
              <img src={github} onClick={openGithubProfile} width="80px" alt="GitHub Profile" />
            </div>
          </div>
        </div>
      </div>
      <div className='hader_img'>
        <img src={msg} width="500px" alt="Message" />
      </div>
    </div>
    <About/>
    <Project/>
    <Services/>
    <Contact/>
    </>
  );
}

export default Home;
