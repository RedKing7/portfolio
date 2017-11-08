import React, { Component } from 'react';
import styled from 'styled-components';

const SpecialtyDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  background-color: rgb(230, 230, 230);
  box-shadow: -2px 2px 5px black;

  width: 125px;
  margin: 5px;

  :hover{
    box-shadow: -3px 3px 10px black;
  }

  img{
    border: 1px rgba(0, 0, 0, 0.42) solid;
    background-color: white;
    border-radius: 5px;
    min-width: 50px;
    max-width: 150px;
    width: 75%;
    margin: 5px;
    vertical-align: middle;
    align-self: center;
  }

  p{
    text-align: left;
    margin-left: 5%;
  }
`



class Specialty extends Component {
  render() {
    return (
      <SpecialtyDiv>
        <img src={this.props.image} alt={this.props.image_alt} />
        <h2>{this.props.title}</h2>
        {/* <p>{this.props.description}</p> */}
      </SpecialtyDiv>
    )
  }
}

export default Specialty;