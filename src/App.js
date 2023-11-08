import React from 'react';
import Header from './components/Header'
import Banner from "./components/Banner.jsx";
import Main from './components/Main.jsx'
import TrySection from "./components/TrySection";
import Footer from "./components/Footer";
// import ChessBoard from "./lab5/ChessBoard";
// import Lab7 from "./lab7/lab7";
import Lab8 from "./lab8/lab8";
// import Lab7NEW from "./lab7/Lab7NEW";
function App() {
    return(
        <div>
           <Header/>
            <Banner />
            <Main />
            <TrySection />
            <Footer />

            {/*<ChessBoard/>*/}
            {/*<Lab7/>*/}
            {/*<Lab7NEW/>*/}
            {/*<Lab8/>*/}
        </div>
    )
}

export default App;