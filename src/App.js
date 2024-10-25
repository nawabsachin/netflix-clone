// App.js

import React from 'react';
import './App.css';
import Navbar from './navbar';
import Hero from './hero';
import TopNetflixSeries from './cards';
import MovieRow from './movie';
import Footer from './footer';
import {
  trendingMovies,
  popularMovies,
  topRatedMovies,
  actionMovies,
  comedyMovies,
} from './constants';
import TopIndianSeries from './india';
import Accordion from './accordion';
import MoreReasonsToJoin from './reasons';

function App() {
  return (
    <div className="app">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="tvShows">
        <TopNetflixSeries />
      </section>
      <MoreReasonsToJoin/>
      <section id="movies">
        <TopIndianSeries/>
      </section>
      <section id="newAndPopular">
        <div className="movie-sections">
          <MovieRow title="Trending Now" movies={trendingMovies} />
          <MovieRow title="Popular on Netflix" movies={popularMovies} />
          <MovieRow title="Top Rated" movies={topRatedMovies} />
          <MovieRow title="Action Movies" movies={actionMovies} />
          <MovieRow title="Comedies" movies={comedyMovies} />
        </div>
      </section>
      <section id="myList">
        <Accordion/>
      </section>
      <Footer />
    </div>
  );
}

export default App;
