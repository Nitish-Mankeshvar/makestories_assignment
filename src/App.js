import React, { Suspense } from "react";
import { message } from "antd";
import "antd/dist/antd.css";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Routes from "./routes/Routing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<div>Loading</div>}>
          <Routes />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
