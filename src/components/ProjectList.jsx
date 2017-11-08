import React, { Component } from 'react';
import Project from './Project'

class ProjectList extends Component {
  render() {
    const projectList = [
      {
        project: 1,
        title: 'Simon',
        description: 'A recreation of the game Simon, built in 3 days using CSS, JavaScript and jQuery',
        image: 'images/simon.png',
        deployedLink: 'https://redking7.github.io/simon/',
        githubLink: 'https://github.com/RedKing7/simon',
        complete: true
      },
      {
        project: 1.5,
        title: 'Minesweeper',
        description: 'A faithful recreation of the classic windows-bundled game Minesweeper, built in a week using JavaScript and jQuery.',
        image: 'images/minesweep.png',
        deployedLink: 'https://redking7.github.io/minesweep/index.html',
        githubLink: 'https://github.com/RedKing7/minesweep',
        complete: true
      },
      {
        project: 2,
        title: 'Meal Planner',
        description: 'An app designed to help plan meals, built using Express, Handlebars, and MongoDB.',
        image: 'images/meal.png',
        deployedLink: 'https://mighty-wildwood-25730.herokuapp.com/',
        githubLink: 'https://github.com/RedKing7/meal_planner',
        complete: true
      },
      {
        project: 3,
        title: 'Game Backlog',
        description: 'An app used to keep track of various games a user has, wants to play, and \'needs to finish\'. Built using React.js with React-Router, MongoDB, and Styled Components.',
        image: 'images/project3.png',
        deployedLink: 'https://game-backlog.herokuapp.com/',
        githubLink: 'https://github.com/RedKing7/wdi-project3',
        complete: true
      },
      // {
      //   project: 4,
      //   title: 'Project 4',
      //   description: 'work in progress',
      //   image: '',
      //   deployedLink: '',
      //   githubLink: '',
      //   complete: false
      // }
    ];

    return (
      <div className='projectList'>
        {
          projectList.map((project, index) => {
            return <Project
              project={project.project}
              title={project.title}
              description={project.description}
              image={project.image}
              deployedLink={project.deployedLink}
              githubLink={project.githubLink}
              complete={project.complete}
              key={index}
            />
          })
        }
      </div>
    );
  }
}

export default ProjectList;