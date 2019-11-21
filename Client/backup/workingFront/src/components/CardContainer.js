//components
import React from 'react';
import CardNavbar from './CardNavbar.js';
import CardTitle from './CardTitle.js';
import CardImage from './CardImage.js';
import CardDescription from './CardDescription.js';
import CardPrice from './CardPrice.js';
import CardShoppingPanel from './CardShoppingPanel.js';
//dataBase
import productDataBase from './../DB/productDataBase.js'
//style
import './CardComponents.css';

class CardContainer extends React.Component {
    constructor() {
        super()
        this.state={
            productIndex: 0,
            buttonType: '',
            check: 'state reached!',
            nowShowing: {},
            cart: [],
            productDB: productDataBase
        }
    }

     //---------------------------------------------------------------------------------------------------------------------------------------------------
    
    showStuff(){
        let index=this.state.productIndex;
        let toShow = this.state.productDB[index]; //the actual "product object" contained in the DB array (json)        
        return(toShow);
        //showStuff send to the components the "product object" (toShow) by picking it from its
        //own position (index) in the array in the product database array.
    }

     //---------------------------------------------------------------------------------------------------------------------------------------------------

    onCartModify = (cartModifier) => {
       
        let qtMod = 1;
        if (cartModifier.buttonType === '+') { qtMod = 1 }
        if (cartModifier.buttonType === '-') { qtMod = -1 }
        const temporaryCart = [...this.state.cart];
        let prodToMod = temporaryCart[cartModifier.cartIndex]; 
        prodToMod.qt = prodToMod.qt + qtMod;
        
        if (prodToMod.qt < 1) {
            temporaryCart.splice(cartModifier.cartIndex,1);
        }

        this.setState({cart: temporaryCart});
    }

    
    //---------------------------------------------------------------------------------------------------------------------------------------------------

    
    handleBrowseButton = (buttonType) => {
        let indexMod=0;
        //according to the pressed button provides a 'next' or 'prev' value.
        //then assign +1 or -1 (indexMod) to increase or decrease productIndex.
        //productIndex determines the showed object in the database array
        if (buttonType === 'prev'){indexMod = -1}
        if (buttonType === 'next'){indexMod = 1}
        // at this point we need to change the productIndex in the state in order to change the visualized product
        // to do this we need to update the state by using setState and indexMod

        // 1st  we grab the current productIndex in state
        let currentIndex = this.state.productIndex;
        // 2nd we modify currentIndex with indexMod which could be +1 or -1 according to the next or prev button parameters
        let newIndex = currentIndex + indexMod;
        // 3rd we update the state to replace current index with new index value
        // this.setState({productIndex: newIndex});
        
        // but it come out a problem, what if newIndex goes out of the productDB array index range? dafaq!?! 
        // case of newIndex is less than zero or greater than array length:
        // productDB index range is 0 - this.state.productDB.length.
        // what we need before to update the state is:
        // turn newIndex to 0 if it exceeds productDB.length
        // turn newIndex to productDB.lenght if it goes lesser than 0
        // this way we should be able to cycle the indexes forward 0-1-2-0-1-2... or backward 0-2-1-0-2-1...
        // LAST BUT NOT LEAST remember that array index goes from 0 for the 1st element to (length -1) for the last element 
        // [element 1, element 2, element 3, ... , element n]
        //  index 0    endex 1    index 2   ....   index n-1
        // so our maxIndex needs to ber reduced and will be (array.length -1);
        
        let maxIndex = (this.state.productDB.length -1);
        if (newIndex > maxIndex) {
            newIndex = 0; // turn newIndex to 0 if it exceeds productDB.length
        }
        else if (newIndex < 0) {
            newIndex = maxIndex; //turn newIndex to productDB.lenght if it goes lesser than 0
        }
        else {
            console.log('newIndex' , newIndex , 'is properly ranged')
        }

        this.setState({productIndex: newIndex});
        console.log('updated product index is: ', this.state.productIndex);
    }    


