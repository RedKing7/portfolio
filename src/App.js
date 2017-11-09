import React, { Component } from 'react';
import Profile from './components/Profile';
import SpecialtiesList from './components/SpecialtiesList';
import styled from 'styled-components';
import ProjectList from './components/ProjectList';

const Main = styled.div`
  font-size: 2vw;
  @media(min-width: 600px){
    font-size: 90%;
  }

`
const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  background-color: rgb(46,44,50);
  color: white;
  
  font-size: 2em;

  img{
    max-width: 300px;
    max-height: 300px;
    min-width: 150px;
    min-height: 150px;
    width: 25vw;
    height: 25vw;
    border-radius: 50%;
    border: 3px solid white;
    margin: 15px;
  }
  h1{
    margin-top: 0;
    margin-bottom: 0;
  }
  h4{
    margin-top: 0;
    margin-bottom: 20px;    
    font-weight: 100;
    letter-spacing: .1em;
  }

  @media(max-width: 400px){
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

`
const Footer = styled.footer`
  width: 100%;
  background-color: rgb(109,109,109);
`

const Links = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img{
    width: 8vw;
    max-width: 50px;
  }
`

class App extends Component {
  render() {
    return (
      <Main>
        <Header>
          <img src='https://avatars0.githubusercontent.com/u/30734199?v=4&s=460' className="portrait" alt="me" />
          <div>
            <h1>Rory Johnson</h1>
            <h4>full stack web developer</h4>
          </div>
        </Header>
        <SpecialtiesList />
        <ProjectList />
        <Profile />
        <Footer>
          <Links>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/RedKing7"><img src="images/Github.png" alt="github" /></a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rory-johnson-2aa396133/"><img src="images/Linkedin.png" alt="linkedin" /></a>
            </div>
          </Links>
        </Footer>
      </Main>
    );
  }
}

export default App;
