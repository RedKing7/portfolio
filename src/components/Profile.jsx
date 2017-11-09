import React, { Component } from 'react';
import SpecialtiesList from './SpecialtiesList';
import ProjectList from './ProjectList';
import styled from 'styled-components';

const ProfileDiv = styled.div`

`
const Footer = styled.footer`

`
const Links = styled.span`

`
const Header = styled.div`

`

class Profile extends Component {

  render() {
    return (
      <ProfileDiv>
        <Header>
          <hr />
          <h2>My Experience</h2>
          <p>
            I first started programming on a TI-83 calculator in my high school math class, and I've been learning more ever since. I spent two years at Brigham Young University, learning more about programming and how code and computers work. I attended General Assembly in the fall of 2017, a 12 week bootcamp where I learned how to build full-stack web applications using technologies like Node.js, React, and Ruby on Rails. I also gained a lot of experience with JavaScript, using Git and GitHub, and working with and helping others to solve problems.
          </p>
        </Header>


        <h2>I have experience using these languages and technologies: </h2>
        <SpecialtiesList />
        <br />
        <h1>My Projects</h1>
        <ProjectList />
        <Footer>
          <Links>
            <div>
              <a target="_blank" href="https://github.com/RedKing7"><img src="images/Github.png" alt="github" /></a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/rory-johnson-2aa396133/"><img src="images/Linkedin.png" alt="linkedin" /></a>
            </div>
          </Links>
        </Footer>
      </ProfileDiv>
    )
  }
}

export default Profile;