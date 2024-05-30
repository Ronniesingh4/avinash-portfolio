import React from 'react';
import styled from 'styled-components';
import './contact.css';
import go from'../../assets/go.png';
import link from'../../assets/link.png';
import github from'../../assets/gitt.png';
import insta from'../../assets/insta.png';

const Wrapper = styled.section`

  .container {
    margin-top: 6rem;
    text-align: center;

    .contact-form {
      max-width: 50rem;
      margin: auto;
    }
    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }
    input[type="submit"] {
      cursor: pointer;
      transition: all 0.2s;
    }
  }
`;

const Contact = () => {
  const google= () => {
    window.open('https://www.google.com/');
  };
  const openGithubProfile = () => {
    window.open('https://github.com/Ronniesingh4');
  };
  const linkdin = () => {
    window.open('https://www.linkedin.com/in/avinash-singh441/');
  };

  return (
    <Wrapper>
      <div className='contact_title'>
        <h1>Contact</h1>
        <p>I am always available for projects and discussions</p>
      
        <div className="container">
          <div className="contact-form">
            <form action="https://formspree.io/f/xleqwegn" method="POST" className="contact-inputs">
              <input type="text" name="username@gmail.com" placeholder="username@gmail.com" autoComplete="off" required />
              <input type="email" name="Email" placeholder="Let Me Know How I Can Help You" autoComplete="off" required />
              <textarea name="message"  placeholder="Write Your Quary here" cols="30" rows="10" autoComplete="off" required></textarea>
              <input type="submit" value="Send" />
            </form>
          </div>

          <div className='social-icon'>
           <img src={go} alt='google'  onClick={google} width="40px" />
           <img src={link}  alt='google'  onClick={linkdin} width="40px"  />
           <img src={github}  alt='google'  onClick={openGithubProfile} width="40px" />
           <img src={insta}  alt='google'  width="40px"/>
          </div>

       </div>
        
      </div>
    </Wrapper>
  );
};

export default Contact;
