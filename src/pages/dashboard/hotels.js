import React from 'react';
import Hotellists from './hotellists'
class hotels extends React.Component {
   render(){
      return (
         <div>
            <h1>list of hotels near you:</h1>
            <Hotellists/>
         </div>
      );

   }
}

export default hotels;