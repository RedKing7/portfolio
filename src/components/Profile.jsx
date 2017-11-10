import React from 'react';
import styled from 'styled-components';

const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  background-color: rgb(219,212,204);
  
  h1{
    font-size: 4em;
    color: white;
    line-height: inherit;
    margin: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    width: 100%;
    background-color: rgb(208,200,190);
  }

  p{
    margin: 0;
    width: 70%;
    padding-top: 20px;
    padding-bottom: 20px;    
    font-size: 2em;
    font-weight: 100;
  }
`

const Profile = (props) => {
  return (
    <ProfileDiv id={props.id}>
      <h1>About</h1>
      <p>
        I first started programming on a TI-83 calculator in my high school math class, and I've been learning more ever since. I have experience in JavaScript, React, Ruby on Rails, and Node. I'm pretty good with CSS, creating responsive webpages from a design. I also have some experience with C++, Java, and TI-Basic, though I'm not sure anyone would hire me to program their calculator.
        </p>
    </ProfileDiv>
  )
}

export default Profile;