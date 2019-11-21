import React from 'react';
//import './App.css';

function CardDescription(props) {
  return (
      <div className='description'>
      <p> {props.data.description} </p>
    </div>
  );
}

export default CardDescription;
