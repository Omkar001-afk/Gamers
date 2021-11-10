import axios from "axios";
import { detailsUrl, gameSSUrl } from "../../api/api";

export const loadDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(detailsUrl(id));
  const screenShotData = await axios.get(gameSSUrl(id));

  dispatch({
    type: "IS_LOADING",
  });
  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenShotData.data,
    },
  });
};
