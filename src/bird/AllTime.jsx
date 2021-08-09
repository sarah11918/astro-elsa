import React from "react";
import { useState } from "react";
import SpeciesList from "./SpeciesList.jsx";

export default function AllTime() {
  const [allTimeBirds, setAllTimeBirds] = useState([]);
  const [location, setLocation] = useState("");

  function changeLocation(event) {
    event.preventDefault();
    setLocation(event.target.elements.location.value.toUpperCase());
    getSightings(event.target.elements.location.value.toUpperCase())
  }

  async function getSightings(myLocation) {
    const myHeaders = new Headers();
    myHeaders.append("X-eBirdApiToken", "2ifbkhv7g8ct");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    const response = await fetch(
      `https://api.ebird.org/v2/product/spplist/${myLocation}`,
      requestOptions
    );
    const data = await response.json();

    setAllTimeBirds(data);
  }

  return (
    <>
      <h3>Find all bird species ever reported at a particular location!</h3>
      <h5 className="birdtab">Current location set: {location} </h5>

      <form onSubmit={changeLocation}>
        <input
          name="location"
          type="text"
          placeholder="eg. CA-PE-PR / L7359880"
          style = {{textTransform: "uppercase"}}
        />
        <button> Show me the bird codes!</button>
      </form>
       <SpeciesList birdList={allTimeBirds} />
    </>
  );
}
