import { Box, Container, CssBaseline } from "@mui/material";
import bgImage from "./assets/background.jpg";
import MovieList from "./components/MovieList";

function App() {
  return (
    <Box
      sx={{
        // MUI's styling prop
        minHeight: "100vh",
        display: "grid",
        placeItems: "center", // Align and justify items center
        backgroundImage: `url(${bgImage})`, // Could be `url("../path/to/folder")
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
      }}
    >
      <CssBaseline />
      <Container maxWidth="md">
        <MovieList />
      </Container>
    </Box>
  );
}

export default App;
