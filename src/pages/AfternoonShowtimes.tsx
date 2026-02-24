import React from "react";
import MovieList from "../components/MovieList";

function AfternoonShowtimes() {
  return (
    <div>
      AllShowtimes
      <MovieList timeslot={"afternoon"} />
    </div>
  );
}

export default AfternoonShowtimes;
