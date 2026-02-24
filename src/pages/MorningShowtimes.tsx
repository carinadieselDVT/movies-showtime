import React from "react";
import MovieList from "../components/MovieList";

function MorningShowtimes() {
  return (
    <div>
      MorningShows
      <MovieList timeslot={"morning"} />
    </div>
  );
}

export default MorningShowtimes;
