import React, { Component } from "react";
import './button.css';


class Row6 extends React.Component {
  render() {
    return (
      <div className="Row6">
        <button type="button" icon="fa-solid fa-plus"  class="button button1">+</button>
        
        <button type="button" class="button button1" >C</button>
        <button type="button" class="button button1">x</button>
      </div>
    );
  }
}

export default Row6;
