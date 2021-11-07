import axios from "axios";
import { popularGames, upcomingGamesURL, newGamesURL } from "../api/api";

//action creator

export const loadGames = () => async (dispatch) => {
  //fetch axios
  const popularData = await axios.get(popularGames());
  const newGamesData = await axios.get(newGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};
// newGames: [],
//   upcoming: [],
