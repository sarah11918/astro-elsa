import React from "react";

export default function NotableBirdList(props) {
  let listOfNotableBirds = [];
  let rareBirds = [];

  for (let i = 0; i < props.birdList.length; i++) {
    if (!listOfNotableBirds.includes(props.birdList[i].comName)) {
      listOfNotableBirds.push(props.birdList[i].comName);

      rareBirds.push({
        name: `${props.birdList[i].comName}`,
        reviewed: props.birdList[i].obsReviewed,
        valid: props.birdList[i].obsValid
      });
    }
  }

  let birdsPendingReview = props.birdList.filter(
    (bird) => bird.obsReviewed === false
  );

  let birdsOnlyPendingReview = rareBirds.filter(
    (bird) => bird.reviewed === false
  );

  let birdsVerified = props.birdList.filter((bird) => bird.obsValid === true);

  let birdsOnlyVerified = rareBirds.filter((bird) => bird.valid === true);

  let birdsNotValid = props.birdList.filter(
    (bird) => bird.obsReviewed && !bird.obsValid
  );

  let birdsOnlyNotValid = rareBirds.filter(
    (bird) => bird.reviewed && !bird.valid
  );

  let birdsPendingDivs = birdsPendingReview.map((bird) => {
    let checklistURL = `https://ebird.org/checklist/${bird.subId}`;

    return (
      <div key={bird.obsId} className="birdPending" style={{color: "#3d5262"}} >
        <p style={{fontSize: "1.2rem"}}>
          {bird.comName} - {bird.howMany ? bird.howMany : `present`}
        </p>
        <p style={{fontSize: "0.85rem"}}>
          {bird.obsDt} by {bird.userDisplayName}
        </p>
        <p style={{fontSize: "0.75rem"}}>
          Checklist: <a href={checklistURL}>{bird.subId}</a>
        </p>
        <hr />
      </div>
    );
  });

  let birdsVerifiedDivs = birdsVerified.map((bird) => {
    let checklistURL = `https://ebird.org/checklist/${bird.subId}`;

    return (
      <div key={bird.obsId} className="birdVerified">
        <p style={{fontSize: "1.2rem"}}>
          {bird.comName} - {bird.howMany ? bird.howMany : `present`}
        </p>
        <p style={{fontSize: "0.85rem"}}>
          {bird.obsDt} by {bird.userDisplayName}
        </p>
        <p style={{fontSize: "0.75rem"}}>
          Checklist: <a href={checklistURL}>{bird.subId}</a>
        </p>
        <hr />
      </div>
    );
  });

  let birdsOnlyPendingDivs = birdsOnlyPendingReview.map((bird) => (
    <li key={bird.name} className="birdPending">
      {bird.name}
    </li>
  ));

  let birdsOnlyVerifiedDivs = birdsOnlyVerified.map((bird) => (
    <li key={bird.name} className="birdVerified">
      {bird.name}
    </li>
  ));

  let birdsNotValidDivs = birdsNotValid.map((bird) => (
    <li key={bird.obsId} className="birdNotValid">
      {bird.name} was misidentified
    </li>
  ));

  let birdsOnlyNotValidDivs = birdsOnlyNotValid.map((bird) => (
    <li key={bird.name} className="birdNotValid">
      Reports of a {bird.name} could not be confirmed
    </li>
  ));

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h4>Birds Awaiting Review</h4>
          <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
            {birdsOnlyPendingDivs}
          </ul>
        </div>
        <div>
          <h4>Birds Recently Confirmed</h4>
          <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
            {birdsOnlyVerifiedDivs}
          </ul>
        </div>
      </div>
      <div
        style={{
          border: "1px dashed #3d5262",
          padding: " 0 0.25em",
          color: "#3d5262"
        }}
      >
        <h4>Reports of birds whose identification could not be confirmed</h4>
        {birdsOnlyNotValid.length > 0 ? (
          <ul>{birdsOnlyNotValidDivs}</ul>
        ) : (
          "none"
        )}
      </div>
      <h2>Details</h2>
      <h4>Sightings Not Yet Verified / Pending Review:</h4>
      {birdsPendingDivs.length > 0 ? (
         <ul id="pendingSightings" style ={{paddingLeft: "0"}}>{birdsPendingDivs}</ul>
      ) : ( "none") }
      <h4>Confirmed Sightings:</h4>
      {birdsVerifiedDivs.length > 0 ? (
         <ul id="verifiedSightings" style ={{paddingLeft: "0"}}>{birdsVerifiedDivs}</ul>
      ):( "none")}
       {/* <ul>{birdsVerifiedDivs}</ul>
      <ul>{birdsNotValidDivs}</ul> */}
    </>
  );
}
