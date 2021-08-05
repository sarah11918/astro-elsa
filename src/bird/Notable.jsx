import React from "react"
import { useState } from "react"
import NotableBirdList from "./NotableBirdList.js"

export default function Notable() {
    const [notableBirds, setNotableBirds] = useState([{comName:"", obsReviewed:""}])
    const [location, setLocation] = useState("CA-PE")


    function changeLocationToToronto(){
      setLocation("CA-ON-TO")
    }

     function changeLocationToPEI(){
      setLocation("CA-PE")
    }

      function changeLocationToStockholm(){
        setLocation("SE-AB")
      }

    function changeLocation(event){
      event.preventDefault()
      setLocation(event.target.elements.location.value)
    }
    
    
    async function getSightings() {
      const myHeaders = new Headers();
      myHeaders.append("X-eBirdApiToken", "2ifbkhv7g8ct");

      const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
      };

      
      const response = await fetch(`https://api.ebird.org/v2/data/obs/${location}/recent/notable?detail=full&back=30`, requestOptions);
      const data = await response.json();
      
      setNotableBirds(data)
    }
  return (
    <>
      <h3>See recent reports of Rare or Unusual birds!</h3>
      <h5 className="birdtab">Current location set: {location} </h5>

      <button className="location-change" onClick={changeLocationToToronto}>Change to Toronto</button>
      <button className="location-change" onClick={changeLocationToPEI}>Change to PEI</button>
      <button className="location-change" onClick={changeLocationToStockholm}>Change to Stockholm</button>
      <p>... or enter manually</p>
      <form onSubmit={changeLocation}>
        <input name="location" type="text" placeholder="eBird region ID eg. CA-PE"/>
        <button> Set Location </button>
      </form>
      <button onClick={getSightings}>... and then get the list of notable birds</button>
    
     <NotableBirdList birdList={notableBirds} />
    </>
  )
}
