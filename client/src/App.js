import React from "react";
import Row from "./components/Row";
import request from "./api/request";
function App() {
  return (
    <div className="app">
      <h1>React app</h1>
      <Row title="NETLIX ORIGINALS" fetchURL={request.fetchNetlixOriginals} />
      <Row title="Trending Now" fetchURL={request.fetchTopRated} />
    </div>
  );
}

export default App;
