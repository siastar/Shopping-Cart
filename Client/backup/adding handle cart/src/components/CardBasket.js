import React from 'react';
import './CardComponents.css'
import CartModButton from './CartModButton.js'
import AccordionBasket from './Accordion/AccordionBasket.js'

class CardBasket extends React.Component{


    sendButtonType = () =>{
        this.props.onCartModify(this.props.buttonType);
        // calls back onCartModify  from the (grand)parent and passes it the buttonType value (add || remove)
        // received from the parent ( CardContainer -> CardShoppingPanel -> CardBrowsebutton )
    }



    
    render() {

        console.log('CardBasket this: ', this);
        //returns this-props.data{...}
        return (
           
            <div className='basket'>
              <AccordionBasket
                data={this.props.data}
              />
             
              {/* <p> id {this.props.data.id} </p> */}
              {/* <p> product: {this.props.data.title} </p> */}
              {/* <p> price: € {this.props.data.price * this.props.data.qt} </p> */}
              {/* <p> qt {this.props.data.qt} </p> */}
              <button
                className='accordionbuttons'
                buttonType='add'
                onClick={this.sendButtonType}
                     >
                       +
              </button>
              <button
                className='accordionbuttons'
                buttonType='remove'
                onClick={this.sendButtonType}                       
              >
                -
              </button>
            </div>

        );
    }
}
export default CardBasket;

