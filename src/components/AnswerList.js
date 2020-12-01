import React from 'react'
import Ans from './Ans';

function AnswerList(props) {
    const options = [];
    for (let i = 0; i < props.dataSet.options.length; i++){
        options.push(<Ans choice={i} handleClick={props.handleClick} answer={props.dataSet.options[i]} />)
    }
    return (
        <div>
            <p>AnswerList</p>
            {options}
        </div>
    )
}

export default AnswerList;
