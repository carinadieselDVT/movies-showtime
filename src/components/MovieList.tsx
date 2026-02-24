import { Box, List, Typography } from "@mui/material";
import { movies } from "../data";
import type { Movie } from "../data";
import MovieListItem from "./MovieListItem";
import { getTimeslot } from "../utils/time";

interface MovieListProps {
  timeslot: "all" | "morning" | "afternoon" | "evening";
}

export default function MovieList({ timeslot }: MovieListProps) {
  const allMovies = movies;
  const morningSlot = movies.filter(
    (movie) => getTimeslot(movie.showtime) === "morning",
  );
  const afternoonSlot = movies.filter(
    (movie) => getTimeslot(movie.showtime) === "afternoon",
  );
  const eveningSlot = movies.filter(
    (movie) => getTimeslot(movie.showtime) === "evening",
  );

  const moviesInTimeslot: Movie[] =
    timeslot === "all"
      ? allMovies
      : timeslot === "morning"
        ? morningSlot
        : timeslot === "afternoon"
          ? afternoonSlot
          : timeslot === "evening"
            ? eveningSlot
            : [];
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 720,
        p: 2,
        bgcolor: "#7b1fa25a",
        borderRadius: 1,
        fontWeight: "bold",
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
        Movie Showtimes
      </Typography>
      <List>
        {moviesInTimeslot.map((movie) => (
          <MovieListItem key={movie.id} movie={movie} />
        ))}
      </List>
    </Box>
  );
}
