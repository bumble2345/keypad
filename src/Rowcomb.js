import React, { Component } from "react";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import Row4 from "./Row4";
import Row5 from "./Row5";
import Row6 from "./Row6";


class Rowcomb extends React.Component {
  render() {
    return (
        <div className="Rowcomb"> 
     <Row1/>
     <Row2/>
     <Row3/>
     <Row4/>
     <Row5/>
     <Row6/>
     </div>
    );
  }
}

export default Rowcomb;
