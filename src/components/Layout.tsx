import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Box, Container, CssBaseline } from "@mui/material";
import bgImage from "../assets/background.jpg";

function Layout() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "grid",
        alignItems: "center",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
      }}
    >
      <Container
        sx={{
          maxWidth: {
            sm: "sm",
            md: "md",
            lg: "lg",
          },
        }}
      >
        <CssBaseline />
        <Navbar />
        <Outlet />
      </Container>
    </Box>
  );
}

export default Layout;
