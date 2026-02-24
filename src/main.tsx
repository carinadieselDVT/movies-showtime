import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllShowtimes from "./pages/AllShowtimes.tsx";
import MorningShowtimes from "./pages/MorningShowtimes.tsx";
import AfternoonShowtimes from "./pages/AfternoonShowtimes.tsx";
import EveningShowtimes from "./pages/EveningShowtimes.tsx";
import Layout from "./components/Layout.tsx";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<AllShowtimes />} />
            <Route path="morning-showtimes" element={<MorningShowtimes />} />
            <Route path="afternoon-showtimes" element={<AfternoonShowtimes />} />
            <Route path="evening-showtimes" element={<EveningShowtimes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
