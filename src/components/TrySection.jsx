import React, {useState} from "react";
import SliderCarousel from './SliderCarousel.jsx';
import Quiz from "./Quiz";


const TrySection = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [startQuiz, setStartQuiz] = useState(false);
    const [time, setTime] = useState(60)
    return (
       <div className="wrapper">
           <section>
               <h2>СПРОБУЙ СКЛАСТИ ТРИВОЖНУ ВАЛІЗУ</h2>
               <div>
                   <div>
                    <span>
                    Найкращим варіантом вважається валіза вагою не більш як 25 кілограмів.
                </span>
                       <p>
                           Згідно з рекомендаціями ДСНС, вага «екстреної валізи» не має перевищувати 50 кілограмів.
                       </p>
                   </div>
                   <div>
                       <SliderCarousel activeSlide={activeSlide} setActiveSlide={setActiveSlide} time={time} setTime={setTime}/>
                       <button onClick={()=> {setStartQuiz(true)} } >Старт</button>
                   </div>
                   {startQuiz === true ? (
                       <Quiz activeSlide={activeSlide} time={time} setTime={setTime} />
                   ) : null }
               </div>
           </section>
       </div>
    )
}

export default TrySection