import axios from "axios";
import {
  popularGames,
  upcomingGamesURL,
  newGamesURL,
  searchGameUrl,
} from "../../api/api";

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

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchData = await axios.get(searchGameUrl(game_name));
  dispatch({
    type: "FETCH_SEARCH",
    payload: {
      search: searchData.data.results,
    },
  });
};
