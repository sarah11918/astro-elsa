import React from "react"

export default function RegionsList(props){

  let regionDivs = props.regionData.map(region => <li className="regionItem">{region.name}: {region.code}</li>)

  return(
    <>
      <h3>All subregions</h3>
      <ul>{regionDivs}</ul>
      <p className = "more-info"><a href="https://ebird.org/canada/region/world/regions?yr=all&m=&hsStats_sortBy=cl&hsStats_o=desc">You can also explore eBird.org to find your region ID</a></p>
    </>
  )
}