import { Chip, ListItem, ListItemText, Typography, Box } from "@mui/material";
import type { Movie } from "../data";
import { timeslotBadgeStyles } from "../utils/badgeStyle";
import { getTimeslot, formatHour } from "../utils/time";

export default function MovieListItem({ movie }: { movie: Movie }) {
  const period = getTimeslot(movie.showtime);
  const style = timeslotBadgeStyles[period];

  return (
    <ListItem
      divider
      data-period={period}
      secondaryAction={
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography
            variant="body2"
            sx={{ fontWeight: 600, whiteSpace: "nowrap" }}
          >
            {formatHour(movie.showtime)}
          </Typography>
          <Chip
            size="small"
            label={style.label}
            color={style.variant}
            sx={{
              fontWeight: 600,
            }}
          />
        </Box>
      }
    >
      <ListItemText
        primary={
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            {movie.title}
          </Typography>
        }
        secondary={
          <Typography variant="body2" color="text.secondary">
            {movie.genre}
          </Typography>
        }
      />
    </ListItem>
  );
}
