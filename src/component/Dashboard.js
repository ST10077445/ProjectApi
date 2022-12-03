import React from "react";
import {useState,useNavigate} from 'react';
import "../bootstrap-4.4.1-dist/css/bootstrap.min.css";
import tesla from "../quizPictures/tesla.png";
import spacex from "../quizPictures/spacex.png";
import microsoft from "../quizPictures/microsoft.png";
import xboxLogo from "../quizPictures/Xbox.png";
import amazonLogo from "../quizPictures/Amazon.png";



function Dashboard() {

    const restartQuiz = ()=> {
        setScore = 0;
        setShowScore(false)
        setCurrentQuestion = 0;
        
    }
    
    const handleClickButton = () => {
        const nextQuestion  = currentQuestion + 1;
        setCurrentQuestion(nextQuestion);

        //this function was suppos to be the one working

    }
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [correctAnswers , setCorrectAnswers] = useState([])
    const [wrongAnswers, setWrongAnswers] = useState([])
    const [showResults, setShowResults] = useState(false)

    const [score, setScore] = useState(0);

    const [showScore, setShowScore] = useState(false);

    const quizQuestions = [
        {
            question: "Who is the CEO of Tesla Company?",
            image: tesla,
            options: [
                {answer: "Elon Musk", isCorrect: true},
                {answer: "Jeff Bezos", isCorrect: false},
                {answer: "Andrew Tate", isCorrect: false},
                {answer: "Bill Gates", isCorrect: false}
            ]

        },
        {
            question: "Who is the CEO of Amazon Company?",
            image: amazonLogo,
            options: [
                {answer: "Elon Musk", isCorrect: false},
                {answer: "Jeff Bezos", isCorrect: true},
                {answer: "Andrew Tate", isCorrect: false},
                {answer: "Bill Gates", isCorrect: false}
            ]

        },
        {
            question: "Who is the Founder  of Microsoft Company?",
            image: microsoft,
            options: [
                {answer: "Elon Musk", isCorrect: false},
                {answer: "Jeff Bezos", isCorrect: false},
                {answer: "Andrew Tate", isCorrect: false},
                {answer: "Bill Gates", isCorrect: true}
            ]

        },
        {
            question: "Who is the founder of the company that owns XBox?",
            image: xboxLogo,
            options: [
                {answer: "Elon Musk", isCorrect: false},
                {answer: "Jeff Bezos", isCorrect: false},
                {answer: "Andrew Tate", isCorrect: false},
                {answer: "Bill Gates", isCorrect: true}
            ]

        },
        {
            question: "Who owns SpaceX?",
            image: spacex,
            options: [
                {answer: "Elon Musk", isCorrect: true},
                {answer: "Jeff Bezos", isCorrect: false},
                {answer: "Andrew Tate", isCorrect: false},
                {answer: "Bill Gates", isCorrect: false}
            ]

        }
    ]

  return (
    <div>
        <div className='container '>
           { showScore ? (
             <div className="container">
                <h2 className="text-center">YOU SCORED {score}/ {quizQuestions.length *10}</h2>
                <div style={{"display": "flex", "justifyContent": "space-evenly"}}>
                    <button onClick={restartQuiz} className="btn btn-dark">Play Again</button>

                    <button className="btn btn-light text-right" onClick={() => setShowResults(true)}>ShowReport</button>
                   
                </div>
                {showResults? (
                        <div className="text-center">
                            <h2>QUESTION YOU GOT CORRECT!</h2>
                            <div style={{"display": "flex"}} className="flex-column">
                                {correctAnswers.map(each => {
                                    return (
                                        <h2 className="badge badge-light">{each.question}</h2>
                                    )
                                })}
                            </div>
                            <h2>QUESTION YOU GOT WRONG!</h2>
                            <div style={{"display": "flex"}} className="flex-column">
                                {wrongAnswers.map(each => {
                                    return (
                                        <h2 className="badge badge-light">{each.question}</h2>
                                    )
                                })}
                            </div>
                            
                        </div>
                    ): (<div className="text-muted text-center">NO RESULTS!</div>)}
                
            </div>
           ): (
            <>
                    <div className="">
                        
                        <h2>Question {currentQuestion+1}</h2> 
                        <label>{quizQuestions[currentQuestion].question}</label>
                        <div>
                            <img src={quizQuestions[currentQuestion].image} width="200px" height="200px"   />
                        </div>
                        
                    
                    <div>
                    {quizQuestions[currentQuestion].options.map(option => {
                        return (
                            <button onClick={() => { 
                                
                                const nextQuestion  = currentQuestion + 1;
                                if(nextQuestion < quizQuestions.length) {
                                setCurrentQuestion(nextQuestion);
                                }else {
                                    setShowScore(true)
                                }
                        
                                if(option.isCorrect == true) {
                                    setCorrectAnswers([...correctAnswers, quizQuestions[currentQuestion]])
                                    setScore(score + 10);
                                } else {
                                    setWrongAnswers([...wrongAnswers, quizQuestions[currentQuestion]]);
                                }

                                

                            }}
                             style={{"margin": "10px"}} 
                             className="btn btn-light">{option.answer}</button>
                        )
                    })}
                    </div>
                    <h2>Score: {score}</h2>

                    <p className="">
                        The above Quize Game is based on generall questions. You will get 10 points for each
                        correct answer.<br/> You will not get any points for wrong answer.
                    </p>
                    </div>
                    </>
           )
}

                    
                        
        </div>
    
    </div>
  )
}
            

export default Dashboard