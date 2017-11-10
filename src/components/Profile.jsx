import React from 'react';
import styled from 'styled-components';

const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  background-color: rgb(219,212,204);

  padding-bottom: 10px;

  p{
    margin: 0;
    width: 70%;
    padding-top: 20px;
    padding-bottom: 20px;    
    font-size: 2em;
    font-weight: 100;
  }
`
const Title = styled.div`
  width: 100%;
  background-color: rgb(208,200,190);
  height: 15vw;
  max-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;

  h1{
    font-size: 4em;
    color: white;
    line-height: inherit;
    margin: 0;
  }
`

const Profile = (props) => {
  return (
    <ProfileDiv id={props.id}>
      <Title>
        <h1>About</h1>
      </Title>
      <p>
        I first started programming on a TI-83 calculator in my high school math class, and I've been learning more ever since. I have experience in JavaScript, React, Ruby on Rails, and Node. I'm  good with CSS, creating responsive webpages from a design. I also have some experience with C++ and Java.
      </p>
    </ProfileDiv>
  )
}

export default Profile;