import React from 'react';
import picture from './../DB/imgDataBase/prod001/img01.jpg'
//import './App.css';

function CardImage(props) {
    console.log('this cardimage: ', props);
    let imagePath = props.data.imgPath
    console.log('image path: ', imagePath );
    return (
        <div className='imgdiv'>
          <p>{imagePath}</p>
          <br/>
          <img
            src={imagePath}
            alt="missing image"/>
      </div>
  );
}
export default CardImage;
