import React from 'react'
import Itemlist from '../comonents/item/itemlist'
const Restaurant=(props)=> {
   console.log(props);
   return (
      <div>
         <h1>this is indivisual restourant:</h1>
         <Itemlist />
      </div>
   )
}

export default Restaurant
