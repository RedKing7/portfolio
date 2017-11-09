import React, { Component } from 'react';
import SpecialtiesList from './SpecialtiesList';
import ProjectList from './ProjectList';
import styled from 'styled-components';

const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;

  h2{
    font-size: 2em;
    color: white;
    margin: 0;
    padding: 20px;
    text-align: center;
    width: 100%;
    background-color: rgb(208,200,190);
  }

  p{
    margin: 0;
    width: 100%;
    background-color: rgb(219,212,204);
    padding: 5% 10%;
    font-size: 2em;
    font-weight: 100;
  }
`

class Profile extends Component {

  render() {
    return (
      <ProfileDiv>
        <h2>About</h2>
        <p>
          I first started programming on a TI-83 calculator in my high school math class, and I've been learning more ever since. I spent two years at Brigham Young University, learning more about programming and how code and computers work. I attended General Assembly in the fall of 2017, a 12 week bootcamp where I learned how to build full-stack web applications using technologies like Node.js, React, and Ruby on Rails. I also gained a lot of experience with JavaScript, using Git and GitHub, and working with and helping others to solve problems.
        </p>
      </ProfileDiv>
    )
  }
}

export default Profile;