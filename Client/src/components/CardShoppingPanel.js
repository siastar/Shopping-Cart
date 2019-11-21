import React from 'react';
import CardAddButton from './CardAddButton.js'
import CardBasket from './CardBasket.js'
import './CardComponents.css'


class CardShoppingPanel extends React.Component{

    // showShop() {
    //     console.log('showShop working...');
    //     return(<p> reached !!!</p> );
    // }

    totalPrice(){
        let initVal = 0;
        let totalPrice = this.props.cart.reduce(
            function(total, curVal) {
                return(
                    total + curVal.qt*curVal.price                                
                );                
            },initVal
        )        
        return totalPrice;
    }
    
    
    render() {

        console.log('shopping panel, this.props: ', this.props);
        // cart array and handleCart function
        console.log('shopping panel, this,props.cart: ', this.props.cart);
        // cart array
        
        const shopper = this.props.cart.map(
            product => <CardBasket
                         className=''
                         key={product.id}
                         data={product}
                         cartIndex={this.props.cart.indexOf(product)}
                         onCartModify={this.props.onCartModify}
                       /> 
        )
        /* for any object in the "cart" array call CardBasket and pass it
           informations (all product data and a key value)
           map creates a "CardBasket" element for any "product" object 
            in the "cart" array
        */
        
        console.log('shopper: ', shopper);
        
        return (
            <div className='shoppingpanel'>
              <CardAddButton
                handleCartButton={this.props.handleCartButton}/>
              <div>
                <h4> TOTAL:  {(this.totalPrice()).toFixed(2)}</h4>
                <div> {shopper} </div> {/* <CardBasket /> */}
              </div>  {/* renders the array shopper*/}            
            </div>           
        );
    }
}
export default CardShoppingPanel;



