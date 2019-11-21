import React from 'react';
import './CardComponents.css'

class CartModButton extends React.Component {
   
    sendCartModifier = () => {
        console.log('sendCartModifier this:', this);
        const cartModifier = {
            buttonType: this.props.buttonType,
            cartIndex: this.props.cartIndex                     
        }
        
        this.props.onCartModify(cartModifier);
    }
    
    render () {
        //console.log('CartModButton this.props: ', this.props);
        //console.log('CartModButton this.props.buttonType:' , this.props.buttonType)
        return (
            <div>
              <button
                className='accordionbuttons'
                onClick={this.sendCartModifier}
              >                
                {this.props.buttonType} {/* writes - or + in the button*/}
              </button>
            </div>
        );
    }
}

export default CartModButton;
