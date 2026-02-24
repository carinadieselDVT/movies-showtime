// Generated with AI as per instructions

export type Movie = {
  id: string;
  title: string;
  genre: string;
  showtime: number; // 24h hour, 0–23 (example : 14 for 2PM)
};

export const movies: Movie[] = [
  { id: "m1", title: "Sunrise Serenade", genre: "Drama", showtime: 9 },
  { id: "m2", title: "Laugh Riot", genre: "Comedy", showtime: 11 },
  { id: "m3", title: "High Noon Heist", genre: "Action", showtime: 12 },
  { id: "m4", title: "Afternoon Tea", genre: "Romance", showtime: 14 },
  { id: "m5", title: "Pixel Quest", genre: "Animation", showtime: 15 },
  { id: "m6", title: "Courtside", genre: "Sports", showtime: 17 },
  { id: "m7", title: "Dusk Patrol", genre: "Thriller", showtime: 18 },
  { id: "m8", title: "Neon Nights", genre: "Sci-Fi", showtime: 20 },
  { id: "m9", title: "Midnight Mystery", genre: "Mystery", showtime: 23 },
  { id: "m10", title: "Starlight Stories", genre: "Family", showtime: 10 },
  { id: "m11", title: "Chef's Table", genre: "Documentary", showtime: 13 },
  { id: "m12", title: "After Hours", genre: "Crime", showtime: 0 },
];
