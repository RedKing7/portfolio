import React, { Component } from 'react';
import styled from 'styled-components';

const SpecialtyDiv = styled.div`
  margin: 5px auto;
  width: 10vw;
  max-height: 60px;
  text-align: center;

  font-size: 8px;

  img{
    width: 60px;
    height: 60px;
    margin: 1px;
  }

  h2{
    display: none;
  }

  :hover{
    h2{
      display: block;
    }
  }

  @media(max-width: 500px){
    img{
      width: 10vw;
      height: 10vw;
    }
    :hover{
      h2{
        font-size: 4px;
      }
    }
  }
`



class Specialty extends Component {
  render() {
    return (
      <SpecialtyDiv>
        <img src={this.props.image} alt={this.props.image_alt} title={this.props.title} />
        <h2>{this.props.title}</h2>
        {/* <p>{this.props.description}</p> */}
      </SpecialtyDiv>
    )
  }
}

export default Specialty;