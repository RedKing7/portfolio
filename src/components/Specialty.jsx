import React, { Component } from 'react';

class Specialty extends Component {
  render() {
    return (
      <div className="specialty">
        <img src={this.props.image} alt={this.props.image_alt} />
        <h2>{this.props.title}</h2>
        {/* <p>{this.props.description}</p> */}
      </div>
    )
  }
}

export default Specialty;