    //---------------------------------------------------------------------------------------------------------------------------------------------------

    
    handleCartButton = () => {
        const currentProduct = this.showStuff();
        //showStuff is back!!! reminder: showStuff defines a product object from the productDB
        //array, based on the object index in the array itself. By tying the add to cart button to the
        //showed object in the array we caneasily add stuff to the shopping cart.
        // the chosen item will be pushed into the cart array in the state as a full object
        // with all its properies.
        // in order to avoid messy array with duplicates objects we will 
        // check if the new item to add is already present in the cart, in that case instead of
        // adding a new product object, we will modify the number of that object in the cart array.
        // we're going to use object id property to look for already existing copies of the objects,
        // ...therefore we need a quantity property in the product objects.
        // luckily we can add a property to an object on the fly so we don't touch the product DB
        // obj['property_name'] = 'some_value'; sooo...

        // 1st: add a qt (quantity) property to the currentProduct.
        //   Because this is a cyclic process the initialization of the new property must be
        //   done only if the property still not exists, otherwise at every cycle the qt would be
        //   reset to 1. (spent 3 hours on this point)
        //   - 'in' operator reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in
        //   the or part || has been added because handling cart with + and - buttons can cause the quantity to go to zero
        //   with the consequence that in the cart we could see a product showed with quantity = 0, if that happens the
        //   quantity is automatically turned to 1
        
        if ('qt' in currentProduct === false || currentProduct.qt === 0)  {
            currentProduct.qt = 1;
        }
        
        // 2nd: extract the current product id in order to find duplicates later
        const id = currentProduct.id;
        // 3rd: duplicate the cart array in the state, we will work on a copy of the
        // cart array in the state and only in the end we will update the state.
        const temporaryCart = [...this.state.cart];
        // 4th: push the current item in the temporaryCart array
        // (now the current item has a quantity (qt) property) 
        temporaryCart.push(currentProduct);
        // now the chosen object has been pushed into the array and is array's last element .
        // what we need to achieve now is that if in the array there already is an equal object
        // instead of having a messy objects array like
        // [{item1}, {item2}, {item3}, {item1}, {item4}, {item1}, ... ,{itemN}]
        // which could be tricky to handle, we will have
        // [{item1, qt:3}, {item2, qt:1}, {item3, qt1}, {item4, qt2}, ... ,{itemN}]
        // let's go:
        // 5th: the check for duplicates must start only if in the temporaryCart array there's
        // at least 1 element, therefore only if temporaryCart.length > 1
        
        if(temporaryCart.length > 1) { //that it means if the array has at least 2 objects            
            const lastIn = temporaryCart[temporaryCart.length -1];
            // isolate the last added object in a lastIn variable in order to compare it for
            // equals ones into the array
            // length -1 because  array's indexing starts from 0 and ends to its length -1
            for (let i = temporaryCart.length - 2 ; i >= 0 ; i-- ) {
                //for any element in the array excluded the last added one
                if (lastIn.id === temporaryCart[i].id){
                    temporaryCart[i].qt ++;
                    temporaryCart.pop();
                }        
            }          
        }
        else{
            console.log('added new item to temp cart: \n', temporaryCart);           
        }
        this.setState({cart: temporaryCart});
    }
    

    //---------------------------------------------------------------------------------------------------------------------------------------------------


    render(){
        
       // console.log('parent this is: ', this)
       // console.log('checking the state access from CardContainer...' , this.state.check)        
       // for (let i=0; i<=2; i++){ console.log('checking  DB access from CardContainer...', this.state.productDB[i].description);}

        return (
            <div className='cardcontainer'>

              {/* <p>hello</p> */}
              {/* <h4> {this.state.check} </h4> */}
              {/* <h4> index {this.state.productIndex} </h4> */}

              <CardNavbar
                handleBrowseButton={this.handleBrowseButton} /* callback function */
                index={this.state.productIndex}
                data={this.showStuff()}
              />
              
              <CardTitle
                data={this.showStuff()}
              />
              <CardImage
                data={this.showStuff()} 
             /> 
              <CardDescription
                data={this.showStuff()}
              />
              <CardPrice
                data={this.showStuff()}
              />
              <CardShoppingPanel
                handleCartButton={this.handleCartButton} // send to CardShoppingpanel
                onCartModify={this.onCartModify}
                cart={this.state.cart}
                
              />
            </div>            
        );
    }
}

export default CardContainer;
