import {CHANGE_DETAIL_DATA} from './actionTypes';
import axios from "axios";


const changeDetailDataAction = (data) => {
  return {
    type: CHANGE_DETAIL_DATA,
    data
  }
};

export const getDetailDataAction = (id) => {
  return (dispatch) => {
    axios.get('detailData.json?id=' + id).then((res) => {
      const data = res.data[0];
      dispatch(changeDetailDataAction(data))
    }).catch((err) => {
      console.log("获取detailData错误！！!");
    })
  }
};