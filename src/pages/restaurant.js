import React from 'react'
import Itemlist from '../comonents/item/itemlist'
import {db} from '../firebase'
class Restaurant extends React.Component {
   constructor(props){
      super(props);
      console.log(props);
      this.addUser= this.addUser.bind(this);
      // this.showHotels= this.showHotels.bind(this);

   }
   addUser(){
      db.collection("test01").add({
         first: "Ada",
         last: "Lovelace",
         born: 1815
     })
     // to write id on console
     .then(function(docRef) {
         console.log("Document written with ID: ", docRef.id);
     })
     .catch(function(error) {
         console.error("Error adding document: ", error);
     });
   }
   
   // showHotels(){
   //    db.collection("restaurants")
   //    .get()
   //    .then(querySnapshot => {
   //       const data = querySnapshot.docs.map(doc => doc.data());
   //       console.log(data); // array of cities objects
   //    });
   // }
   render(){
      return (
         <div>
            <h1>this is indivisual restourant:</h1>
            <button height="20px" onClick={this.addUser}>Add +</button>
            <button height="20px" onClick={this.showHotels}>show</button>

            <Itemlist />
   
         </div>
      )
   }
}

export default Restaurant
