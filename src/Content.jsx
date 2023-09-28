import React from 'react'
import RaceTrack from "./" ;
import TextCard from "./"

const Content = ({text}) => {

    const startAgain = () =>{
        window.location.reload() ;
    }

  return (
    <div>
        <button onClick={startAgain}>Start Again</button>

        
    </div>
  )
}

export default Content