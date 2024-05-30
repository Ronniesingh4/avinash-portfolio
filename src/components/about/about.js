import React, { useState } from 'react';
import './about.css';
import Reactlogo from '../../assets/ReactJS.png';
import NextJs from'../../assets/NextJS.png'
import Redux from '../../assets/Redux.png';
//import Material from '../../assets/Material';
import matr from '../../assets/matr.png';
import ChakraUI from '../../assets/ChakraUI.png';
import TailwindCSS from '../../assets/TailwindCSS.png';
import NodeJS from '../../assets/NodeJS.png';
import ExpressJS from '../../assets/ExpressJS.png';
import MongoDB from '../../assets/MongoDB.png';
import C from '../../assets/C++.png';
import JavaScript from '../../assets/JavaScript.png';
import CSS3 from '../../assets/CSS3.png';
import Firebase from '../../assets/Firebase.png';
import HTML5 from '../../assets/HTML5.png';
import Postman from '../../assets/Postman.png';
import Agora from '../../assets/Agora.png';
import Bootstrap from '../../assets/Bootstrap.png';
import Git from '../../assets/Git VCS.png';
import Photoshop from '../../assets/Photoshop.png';
import Illustrator from '../../assets/Illustrator.png';
import Figma from '../../assets/Figma.png';

const About = () => {
  function Boxes() {
    const [boxes, setBoxes] = useState([
      { id: 1, heading: "React JS", photo: Reactlogo },
      { id: 2, heading: "NextJs", photo: NextJs },
      { id: 2, heading: "Redux", photo: Redux },
     // { id: 3, heading: "MaterialUl", photo: Material },

      { id: 4, heading: "ChakraUI", photo: ChakraUI },
      { id: 5, heading: "TailwindCSS", photo: TailwindCSS },
      { id: 6, heading: "NodeJS", photo: NodeJS },
      { id: 7, heading: "ExpressJS", photo: ExpressJS },
      { id: 8, heading: "MongoDB", photo: MongoDB },
      { id: 9, heading: "C++", photo: C },
      { id: 10, heading: "JavaScript", photo: JavaScript },
      { id: 11, heading: "CSS3", photo: CSS3 },
      { id: 12, heading: "Firebase", photo:Firebase},
      { id: 13, heading: "HTML5 ", photo:HTML5  },
      { id: 14, heading: "Postman", photo:Postman },
      { id: 15, heading: "Agora", photo: Agora },
      { id: 16, heading: "Bootstrap", photo:Bootstrap },
      { id: 17, heading: "Git VCS", photo: Git },
      { id: 18, heading: "Photoshop", photo:Photoshop },
      { id: 19, heading: "Illustrator ", photo: Illustrator  },
      { id: 20, heading: "Figma", photo: Figma },
      { id: 21, heading: "Material UI", photo: matr },
      // { id: 3, heading: "Box 3", photo: "photo3.jpg" } // Duplicate id
      // Add more boxes as needed
    ]);

    // Split the boxes array into two arrays

    return (
      
      <div className='codeskills'>
      {boxes.map(box => (
        <div key={box.id} className="react">
          <img src={box.photo} alt="Box" width="48px" />
          <h3>{box.heading}</h3>
       </div>
      ))}
      </div>
    
    );
  }

  return (
    <div className='allabout'>
      <div className='about-title'>
        <h4>.</h4>
        <h1>About</h1>
       
        <p>About
          Having a programming experience , I have worked on a large number of websites, mobile apps, backend systems and desktop softwares. Additionally, I have also published over a dozen of technical articles with combining word count of 50000 words. I am a quick learner with excellent debugging skills and am well familiar with all the practices that are required to create a scalable, optimized and user friendly software. All the languages, frameworks and tools I've mostly worked on are mentioned below</p>
      </div>
      <Boxes />
     
    </div>
  );
}

export default About;
