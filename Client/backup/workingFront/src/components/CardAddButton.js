import React from 'react';
import './CardComponents.css'


class CardAddButton extends React.Component {

    

    render() {  
        return (            
            <div>
              <button                
                onClick={this.props.handleCartButton}//calls back parent function
              >                
                add to cart
              </button>
            </div>  
        );        
    }
}


export default CardAddButton;

