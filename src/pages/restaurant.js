import React from 'react'
// import Itemlist from '../comonents/item/itemlist'
import {db} from './firebase'
class Restaurant extends React.Component {
   constructor(props){
      super(props);
      // console.log(props.match.params.id, 'ehllo');
      this.addUser= this.addUser.bind(this);
      // this.showHotels= this.showHotels.bind(this);
      this.state ={
         indivisualData: []
      }
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

   componentDidMount(){
      console.log(this.props.match.params.id, 'prams');
      db.collection("restaurants").doc(this.props.match.params.id)
      .get()
      .then(doc => {
         // var iData = doc.data();
         this.setState({indivisualData: doc.data()});
         
         console.log(doc.data());
         
         // const productData = querySnapshot.docs.map(doc=>doc.data());
         // console.log(productData); // This is the restaurant
         // console.log(querySnapshot);
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
      var items = this.state.indivisualData.items;
      //showing can't read prop. of undefined
      console.log(items[0].get('price'), 'bola');
      //   const { indi } = this.state.in;

      return (
         <div>
            <div id="head">
               <h4>{this.state.indivisualData.name}</h4>
               <code>{this.state.indivisualData.location}</code>
               <p>description</p>
            </div>
            <h4>Recommended</h4>
            <div id='item'>
               <div id='item_img'></div>
               <div id="item_data">
                  {/* <h5>{this.state.indivisualData.items[0].map(item_name)}</h5> */}
               </div>
            </div>


            
            {/* <button height="20px" onClick={this.addUser}>Add +</button>
            <button height="20px" onClick={this.showHotels}>show</button> */}
            
            {/* <Itemlist /> */}
   
         </div>
      )
   }
}

export default Restaurant
