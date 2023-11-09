import React from "react";
import Card from './Card.jsx'
import bagIcon from "../assets/bagIcon.svg"
import drugIcon from "../assets/drugIcon.svg"
import dockIcon from "../assets/dockIcon.svg"
import foodIcon from "../assets/foodIcon.svg"
import lampIcon from "../assets/lampIcon.svg"
import medIcon from "../assets/medIcon.svg"
import bp1 from "../assets/1stSectionBP.png"
import bg2 from '../assets/2ndSectionBP.png'
import '../styles/main.scss'

const Main = () => {

    return (
        <div className="wrapper">
            <section id="about" >
                <div className="section--title section--title_block">
                    <h2 className="section--title-heading accent">ТРИВОЖНА ВАЛІЗА</h2>
                    <span> - це підготований набір речей, необхідних у екстреній ситуації.</span>
                </div>
                <div className="content">
                    <div className="content--text">
                        <span className="section--span">Найкращий вибір - вологостійкий міцний рюкзак обʼємом від 20 до 50 літрів</span>
                        <p className="section--p">
                            Ваш зовнішній вигляд в умовах бойових дій має ідентифікувати вас, як цивільну людину. Ніяких
                            камуфляжних рюкзаків.
                        </p>
                    </div>
                    <div className="content--media">
                        <img src={bp1} alt="backpacks"/>
                    </div>
                </div>
            </section>
            <section>
                <div className="section--title">
                    <h2 className="section--title-heading accent">ЩО ТРЕБА КЛАСТИ ?</h2>
                </div>
                <div id="cards">
                    <div className="cards">
                        <Card icon={dockIcon} title="Документи"
                              text="паспорт, водійське посвідчення, військовий квиток, документи на право власності"/>
                        <Card
                            icon={medIcon}
                            title="Медична картка"
                            text="група крові, перелік ліків, які ви приймаєте, перелік проблем зі здоровʼям, імена та телефони ваших лікарів"
                        />
                        <Card
                            icon={drugIcon}
                            title="Ліки"
                            text="бактерицидний пластир, крем від ураження шкіри, активоване вугілля, засіб від нежитю, засіб від нежитю, перекис водню, етиловий спирт, таблетки для очищення води"
                        />
                        <Card
                            icon={bagIcon}
                            title="Засоби для надання першої допомоги"
                            text="турнікети чи джгути Есмарха, лейкопластир, перевʼязувальний пакет ППІ, бинт, йод, вата"
                        />
                        <Card
                            icon={foodIcon}
                            title="Продуктовий набір"
                            text="півтора літри води на людину, тушонка, галети, швидкорозчинні супи, мʼясні чи рибні консерви, сухпайки, льодяники, низькокалорійні солодощі"
                        />
                        <Card
                            icon={lampIcon}
                            title="Речі для виживання"
                            text="одяг, ліхтарик, запальничка, свічки, швейцарський ніж, мультитул, сірники, сухі та вологі серветки, голка з ниткою, прозорий скотч, паракорд, каремат і спальний мішок, пакети для сміття"
                        />
                    </div>
                    <div className="content">
                        <div className="content--media_smaller">
                            <img src={bg2} alt="medpack"/>
                        </div>
                        <div className="content--text content--text_long">
                            <p className="section--span accent">
                                На сайті Державної служби з надзвичайних
                                ситуацій містяться назви конкретних препаратів:
                                парацетамол, пенталгін, супрастин, імодіум, фталазол, альбуцид.
                            </p>
                        </div>
                    </div>
                    <div id="types" >
                        <p className="section--subheading">
                            Залежно від того на скількох людей Ви збираєте тривожну валізу вона буває трьох типів:
                        </p>
                        <div className="list">
                            <span className="list--title">На одного</span>
                            <div className="list--container">
                                <ul className="list--list">
                                    <li className="list--item">Документи</li>
                                    <li className="list--item">Медична картка</li>
                                    <li className="list--item">Ліки</li>
                                </ul>
                                <ul className="list--list">
                                    <li className="list--item">Засоби для надання першої допомоги</li>
                                    <li className="list--item">Продуктовий набір (1,5 літра води)</li>
                                    <li className="list--item">Речі для виживання та одяг</li>
                                </ul>
                            </div>
                            <span className="list--title">На двох</span>
                            <div className="list--container">
                                <ul className="list--list">
                                    <li className="list--item">Пакет документів</li>
                                    <li className="list--item">Дві медичні картки</li>
                                    <li className="list--item">Два набори ліків</li>
                                </ul>
                                <ul className="list--list">
                                    <li className="list--item">Засоби для надання першої допомоги</li>
                                    <li className="list--item">Продуктовий набір (3 літри води)</li>
                                    <li className="list--item">Речі для виживання та одяг</li>
                                </ul>
                            </div>
                            <span className="list--title">На сім’ю</span>
                            <div className="list--container">
                                <ul className="list--list">
                                    <li className="list--item">
                                        Пакет документів
                                        (свідоцтво про народження
                                        дитини)
                                    </li>
                                    <li className="list--item">
                                        Медична картка всіх
                                        членів сім’ї
                                    </li>
                                    <li className="list--item">
                                        Набір ліків для
                                        дорослих і дітей
                                    </li>
                                </ul>
                                <ul className="list--list">
                                    <li className="list--item">
                                        Засоби для надання першої допомоги
                                    </li>
                                    <li className="list--item">
                                        Продуктовий набір (4 літри води)
                                    </li>
                                    <li className="list--item">
                                        Речі для виживання та одяг
                                    </li>
                                    <li className="list--item">
                                        Записка чи бейдж на дитину
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="rules">
                            <div className="rules--container">
                                <span className="rules--number">01</span>
                                <p className="section--span">Найважче складайте на дно рюкзака</p>
                            </div>
                            <div className="rules--container">
                                <span className="rules--number">02</span>
                                <p className="section--span">Речі з гострими кутами не повинні торкатись спини</p>
                            </div>
                            <div className="rules--container">
                                <span className="rules--number">03</span>
                                <p className="section--span">Ті речі, що можна розчавити — нагору</p>
                            </div>
                            <div className="rules--container">
                                <span className="rules--number">04</span>
                                <p className="section--span">На рюкзак слід одягнути дощовик або сміттєвий пакет</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main