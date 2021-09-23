import React from "react";
import Chat from "./components/Chat/Chat";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Join from "./components/Join/Join";
import Rooms from "./components/Rooms/Rooms";

import "./App.css";

function App() {
    return (
        <div className="mainWrapper">
            <Router>
                <Route path="/" exact component={Join}/>
                <Route path="/chat" exact component={Chat}/>
                <Route path="/rooms" exact component={Rooms}/>
            </Router>
        </div>
    );
}

export default App;
