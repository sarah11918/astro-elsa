import React from "react"

export default function NotableBirdList(props){
  let listOfNotableBirds = []
  let rareBirds = []

  for (let i = 0; i < props.birdList.length; i++){
    if (!listOfNotableBirds.includes(props.birdList[i].comName)){
      listOfNotableBirds.push(props.birdList[i].comName)
      
      rareBirds.push({'name':`${props.birdList[i].comName}`, 'reviewed':props.birdList[i].obsReviewed, 'valid':props.birdList[i].obsValid})

    }
   
  }


  let birdsPendingReview = rareBirds.filter(bird => bird.reviewed === false)

  let birdsVerified = rareBirds.filter(bird => bird.valid === true)

  let birdsNotValid = rareBirds.filter( bird => bird.reviewed && !bird.valid )


  let birdsPendingDivs = birdsPendingReview.map(bird => <li className="birdPending">{bird.name} (Not yet verified)</li>)

  let birdsVerifiedDivs = birdsVerified.map(bird => <li>{bird.name}</li>)

  let birdsNotValidDivs = birdsNotValid.map(bird => <li className="birdNotValid">{bird.name} was misidentified</li>)

  return(
    <>
      <h3>Reported in the last 30 days...</h3>
      <ul>{birdsPendingDivs}</ul>
      <ul>{birdsVerifiedDivs}</ul>
      <ul>{birdsNotValidDivs}</ul>      
    </>
  )
}