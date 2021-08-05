import React from "react"

export default function BirdData(props) {
  const { locName, comName, obsDt} = props.birdData

  return (
    <div className="bird-data">
      <h3>Bird reported most recently in the area:</h3> 
      <p className="bird-result">{comName}</p>
      <p>{locName}</p>
      <p>{obsDt}</p>
    </div>
  )
}