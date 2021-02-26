import React from 'react';
import './question.styles.css';

const Question = ({qs: {question, correct_answer, incorrect_answers}, onClickAnswer}) => {
    
    return (
        
<div className='questions'>
        <h1>
            {question}
        </h1>
        <div>
            <span  className='answer' onClick={() => onClickAnswer(1)}>{correct_answer}</span>
            {incorrect_answers.map(ans => <span className='answer' key={ans} onClick={() => onClickAnswer(0)} > {ans}</span>)}
        </div>
</div>
    )
}

export  default Question;