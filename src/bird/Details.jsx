import React from "react";

export default function itemDetails(sighting) {
  if (sighting.howMany == null && sighting.userDisplayName !== null) {
    return `
        <div class="sighting">
            <div> 
                <span class="location">${sighting.loc.locName}</span>
            </div>
        <div>
        <div class="gray">
          ${sighting.userDisplayName} saw ${sighting.numSpecies} species
          <div>${sighting.obsDt} at ${sighting.obsTime}</div>
          </br>
        </div>
      </div>
    </div>
  `;
  } else if (sighting.userDisplayName !== undefined) {
    return `
    <div class="sighting">
      <div> 
        <span class="gray">${sighting.comName}</span>
      </div>
      <div>
        <div class="gray">
          ${sighting.howMany} bird(s) at ${sighting.locName}
          <div>${sighting.obsDt}</div>
          <div>${sighting.userDisplayName} </div>
          <div>Valid: ${sighting.obsValid} Reviewed: ${sighting.obsReviewed}</div>
          </br>
        </div>
      </div>
    </div>
  `;
  } else {
    return `
     <div class="sighting">
      <div> 
        <span class="bird-name">${sighting.comName}</span>
      </div>
      <div>
        <div class="recent-bird">
          ${sighting.locName}
          <div class="observation-time">${sighting.obsDt}</div>

          </br>
        </div>
      </div>
    </div>
  `;
  }
}
