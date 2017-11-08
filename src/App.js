import React, { Component } from 'react';
import Profile from './components/Profile';
import styled from 'styled-components';

const Main = styled.div`
  text - align: center;
  background: white;
  text-align: center;
  color: #303030;
  hr{
    width: 100%;
  }
`
const Header = styled.header`
  background-color: rgb(40, 0, 77);
  height: 150px;
  padding: 20px;
  color: white;

  img {
    height: 150px;
    border-radius: 100px;
  }
`

class App extends Component {
  render() {
    return (
      <Main>
        <Header>
          <img src='https://avatars0.githubusercontent.com/u/30734199?v=4&s=460' className="portrait" alt="me" />
        </Header>
        <Profile />
      </Main>
    );
  }
}

export default App;
