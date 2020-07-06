import React from 'react';
import Hotellists from './hotellists'
import './hotellists.css'
class hotels extends React.Component {
   render(){
      return (
         <div>
            <div className='carausel'> 
               
            </div>
            <h3 className="header"><span class='special-highlight'>MEDICAL STORES</span> NEAR YOU:</h3>
            
            <Hotellists/>
         </div>
      );

   }
}

export default hotels;