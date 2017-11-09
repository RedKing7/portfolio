import React, { Component } from 'react';
import styled from 'styled-components';

const ProjectDiv = styled.div`

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