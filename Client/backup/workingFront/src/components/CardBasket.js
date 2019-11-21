import React from 'react';
import './CardComponents.css'
import CartModButton from './CartModButton.js'
import AccordionBasket from './Accordion/AccordionBasket.js'

class CardBasket extends React.Component{
    
    render() {

        console.log('CardBasket this.props: ', this.props);
        //returns this-props.data{...}
        return (
           
            <div className='basket'>


              <div className='accordiondatapanel'>
              <AccordionBasket
            /* className='basket' */
                data={this.props.data}
              />
               </div>
              
              
              <div className='accordiondatapanel'>
              <CartModButton
                className='accordionbuttons'
                buttonType='-'
                cartIndex={this.props.cartIndex}
                onCartModify={this.props.onCartModify}
               />
               </div>
                                     
            <div className='accordiondatapanel'>
              <CartModButton
                className='accordionbuttons'
                buttonType='+'
                cartIndex={this.props.cartIndex}
                onCartModify={this.props.onCartModify}                       
              />
            </div>
                              
            </div>

        );
    }
}
export default CardBasket;

