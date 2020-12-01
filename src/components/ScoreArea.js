import React from 'react'
import TotalCorrect from './TotalCorrect';
import TotalIncorrect from './TotalIncorrect';


function ScoreArea(props) {
    return (
        <div className="card mt-1">
        <h5>Score Area</h5>
           <TotalCorrect correct={props.correct} />
           <TotalIncorrect incorrect={props.incorrect}/>
        </div>
    )
}

export default ScoreArea;
