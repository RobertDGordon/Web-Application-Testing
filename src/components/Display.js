import React from 'react'

const Display = props => {
    console.log ('display',props.score)
    return(
        <div>
            <p>Balls: {props.score.ball}</p>
            <p>Strikes: {props.score.strike}</p>
            <p>Fouls: {props.score.foul}</p>
        </div>
    )
}

export default Display;