import React from "react"
import {db} from '../firebase'



class Hotellists extends React.Component {
    constructor(props){
       super(props);
       console.log(props);
    //    this.showHotels= this.showHotels.bind(this);
 
    }

    // showHotels() {
    //     db.collection("restaurants")
    //         .get()
    //         .then(querySnapshot => {
    //             const data = querySnapshot.docs.map(doc => doc.data());
    //             console.log(data); // array of cities objects
    //         });
    // }

    render(){
        return (
        <div>
            <div>
                <div id="hotelImg"></div>
            </div>
            <h1>hotel 1</h1>

        </div>
    )}
}

export default Hotellists