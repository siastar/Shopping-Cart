import React from 'react';
//import './App.css';

function CardTitle(props) {
    console.log('CardTitle received data:');
    console.log('props:', props);
    console.log('props.data:', props.data);
    
  return (
      <div className='title'>
        <h3> {props.data.title}  </h3> {/*data is defined in CardContainer <Cardtitle data={...}>  */}
    </div>
  );
}

export default CardTitle;
