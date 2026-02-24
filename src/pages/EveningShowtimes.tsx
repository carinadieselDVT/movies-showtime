import React from "react";
import MovieList from "../components/MovieList";

function EveningShowtimes() {
  return (
    <div>
      EveningShows
      <MovieList timeslot={"evening"} />
    </div>
  );
}

export default EveningShowtimes;
