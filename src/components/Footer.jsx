import React from "react";
import '../styles/footer.scss'

const Footer = () => {
    return (
        <footer>
            <div className="wrapper">
                <div className="footer">
                    <ul className="footer--list">
                        <span className="footer--list-title">Екстрені Служби</span>
                        <li className="footer--list-item">101 - Пожежна допомога</li>
                        <li className="footer--list-item">102 - Полiцiя</li>
                        <li className="footer--list-item">103 - Швидка медична допомога</li>
                        <li className="footer--list-item">104 - Аварiйна служба газової мережi</li>
                    </ul>
                    <ul className="footer--list">
                        <span className="footer--list-title">Ресурси</span>
                        <li className="footer--list-item">
                            <a href="https://dsns.gov.ua/">ДСНС</a>
                        </li>
                        <li className="footer--list-item">
                            <a href="https://ssu.gov.ua/">Служба безпеки України</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer