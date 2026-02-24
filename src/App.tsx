import { Box, Container, CssBaseline } from "@mui/material";
import bgImage from "./assets/background.jpg";
import MovieList from "./components/MovieList";

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
      }}
    >
      <CssBaseline />
      <Container maxWidth="md">{/* <MovieList /> */}</Container>
    </Box>
  );
}

export default App;
