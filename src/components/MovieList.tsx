import { Box, List, Typography, Button, Stack } from "@mui/material";
import { movies } from "../data";
import MovieListItem from "./MovieListItem";

export default function MovieList() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 720,
        p: 2,
        bgcolor: "#7b1fa25a",
        borderRadius: 1,
        fontWeight: "bold",

        // Hide radio buttons
        '& input[type="radio"]': { position: "absolute", left: -9999 },
        // & - Replaces parent selector when nesting
        // where an input with type of radio

        // base (non-active) button styling
        "& .filter-btn": {
          // Where class is .filter-btn
          color: "text.secondary",
          borderColor: "divider",
          bgcolor: "transparent",
          textTransform: "none",
        },
        "& .filter-btn:hover": {
          // where class .filter-btn is in hover state
          color: "text.primary",
          borderColor: "text.primary",
          bgcolor: "action.hover",
        },

        // :not - Specific
        "&:has(#r-all:checked) .filter-btn:not(.btn-all), &:has(#r-morning:checked) .filter-btn:not(.btn-morning), &:has(#r-afternoon:checked) .filter-btn:not(.btn-afternoon), &:has(#r-evening:checked) .filter-btn:not(.btn-evening)":
          {
            opacity: 0.85,
          },

        // filter rules (CSS-only)
        '&:has(#r-morning:checked) li[data-period]:not([data-period="morning"])':
          { display: "none" },
        '&:has(#r-afternoon:checked) li[data-period]:not([data-period="afternoon"])':
          { display: "none" },
        '&:has(#r-evening:checked) li[data-period]:not([data-period="evening"])':
          { display: "none" },

        // active button styling
        "&:has(#r-all:checked) .btn-all, &:has(#r-morning:checked) .btn-morning, &:has(#r-afternoon:checked) .btn-afternoon, &:has(#r-evening:checked) .btn-evening":
          {
            bgcolor: "purple",
            color: "white",
            borderColor: "white",
          },
      }}
    >
      {/* Can have defaultChecked on any variant */}
      <input type="radio" name="period" id="r-all" defaultChecked />
      <input type="radio" name="period" id="r-morning" />
      <input type="radio" name="period" id="r-afternoon" />
      <input type="radio" name="period" id="r-evening" />

      {/* Buttons act as labels for the radios */}
      <Stack direction="row" spacing={1} mb={1}>
        <Button
          size="small"
          variant="outlined"
          className="filter-btn btn-all"
          component="label"
          htmlFor="r-all"
        >
          All
        </Button>
        <Button
          size="small"
          variant="outlined"
          className="filter-btn btn-morning"
          component="label"
          htmlFor="r-morning"
        >
          Morning
        </Button>
        <Button
          size="small"
          variant="outlined"
          className="filter-btn btn-afternoon"
          component="label" // more specificity,mostly useful for mui
          htmlFor="r-afternoon"
        >
          Afternoon
        </Button>
        <Button
          size="small"
          variant="outlined"
          className="filter-btn btn-evening"
          component="label"
          htmlFor="r-evening"
        >
          Evening
        </Button>
      </Stack>

      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
        Movie Showtimes
      </Typography>

      <List>
        {movies.map((movie) => (
          <MovieListItem key={movie.id} movie={movie} />
        ))}
      </List>
    </Box>
  );
}
