import React from 'react';
import './Styles/reset.css';
import './Styles/base.scss';
import TopBlock from './Components/Top/TopBlock';
import Board from "./Components/Board/Board";
import BottomBlock from './Components/Bottom/BottomBlock';

function App() {
  return (
      <>
        <header>
          <div className="container">
            <div className="header">
              <div className="title">Karmik - <span className="red">Flex</span></div>
            </div>
          </div>
        </header>
        <main>
          <article className="container">
              <TopBlock />
              <Board />
              <BottomBlock />
          </article>
        </main>
        <footer>
          <div className="container">
            <div className="footer">
              <div className="copy">©Jenjarus <span className="year">2077</span></div>
            </div>
          </div>
        </footer>
      </>
  );
}

export default App;
