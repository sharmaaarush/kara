export interface User {
  id: string;
  firstName: string;
  lastName: string;
  title: 'Mr.' | 'Ms.' | 'Mrs.' | 'Mx.';
}

export interface Content {
  id: string;
  title: string;
  type: 'movie' | 'tv';
  genre: string;
  year: number;
  poster?: string;
  rating?: number;
  notes?: string;
  watchedDate?: string;
}

export interface WatchlistItem {
  id: string;
  title: string;
  type: 'movie' | 'tv';
  genre: string;
  year: number;
  poster?: string;
  addedDate: string;
}

export interface UserData {
  user: User;
  library: Content[];
  watchlist: WatchlistItem[];
}

export interface MovieSuggestion {
  id: string;
  title: string;
  year: number;
  poster?: string;
  popularity: number;
}

export interface ShowSuggestion {
  id: string;
  title: string;
  year: number;
  poster?: string;
  popularity: number;
}