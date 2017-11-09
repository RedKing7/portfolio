import React from 'react';
import styled from 'styled-components';

const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  background-color: rgb(219,212,204);
  
  h2{
    font-size: 3em;
    color: white;
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
      <h2>About</h2>
      <p>
        I first started programming on a TI-83 calculator in my high school math class, and I've been learning more ever since. I spent two years at Brigham Young University, learning more about programming and how code and computers work. I attended General Assembly in the fall of 2017, a 12 week bootcamp where I learned how to build full-stack web applications using technologies like Node.js, React, and Ruby on Rails. I also gained a lot of experience with JavaScript, using Git and GitHub, and working with and helping others to solve problems.
        </p>
    </ProfileDiv>
  )
}

export default Profile;