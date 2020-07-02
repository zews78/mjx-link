import React from "react"
import {db} from '../firebase'
import './hotellists.css'
// import Restaurant from './pages/restaurant';
import { BrowserRouter, Link } from 'react-router-dom';



class Hotellists extends React.Component {
    constructor(props){
       super(props);
       this.state ={
           hotels: [],
           uids: []
       };
    //    console.log(this.state.users);
    //    this.showHotels= this.showHotels.bind(this);
        this.handleClick = this.handleClick.bind(this); 
    }

    handleClick(){
        
        // db.collection("restaurants").doc()
        // .get()
        // .then(querySnapshot => {
        //     const data = querySnapshot.docs.map(doc =>{
        //         console.log(doc.data);
        //     });
        //     // const data = querySnapshot.docs.map(doc => doc.data());

        //     // const uid = querySnapshot.docs.map(doc =>doc.uid());
        //     // console.log(data); // array of cities objects
        //     // this.setState({hotels:data});
        //     // console.log(doc.id);
        // });
        console.log("tct");
    }
    componentWillReceiveProps(){
        console.log(this.state.hotels, "recieved props");
    }

    componentDidMount(){
        // var storage = [{}];
        db.collection("restaurants")
            .get()
            .then(querySnapshot => {
                // querySnapshot.docs.map(doc => {
                    const data = querySnapshot.docs.map(doc => doc.data());
                    const uid = querySnapshot.docs.map(doc => doc.id);

                    this.setState({hotels:data});
                    this.setState({uids:uid});


                    // console.log(doc());

                    // doc.data() is never undefined for query doc snapshots
                    // console.log(doc.id, " => ", doc.data());

            });
                // console.log(storage);


                // const uid = querySnapshot.docs.map(doc =>doc.id);
                // console.log(data); // array of cities objects
                // this.setState({hotels:storage});

                // console.log(uid);
            // });
            }
        

        
    // shouldComponentUpdate(){
    //     // console.log(this.state);
    //     return true;
    // }

    render() {
        console.log(this.state.uids);
        // const { hotels } = this.state;

        return (
            <div>
            {/* {this.state.users.forEach(hotel => { */}
                {this.state.hotels.map(hotel => (
                    // <BrowserRouter>
                    <Link to={"/restaurant/" + hotel.name}>
                    <div className='dashboard' id='gama' onClick={this.handleClick}>
                        <div id="hotelImg"></div>
                        <div id="hotelData">
                            <h2>{hotel.name}</h2>
                            <p>{hotel.location}</p>
                        </div>
                    </div>
                    </Link>
                    // </BrowserRouter>
                    

                ))}
                
            {/* // });} */}


            </div>
        )
    }
}

export default Hotellists