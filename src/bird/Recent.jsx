import React from "react";
import { useState } from "react";
import RecentBirdList from "./RecentBirdList.js";

export default function Recent() {
  const [recentBirds, setRecentBirds] = useState([{ comName: "" }]);
  const [location, setLocation] = useState("CA-PE-PR");

  async function getSightings() {
    const myHeaders = new Headers();
    myHeaders.append("X-eBirdApiToken", "2ifbkhv7g8ct");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
    const response = await fetch(
      `https://api.ebird.org/v2/data/obs/${location}/recent?back=14`,
      requestOptions
    );
    const data = await response.json();
    setRecentBirds(data);
  }

  function changeLocation(event){
    event.preventDefault()
    setLocation(event.target.elements.location.value)
  }

  return (
    <>
      <h3>Get a list of recent birds in your area!</h3>
      <h5 className="birdtab">Current location set: {location} </h5>

      <form onSubmit={changeLocation}>
        <input name="location" type="text" placeholder="eBird region ID eg. CA-PE"/>
        <button> Set Location </button>
      </form>
      <button onClick={getSightings}>Get the list of recent birds</button>
      <RecentBirdList birdList={recentBirds} />
    </>
  );
}
