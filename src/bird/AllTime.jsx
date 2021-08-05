import React from "react";
import { useState } from "react";
import SpeciesList from "./SpeciesList.jsx";

export default function AllTime() {
  const [allTimeBirds, setAllTimeBirds] = useState([]);
  const [location, setLocation] = useState("L7359880");

  function changeLocation(event) {
    event.preventDefault();
    setLocation(event.target.elements.location.value);
  }

  async function getSightings() {
    const myHeaders = new Headers();
    myHeaders.append("X-eBirdApiToken", "2ifbkhv7g8ct");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    const response = await fetch(
      `https://api.ebird.org/v2/product/spplist/${location}`,
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
        />
        <button> Set a new Location </button>
      </form>

      <button onClick={getSightings}>... and then get the list of birds</button>

      <SpeciesList birdList={allTimeBirds} />
    </>
  );
}
