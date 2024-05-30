import React from 'react';
import './project.css';
//import Figma from '../../assets/b19.jpg'
import project1 from '../../assets/project.png'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/project3.png'
import project4 from '../../assets/project4.png'
import project5 from '../../assets/project5.png'
import project6 from '../../assets/project6.png'

const Box = ({ img, title,para }) => {
  return (
    
    <div className="box">
      <img src={img}  alt='fff' />
      <h2 >{title}</h2>
      <p>{para}.</p>
    </div>
    
  );
};

const App = () => {
  return (
    <div>
      <div className='find'>
      <div className='project_title'>
        <h1>Projects</h1>
        <p>Here are some of my best creations</p>
      </div>
      <div className="grid-container">
        <Box img={project1} title="Just In" para="in this website make using react js,mongodb,postman,nodeJs.company details if anyone enter this website they enter firstfall register and then login .  "/>
        <Box img={project2} title="Admin Daseboard" para="admin daseboard created using redux toolkit there admin see how much usere are admin delete the account of user they manage whole work by using this daseboard pannel"/>
        <Box img={project3} title="Cara ecommerce" para="this webiste is ecommerce website like flipkart,amazon . here users buy products online accourding there needs this ecommerce made by using css html and javascrpit "/>
        <Box img={project4} title="Glossary store" para="glossary store website made by using react js tailwind css javascrpit , also used redux for data stores . this website help the usere buy glossary product online ."/>
        <Box img={project5} title="MERN Project" para="in this website devlop by using mongodb,expressJs,nodejS,reactJS. in this website login and logut form and if uers new he can resiterd the new account after register they login."/>
        <Box img={project6} title="Admin Daseboard" para="this Dashboards allow teams to monitor key metrics or identify critical data points. these daseboard devlop using frontend and backend uses.and uses redux and mongodb for data stores."/>
      </div>
      <div className='project-btn'>
      <button className='btn'>Show more</button>
      </div>
    </div>
    </div>
  );
};

export default App;

