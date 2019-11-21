import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

import './accordionBasket.css';

class AccordionBasket extends React.Component{ 

    accordionBox()
    { console.log('AccordionBasket this: ', this.props);
        return(
           <div>
             <Accordion allowZeroExpanded={true}>
               <AccordionItem
               className='accordionitem'>
                 <AccordionItemHeading
                 className='accordionitemheading'>
                   <AccordionItemButton
                   className='accordionitembutton'>
                     
                       <p className='accordiondata'> {this.props.data.title} </p>
                       <p className='accordiondata'> qt: {this.props.data.qt} </p>
                       <p className='accordiondata'> $: {this.props.data.price} </p>
                       <p className='accordiondata'> TOT $:  {(this.props.data.qt * this.props.data.price).toFixed(2)} </p>
                                     
                   </AccordionItemButton>
                 </AccordionItemHeading>
                 <AccordionItemPanel
                   className='accordionitempanel'>
                   <div>
                    <h3> {this.props.data.title} </h3>
                    <p>  {this.props.data.description} </p>
                   </div>
                 </AccordionItemPanel>
               </AccordionItem>
             </Accordion>
           </div>
        )
    }
    render (){
        return (
            <div>
              {this.accordionBox()}
            </div>            
        )       
    }    
}
export default AccordionBasket;
