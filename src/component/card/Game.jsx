import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../reduxFiles/actions/detailsAction";
import { Link } from "react-router-dom";
import { smallImage } from "../api/resize";
import { popIn } from "../anim/anim";

const Game = ({ name, released, image, id }) => {
  //Load Details
  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
    // console.log(`clicked ${id}`);
  };

  return (
    <StyledGame
      variants={popIn}
      initial="hidden"
      animate="show"
      onClick={loadDetailHandler}
    >
      <Link to={`/games/${id}`}>
        <motion.h3>{name}</motion.h3>
        <p>{released}</p>
        <motion.img src={smallImage(image, 640)} alt={name} />
      </Link>
    </StyledGame>
  );
};
const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
export default Game;
