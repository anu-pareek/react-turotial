import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Game from "./component/game";
import ReactDOM from "react-dom";
import "./index.css";



function Root(){
    return (
        <Router>
            <div>
                <Link to="/" style={{marginRight:20}}>Home</Link>
                <Link to="/game">Tic tac tao</Link>
            </div>

            <Route exact path="/" component = {Home}/>
            <Route exact path="/game" component = {Game}/>

        </Router>
    );
}

function Home() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }

  ReactDOM.render(<Root />, document.getElementById("root"));
