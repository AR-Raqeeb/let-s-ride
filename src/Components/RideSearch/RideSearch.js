import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import "./RideSearch.css";
import {cardData} from '../FakeData/FakeData';
import { useParams } from 'react-router';
import Map from '../Map/Map';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAltV } from '@fortawesome/free-solid-svg-icons';


const RideSearch = () => {
    const [rideDetails, setRideDetails] = useState({});
    const [searched, setSearched] = useState(false);
    const {id} = useParams();
    // console.log('id', id);
    const rideData = cardData.filter(data => data.id === id);
    console.log(rideData);
        return (
        <div>
            <Navigation></Navigation>
            <div className="rideSearch container">
                <div className='searchSection col-md-3'>
                    {
                        !searched && <div>
                        <form>
                        <h5>Pick From</h5>
                        <input type="text" placeholder="Enter your pickup point" />
                        <h5>Destination</h5>
                        <input type="text" placeholder="Enter your destination" />
                        <button type="submit" onClick={() => setSearched(true)}>Search</button>
                        </form>
                    </div>
                    }

                    {
                        searched && <div>
                            <div className="locationDetails text-center">
                                    <h5 style={{color:'white'}}>Mohammadpur</h5>
                                    <FontAwesomeIcon icon={faArrowsAltV} />
                                    <h5 style={{color:'white'}}>Dhanmondi</h5>
                            </div>
                    <div>
                        <div className='rideDetails row'>
                            {
                                rideData.map(ride => <><div className='col-sm-4'>
                                <img style={{width: "58px", height: "46px", position: "absolute", marginRight:"10px"}} src={ride.img} alt=""/>
                            </div>
                            <div className='col-sm-4 text-center mt-2'>
                                <p>2</p>
                            </div>
                            <div className='col-sm-4 text-center mt-2'>
                                <p>{ride.fare}</p>
                            </div></>)
                            }
                        </div>

                        <div className='rideDetails row'>
                            {
                                rideData.map(ride => <><div className='col-sm-4'>
                                <img style={{width: "58px", height: "46px", position: "absolute", marginRight:"10px"}} src={ride.img} alt=""/>
                            </div>
                            <div className='col-sm-4 text-center mt-2'>
                                <p>2</p>
                            </div>
                            <div className='col-sm-4 text-center mt-2'>
                                <p>{ride.fare}</p>
                            </div></>)
                            }
                        </div>
                        <div className='rideDetails row'>
                            {
                                rideData.map(ride => <><div className='col-sm-4'>
                                <img style={{width: "58px", height: "46px", position: "absolute", marginRight:"10px"}} src={ride.img} alt=""/>
                            </div>
                            <div className='col-sm-4 text-center mt-2'>
                                <p>2</p>
                            </div>
                            <div className='col-sm-4 text-center mt-2'>
                                <p>{ride.fare}</p>
                            </div></>)
                            }
                        </div>
                        </div>
                        </div>
                    }
                    
                <div className="col-md-7">
                    <Map></Map>
                </div>
            </div>
        </div>
    </div>
    );
};

export default RideSearch;