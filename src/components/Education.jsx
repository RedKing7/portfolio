import React from 'react';
import styled from 'styled-components';

const EducationDiv = styled.div`
  color: rgb(50,50,50);
  width: 100%;
`
const Title = styled.div`
  background-color: rgb(169,193,197);
  width: 100%;
  height: 15vw;
  max-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;

  h1{
    font-size: 3.5em;
    color: white;
    line-height: inherit;
    margin: 0;
  }
`
const School = styled.div`
  width: 100%;
  /* height: 35vw; */
  margin: 0;
  padding-top: 10px;
  padding-bottom: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img{
    margin-left: 5%;
    height: 20vw;
    max-height: 250px;
  }
`
const Info = styled.div`
  margin: 0 10%;
  display: flex;
  flex-direction: column;
  h2{
    margin: 0;
  }
  p{
    text-align: left;
    font-size: 1.2em;
  }
`

const Education = () => {
  return (
    <EducationDiv>
      <Title>
        <h1>Education</h1>
      </Title>
      <School id="school1">
        <img src="images/generalassembly-open-graph.png" alt="General Assembly" />
        <Info>
          <h2>Web Development Immersive</h2>
          <p>
            I attended General Assembly in the fall of 2017, a 12 week bootcamp where I learned how to build full-stack web applications using technologies like Node.js, React, and Ruby on Rails. I also gained a lot of experience with JavaScript, using Git and GitHub, and working with and helping others to solve coding problems. During the course, I built the projects listed above, each with their own restraints and deadlines.
          </p>
        </Info>
      </School>
      <School id="school2">
        <img src="images/byu.png" alt="Brigham Young University Provo" />
        <Info>
          <h2>Brigham Young University</h2>
          <p>
            I spent two years at Brigham Young University, learning the basics of C++ and a bit of C and Assembly. I made several command-line programs, and overall gained a greater understanding of programming, especially object-oriented programming.
          </p>
        </Info>
      </School>
    </EducationDiv>
  );
};

export default Education;