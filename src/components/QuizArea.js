import React from 'react'
import Question from './Question';
import AnswerList from './AnswerList';
import UserGreeting from './UserGreeting';

function QuizArea(props) {
    if(props.isFinished){
        let result = '';
      if(props.correct===2 || props.correct>2){
        result="Congratulations, You passed";
    }else{
        result="Try Again , You failed";
    }
        return (
            <div className="card p-2 mt-2 mb-2">
                <UserGreeting />
                <h3>{result}</h3>
            </div>

        )
    }
    return (
        <div className="card p-2">
            <h5>Quiz Area</h5>
            <Question dataSet={props.dataSet}/>
            <AnswerList handleClick={props.handleClick}  dataSet={props.dataSet}/>
        </div>
    )
}

export default QuizArea;
