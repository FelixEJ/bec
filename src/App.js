import * as React from "react";
import "./App.css";
import Routes from "./components/routes.js";
import Header from "./components/header";

function App() {
  return (
    <div>
      <main>
        {/* <Header /> */}
        <Routes />
      </main>
    </div>
  );
}

export default App;
