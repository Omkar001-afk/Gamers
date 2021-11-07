import axios from "axios";
import { detailsUrl } from "../api/api";

export const loadDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(detailsUrl(id));
  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
    },
  });
};
