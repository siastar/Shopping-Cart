import React from 'react';
//import './App.css';

function CardPrice(props) {
  return (
      <div className='price'>
        <p> $ {props.data.price} </p>
    </div>
  );
}

export default CardPrice;
