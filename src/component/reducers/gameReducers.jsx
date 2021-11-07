const initstate = {
  popular: [],
  newGames: [],
  upcoming: [],
  search: [],
};

const gamesReducers = (state = initstate, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames,
      };

    default:
      return { ...state };
  }
};
export default gamesReducers;
