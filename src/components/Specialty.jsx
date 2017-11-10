import React from 'react';
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
  }

  p{
    display: none;
    padding: none;
    margin: 0;
  }

  :hover{
    p{
      display: block;
      font-weight: 600;
      font-size: 2em;
    }
  }

  @media(max-width: 500px){
    img{
      width: 10vw;
      height: 10vw;
    }
    :hover{
      p{
        font-size: 4px;
      }
    }
  }
`



const Specialty = (props) => {
  return (
    <SpecialtyDiv>
      <img src={props.image} alt={props.image_alt} title={props.title} />
      <p>{props.title}</p>
      {/* <p>{props.description}</p> */}
    </SpecialtyDiv>
  )
}

export default Specialty;