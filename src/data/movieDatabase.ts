export interface MovieData {
  id: string;
  title: string;
  year: number;
  genre: string;
  poster: string;
  type: 'movie';
}

export interface ShowData {
  id: string;
  title: string;
  year: number;
  genre: string;
  poster: string;
  type: 'tv';
}

export const movieDatabase: MovieData[] = [
  // Action Movies (25 total)
  { id: 'm1', title: 'The Dark Knight', year: 2008, genre: 'Action', poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg', type: 'movie' },
  { id: 'm2', title: 'Avengers: Endgame', year: 2019, genre: 'Action', poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg', type: 'movie' },
  { id: 'm3', title: 'Mad Max: Fury Road', year: 2015, genre: 'Action', poster: 'https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg', type: 'movie' },
  { id: 'm4', title: 'John Wick', year: 2014, genre: 'Action', poster: 'https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg', type: 'movie' },
  { id: 'm5', title: 'Mission: Impossible - Fallout', year: 2018, genre: 'Action', poster: 'https://m.media-amazon.com/images/M/MV5BNjRlZmM0ODktY2RjNS00ZDdjLWJhZGYtNDljNWZkMGM5MTg0XkEyXkFqcGdeQXVyNjAwMjI5MDk@._V1_SX300.jpg', type: 'movie' },
  { id: 'm51', title: 'Die Hard', year: 1988, genre: 'Action', poster: 'https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgwNWMtYTBmMWU4ZjhkNThjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg', type: 'movie' },
  { id: 'm52', title: 'Terminator 2: Judgment Day', year: 1991, genre: 'Action', poster: 'https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg', type: 'movie' },
  { id: 'm53', title: 'The Matrix', year: 1999, genre: 'Action', poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg', type: 'movie' },
  { id: 'm54', title: 'Gladiator', year: 2000, genre: 'Action', poster: 'https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg', type: 'movie' },
  { id: 'm55', title: 'Speed', year: 1994, genre: 'Action', poster: 'https://m.media-amazon.com/images/M/MV5BYjc0MjYyNDctZGNmMi00MTdhLWI0ZjQtMDNhZjNkZmI2ZWM3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg', type: 'movie' },
  { id: 'm56', title: 'Face/Off', year: 1997, genre: 'Action', poster: 'https://m.media-amazon.com/images/M/MV5BNzUyNTY0NDg2Nl5BMl5BanBnXkFtZTgwNDg1OTA1MDE@._V1_SX300.jpg', type: 'movie' },
  { id: 'm57', title: 'The Rock', year: 1996, genre: 'Action', poster: 'https://m.media-amazon.com/images/M/MV5BZDJjOTE0N2EtMmRlZS00NzU0LWE0ZWQtM2Q3MWMxNjcwZjBhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg', type: 'movie' },
  { id: 'm58', title: 'Con Air', year: 1997, genre: 'Action', poster: 'https://m.media-amazon.com/images/M/MV5BYWFhZjZmYTItMTMwZC00NzMwLWJhYjItZDZhMzJmYTEyMjE0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg', type: 'movie' },
  { id: 'm59', title: 'Lethal Weapon', year: 1987, genre: 'Action', poster: 'https://m.media-amazon.com/images/M/MV5BZGVjNWZmYTQtYzljZC00ZGRhLWE2ZmQtZjU5MzE4MTMxNzE4XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg', type: 'movie' },
  { id: 'm60', title: 'Bad Boys', year: 1995, genre: 'Action', poster: 'https://m.media-amazon.com/images/M/MV5BODVjZjFmNTEtMWMzZi00YzViLWI2NWYtNzI5MjkzMjJlMTU4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg', type: 'movie' },
  { id: 'm61', title: 'Point Break', year: 1991, genre: 'Action', poster: 'https://m.media-amazon.com/images/M/MV5BYzE3MmM4Y2YtYjk1Yy00MjA4LWIzZjItYzQyYWQ3ZGI2M2Y4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg', type: 'movie' },
  { id: 'm62', title: 'Top Gun', year: 1986, genre: 'Action', poster: 'https://m.media-amazon.com/images/M/MV5BZjQxYTA3ODItNzgxMy00N2Y2LWJlZGMtMzRmODEyZDBkZTg2XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg', type: 'movie' },
  { id: 'm63', title: 'Rambo: First Blood', year: 1982, genre: 'Action', poster: 'https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwNzEyMTgwMDE@._V1_SX300.jpg', type: 'movie' },
  { id: 'm64', title: 'Predator', year: 1987, genre: 'Action', poster: 'https://m.media-amazon.com/images/M/MV5BY2QwYmFmZTEtNzY2Mi00M2U4LWI4NjUtNzA1MTU1NjQ1OGJhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg', type: 'movie' },
  { id: 'm65', title: 'Commando', year: 1985, genre: 'Action', poster: 'https://m.media-amazon.com/images/M/MV5BZjRkNDg0NWUtYjcwMS00ZmI0LThlNGEtZGZmYTkwYWJjYWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg', type: 'movie' },
  { id: 'm66', title: 'The Bourne Identity', year: 2002, genre: 'Action', poster: 'https://m.media-amazon.com/images/M/MV5BM2JkNGU0ZGMtZjVjNS00NjgyLWEyOWYtZmRmZGQyN2IxZjA2XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg', type: 'movie' },
  { id: 'm67', title: 'Casino Royale', year: 2006, genre: 'Action', poster: 'https://m.media-amazon.com/images/M/MV5BMDI5ZWJhOWItYTlhOC00YWNhLTlkNzctNDU5YTI1M2E1MWZhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg', type: 'movie' },
  { id: 'm68', title: 'Fast Five', year: 2011, genre: 'Action', poster: 'https://m.media-amazon.com/images/M/MV5BMTUxNTk5MTE0OF5BMl5BanBnXkFtZTcwMjA2NzY3NA@@._V1_SX300.jpg', type: 'movie' },
  { id: 'm69', title: 'Iron Man', year: 2008, genre: 'Action', poster: 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg', type: 'movie' },
  { id: 'm70', title: 'Wonder Woman', year: 2017, genre: 'Action', poster: 'https://m.media-amazon.com/images/M/MV5BMTYzODQzYjQtNTczNC00MzZhLTg1ZWYtZDUxYmQ3ZTY4NzA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg', type: 'movie' },
  
  // Sci-Fi Movies (25 total)
  { id: 'm6', title: 'Blade Runner 2049', year: 2017, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg', type: 'movie' },
  { id: 'm7', title: 'Interstellar', year: 2014, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg', type: 'movie' },
  { id: 'm8', title: 'Dune', year: 2021, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg', type: 'movie' },
  { id: 'm9', title: 'The Matrix', year: 1999, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg', type: 'movie' },
  { id: 'm10', title: 'Arrival', year: 2016, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_SX300.jpg', type: 'movie' },
  { id: 'm71', title: 'Alien', year: 1979, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg', type: 'movie' },
  { id: 'm72', title: 'Aliens', year: 1986, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BZGU2OGY5ZTYtMWNhYy00NjZiLWI0NjUtZmNhY2JhNDRmODU3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg', type: 'movie' },
  { id: 'm73', title: 'Blade Runner', year: 1982, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg', type: 'movie' },
  { id: 'm74', title: 'Star Wars: A New Hope', year: 1977, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg', type: 'movie' },
  { id: 'm75', title: 'The Empire Strikes Back', year: 1980, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg', type: 'movie' },
  { id: 'm76', title: 'Return of the Jedi', year: 1983, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg', type: 'movie' },
  { id: 'm77', title: 'E.T. the Extra-Terrestrial', year: 1982, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BMTQ2ODFlMDAtNzdhOC00ZDYzLWJjYjUtMWY2OTcxOGY2ZjQ2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg', type: 'movie' },
  { id: 'm78', title: 'Close Encounters of the Third Kind', year: 1977, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BMjM4NjM1ODkxNV5BMl5BanBnXkFtZTgwNjU4NjExMDE@._V1_SX300.jpg', type: 'movie' },
  { id: 'm79', title: 'The Terminator', year: 1984, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZWY2MjliZGYwMjM0XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg', type: 'movie' },
  { id: 'm80', title: 'Back to the Future', year: 1985, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg', type: 'movie' },
  { id: 'm81', title: 'Minority Report', year: 2002, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BNjZkNDgxNTYtY2Q3MS00ZjlhLWI0ZjQtZjc1ZWZmZjJjNzRlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg', type: 'movie' },
  { id: 'm82', title: 'Total Recall', year: 1990, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BYzU1YmJjMGEtMjY4ZS00MTUyLWJlYWUtOGY2YjBkNjA3YjJjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg', type: 'movie' },
  { id: 'm83', title: 'Ex Machina', year: 2014, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BMTUxNzc0OTIxMV5BMl5BanBnXkFtZTgwNDI3NzU2NDE@._V1_SX300.jpg', type: 'movie' },
  { id: 'm84', title: 'Her', year: 2013, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BMjA1Nzk0OTM2OF5BMl5BanBnXkFtZTgwNjU2NjEwMDE@._V1_SX300.jpg', type: 'movie' },
  { id: 'm85', title: 'District 9', year: 2009, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg', type: 'movie' },
  { id: 'm86', title: 'Elysium', year: 2013, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BMTQ4NzYyNjkxNl5BMl5BanBnXkFtZTcwNzI3OTAyOQ@@._V1_SX300.jpg', type: 'movie' },
  { id: 'm87', title: 'Gravity', year: 2013, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BNjE5MzYwMzYxMF5BMl5BanBnXkFtZTcwOTk4MTk0OQ@@._V1_SX300.jpg', type: 'movie' },
  { id: 'm88', title: 'The Martian', year: 2015, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SX300.jpg', type: 'movie' },
  { id: 'm89', title: 'Prometheus', year: 2012, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BMTY3NzIyNTA2NV5BMl5BanBnXkFtZTcwNzE2NjI4Nw@@._V1_SX300.jpg', type: 'movie' },
  { id: 'm90', title: 'Avatar', year: 2009, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg', type: 'movie' },
  
  // Drama Movies (15 total)
  { id: 'm11', title: 'The Shawshank Redemption', year: 1994, genre: 'Drama', poster: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg', type: 'movie' },
  { id: 'm12', title: 'Forrest Gump', year: 1994, genre: 'Drama', poster: 'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg', type: 'movie' },
  { id: 'm13', title: 'The Godfather', year: 1972, genre: 'Drama', poster: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg', type: 'movie' },
  { id: 'm14', title: 'Schindler\'s List', year: 1993, genre: 'Drama', poster: 'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg', type: 'movie' },
  { id: 'm15', title: 'Goodfellas', year: 1990, genre: 'Drama', poster: 'https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg', type: 'movie' },
  { id: 'm91', title: 'The Godfather Part II', year: 1974, genre: 'Drama', poster: 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg', type: 'movie' },
  { id: 'm92', title: '12 Angry Men', year: 1957, genre: 'Drama', poster: 'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg', type: 'movie' },
  { id: 'm93', title: 'One Flew Over the Cuckoo\'s Nest', year: 1975, genre: 'Drama', poster: 'https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg', type: 'movie' },
  { id: 'm94', title: 'The Green Mile', year: 1999, genre: 'Drama', poster: 'https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_SX300.jpg', type: 'movie' },
  { id: 'm95', title: 'Fight Club', year: 1999, genre: 'Drama', poster: 'https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg', type: 'movie' },
  { id: 'm96', title: 'The Departed', year: 2006, genre: 'Drama', poster: 'https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_SX300.jpg', type: 'movie' },
  { id: 'm97', title: 'There Will Be Blood', year: 2007, genre: 'Drama', poster: 'https://m.media-amazon.com/images/M/MV5BMjAxODQ4MDU5NV5BMl5BanBnXkFtZTcwMDU4MjU1MQ@@._V1_SX300.jpg', type: 'movie' },
  { id: 'm98', title: 'No Country for Old Men', year: 2007, genre: 'Drama', poster: 'https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg', type: 'movie' },
  { id: 'm99', title: 'Taxi Driver', year: 1976, genre: 'Drama', poster: 'https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg', type: 'movie' },
  { id: 'm100', title: 'Raging Bull', year: 1980, genre: 'Drama', poster: 'https://m.media-amazon.com/images/M/MV5BYjRmODkzNDItMTNhNi00YjJlLTg0ZjAtODlhZTM0YzgzYThlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg', type: 'movie' },
  
  // Comedy Movies (15 total)
  { id: 'm16', title: 'Superbad', year: 2007, genre: 'Comedy', poster: 'https://m.media-amazon.com/images/M/MV5BY2VkMDg4ZTYtN2M3Yy00NWZiLWE2ODEtZjU5MjZkYWNkNGIzXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg', type: 'movie' },
  { id: 'm17', title: 'Step Brothers', year: 2008, genre: 'Comedy', poster: 'https://m.media-amazon.com/images/M/MV5BODViZDg2YzAtNDI0Yi00ZWNmLWI4MzItZTUxN2IxNzQ1N2Y4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg', type: 'movie' },
  { id: 'm18', title: 'The Hangover', year: 2009, genre: 'Comedy', poster: 'https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg', type: 'movie' },
  { id: 'm19', title: 'Anchorman', year: 2004, genre: 'Comedy', poster: 'https://m.media-amazon.com/images/M/MV5BMTQ2MzYwMzk5NF5BMl5BanBnXkFtZTcwNzAxNDQzMw@@._V1_SX300.jpg', type: 'movie' },
  { id: 'm20', title: 'Zoolander', year: 2001, genre: 'Comedy', poster: 'https://m.media-amazon.com/images/M/MV5BODI4NDY2NDM5M15BMl5BanBnXkFtZTgwNzEwOTMxMDE@._V1_SX300.jpg', type: 'movie' },
  { id: 'm101', title: 'Dumb and Dumber', year: 1994, genre: 'Comedy', poster: 'https://m.media-amazon.com/images/M/MV5BZDQwMjNiMTQtY2UwYy00NjhiLTk0ZWEtZWM5ZWMzNGFjNTExXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg', type: 'movie' },
  { id: 'm102', title: 'Groundhog Day', year: 1993, genre: 'Comedy', poster: 'https://m.media-amazon.com/images/M/MV5BZWIxNzM5YzQtY2FmMS00Yjc3LWI1ZjUtNGVjMjMzZTIxZTIxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg', type: 'movie' },
  { id: 'm103', title: 'Coming to America', year: 1988, genre: 'Comedy', poster: 'https://m.media-amazon.com/images/M/MV5BMjAxODU4MDg2NV5BMl5BanBnXkFtZTgwMDg2NjcwMTE@._V1_SX300.jpg', type: 'movie' },
  { id: 'm104', title: 'Big Lebowski', year: 1998, genre: 'Comedy', poster: 'https://m.media-amazon.com/images/M/MV5BMTQ0NjUzMDMyOF5BMl5BanBnXkFtZTgwODA1OTU0MDE@._V1_SX300.jpg', type: 'movie' },
  { id: 'm105', title: 'Ghostbusters', year: 1984, genre: 'Comedy', poster: 'https://m.media-amazon.com/images/M/MV5BMTkxMjYyNzgwMl5BMl5BanBnXkFtZTgwMTE3MjYyMTE@._V1_SX300.jpg', type: 'movie' },
  { id: 'm106', title: 'Airplane!', year: 1980, genre: 'Comedy', poster: 'https://m.media-amazon.com/images/M/MV5BZjZjMzQ2ZmUtZWEyZC00NWJiLWFiNGMtZmU2NWIwNTVkYzc2XkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_SX300.jpg', type: 'movie' },
  { id: 'm107', title: 'Blazing Saddles', year: 1974, genre: 'Comedy', poster: 'https://m.media-amazon.com/images/M/MV5BMzUwMTU1Nzg1NV5BMl5BanBnXkFtZTgwOTM2MDEzMTE@._V1_SX300.jpg', type: 'movie' },
  { id: 'm108', title: 'Young Frankenstein', year: 1974, genre: 'Comedy', poster: 'https://m.media-amazon.com/images/M/MV5BMTEwODg3MzkzNDleQTJeQWpwZ15BbWU4MDk1NzMzMzAx._V1_SX300.jpg', type: 'movie' },
  { id: 'm109', title: 'Monty Python and the Holy Grail', year: 1975, genre: 'Comedy', poster: 'https://m.media-amazon.com/images/M/MV5BN2IyNTE4YmUtNWI2Mi00OWY4LWJhNzUtZmZjMzJhZGJlMjZhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg', type: 'movie' },
  { id: 'm110', title: 'Caddyshack', year: 1980, genre: 'Comedy', poster: 'https://m.media-amazon.com/images/M/MV5BMTU0MTA4MTIwMF5BMl5BanBnXkFtZTcwMzU1OTIzNA@@._V1_SX300.jpg', type: 'movie' },
  
  // Horror Movies (15 total)
  { id: 'm21', title: 'The Conjuring', year: 2013, genre: 'Horror', poster: 'https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_SX300.jpg', type: 'movie' },
  { id: 'm22', title: 'Hereditary', year: 2018, genre: 'Horror', poster: 'https://m.media-amazon.com/images/M/MV5BOTU5MDg3OGItZWQ1Ny00ZGVmLTg2YTUtMzBkYzQ1YWIwZDlhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_SX300.jpg', type: 'movie' },
  { id: 'm23', title: 'Get Out', year: 2017, genre: 'Horror', poster: 'https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_SX300.jpg', type: 'movie' },
  { id: 'm24', title: 'A Quiet Place', year: 2018, genre: 'Horror', poster: 'https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_SX300.jpg', type: 'movie' },
  { id: 'm25', title: 'It', year: 2017, genre: 'Horror', poster: 'https://m.media-amazon.com/images/M/MV5BZDVkZmI0YzAtNzdjYi00ZjhhLWI1ZDYtMzNmNDdlZGViNzQ2XkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_SX300.jpg', type: 'movie' },
  { id: 'm111', title: 'The Exorcist', year: 1973, genre: 'Horror', poster: 'https://m.media-amazon.com/images/M/MV5BYjhmMGMxZDYtMTkyNy00YWVmLTgyYmUtYTdmYjZiODE2ZGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg', type: 'movie' },
  { id: 'm112', title: 'Halloween', year: 1978, genre: 'Horror', poster: 'https://m.media-amazon.com/images/M/MV5BNzk1OGU2NmMtNTdhZC00NjdlLWE5YTMtZTQ0MGExZTQzOGQyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg', type: 'movie' },
  { id: 'm113', title: 'The Shining', year: 1980, genre: 'Horror', poster: 'https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg', type: 'movie' },
  { id: 'm114', title: 'Psycho', year: 1960, genre: 'Horror', poster: 'https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg', type: 'movie' },
  { id: 'm115', title: 'Nightmare on Elm Street', year: 1984, genre: 'Horror', poster: 'https://m.media-amazon.com/images/M/MV5BNzFjZmM1ODEtMDRmZC00M2E4LWJlNzEtNTJhNjRlNDk2NTgxXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg', type: 'movie' },
  { id: 'm116', title: 'Friday the 13th', year: 1980, genre: 'Horror', poster: 'https://m.media-amazon.com/images/M/MV5BYmQ2NzlhOTEtMDJlZi00OTNmLTgzNDQtNTdmM2VhMGY4NDZiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg', type: 'movie' },
  { id: 'm117', title: 'Scream', year: 1996, genre: 'Horror', poster: 'https://m.media-amazon.com/images/M/MV5BMjA2NjU5MTg5OF5BMl5BanBnXkFtZTgwOTkyMzQxMDE@._V1_SX300.jpg', type: 'movie' },
  { id: 'm118', title: 'The Texas Chain Saw Massacre', year: 1974, genre: 'Horror', poster: 'https://m.media-amazon.com/images/M/MV5BNzQzNDM2NjI0NV5BMl5BanBnXkFtZTgwMTk4NDQ4MTE@._V1_SX300.jpg', type: 'movie' },
  { id: 'm119', title: 'Poltergeist', year: 1982, genre: 'Horror', poster: 'https://m.media-amazon.com/images/M/MV5BMjI0NjEwNjcxNV5BMl5BanBnXkFtZTgwODEwNjI4MDE@._V1_SX300.jpg', type: 'movie' },
  { id: 'm120', title: 'The Thing', year: 1982, genre: 'Horror', poster: 'https://m.media-amazon.com/images/M/MV5BNGViZWZmM2EtNGYzZi00ZDAyLTk3ODMtNzIyZTBjN2Y1NmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg', type: 'movie' },
  
  // Thriller Movies (15 total)
  { id: 'm26', title: 'Se7en', year: 1995, genre: 'Thriller', poster: 'https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg', type: 'movie' },
  { id: 'm27', title: 'Gone Girl', year: 2014, genre: 'Thriller', poster: 'https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_SX300.jpg', type: 'movie' },
  { id: 'm28', title: 'Zodiac', year: 2007, genre: 'Thriller', poster: 'https://m.media-amazon.com/images/M/MV5BN2UwNDc5NmEtNjVjZS00OTI5LWE5YjctMWM3ZjBiZGYwMGI2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg', type: 'movie' },
  { id: 'm29', title: 'Shutter Island', year: 2010, genre: 'Thriller', poster: 'https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg', type: 'movie' },
  { id: 'm30', title: 'The Silence of the Lambs', year: 1991, genre: 'Thriller', poster: 'https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg', type: 'movie' },
  { id: 'm121', title: 'North by Northwest', year: 1959, genre: 'Thriller', poster: 'https://m.media-amazon.com/images/M/MV5BMjQwMjQyMjQtZjNmYi00YzgxLWI4NzQtNGYwZjNlNzI2MWY3XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg', type: 'movie' },
  { id: 'm122', title: 'Vertigo', year: 1958, genre: 'Thriller', poster: 'https://m.media-amazon.com/images/M/MV5BYTE4ODEwZDUtNDFjOC00NjAxLWEzYTQtYTI1NGVmZmFlNjdiXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg', type: 'movie' },
  { id: 'm123', title: 'Rear Window', year: 1954, genre: 'Thriller', poster: 'https://m.media-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg', type: 'movie' },
  { id: 'm124', title: 'The Birds', year: 1963, genre: 'Thriller', poster: 'https://m.media-amazon.com/images/M/MV5BMTAxNDA1ODc5MDleQTJeQWpwZ15BbWU4MDg2MDA4OTIx._V1_SX300.jpg', type: 'movie' },
  { id: 'm125', title: 'Memento', year: 2000, genre: 'Thriller', poster: 'https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg', type: 'movie' },
  { id: 'm126', title: 'The Prestige', year: 2006, genre: 'Thriller', poster: 'https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_SX300.jpg', type: 'movie' },
  { id: 'm127', title: 'Inception', year: 2010, genre: 'Thriller', poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg', type: 'movie' },
  { id: 'm128', title: 'The Sixth Sense', year: 1999, genre: 'Thriller', poster: 'https://m.media-amazon.com/images/M/MV5BMWM4NTFhYjctNzUyNi00NGMwLTk3NTYtMDIyNTZmMzRlYmQyXkEyXkFqcGdeQXVyMTAwMzUyOTc@._V1_SX300.jpg', type: 'movie' },
  { id: 'm129', title: 'The Usual Suspects', year: 1995, genre: 'Thriller', poster: 'https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZWY2MjliZGYwMjM0XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg', type: 'movie' },
  { id: 'm130', title: 'Heat', year: 1995, genre: 'Thriller', poster: 'https://m.media-amazon.com/images/M/MV5BNDc0YjdmN2YtNWNmOS00YWM3LWI1YWQtYzUzYWQ4M2JlZTcxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg', type: 'movie' }
];

export const showDatabase: ShowData[] = [
  // Drama Shows (25 total)
  { id: 's1', title: 'Breaking Bad', year: 2008, genre: 'Drama', poster: 'https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg', type: 'tv' },
  { id: 's2', title: 'The Sopranos', year: 1999, genre: 'Drama', poster: 'https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg', type: 'tv' },
  { id: 's3', title: 'The Wire', year: 2002, genre: 'Drama', poster: 'https://m.media-amazon.com/images/M/MV5BZmY5ZDMxODEtNWIwOS00NjdkLTkyMjktNWRjMDhmYjJjN2RmXkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_SX300.jpg', type: 'tv' },
  { id: 's4', title: 'Mad Men', year: 2007, genre: 'Drama', poster: 'https://m.media-amazon.com/images/M/MV5BNTgxNzQyMjg2NF5BMl5BanBnXkFtZTgwNzk4MDU3NjE@._V1_SX300.jpg', type: 'tv' },
  { id: 's5', title: 'Better Call Saul', year: 2015, genre: 'Drama', poster: 'https://m.media-amazon.com/images/M/MV5BZDA4YmE0OTYtMmRmNS00Mzk2LTlhM2MtNjk4NzBjZGE1MmIyXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg', type: 'tv' },
  { id: 's51', title: 'The West Wing', year: 1999, genre: 'Drama', poster: 'https://m.media-amazon.com/images/M/MV5BZjRlZWE2NzctYzIzZC00NzE5LWE4YzgtNjdkNzJlZGE5NjBhXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg', type: 'tv' },
  { id: 's52', title: 'Six Feet Under', year: 2001, genre: 'Drama', poster: 'https://m.media-amazon.com/images/M/MV5BZjQyNDU1NzYtMzY3Zi00YWY0LWJlZjItZjFkZjJlZGVjZjcyXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg', type: 'tv' },
  { id: 's53', title: 'Deadwood', year: 2004, genre: 'Drama', poster: 'https://m.media-amazon.com/images/M/MV5BM2UyMDVhMWUtNTI3YS00NjkxLWE2MTEtMzQ3YjgxNmQ2NGNlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg', type: 'tv' },
  { id: 's54', title: 'The Shield', year: 2002, genre: 'Drama', poster: 'https://m.media-amazon.com/images/M/MV5BYjI5NjgzNzctMjVmYS00NGM0LWJhODMtNWQ1NzA4MDhhMzlkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg', type: 'tv' },
  { id: 's55', title: 'Lost', year: 2004, genre: 'Drama', poster: 'https://m.media-amazon.com/images/M/MV5BNzhlY2E5NDUtYjJjYy00OWQxLWFmZTQtOGJmMDIwMzc0OWM4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg', type: 'tv' },
  { id: 's56', title: 'House of Cards', year: 2013, genre: 'Drama', poster: 'https://m.media-amazon.com/images/M/MV5BODM1MDU2NjY5NF5BMl5BanBnXkFtZTgwMDkxNTcwOTE@._V1_SX300.jpg', type: 'tv' },
  { id: 's57', title: 'Boardwalk Empire', year: 2010, genre: 'Drama', poster: 'https://m.media-amazon.com/images/M/MV5BMTQzOTc3MjMtZTAzZC00NGU1LWJiYWMtZDI3YThjOTFlOWVlXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg', type: 'tv' },
  { id: 's58', title: 'Homeland', year: 2011, genre: 'Drama', poster: 'https://m.media-amazon.com/images/M/MV5BNjg1NzQzNjQtZTVjZC00ZDdlLWJkNjItZjIwMjdlMGY2YzVhXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg', type: 'tv' },
  { id: 's59', title: 'The Americans', year: 2013, genre: 'Drama', poster: 'https://m.media-amazon.com/images/M/MV5BMjM3MjkwODMtNjQzYy00ZjMxLWE5NjMtNzY4NjUyMzQyNzNhXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg', type: 'tv' },
  { id: 's60', title: 'Succession', year: 2018, genre: 'Drama', poster: 'https://m.media-amazon.com/images/M/MV5BZTY2ZjBjNTctNTgxMC00NzQzLTkzY2YtMTllNjVhODU5ZGY0XkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg', type: 'tv' },
  { id: 's61', title: 'The Crown', year: 2016, genre: 'Drama', poster: 'https://m.media-amazon.com/images/M/MV5BZjRlZWE2NzctYzIzZC00NzE5LWE4YzgtNjdkNzJlZGE5NjBhXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg', type: 'tv' },
  { id: 's62', title: 'This Is Us', year: 2016, genre: 'Drama', poster: 'https://m.media-amazon.com/images/M/MV5BMjQwMDU3NzE1M15BMl5BanBnXkFtZTgwNzE2NDIzOTE@._V1_SX300.jpg', type: 'tv' },
  { id: 's63', title: 'Friday Night Lights', year: 2006, genre: 'Drama', poster: 'https://m.media-amazon.com/images/M/MV5BYTVhMGY3ZjAtZjc5OS00NGM0LWJiMWYtNzQ1NWJhNzFlNmUzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg', type: 'tv' },
  { id: 's64', title: 'The Handmaid\'s Tale', year: 2017, genre: 'Drama', poster: 'https://m.media-amazon.com/images/M/MV5BNTIzMzk5YjMtYzY5NS00OGQ4LWJlOTMtOTM5YjQxNzAzMTQ0XkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg', type: 'tv' },
  { id: 's65', title: 'Big Little Lies', year: 2017, genre: 'Drama', poster: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzM4MDI3MDI@._V1_SX300.jpg', type: 'tv' },
  { id: 's66', title: 'Mare of Easttown', year: 2021, genre: 'Drama', poster: 'https://m.media-amazon.com/images/M/MV5BYWVkZjNjM2QtNTBlYy00YTVmLWE1YzQtNzQyNTJjYjlhMjNlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg', type: 'tv' },
  { id: 's67', title: 'Yellowjackets', year: 2021, genre: 'Drama', poster: 'https://m.media-amazon.com/images/M/MV5BYjdkN2Y4NzQtZGY5YS00OWVlLWE4NmYtYWJhMGQyZGE4NGUxXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg', type: 'tv' },
  { id: 's68', title: 'Euphoria', year: 2019, genre: 'Drama', poster: 'https://m.media-amazon.com/images/M/MV5BMDMzZDkyNzEtYTY5Ni00NzlhLWI4MjUtYTFjMGZiYzI2ZGQ5XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg', type: 'tv' },
  { id: 's69', title: 'Ozark', year: 2017, genre: 'Drama', poster: 'https://m.media-amazon.com/images/M/MV5BNDUyNjc2MjQtZjVhZC00ZmY0LWJkMjktOWY3MWViN2Y4ZjkwXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg', type: 'tv' },
  { id: 's70', title: 'The Queen\'s Gambit', year: 2020, genre: 'Drama', poster: 'https://m.media-amazon.com/images/M/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGdeQXVyMjM5ODk1NDU@._V1_SX300.jpg', type: 'tv' },
  
  // Sci-Fi Shows (25 total)
  { id: 's6', title: 'Stranger Things', year: 2016, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_SX300.jpg', type: 'tv' },
  { id: 's7', title: 'Black Mirror', year: 2011, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BYTM3YWVhMDMtNjczMy00NGEyLWJhZDctYjNhMTRkNDE0ZTI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg', type: 'tv' },
  { id: 's8', title: 'Westworld', year: 2016, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BMTFkNjk0NzYtNTYwNS00NGUwLWJiNDQtODM2NWQ0OGJhZGRhXkEyXkFqcGdeQXVyNTY3MTYzOTA@._V1_SX300.jpg', type: 'tv' },
  { id: 's9', title: 'The Expanse', year: 2015, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BZDVmMDljM2QtZDkzZC00YzE2LWE3YzQtYzJmMzkxY2IwZjU4XkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg', type: 'tv' },
  { id: 's10', title: 'Lost', year: 2004, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BNzhlY2E5NDUtYjJjYy00OWQxLWFmZTQtOGJmMDIwMzc0OWM4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg', type: 'tv' },
  { id: 's71', title: 'Star Trek: The Next Generation', year: 1987, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BOWFhYjE4NzMtOWJmZi00NzEyLTg5NTMtYTQzZTJkMjc4NjY0XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg', type: 'tv' },
  { id: 's72', title: 'Battlestar Galactica', year: 2004, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BZjBjMjk4YWQtZjY5Zi00NjI4LWE2MmUtNWQ3ZTUzYzM3NDdmXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg', type: 'tv' },
  { id: 's73', title: 'Doctor Who', year: 2005, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BZWJhYjFmZDEtNTVlYy00NGExLWJhZWItNTAxNDY1NjY1ZjdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg', type: 'tv' },
  { id: 's74', title: 'The X-Files', year: 1993, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BZDA0MmM4YzUtMzYwZC00OGI1LWJiZWItMGY0MzZkMGZmOTVkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg', type: 'tv' },
  { id: 's75', title: 'Fringe', year: 2008, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BMjQyMjQwNDI5NV5BMl5BanBnXkFtZTcwNzk3OTU3Mg@@._V1_SX300.jpg', type: 'tv' },
  { id: 's76', title: 'Altered Carbon', year: 2018, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BMzY1ODk4NzQtNzA3Yi00NzQxLWI4N2UtYWZkMWY2NDlhNzNjXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg', type: 'tv' },
  { id: 's77', title: 'The Twilight Zone', year: 1959, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BNTAzMDI5MjQtZjdkYS00NGE2LWE4NzYtYjY3MWY4NzQwMzBhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg', type: 'tv' },
  { id: 's78', title: 'Star Trek: Deep Space Nine', year: 1993, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BYzNiM2Y2MjUtMDI0My00NjAxLWJhMDMtMTNjNWY5NzZjMmQ4XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg', type: 'tv' },
  { id: 's79', title: 'Firefly', year: 2002, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BOTcwNzkwMDQ0NF5BMl5BanBnXkFtZTcwNTQ4MzY1NA@@._V1_SX300.jpg', type: 'tv' },
  { id: 's80', title: 'Stargate SG-1', year: 1997, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BMjE1NjAyNzUxNV5BMl5BanBnXkFtZTcwMjQ4MjU0NA@@._V1_SX300.jpg', type: 'tv' },
  { id: 's81', title: 'The Mandalorian', year: 2019, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BN2M5YWFjN2YtYzU2YS00NzBlLTgwZWUtYWQzNWFhNDkyYjg3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg', type: 'tv' },
  { id: 's82', title: 'Foundation', year: 2021, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BNjU0YzU2NzItYjVjYy00YzdhLWI0MjEtMGY5ZmZkOGEwMmZkXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg', type: 'tv' },
  { id: 's83', title: 'Raised by Wolves', year: 2020, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BYzJjZjM3YWYtYzY0Zi00ZGNhLWJjMjEtYWJlNzBmMGI2YjY4XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg', type: 'tv' },
  { id: 's84', title: 'Dark', year: 2017, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDVkNS00ZGE5LWJlNzAtZGQ1ZWY1NWFmNGRhXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_SX300.jpg', type: 'tv' },
  { id: 's85', title: 'Devs', year: 2020, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BNjViNWRjYWEtZTI0NC00ZjQxLTk5M2UtNjkwZTMwN2Q2ZTkwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg', type: 'tv' },
  { id: 's86', title: 'Lovecraft Country', year: 2020, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BNzZlYzI5ZjEtZjJhNy00ZjFkLWI0NTYtZjc1MjZiMzVkMDY3XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg', type: 'tv' },
  { id: 's87', title: 'Undone', year: 2019, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BNzI1NzE2NjMtMWNlOS00MjNjLWJlNzUtMzUyMzc2NjVmNzNhXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg', type: 'tv' },
  { id: 's88', title: 'Tales from the Loop', year: 2020, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BNjViNWRjYWEtZTI0NC00ZjQxLTk5M2UtNjkwZTMwN2Q2ZTkwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg', type: 'tv' },
  { id: 's89', title: 'Counterpart', year: 2017, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BMjMwODI5NTExNV5BMl5BanBnXkFtZTgwMDU3OTM1NjM@._V1_SX300.jpg', type: 'tv' },
  { id: 's90', title: 'The OA', year: 2016, genre: 'Sci-Fi', poster: 'https://m.media-amazon.com/images/M/MV5BMjI0Nzk2Mzc0NF5BMl5BanBnXkFtZTgwOTk4ODcxOTE@._V1_SX300.jpg', type: 'tv' },
  
  // Comedy Shows (15 total)
  { id: 's11', title: 'The Office', year: 2005, genre: 'Comedy', poster: 'https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg', type: 'tv' },
  { id: 's12', title: 'Friends', year: 1994, genre: 'Comedy', poster: 'https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg', type: 'tv' },
  { id: 's13', title: 'Seinfeld', year: 1989, genre: 'Comedy', poster: 'https://m.media-amazon.com/images/M/MV5BZjZjMzQ2ZmUtZWEyZC00NWJiLWFiNGMtZmU2NWIwNTVkYzc2XkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_SX300.jpg', type: 'tv' },
  { id: 's14', title: 'Parks and Recreation', year: 2009, genre: 'Comedy', poster: 'https://m.media-amazon.com/images/M/MV5BMjE2NzAzMjE4NF5BMl5BanBnXkFtZTgwMzE4ODg3MjE@._V1_SX300.jpg', type: 'tv' },
  { id: 's15', title: 'Brooklyn Nine-Nine', year: 2013, genre: 'Comedy', poster: 'https://m.media-amazon.com/images/M/MV5BNzVkYWY4NzYtMWFlZi00YzkwLThhZDItZjcxYTU4ZTMzMDZmXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_SX300.jpg', type: 'tv' },
  { id: 's91', title: 'Arrested Development', year: 2003, genre: 'Comedy', poster: 'https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg', type: 'tv' },
  { id: 's92', title: 'Community', year: 2009, genre: 'Comedy', poster: 'https://m.media-amazon.com/images/M/MV5BNDQ5NDZiYjAtYWU4Zi00MzI2LWJjYjMtOGVhZjQyOWJmMWJlXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_SX300.jpg', type: 'tv' },
  { id: 's93', title: '30 Rock', year: 2006, genre: 'Comedy', poster: 'https://m.media-amazon.com/images/M/MV5BMjI2NzU2NzQzOF5BMl5BanBnXkFtZTcwODg4NzEzMQ@@._V1_SX300.jpg', type: 'tv' },
  { id: 's94', title: 'Scrubs', year: 2001, genre: 'Comedy', poster: 'https://m.media-amazon.com/images/M/MV5BNzc5NjY1MjktMWY0OC00MjVmLWFkNzYtZjNhMzQ2NzI5MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg', type: 'tv' },
  { id: 's95', title: 'How I Met Your Mother', year: 2005, genre: 'Comedy', poster: 'https://m.media-amazon.com/images/M/MV5BNjg1MDQ5MjQ2N15BMl5BanBnXkFtZTYwNjI5NjA3._V1_SX300.jpg', type: 'tv' },
  { id: 's96', title: 'It\'s Always Sunny in Philadelphia', year: 2005, genre: 'Comedy', poster: 'https://m.media-amazon.com/images/M/MV5BYjQyZWQwYWUtMzk2Zi00OGI5LWE3YjctMWM0N2ZlYmI1YzA3XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg', type: 'tv' },
  { id: 's97', title: 'Veep', year: 2012, genre: 'Comedy', poster: 'https://m.media-amazon.com/images/M/MV5BMjI4NzE2MTMwNF5BMl5BanBnXkFtZTgwNTY4NjMxMDE@._V1_SX300.jpg', type: 'tv' },
  { id: 's98', title: 'Curb Your Enthusiasm', year: 2000, genre: 'Comedy', poster: 'https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE5NzEtZTFjMTA5ZTk0ZjQyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg', type: 'tv' },
  { id: 's99', title: 'The Good Place', year: 2016, genre: 'Comedy', poster: 'https://m.media-amazon.com/images/M/MV5BMzRkNWE0YzEtYzU0Yi00MmU1LWI2YjYtNWZiMjkzYTMwMDQxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg', type: 'tv' },
  { id: 's100', title: 'Ted Lasso', year: 2020, genre: 'Comedy', poster: 'https://m.media-amazon.com/images/M/MV5BMDVjNjIwOGUtNDE3Ni00ODAyLTk4NDItMzU2NTgzZjJkZmQ4XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg', type: 'tv' },
  
  // Fantasy Shows (15 total)
  { id: 's16', title: 'Game of Thrones', year: 2011, genre: 'Fantasy', poster: 'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg', type: 'tv' },
  { id: 's17', title: 'The Witcher', year: 2019, genre: 'Fantasy', poster: 'https://m.media-amazon.com/images/M/MV5BOGE4MmVjMDgtMzIzYy00NjEwLWJlODMtMDI1MGY2ZDlhMzE2XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg', type: 'tv' },
  { id: 's18', title: 'House of the Dragon', year: 2022, genre: 'Fantasy', poster: 'https://m.media-amazon.com/images/M/MV5BM2QzM2JiNTMtOGM4OC00MjNkLTgyMmYtZjUzZjBiZWY2OWRiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg', type: 'tv' },
  { id: 's19', title: 'The Lord of the Rings: The Rings of Power', year: 2022, genre: 'Fantasy', poster: 'https://m.media-amazon.com/images/M/MV5BNTg3NjcxYzgtYzljNC00Y2I2LWE3YmMtOTliZTkwYTE1MmZiXkEyXkFqcGdeQXVyNTY4NDc5MDE@._V1_SX300.jpg', type: 'tv' },
  { id: 's20', title: 'American Gods', year: 2017, genre: 'Fantasy', poster: 'https://m.media-amazon.com/images/M/MV5BMjI5NzgwODM4NF5BMl5BanBnXkFtZTgwNzg4NDk2MDI@._V1_SX300.jpg', type: 'tv' },
  { id: 's101', title: 'The Magicians', year: 2015, genre: 'Fantasy', poster: 'https://m.media-amazon.com/images/M/MV5BMjI5NzgwODM4NF5BMl5BanBnXkFtZTgwNzg4NDk2MDI@._V1_SX300.jpg', type: 'tv' },
  { id: 's102', title: 'Shadow and Bone', year: 2021, genre: 'Fantasy', poster: 'https://m.media-amazon.com/images/M/MV5BNjE1NjMxYjEtYzQwZC00OTU5LWE3YjYtNzA1MTk1MzY4YzgxXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg', type: 'tv' },
  { id: 's103', title: 'The Umbrella Academy', year: 2019, genre: 'Fantasy', poster: 'https://m.media-amazon.com/images/M/MV5BYjIyZjNhZWYtMjgwYi00NmY2LTg2NWMtMzY3ZTZjMDQ1ZTJhXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg', type: 'tv' },
  { id: 's104', title: 'Lucifer', year: 2016, genre: 'Fantasy', poster: 'https://m.media-amazon.com/images/M/MV5BNjYwNzYzYjQtMzE5ZC00ZDEwLTkwMDAtNTUyNzYxYzZhYjdmXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg', type: 'tv' },
  { id: 's105', title: 'Good Omens', year: 2019, genre: 'Fantasy', poster: 'https://m.media-amazon.com/images/M/MV5BMjMwNDMzNzQ1M15BMl5BanBnXkFtZTgwNzE4NDg1NzM@._V1_SX300.jpg', type: 'tv' },
  { id: 's106', title: 'His Dark Materials', year: 2019, genre: 'Fantasy', poster: 'https://m.media-amazon.com/images/M/MV5BZjYxYzlkZTMtZDI0OS00OGQ1LWI4NWMtZDdlNWEyNzVkYjU0XkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg', type: 'tv' },
  { id: 's107', title: 'The Dark Crystal: Age of Resistance', year: 2019, genre: 'Fantasy', poster: 'https://m.media-amazon.com/images/M/MV5BMzk2OTQ4MTQzOF5BMl5BanBnXkFtZTgwMTMzMTI4NzM@._V1_SX300.jpg', type: 'tv' },
  { id: 's108', title: 'Carnival Row', year: 2019, genre: 'Fantasy', poster: 'https://m.media-amazon.com/images/M/MV5BNzFkNzYyNzQtZjFjZC00NzIyLWE0ZGQtZWZmNjA5ZjdiM2RjXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg', type: 'tv' },
  { id: 's109', title: 'The Boys', year: 2019, genre: 'Fantasy', poster: 'https://m.media-amazon.com/images/M/MV5BOTEyNDJhMDAtY2U5ZS00OTMzLTkwODktMjU3MjFkZWVlMGYyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg', type: 'tv' },
  { id: 's110', title: 'Wheel of Time', year: 2021, genre: 'Fantasy', poster: 'https://m.media-amazon.com/images/M/MV5BNjExNzA4NzYtMjhiZC00NzJiLTkwOTItMGYwYjNkOGY2MmNkXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg', type: 'tv' },
  
  // Crime Shows (15 total)
  { id: 's21', title: 'True Detective', year: 2014, genre: 'Crime', poster: 'https://m.media-amazon.com/images/M/MV5BMmRlYmE0Y2UtZjIwZi00ZTdmLWJkZjctZWNmZWQ1NWRjNGUyXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg', type: 'tv' },
  { id: 's22', title: 'Mindhunter', year: 2017, genre: 'Crime', poster: 'https://m.media-amazon.com/images/M/MV5BNWNmYzQ1ZWUtYTQ3ZS00Y2UwLTlkMDctZ2UwNTlmMzBmNTRjXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg', type: 'tv' },
  { id: 's23', title: 'Narcos', year: 2015, genre: 'Crime', poster: 'https://m.media-amazon.com/images/M/MV5BNmFjODU3YzgtMGUwNC00ZGI3LWFkNzQtY2I4NzA3ZGM4NDQxXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg', type: 'tv' },
  { id: 's24', title: 'Ozark', year: 2017, genre: 'Crime', poster: 'https://m.media-amazon.com/images/M/MV5BNDUyNjc2MjQtZjVhZC00ZmY0LWJkMjktOWY3MWViN2Y4ZjkwXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg', type: 'tv' },
  { id: 's25', title: 'Peaky Blinders', year: 2013, genre: 'Crime', poster: 'https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_SX300.jpg', type: 'tv' },
  { id: 's111', title: 'Fargo', year: 2014, genre: 'Crime', poster: 'https://m.media-amazon.com/images/M/MV5BN2NmYjQ1NWUtMjk0NC00NjI4LWE3NjYtMmViNzVkMDY1ZjEyXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg', type: 'tv' },
  { id: 's112', title: 'Better Call Saul', year: 2015, genre: 'Crime', poster: 'https://m.media-amazon.com/images/M/MV5BZDA4YmE0OTYtMmRmNS00Mzk2LTlhM2MtNjk4NzBjZGE1MmIyXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg', type: 'tv' },
  { id: 's113', title: 'The Blacklist', year: 2013, genre: 'Crime', poster: 'https://m.media-amazon.com/images/M/MV5BMTU2NzUyMDQwOF5BMl5BanBnXkFtZTgwODM2MTI4MjE@._V1_SX300.jpg', type: 'tv' },
  { id: 's114', title: 'Money Heist', year: 2017, genre: 'Crime', poster: 'https://m.media-amazon.com/images/M/MV5BZDcxOGI0MDYtMGZlNy00YWIzLWI4NjYtZGNhZjhlNDNhYWE4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg', type: 'tv' },
  { id: 's115', title: 'Sherlock', year: 2010, genre: 'Crime', poster: 'https://m.media-amazon.com/images/M/MV5BMWY3NTljMjEtYzRiMi00NWM2LTkzNjItZTVmZjE0MTdjMjJhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTQ4NTc5OTU@._V1_SX300.jpg', type: 'tv' },
  { id: 's116', title: 'Line of Duty', year: 2012, genre: 'Crime', poster: 'https://m.media-amazon.com/images/M/MV5BMjExMzE2MTEtZjEyYy00YzAyLWJjMjYtOWZhNTY5YjY1MjdlXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg', type: 'tv' },
  { id: 's117', title: 'Broadchurch', year: 2013, genre: 'Crime', poster: 'https://m.media-amazon.com/images/M/MV5BMTYzMjkwNDI5NV5BMl5BanBnXkFtZTgwOTAzMTI4MjE@._V1_SX300.jpg', type: 'tv' },
  { id: 's118', title: 'The Night Of', year: 2016, genre: 'Crime', poster: 'https://m.media-amazon.com/images/M/MV5BMjM2NDM5MTQ3MV5BMl5BanBnXkFtZTgwNjM3MTI4OTE@._V1_SX300.jpg', type: 'tv' },
  { id: 's119', title: 'Mare of Easttown', year: 2021, genre: 'Crime', poster: 'https://m.media-amazon.com/images/M/MV5BYWVkZjNjM2QtNTBlYy00YTVmLWE1YzQtNzQyNTJjYjlhMjNlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg', type: 'tv' },
  { id: 's120', title: 'Yellowjackets', year: 2021, genre: 'Crime', poster: 'https://m.media-amazon.com/images/M/MV5BYjdkN2Y4NzQtZGY5YS00OWVlLWE4NmYtYWJhMGQyZGE4NGUxXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg', type: 'tv' },
  
  // Horror Shows (15 total)
  { id: 's26', title: 'The Walking Dead', year: 2010, genre: 'Horror', poster: 'https://m.media-amazon.com/images/M/MV5BZmFlMTA0MmUtNWVmOC00ZmE1LWFmMDYtZTJhYjJhNGVjYTU5XkEyXkFqcGdeQXVyMTAzMDM4MjM0._V1_SX300.jpg', type: 'tv' },
  { id: 's27', title: 'American Horror Story', year: 2011, genre: 'Horror', poster: 'https://m.media-amazon.com/images/M/MV5BODZlYzc2ODYtYmQyZS00ZTM4LTk4ZDQtMTMyZDdhMDgzZTU0XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg', type: 'tv' },
  { id: 's28', title: 'The Haunting of Hill House', year: 2018, genre: 'Horror', poster: 'https://m.media-amazon.com/images/M/MV5BMTU4NzA4MDEwNF5BMl5BanBnXkFtZTgwMTQxODYzNjM@._V1_SX300.jpg', type: 'tv' },
  { id: 's29', title: 'Supernatural', year: 2005, genre: 'Horror', poster: 'https://m.media-amazon.com/images/M/MV5BNzRmZWJhNjUtY2ZkYy00N2MyLWJmNTktOTAwY2VkODVmOGY3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg', type: 'tv' },
  { id: 's30', title: 'Bates Motel', year: 2013, genre: 'Horror', poster: 'https://m.media-amazon.com/images/M/MV5BMTU0NjkzOTc3NF5BMl5BanBnXkFtZTgwNzE4NDQxMzE@._V1_SX300.jpg', type: 'tv' },
  { id: 's121', title: 'The Haunting of Bly Manor', year: 2020, genre: 'Horror', poster: 'https://m.media-amazon.com/images/M/MV5BYzY0NzAyY2QtMWFlYS00ZjQyLWJkOTMtNDQwOGNhNmY4NmY4XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg', type: 'tv' },
  { id: 's122', title: 'Penny Dreadful', year: 2014, genre: 'Horror', poster: 'https://m.media-amazon.com/images/M/MV5BMjQyODUwNjE3NV5BMl5BanBnXkFtZTgwNDg2NjI4NjE@._V1_SX300.jpg', type: 'tv' },
  { id: 's123', title: 'The Exorcist', year: 2016, genre: 'Horror', poster: 'https://m.media-amazon.com/images/M/MV5BMjI5NzgwODM4NF5BMl5BanBnXkFtZTgwNzg4NDk2MDI@._V1_SX300.jpg', type: 'tv' },
  { id: 's124', title: 'Ash vs Evil Dead', year: 2015, genre: 'Horror', poster: 'https://m.media-amazon.com/images/M/MV5BMjE1MjAyNzUxNV5BMl5BanBnXkFtZTgwNzE2NDIzOTE@._V1_SX300.jpg', type: 'tv' },
  { id: 's125', title: 'The Terror', year: 2018, genre: 'Horror', poster: 'https://m.media-amazon.com/images/M/MV5BNjMxNzE3NjM4MV5BMl5BanBnXkFtZTgwNzE4NDg1NzM@._V1_SX300.jpg', type: 'tv' },
  { id: 's126', title: 'Channel Zero', year: 2016, genre: 'Horror', poster: 'https://m.media-amazon.com/images/M/MV5BMjI5NzgwODM4NF5BMl5BanBnXkFtZTgwNzg4NDk2MDI@._V1_SX300.jpg', type: 'tv' },
  { id: 's127', title: 'Castle Rock', year: 2018, genre: 'Horror', poster: 'https://m.media-amazon.com/images/M/MV5BMjMwNDMzNzQ1M15BMl5BanBnXkFtZTgwNzE4NDg1NzM@._V1_SX300.jpg', type: 'tv' },
  { id: 's128', title: 'Lovecraft Country', year: 2020, genre: 'Horror', poster: 'https://m.media-amazon.com/images/M/MV5BNzZlYzI5ZjEtZjJhNy00ZjFkLWI0NTYtZjc1MjZiMzVkMDY3XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg', type: 'tv' },
  { id: 's129', title: 'The Outsider', year: 2020, genre: 'Horror', poster: 'https://m.media-amazon.com/images/M/MV5BNjExNzA4NzYtMjhiZC00NzJiLTkwOTItMGYwYjNkOGY2MmNkXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg', type: 'tv' },
  { id: 's130', title: 'Evil', year: 2019, genre: 'Horror', poster: 'https://m.media-amazon.com/images/M/MV5BNjExNzA4NzYtMjhiZC00NzJiLTkwOTItMGYwYjNkOGY2MmNkXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg', type: 'tv' },
  
  // Thriller Shows (15 total)
  { id: 's31', title: 'Sherlock', year: 2010, genre: 'Thriller', poster: 'https://m.media-amazon.com/images/M/MV5BMWY3NTljMjEtYzRiMi00NWM2LTkzNjItZTVmZjE0MTdjMjJhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTQ4NTc5OTU@._V1_SX300.jpg', type: 'tv' },
  { id: 's32', title: 'Dexter', year: 2006, genre: 'Thriller', poster: 'https://m.media-amazon.com/images/M/MV5BZjkzMmU5MjMtODllZS00OTA5LTk2ZTEtNmM3YzBmN2MyNTBhXkEyXkFqcGdeQXVyOTA3MTMyOTk@._V1_SX300.jpg', type: 'tv' },
  { id: 's33', title: 'Hannibal', year: 2013, genre: 'Thriller', poster: 'https://m.media-amazon.com/images/M/MV5BMjM4MzI5NzQ1NF5BMl5BanBnXkFtZTgwODEwMDI4MDE@._V1_SX300.jpg', type: 'tv' },
  { id: 's34', title: 'Prison Break', year: 2005, genre: 'Thriller', poster: 'https://m.media-amazon.com/images/M/MV5BMTg3NTkwNzAxOF5BMl5BanBnXkFtZTcwMjM1NjI5MQ@@._V1_SX300.jpg', type: 'tv' },
  { id: 's35', title: '24', year: 2001, genre: 'Thriller', poster: 'https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZWY2MjliZGYwMjM0XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg', type: 'tv' },
  { id: 's131', title: 'Mr. Robot', year: 2015, genre: 'Thriller', poster: 'https://m.media-amazon.com/images/M/MV5BM2QzM2JiNTMtOGM4OC00MjNkLTgyMmYtZjUzZjBiZWY2OWRiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg', type: 'tv' },
  { id: 's132', title: 'The Killing', year: 2011, genre: 'Thriller', poster: 'https://m.media-amazon.com/images/M/MV5BMjExMzE2MTEtZjEyYy00YzAyLWJjMjYtOWZhNTY5YjY1MjdlXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg', type: 'tv' },
  { id: 's133', title: 'Homeland', year: 2011, genre: 'Thriller', poster: 'https://m.media-amazon.com/images/M/MV5BNjg1NzQzNjQtZTVjZC00ZDdlLWJkNjItZjIwMjdlMGY2YzVhXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg', type: 'tv' },
  { id: 's134', title: 'The Americans', year: 2013, genre: 'Thriller', poster: 'https://m.media-amazon.com/images/M/MV5BMjM3MjkwODMtNjQzYy00ZjMxLWE5NjMtNzY4NjUyMzQyNzNhXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg', type: 'tv' },
  { id: 's135', title: 'Bodyguard', year: 2018, genre: 'Thriller', poster: 'https://m.media-amazon.com/images/M/MV5BNjExNzA4NzYtMjhiZC00NzJiLTkwOTItMGYwYjNkOGY2MmNkXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg', type: 'tv' },
  { id: 's136', title: 'The Sinner', year: 2017, genre: 'Thriller', poster: 'https://m.media-amazon.com/images/M/MV5BMjExNzA4NzYtMjhiZC00NzJiLTkwOTItMGYwYjNkOGY2MmNkXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg', type: 'tv' },
  { id: 's137', title: 'Safe', year: 2018, genre: 'Thriller', poster: 'https://m.media-amazon.com/images/M/MV5BNjExNzA4NzYtMjhiZC00NzJiLTkwOTItMGYwYjNkOGY2MmNkXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg', type: 'tv' },
  { id: 's138', title: 'The Stranger', year: 2020, genre: 'Thriller', poster: 'https://m.media-amazon.com/images/M/MV5BNjExNzA4NzYtMjhiZC00NzJiLTkwOTItMGYwYjNkOGY2MmNkXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg', type: 'tv' },
  { id: 's139', title: 'You', year: 2018, genre: 'Thriller', poster: 'https://m.media-amazon.com/images/M/MV5BNTY2ODkzNDkxMF5BMl5BanBnXkFtZTgwNzEyODM4NjM@._V1_SX300.jpg', type: 'tv' },
  { id: 's140', title: 'Killing Eve', year: 2018, genre: 'Thriller', poster: 'https://m.media-amazon.com/images/M/MV5BMjM4MzI5NzQ1NF5BMl5BanBnXkFtZTgwODEwMDI4MDE@._V1_SX300.jpg', type: 'tv' }
];

export const allContent = [...movieDatabase, ...showDatabase];

export const searchContent = (query: string, type?: 'movie' | 'tv'): (MovieData | ShowData)[] => {
  const searchTerm = query.toLowerCase().trim();
  if (!searchTerm) return [];

  let results = allContent.filter(item => 
    item.title.toLowerCase().includes(searchTerm)
  );

  if (type) {
    results = results.filter(item => item.type === type);
  }

  // Sort by relevance (exact matches first, then starts with, then contains)
  return results.sort((a, b) => {
    const aTitle = a.title.toLowerCase();
    const bTitle = b.title.toLowerCase();
    
    if (aTitle === searchTerm) return -1;
    if (bTitle === searchTerm) return 1;
    if (aTitle.startsWith(searchTerm) && !bTitle.startsWith(searchTerm)) return -1;
    if (bTitle.startsWith(searchTerm) && !aTitle.startsWith(searchTerm)) return 1;
    
    return aTitle.localeCompare(bTitle);
  }).slice(0, 8); // Limit to 8 results
};

export const getHotContent = (): (MovieData | ShowData)[] => {
  // Return a curated list of popular/trending content - 18 items total (9 per row)
  const hotIds = [
    // Top row - mix of popular movies and shows
    'm1', 'm8', 'm6', 'm2', 's1', 's6', 's16', 's11', 'm11',
    // Bottom row - more popular content
    'm46', 's21', 's36', 'm7', 's12', 'm3', 's17', 'm4', 's13'
  ];
  return hotIds.map(id => allContent.find(item => item.id === id)).filter(Boolean) as (MovieData | ShowData)[];
};