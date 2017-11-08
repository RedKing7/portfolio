import React, { Component } from 'react';

class Project extends Component {
  render() {
    return (
      <div className='project'>
        <img src={this.props.image} alt='something should be here' />
        <br />
        <h1>Project {this.props.project}</h1>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <br />
        <a href={this.props.deployedLink}>Deployed Site</a>
        <br />
        <a href={this.props.githubLink}>Github repo</a>
        <br />
        {
          this.props.complete ?
            <span><strong>Complete</strong></span>
            :
            <span><strong>Work in progress</strong></span>
        }
      </div>
    );
  }
}

export default Project;