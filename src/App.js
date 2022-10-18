import * as React from "react";
import "./App.css";
import Routes from "./components/routes.js";
import Header from "./components/header";
import ScrollTop from "./components/scrollTopButton";

function App() {
  return (
    <div>
      <main>
        {/* <Header /> */}
        <Routes />
        <ScrollTop/>
      </main>
    </div>
  );
}

export default App;
