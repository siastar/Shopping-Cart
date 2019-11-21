import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

import './accordion_basket.css';

class AccordionBasket extends React.Component{ 

    accordionBox()
    { console.log('AccordionBasket this: ', this.props);
        return(
           <div>
             <Accordion allowZeroExpanded={true}>
               <AccordionItem>
                 <AccordionItemHeading>
                   <AccordionItemButton>
                     
                       <p className='accordiondata'> {this.props.data.title} </p>
                       <p className='accordiondata'> qt: {this.props.data.qt} </p>
                       <p className='accordiondata'> $: {this.props.data.price} </p>
                       <p className='accordiondata'> TOT $:  {(this.props.data.qt * this.props.data.price).toFixed(2)} </p>
                     
                     
                   </AccordionItemButton>
                 </AccordionItemHeading>
                 <AccordionItemPanel>
                   <div>
                     {this.props.data.title}
                     {this.props.data.description}
                   </div>
                 </AccordionItemPanel>
               </AccordionItem>
             </Accordion>
           </div>
        )
    }


    render (){
        return (
            <p>{this.accordionBox()}</p>
            

        )       
    }    
}
export default AccordionBasket;
