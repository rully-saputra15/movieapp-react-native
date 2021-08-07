import React, { useContext } from "react";
import { Context } from "../store";
import ShowSuccessfullyActionModalComponent from "../Components/ShowSuccessfullyActionModalComponent";
import { addFavoriteSuccessStatus, removeFavoriteMovieStatus } from "../actionMovies";


const ShowSuccesfullyActionModalContainer = () => {
  const [data, dispatch] = useContext(Context)

  const closeModalSuccesfullyAddFavoriteMovie = () => {
    dispatch(addFavoriteSuccessStatus(false));
  }
  const closeModalSuccessfullyRemoveFavoriteMovie = () => {
    dispatch(removeFavoriteMovieStatus(false));
  }
  return (
    <>
      <ShowSuccessfullyActionModalComponent isVisible={data.successfullyAddFavoriteMovie}
                                            message={"Successfully Added!"}
                                            closeModal={closeModalSuccesfullyAddFavoriteMovie}/>
      <ShowSuccessfullyActionModalComponent isVisible={data.successfullyRemoveFavoriteMovie}
                                            message={"Successfully Remove!"}
                                            closeModal={closeModalSuccessfullyRemoveFavoriteMovie}/>
    </>
  )
}

export default ShowSuccesfullyActionModalContainer
