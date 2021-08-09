import React from "react";
import { useState } from "react";
import NotableBirdList from "./NotableBirdList.js";

export default function Notable() {
  // const [notableBirds, setNotableBirds] = useState([
  //   { comName: "", obsReviewed: "" }
  // ]);

  const [notableBirds, setNotableBirds] = useState([]);
  const [location, setLocation] = useState("");

  function changeLocationToToronto() {
    setLocation("CA-ON-TO");
    getLocationSightings("CA-ON-TO");
  }

  function changeLocationToPEI() {
    setLocation("CA-PE");
    getLocationSightings("CA-PE");
  }

  function changeLocationToStockholm() {
    setLocation("SE-AB");
    getLocationSightings("SE-AB");
  }

  function changeLocationToReykjavik() {
    setLocation("IS-1");
    getLocationSightings("IS-1");
  }

  function changeLocationToMunich() {
    setLocation("DE-BY");
    getLocationSightings("DE-BY");
  }

  function changeLocationToVienna() {
    setLocation("AT-9");
    getLocationSightings("AT-9");
  }

  function changeLocationToPrague() {
    setLocation("CA-PL");
    getLocationSightings("CZ-PL");
  }

  function changeLocationToBratislava() {
    setLocation("SK-BL");
    getLocationSightings("SK-BL");
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
      `https://api.ebird.org/v2/data/obs/${location}/recent/notable?detail=full&back=30`,
      requestOptions
    );
    const data = await response.json();
    setNotableBirds(data);
  }

  async function getLocationSightings(myLocation) {
    const myHeaders = new Headers();
    myHeaders.append("X-eBirdApiToken", "2ifbkhv7g8ct");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    const response = await fetch(
      `https://api.ebird.org/v2/data/obs/${myLocation}/recent/notable?detail=full&back=30`,
      requestOptions
    );
    const data = await response.json();
    setNotableBirds(data);
  }

  function changeLocation(event) {
    event.preventDefault();
    setLocation(event.target.elements.location.value.toUpperCase());
    getLocationSightings(event.target.elements.location.value.toUpperCase());
  }
  return (
    <>
      <h3>See recent reports of Rare or Unusual birds!</h3>
      <h5 className="birdtab">Showing birds reported in: {location} </h5>
      <div stlye={{ display: "flex" }}>
        <p>Quick select:</p>
        <button className="location-change quickLocation" onClick={changeLocationToToronto}>
          Toronto
        </button>
        <button className="location-change quickLocation" onClick={changeLocationToPEI}>
          PEI
        </button>
        <button className="location-change quickLocation" onClick={changeLocationToStockholm}>
          Stockholm
        </button>
        <button className="location-change quickLocation" onClick={changeLocationToReykjavik}>
          Reykjavik
        </button>
        <button className="location-change quickLocation" onClick={changeLocationToVienna}>
          Vienna
        </button>
        <button className="location-change quickLocation" onClick={changeLocationToMunich}>
          Munich
        </button>
        <button className="location-change quickLocation" onClick={changeLocationToPrague}>
          Prague
        </button>
        <button
          className="location-change quickLocation"
          onClick={changeLocationToBratislava}
        >
          Bratislava
        </button>
      </div>
      <p>... or enter manually</p>
      <form onSubmit={changeLocation}>
        <input
          name="location"
          type="text"
          placeholder="eBird region ID eg. CA-PE-PR"
          style={{textTransform: "uppercase"}}
        />
        <button>Submit Location</button>
      </form>

      <NotableBirdList birdList={notableBirds} />
    </>
  );
}
