import React from 'react';
import reactDom from 'react-dom';

function Myarray(props) {
    const numbers = [1,2,3,4,5,6,7,8]
    const newlist = numbers.map((number) => <li> {number} </li>) 
    return (
      <ul>{newlist}</ul>  );
  }
  export default Myarray;



