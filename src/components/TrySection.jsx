import React, {useEffect, useState} from "react";
import SliderCarousel from './SliderCarousel.jsx';
import Quiz from "./Quiz";
import forOne from "../assets/forOneQ.json";
import forTwo from "../assets/forTwoQ.json";
import forFamily from "../assets/forFamily.json";


const TrySection = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [startQuiz, setStartQuiz] = useState(false);
    const [time, setTime] = useState(60)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [questionSet, setQuestionSet] = useState(forOne);
    const [timeUp, setTimeUp] = useState(false);

    useEffect(() => {
        switch (activeSlide) {
            case 0:
                setQuestionSet(forOne);
                setTime(20)
                setTimeUp(false)
                break;
            case 1:
                setQuestionSet(forTwo);
                setTime(30)
                setTimeUp(false)
                break;
            case 2:
                setQuestionSet(forFamily);
                setTime(45)
                setTimeUp(false)
                break;
            default:
                setQuestionSet(forOne);
                setTime(20)
                setTimeUp(false)
                break;
        }
        setCurrentQuestionIndex(0);
    }, [activeSlide])


    return (
        <div className="wrapper">
            <section id="try">
                <div className="section--title">
                    <h2 className="section--title-heading">СПРОБУЙ СКЛАСТИ ТРИВОЖНУ ВАЛІЗУ</h2>
                </div>
                <div className="slider">
                    <div className="slider--text">
                        <span className="section--span">
                        Найкращим варіантом вважається валіза вагою не більш як 25 кілограмів.
                        </span>
                        <p className="section--p">
                            Згідно з рекомендаціями ДСНС, вага «екстреної валізи» не має перевищувати 50 кілограмів.
                        </p>
                    </div>
                    <div className="slider--quiz">
                        {startQuiz === true ? (
                            <Quiz activeSlide={activeSlide} time={time} setTime={setTime}
                                  currentQuestionIndex={currentQuestionIndex}
                                  setCurrentQuestionIndex={setCurrentQuestionIndex}
                                  questionSet={questionSet}
                                  timeUp={timeUp}
                                  setTimeUp={setTimeUp}
                            />
                        ) : null}
                    </div>
                    <div className="slider--container">
                        <SliderCarousel activeSlide={activeSlide} setActiveSlide={setActiveSlide} time={time}
                                        setTime={setTime}/>
                        <button className="button" onClick={() => {
                            setStartQuiz(true)
                        }}>
                            Старт
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TrySection