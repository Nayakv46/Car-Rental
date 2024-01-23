import React from 'react'

import './questionBox.scss';



const QuestionBox = (props) => {

  const showAnswer = (id) => {

    if(document.getElementById(id).classList.contains("active")){
        document.getElementById(id).classList.remove("active");

    } else {

        document.querySelectorAll(".questionBox").forEach((element) => {
            element.classList.remove("active");
        })
        
        document.getElementById(id).classList.add("active");
    }
  }

  return (
    <div id={props.id} className="questionBox" onClick={(e) => showAnswer(e.target.id)} >
        <div id={props.id} className="questionBox__question">
            <p className='questionBox__question-text' id={props.id}>{props.id}. {props.question}</p>
            
            <span id={props.id} className="material-icons">
                expand_more
            </span>

        </div>
        <div id={props.id} className="questionBox__answer">
            {props.answer}
        </div>
    </div>
  )
}

export default QuestionBox