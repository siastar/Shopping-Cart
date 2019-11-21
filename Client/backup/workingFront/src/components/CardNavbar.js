import React from 'react';
import CardBrowseButton from './CardBrowseButton.js'

class CardNavbar extends React.Component{

    render() {
        console.log('CardNavbar this is: ', this);
        console.log('CardNavbar index is:', this.props.index);
        
        return (
            <div className='navbar'>
              <CardBrowseButton
                
                handleBrowseButton={this.props.handleBrowseButton}
                buttonType='prev'
              />
              
              <button> view your cart </button>
              
              <CardBrowseButton
                handleBrowseButton={this.props.handleBrowseButton}
                buttonType='next'
              />
            </div>
        );
    }
}
export default CardNavbar;









