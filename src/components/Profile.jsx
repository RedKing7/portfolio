import React, { Component } from 'react';
import SpecialtiesList from './SpecialtiesList';
import ProjectList from './ProjectList';
import styled from 'styled-components';

const Footer = styled.footer`
  background-color: rgb(70, 70, 70);
  color: white;
`

const Links = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  img{
    margin: 0 20px;
    width: 50px;
  }
  div{
    display: flex;
    align-items: center;
    a{
      text-decoration: none;
      color: black;
      font-size: 18px;
    }
    a:hover{
      color: blue;
    }
  }
`

class Profile extends Component {

  render() {
    return (
      <div className="profile">
        <h1>Rory Johnson</h1>

        <p>
          Full Stack Web Developer
            </p>

        <h2>Experience</h2>
        <SpecialtiesList />

        <h2>My Projects</h2>
        <ProjectList />
        <Footer>
          <h4>Links</h4>
          <Links>
            <div>
              <a href="https://github.com/RedKing7"><img src="images/Github.png" alt="github" /></a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/rory-johnson-2aa396133/"><img src="images/Linkedin.png" alt="linkedin" /></a>
            </div>
          </Links>
        </Footer>
      </div>
    )
  }
}

export default Profile;