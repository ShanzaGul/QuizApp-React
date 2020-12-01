import React from 'react'

function Ans(props) {
    return (
        <div>
           <button className="btn btn-primary mt-1 p-2"type="button" onClick={ ()=> props.handleClick(props.choice)}>{props.answer}</button> 
        </div>
    )
}

export default Ans;
