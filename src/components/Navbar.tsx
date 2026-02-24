import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router";

// Routing as per MUI docs : https://mui.com/material-ui/integrations/routing/#react-router-examples

export default function Navbar() {
  return (
    <header>
      <nav style={{ display: "flex", gap: "16px", paddingBottom: "15" }}>
        <Button variant="contained" component={RouterLink} to="/">
          All shows
        </Button>
        <Button
          variant="contained"
          component={RouterLink}
          to="/morning-showtimes"
        >
          Morning Shows
        </Button>
        <Button
          variant="contained"
          component={RouterLink}
          to="/afternoon-showtimes"
        >
          Afternoon Shows
        </Button>
        <Button
          variant="contained"
          component={RouterLink}
          to="/evening-showtimes"
        >
          Evening Shows
        </Button>
      </nav>
    </header>
  );
}
