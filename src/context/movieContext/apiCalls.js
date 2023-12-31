import axios from "axios";
import { getMoviesStart, getMoviesFailure, getMoviesSuccess, deleteMovieStart, deleteMovieSuccess, deleteMovieFailure } from "./MovieActions"

export const getMovies = async (dispatch) =>{
  dispatch(getMoviesStart());
  try {
    const res = await axios.get("/movies", {
      headers: { token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken},
    });
    dispatch(getMoviesSuccess(res.data));
  } catch (err) {
    dispatch(getMoviesFailure());
  }
}



export const deleteMovie = async (id, dispatch) =>{
  dispatch(deleteMovieStart());
  try {
    await axios.delete("/movies/"+id, {
      headers: { token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken},
    });
    dispatch(deleteMovieSuccess(id));
  } catch (err) {
    dispatch(deleteMovieFailure());
  }
}

