import React from "react"
import itemDetails from "./details.js"

export default async function getSightings(path) {
    const view = document.getElementById('data-container');
    const sightings = await getSightings(path);
    if ((path === '/species_back') || (path === '/species_front')) {
        const speciesLineItems = sightings.map((item) => `<li>${item}</li>` );
        view.innerHTML = `<div> <ol>${speciesLineItems.join('')}</ol> </div>`; 
    } else if (path === '/species_baywalk') {
      const speciesLineItems = sightings.map((item) => `<li>${item}</li>` );
        view.innerHTML = `<div> <ol>${speciesLineItems.join('')}</ol> </div>`;
 
    } else {
        const sightingDivs = sightings.map((sighting, i) => itemDetails({ ...sighting, index: i + 1 }));
        view.innerHTML = `<div>${sightingDivs.join('')}</div>`;
    }
       
    async function getSightings(path) {
      const myHeaders = new Headers();
      myHeaders.append("X-eBirdApiToken", "2ifbkhv7g8ct");

      const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
      };

      let requestURL;
        if (path === '/notable') {
            requestURL = "https://api.ebird.org/v2/data/obs/CA-PE-PR/recent/notable?detail=full";
        } else if (path === '/recent') {
            requestURL = "https://api.ebird.org/v2/data/obs/CA-PE-PR/recent/";
        } else if (path === '/species_baywalk'){
            requestURL = "https://api.ebird.org/v2/product/spplist/L7359880";
        } else if (path === '/species_front'){
            requestURL = "https://api.ebird.org/v2/product/spplist/L7305530";
        } else if (path === '/species_back'){
            requestURL = "https://api.ebird.org/v2/product/spplist/L8929685";
        } else {
            requestURL = "https://api.ebird.org/v2/product/lists/CA-PE-PR";
        } 
        const response = await fetch(requestURL, requestOptions);
        const data = await response.json();
        console.log(data);
        return data; 
    }
}