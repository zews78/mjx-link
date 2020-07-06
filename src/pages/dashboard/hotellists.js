import React from "react"
import {db} from '../firebase'
import './hotellists.css'
// import Restaurant from './pages/restaurant';
import { Link } from 'react-router-dom';



class Hotellists extends React.Component {
    constructor(props){
       super(props);
       this.state ={
           hotels: [],
           uids: [],
           totalList: []
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

    componentDidMount(prevState){





        // var storage = [{}];
        db.collection("restaurants")
            .get()
            .then(querySnapshot => {
                // querySnapshot.docs.map(doc => {
                    const data = querySnapshot.docs.map(doc => doc.data());
                    const uid = querySnapshot.docs.map(doc => doc.id);

                    this.setState({hotels:data});
                    this.setState({uids:uid});


                    // console.log(querySnapshot);

                    // doc.data() is never undefined for query doc snapshots
                    // console.log(doc.id, " => ", doc.data());

            });
                // console.log(storage);


                // const uid = querySnapshot.docs.map(doc =>doc.id);
                // console.log(data); // array of cities objects
                // this.setState({hotels:storage});

                // console.log(uid);
            // });
            // if(prevState.totalList !== this.state.totalList) {

                // this.setState({totalList: totalData});
            // }


            }
        
    componentDidUpdate(){
        // var totalData = this.state.hotels.map(item =>{
        //     item.uid = this.state.uids[0]
        //     // return 0;
        // })
        // console.log(totalData);
    }
        
    // shouldComponentUpdate(){
    //     // console.log(this.state);
    //     return true;
    // }

    render() {

        var i = 0;
        // console.log(this.state.hotels, 'hola');
        // const { hotels } = this.state;

        return (
            <>
            {this.state.hotels?
            <div>
            {/* {this.state.users.forEach(hotel => { */}
                {/* {var i=0;} */}
                
                
                {this.state.hotels.map(hotel => (
                    // <BrowserRouter>
                    <Link to={"/restaurant/" + this.state.uids[i]}>
                    <div className='dashboard' id='gama' onClick={this.handleClick} key={this.state.uids[i]}>
                        <div id="hotelImg"></div>
                        <div id="hotelData">
                            <h2 id="hotel-name">{hotel.name}</h2>
                            <p id="hotel-location">{hotel.location}</p>
                        </div>
                    </div>
                    <p id="disturbance">{i++}</p>
                    </Link>
                    
                    // </BrowserRouter>
                    // {i++;}
                    
                ))}
                
            {/* // });} */}


            </div>:
            <div>loding...</div>}
            </>
        )
    }
}

export default Hotellists