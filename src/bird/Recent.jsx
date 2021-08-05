import React from "react"
import {useState} from "react"
import itemDetails from './Details.js'
import LocationInput from "./LocationInput.js"
import RecentBirdList from "./RecentBirdList.js"

export default function Recent() {
  const [recentBirds, setRecentBirds] = useState([{comName:""}])
  async function getSightings() {
    const myHeaders = new Headers();
    myHeaders.append("X-eBirdApiToken", "2ifbkhv7g8ct");

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
      };
    const response = await fetch(`https://api.ebird.org/v2/data/obs/CA-PE-PR/recent?back=14`, requestOptions);
    const data = await response.json();
    setRecentBirds(data)
  }
  
  return (
    <>
      <h1>Recent birds in Prince County, PEI</h1>
      <button onClick={getSightings}>Get the list of recent birds</button>
      <RecentBirdList birdList={recentBirds} />
    </>
  )
}