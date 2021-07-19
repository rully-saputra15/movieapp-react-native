export interface AllMovies {
  isAdult: boolean;
  backdropPath: string;
  id: number;
  originalLanguage: string;
  popularity: number;
  posterPath: string;
  releaseDate: string;
  title: string;
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
