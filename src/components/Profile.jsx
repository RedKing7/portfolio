import React, { Component } from 'react';
import SpecialtiesList from './SpecialtiesList';
import ProjectList from './ProjectList';
import styled from 'styled-components';

const Footer = styled.footer`
  width: 100%;
  background-color: rgb(70, 70, 70);
  color: white;
`

const Links = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  img{
    margin: 20px;
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

const Title = styled.div`
  width: 75%;
  color: rgb(30, 0, 30);
  small{
    font-size: .7em;
  }
  p{
    text-align: left;
    font-size: 1.2em;
  }
`

class Profile extends Component {

  render() {
    return (
      <div className="profile">
        <Title>
          <h1>
            Rory Johnson
            <br />
            <small>Full Stack Web Developer</small>
          </h1>
          <hr />
          <h2>My Experience</h2>
          <p>
            I first started programming on a TI-83 calculator in my high school math class, and I've been learning more ever since. I spent two years at Brigham Young University, learning more about programming and how code and computers work. I attended General Assembly in the fall of 2017, a 12 week bootcamp where I learned how to build full-stack web applications using technologies like Node.js, React, and Ruby on Rails. I also gained a lot of experience with JavaScript, using Git and GitHub, and working with and helping others to solve problems.
          </p>
        </Title>


        <h2>I have experience using these languages and technologies: </h2>
        <SpecialtiesList />

        <h2>My Projects</h2>
        <ProjectList />
        <Footer>
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