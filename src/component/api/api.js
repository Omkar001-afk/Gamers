//sample url https://api.rawg.io/api/games?key=YOUR_API_KEY&dates=2019-09-01,2019-09-30&platforms=18,1,7
//base url  /platforms?key=${process.env.REACT_APP_API_KEY}

const base_api = `https://api.rawg.io/api/`;

// const api_key = process.env.REACT_APP_API_KEY;
//getting date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
// getCurrentMonth();
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};
//year month day
const year = new Date().getFullYear();
const currentDay = getCurrentDay();
const currentMonth = getCurrentMonth();
const currentDate = `${year}-${currentMonth}-${currentDay}`;
const lastYear = `${year - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${year + 1}-${currentMonth}-${currentDay}`;
// console.log(currentDate);
// console.log(lastYear);
// console.log(nextYear);{process.env.REACT_APP_API_KEY}

//popular games
const popular_games = `games?key=${process.env.REACT_APP_API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${process.env.REACT_APP_API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=${process.env.REACT_APP_API_KEY}&dates&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;
//api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}/58386
//https://api.rawg.io/api/games?page_size=1&page=1&search=valorant&key=${process.env.REACT_APP_API_KEY}
export const popularGames = () => `${base_api}${popular_games}`;
export const upcomingGamesURL = () => `${base_api}${upcoming_games}`;
export const newGamesURL = () => `${base_api}${newGames}`;
//game_details
export const detailsUrl = (game_id) =>
  `${base_api}games/${game_id}?key=${process.env.REACT_APP_API_KEY}`;
export const gameSSUrl = (game_id) =>
  `${base_api}games/${game_id}/screenshots?key=${process.env.REACT_APP_API_KEY}`;
export const searchGameUrl = (game_name) =>
  `${base_api}games?page_size=9&search=${game_name}&key=${process.env.REACT_APP_API_KEY}`;
// games?page_size=6&search=valorant&key=${process.env.REACT_APP_API_KEY}
