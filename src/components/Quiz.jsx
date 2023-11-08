import React, {Component, useEffect, useState} from 'react';
import forOne from '../assets/forOneQ.json';
import forTwo from '../assets/forTwoQ.json';
import forFamily from '../assets/forFamily.json';

const Quiz = ({activeSlide, time, setTime}) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [score, setScore] = useState(0);
    const [questionSet, setQuestionSet] = useState(forOne);

    useEffect(() => {
        switch (activeSlide) {
            case 0:
                setQuestionSet(forOne);
                break;
            case 1:
                setQuestionSet(forTwo);
                break;
            case 2:
                setQuestionSet(forFamily);
        }
    }, [activeSlide])

    useEffect(() => {
        if (currentQuestionIndex < questionSet.length) {
            const timerInterval = setInterval(() => {
                if (time > 0) {
                    setTime((prevTime) => prevTime - 1);
                } else {
                    clearInterval(timerInterval);
                    alert('Time is up!');
                }
            }, 1000);

            return () => {
                clearInterval(timerInterval);
            };
        }
    }, [time, currentQuestionIndex, questionSet]);


    const handleOptionSelect = (option) => {
        const currentQuestion = questionSet[currentQuestionIndex];
        if (option === currentQuestion.correctAnswer) {
            setScore((prevScore) => prevScore + 1);
        }

        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setSelectedOption('');
    };

    const currentQuestion = questionSet[currentQuestionIndex];

    return (
        <div>
            {currentQuestionIndex < questionSet.length ? (
                <div>
                    <p>Time left: {time} seconds</p>
                    <p>Питання {currentQuestionIndex + 1}</p>
                    <p>{currentQuestion.question}</p>
                    <ul>
                        {currentQuestion.options.map((option, index) => (
                            <li key={index}>
                                <button
                                    onClick={() => handleOptionSelect(option)}
                                    disabled={selectedOption !== ''}
                                >
                                    {option}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div>
                    <h1>Ви зібрали валізу!</h1>
                    <p>Правільні відповіді: {score}</p>
                </div>
            )}
        </div>
    );
};


export default Quiz;
