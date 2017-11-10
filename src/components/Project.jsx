import React from 'react';
import styled from 'styled-components';

const ProjectDiv = styled.div`
  color: rgb(50,50,50);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 35vw;
  max-height: 350px;
  padding: 0 10%;
  .project-img{
    max-height: 300px;
    height: 25vw;
  }
`

const Info = styled.div`
  width: 50%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2{
    font-size: 3em;
    margin: 0 auto;
  }
  p{
    margin: 0 auto;
    font-size: 1.7em;
    text-align: center;
  }
  a{
    margin: 0 auto;
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

const Project = (props) => {
  return (
    <ProjectDiv className={`num${props.index}`}>
      <a target="_blank" rel="noopener noreferrer" href={props.project.deployedLink}>
        <img className="project-img" src={props.project.image} alt='something should be here' title={props.project.title} />
      </a>

      <Info>
        <h2>{props.project.title}</h2>
        <p>{props.project.description}</p>
        <a target="_blank" rel="noopener noreferrer" href={props.project.githubLink}>
          <img src="http://market.designmodo.com/wp-content/uploads/2015/06/github-logo.png" alt="github logo" />
          Repo
        </a>
        {
          props.project.complete ?
            null
            :
            <span><strong>Work in progress</strong></span>
        }
      </Info>

    </ProjectDiv>
  );
}

export default Project;