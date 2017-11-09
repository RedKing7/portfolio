import React from 'react';
import styled from 'styled-components';

const EducationDiv = styled.div`
  width: 100%;
  text-align: center;
  h1{
    font-size: 3em;
    margin: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    width: 100%;
    background-color: rgb(169,193,197);
    color: white;
  }
`
const School = styled.div`
  width: 100%;
  height: 30vw;
  height: 35vw;
  max-height: 300px;
  margin: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img{
    margin: 0 5%;
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
`

const Education = () => {
  return (
    <EducationDiv>
      <h1>Education</h1>
      <School id="school1">
        <img src="images/byu.png" alt="Brigham Young University Provo" />
        <Info>
          <h2>Class</h2>
          <p>
            Two years of Computer Science classes
          </p>
        </Info>
      </School>
      <School id="school2">
        <img src="http://static-assets.generalassemb.ly/logos/generalassembly-open-graph.png" alt="General Assembly" />
        <Info>
          <h2>Class</h2>
          <p>
            Twelve week Web Development Immersive course
          </p>
        </Info>
      </School>
    </EducationDiv>
  );
};

export default Education;