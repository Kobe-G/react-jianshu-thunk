import {CHANGE_LOG} from './actionTypes';
import axios from "axios/index";

export const getChangeLogAction=()=>{
  return {
    type:CHANGE_LOG,
  }
};

export const getLoginAction=(account,password)=>{
  return (dispatch)=>{
    axios.get('login.json?account='+account+'&password='+password).then((res) => {
      const data = res.data;
      dispatch(getChangeLogAction());
    }).catch((err)=>{console.log("获取AuthorList错误！！!")})
  }
};