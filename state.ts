export interface State {
  data: DataState;
}

export interface DataState {
  topRatedMovies: Movies[];
  nowPlayingMovies: Movies[];
  FavoriteMovie: FavoriteMovie[];
  allGenres:Genre[];
  successfullyAddFavoriteMovie: boolean;
  successfullyRemoveFavoriteMovie: boolean;
}

export interface Movies {
  isAdult: boolean;
  backdropPath: string;
  id: number;
  originalLanguage: string;
  popularity: number;
  posterPath: string;
  releaseDate: string;
  title: string;
  voteAverage: number;
  isFavorite: boolean;
}
export interface FavoriteMovie{
  id: number;
  title: string;
  posterPath: string;
  voteAverage: number;
}
export interface MovieDetail {
  isAdult: boolean;
  backdropPath: string;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  originalTitle: string;
  description: string;
  popularity: number;
  posterPath: string;
  status: string;
  tagline: string;
  title: string;
  releaseDate: string;
  productionCompanies: ProductionCompany[];
  voteAverage: number;
  voteCount: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logoPath: string;
  name: string;
  originCountry: string;
}
