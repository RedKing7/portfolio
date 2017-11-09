import React, { Component } from 'react';
import Project from './Project';
import styled from 'styled-components';


const ProjectListDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(88, 52, 119, .2);
  h1{
    text-align: center;
    font-size: 5em;
    width: 100%;
    background-color: rgb(88, 52, 119);
    color: white;
    margin: 0;
    padding-top: 5vw;
    padding-bottom: 5vw;
  }
`

class ProjectList extends Component {
  render() {
    const projectList = [
      {
        project: 1,
        title: 'Simon',
        description: 'Built in 3 days using CSS, JavaScript and jQuery',
        image: 'images/simon.png',
        deployedLink: 'https://redking7.github.io/simon/',
        githubLink: 'https://github.com/RedKing7/simon',
        complete: true
      },
      {
        project: 2,
        title: 'Minesweeper',
        description: 'Built in a week using JavaScript and jQuery.',
        image: 'images/minesweep.png',
        deployedLink: 'https://redking7.github.io/minesweep/index.html',
        githubLink: 'https://github.com/RedKing7/minesweep',
        complete: true
      },
      {
        project: 3,
        title: 'Meal Planner',
        description: 'An app designed to help plan meals, built using Express, Handlebars, and MongoDB.',
        image: 'images/meal.png',
        deployedLink: 'https://mighty-wildwood-25730.herokuapp.com/',
        githubLink: 'https://github.com/RedKing7/meal_planner',
        complete: true
      },
      {
        project: 4,
        title: 'Game Backlog',
        description: 'An app used to keep track of various games a user has, wants to play, and \'needs to finish\'. Built using React.js with React-Router, MongoDB, and Styled Components.',
        image: 'images/project3.png',
        deployedLink: 'https://game-backlog.herokuapp.com/',
        githubLink: 'https://github.com/RedKing7/wdi-project3',
        complete: true
      },
      // {
      //   project: 5,
      //   title: 'Project 4',
      //   description: 'work in progress',
      //   image: '',
      //   deployedLink: '',
      //   githubLink: '',
      //   complete: false
      // }
    ];

    return (
      <ProjectListDiv>
        <h1>Projects</h1>
        {
          projectList.map((project, index) => {
            return <Project
              project={project}
              key={index}
              index={index + 1}
            />
          })
        }
      </ProjectListDiv>
    );
  }
}

export default ProjectList;