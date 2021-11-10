import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../reduxFiles/actions/gameAction";
import Game from "../card/Game";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import styled from "styled-components";
import { upcomingGamesURL } from "../api/api";
import GameDetial from "../card/GameDetial";
import { useLocation } from "react-router";
import { fadeIn } from "../anim/anim";

const Home = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  // console.log(pathId);

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popular, newGames, upcoming, search } = useSelector(
    (state) => state.games
  );

  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      {pathId && <GameDetial />}

      {search.length ? (
        <div className="search">
          <h2>Searched Games</h2>
          <Games>
            {search.map((game) => (
              <Game
                name={game.name}
                released={game.released}
                id={game.id}
                rating={game.rating}
                image={game.background_image}
                key={game.id}
              />
            ))}
          </Games>
        </div>
      ) : (
        ""
      )}

      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            rating={game.rating}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>

      <h2>Popular Games</h2>
      <Games>
        {popular.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            rating={game.rating}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>

      <h2>New Games</h2>
      <Games>
        {newGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            rating={game.rating}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
    </GameList>
  );
};

//styled component
const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;
export default Home;
