import React, { Component } from 'react';
import styled from 'styled-components';

const ProjectDiv = styled.div`
  color: rgb(50,50,50);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 32vw;
  max-height: 300px;
  img{
    max-width: 200px;
    width: 20vw;
  }
`

const Info = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  h2{
    font-size: 3em;
    margin: 5px auto;
  }
  p{
    margin: 10px auto;
    font-size: 1.5em;
    text-align: center;
  }
  a{
    align-self: center;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: rgb(50,50,50);

    img{
      margin-right: 10px;
      width: 5vw;
      max-width: 30px;
    }
  }
`

class Project extends Component {
  render() {
    return (
      <ProjectDiv className={`num${this.props.index}`}>
        <a target="_blank" rel="noopener noreferrer" href={this.props.project.deployedLink}>
          <img src={this.props.project.image} alt='something should be here' title={this.props.project.title} />
        </a>

        <Info>
          <h2>{this.props.project.title}</h2>
          <p>{this.props.project.description}</p>
          <a target="_blank" rel="noopener noreferrer" href={this.props.project.githubLink}>
            <img src="http://market.designmodo.com/wp-content/uploads/2015/06/github-logo.png" alt="github logo" />
            Repo
          </a>
          {
            this.props.project.complete ?
              null
              :
              <span><strong>Work in progress</strong></span>
          }
        </Info>

      </ProjectDiv>
    );
  }
}

export default Project;