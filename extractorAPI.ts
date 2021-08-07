import { Movies, Genre, MovieDetail, ProductionCompany } from "./state";

export const extractAllMovie = (unformattedAllMovies: any[]): Movies[] => {
  let formattedAllMovies: Movies[] = [];
  unformattedAllMovies.forEach((unformattedAllMovie: any) => {
    formattedAllMovies.push({
      isAdult: unformattedAllMovie.is_adult,
      backdropPath: unformattedAllMovie.backdrop_path,
      id: unformattedAllMovie.id,
      originalLanguage: unformattedAllMovie.original_language,
      popularity: unformattedAllMovie.popularity,
      posterPath: unformattedAllMovie.poster_path,
      releaseDate: unformattedAllMovie.release_date,
      title: unformattedAllMovie.title,
      voteAverage: unformattedAllMovie.vote_average,
      isFavorite: false
    });
  });
  return formattedAllMovies;
};

export const extractMovieDetail = (unformattedMovieDetail: any): MovieDetail => {
  return {
    isAdult: unformattedMovieDetail.adult,
    backdropPath: unformattedMovieDetail.backdrop_path,
    budget: unformattedMovieDetail.budget,
    genres: extractGenres(unformattedMovieDetail.genres),
    homepage: unformattedMovieDetail.homepage,
    id: unformattedMovieDetail.id,
    originalTitle: unformattedMovieDetail.original_title,
    description: unformattedMovieDetail.overview,
    popularity: unformattedMovieDetail.popularity,
    posterPath: unformattedMovieDetail.poster_path,
    status: unformattedMovieDetail.status,
    tagline: unformattedMovieDetail.tagline,
    title: unformattedMovieDetail.title,
    productionCompanies: extractProductionCompanies(unformattedMovieDetail.production_companies),
    voteAverage: unformattedMovieDetail.vote_average,
    voteCount: unformattedMovieDetail.vote_count,
    releaseDate: unformattedMovieDetail.release_date,
  };
};

export const extractGenres = (unformattedGenres: any[]): Genre[] => {
  let formattedGenres: Genre[] = [];
  unformattedGenres.forEach((genre: any) => {
    formattedGenres.push({
        id: genre.id,
        name: genre.name
      }
    );
  });
  return formattedGenres;
};

const extractProductionCompanies = (unformattedProductionCompanies: any[]): ProductionCompany[] => {
  let formattedProductionCompanies: ProductionCompany[] = [];
  unformattedProductionCompanies.forEach((company: any) => {
    formattedProductionCompanies.push(
      {
        id: company.id,
        logoPath: company.logo_path,
        name: company.name,
        originCountry: company.origin_country
      }
    );
  });
  return formattedProductionCompanies;
};
