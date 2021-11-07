//sample url https://api.rawg.io/api/games?key=YOUR_API_KEY&dates=2019-09-01,2019-09-30&platforms=18,1,7
//base url  /platforms?key=0a246766e9ea43ddb0a6127be81a50be

const base_api = `https://api.rawg.io/api/`;

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
// console.log(nextYear);

//popular games
const popular_games = `games?key=0a246766e9ea43ddb0a6127be81a50be&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=0a246766e9ea43ddb0a6127be81a50be&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=0a246766e9ea43ddb0a6127be81a50be&dates&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;
//api.rawg.io/api/games?key=0a246766e9ea43ddb0a6127be81a50be/58386
//https://api.rawg.io/api/games?page_size=1&page=1&search=valorant&key=0a246766e9ea43ddb0a6127be81a50be
export const popularGames = () => `${base_api}${popular_games}`;
export const upcomingGamesURL = () => `${base_api}${upcoming_games}`;
export const newGamesURL = () => `${base_api}${newGames}`;
//game_details
export const detailsUrl = (game_id) =>
  `${base_api}games?/${game_id}&key=0a246766e9ea43ddb0a6127be81a50be`;
