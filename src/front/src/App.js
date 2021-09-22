import React from "react";
import Chat from "./components/Chat/Chat";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Join from "./components/Join/Join";

import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Join} />
        <Route path="/chat" exact component={Chat} />
      </Router>
    </div>
  );
}

export default App;
