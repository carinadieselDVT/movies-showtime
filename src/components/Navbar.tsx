import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav>
        <NavLink to="/" end>
          All Showtimes
        </NavLink>
        <NavLink to="/morning-showtimes">Morning Shows</NavLink>
        <NavLink to="/afternoon-showtimes">Afternoon Shows</NavLink>
        <NavLink to="/evening-showtimes">Evening Shows</NavLink>
      </nav>
    </header>
  );
}
