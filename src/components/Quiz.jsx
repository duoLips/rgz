import React, {useEffect, useState} from 'react';
import '../styles/quiz.scss'

const Quiz = ({activeSlide, time, setTime, setCurrentQuestionIndex, currentQuestionIndex, questionSet, setTimeUp, timeUp}) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [score, setScore] = useState(0);


    useEffect(() => {
        if (currentQuestionIndex < questionSet.length) {
            const timerInterval = setInterval(() => {
                if (time > 0) {
                    setTime((prevTime) => prevTime - 1);
                } else {
                    clearInterval(timerInterval);
                    setTimeUp(true);
                }
            }, 1000);

            return () => {
                clearInterval(timerInterval);
            };
        }
    }, [time, currentQuestionIndex, questionSet, setTime, setTimeUp]);
    const handleOptionSelect = (option) => {
        const currentQuestion = questionSet[currentQuestionIndex];
        if (option === currentQuestion.correctAnswer) {
            setScore((prevScore) => prevScore + 1);
        }
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setSelectedOption('');
    };

    const handleRestart = () => {
        setTimeUp(false)
        setCurrentQuestionIndex(0);
        setSelectedOption('');
        setScore(0);
        switch (activeSlide) {
            case 0:
                setTime(20)
                break;
            case 1:
                setTime(30)
                break;
            case 2:
                setTime(45)
                break;
            default:
                setTime(20)
                break;
        }
    };
    const currentQuestion = questionSet[currentQuestionIndex];

    return (
        <div className="quiz">
            {currentQuestionIndex < questionSet.length && timeUp === false ? (
                <div>
                    <span className=" section--span accent">{currentQuestion.question}</span>
                    <ul className="quiz--list">
                        {currentQuestion.options.map((option, index) => (
                            <li className="quiz--list-items" key={index}>
                                <button
                                    onClick={() => handleOptionSelect(option)}
                                    disabled={selectedOption !== ''}
                                    className="quiz--list-items_btn"
                                >
                                    {option}
                                </button>
                            </li>
                        ))}
                    </ul>

                </div>
            ) : timeUp ? (
                <div>
                    <span className="section--span accent">Час вийшов!</span>
                    <p className="section--p">Спробувати ще раз?</p>
                    <button className="button" onClick={handleRestart}>Рестарт</button>
                </div>
            ) : (
                <div>
                    <span className="section--span accent">Ви зібрали валізу!</span>
                    <p className="section--p">Правільні відповіді: {score}</p>
                    <button className="button" onClick={handleRestart}>Рестарт</button>
                </div>
            )
            }
        </div>
    );
};


export default Quiz;
