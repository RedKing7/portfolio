import React, { Component } from 'react';
import styled from 'styled-components';

const ProjectDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  align-items: center;

  /* border: 3px rgba(0, 0, 0, 0.7) solid; */
  box-shadow: -2px 2px 5px black;
  background-color: rgb(230, 230, 230);

  min-width: 200px;
  max-width: 300px;
  width: 30vw;

  padding: 5px;
  margin: 15px;

  :hover{
    box-shadow: -3px 3px 10px black;
  }

  p{
    margin: 0 10%;
  }
  a{
    width: 70%;
    align-self: center;
    margin: 5px;
    text-decoration: none;
    color: #303030;
    font-weight: bold;
    :hover{
      color: #480078;
    }
  }
  img{
    border: 1px rgb(0, 0, 0) solid;
    width: 100%;
    min-width: 100px;
    max-width: 300px;
  }
`

class Project extends Component {
  render() {
    return (
      <ProjectDiv>
        <a target="_blank" href={this.props.deployedLink}>
          <img src={this.props.image} alt='something should be here' title={this.props.title} />
        </a>
        <br />
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        <br />
        <a href={this.props.githubLink}>
          GitHub Repository
        </a>
        <br />
        {
          this.props.complete ?
            null
            :
            <span><strong>Work in progress</strong></span>
        }
      </ProjectDiv>
    );
  }
}

export default Project;