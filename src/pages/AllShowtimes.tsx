import React from "react";
import MovieList from "../components/MovieList";

function AllShowtimes() {
  return (
    <div>
      AllShowtimes
      <MovieList timeslot={"all"} />
    </div>
  );
}

export default AllShowtimes;
