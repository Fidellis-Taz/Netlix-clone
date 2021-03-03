import React from "react";
import Row from "./components/Row";
import request from "./api/request";
import Banner from "./components/Banner";
import "./App.css";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />

      <Row
        title="NETLIX ORIGINALS"
        fetchURL={request.fetchNetlixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={request.fetchTrending} />
      <Row title="Top Rated" fetchURL={request.fetchTopRated} />
      <Row title="Action Movies" fetchURL={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
