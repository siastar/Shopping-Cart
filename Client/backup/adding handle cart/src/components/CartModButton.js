import React from 'react';
import './CardComponents.css'

class CartModButton extends React.Component {

    sendButtonType = () =>{
        this.props.handleBrowseButton(this.props.buttonType);
        // calls back handleBrowseButton from the (grand)parent and passes it the buttonType value (prev || next)
        // received from the parent ( CardContainer -> CardNavbar -> CardBrowsebutton )
    }
    
    render () {
        console.log('CartModButton this: ', this);
        return (
            <div>
              <button
                className='accordionbuttons'
                onClick={this.sendButtonType}
              >                
                {this.props.buttonType} {/* writes prev or next in the button*/}
              </button>
            </div>
        );
    }
}

export default CartModButton;
