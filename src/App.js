import React from 'react';
import Header from './components/Header'
import Banner from "./components/Banner.jsx";
import Main from './components/Main.jsx'
import TrySection from "./components/TrySection";
import Footer from "./components/Footer";

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