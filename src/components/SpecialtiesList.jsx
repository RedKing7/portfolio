import React, { Component } from 'react';
import Specialty from './Specialty';
import styled from 'styled-components';

const Specialties = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 25vw;
  max-height: 120px;
  align-items: center;
  align-content: center;
`

class SpecialtiesList extends Component {
  render() {
    const specialties = [
      {
        title: 'JavaScript',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/240px-Unofficial_JavaScript_logo_2.svg.png',
        image_alt: 'javascript logo',
        description: ''
      },
      // {
      //   title: 'HTML',
      //   image: 'https://image.freepik.com/free-icon/html-coding_318-31306.jpg',
      //   image_alt: 'html logo',
      //   description: 'Markup skills'
      // },
      {
        title: 'CSS',
        image: 'http://img.freepik.com/free-icon/css-file-format-with-brackets_318-45223.jpg?size=338&ext=jpg',
        image_alt: 'css logo',
        description: 'Styling skills'
      },
      {
        title: 'React',
        image: 'https://cdn.worldvectorlogo.com/logos/react.svg',
        image_alt: 'react logo',
        description: 'React skills'
      },
      {
        title: 'Node',
        image: 'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png',
        image_alt: 'node logo',
        description: 'Node.js skills'
      },
      // {
      //   title: 'Ruby',
      //   image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1000px-Ruby_logo.svg.png',
      //   image_alt: 'ruby logo',
      //   description: 'Ruby skills'
      // },
      {
        title: 'Ruby on Rails',
        image: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Ruby_on_Rails-logo.png',
        image_alt: 'Rails logo',
        description: 'Rails skills'
      },
      // {
      //   title: 'SQL',
      //   image: 'http://tapoueh.org/img/old/sql-logo.png',
      //   image_alt: 'SQL logo',
      //   description: 'SQL skills'
      // },
      // {
      //   title: 'C++',
      //   image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/306px-ISO_C%2B%2B_Logo.svg.png',
      //   image_alt: 'C++ logo',
      //   description: 'Some C++ skills'
      // },
      // {
      //   title: 'Java',
      //   image: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/419px-Java_programming_language_logo.svg.png',
      //   image_alt: 'Java logo',
      //   description: 'Some Java skills'
      // },
      // {
      //   title: 'MongoDB',
      //   image: 'https://cacm.acm.org/system/assets/0002/7119/042117_Theodo_MongoDB.large.jpg?1492791427&1492791427',
      //   image_alt: 'MongoDB logo',
      //   description: 'Mongo skills'
      // },
      {
        title: 'SQL and NoSQL',
        image: 'http://www.iconarchive.com/download/i90469/icons8/windows-8/Database.ico',
        image_alt: 'database icon'
      },
      {
        title: 'Git/Github',
        image: 'https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png',
        image_alt: 'GitHub logo',
        description: 'Git/Github skills'
      }
    ]

    return (
      <Specialties>
        {
          specialties.map((specialty, index) => {
            return <Specialty title={specialty.title} image={specialty.image} image_alt={specialty.image_alt} description={specialty.description} key={index} />
          })
        }
      </Specialties>
    )
  }
}

export default SpecialtiesList;