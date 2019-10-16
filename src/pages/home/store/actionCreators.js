import {NEXT_PAGE,GRT_AUTHOR_LIST,CHANGE_SHOW_SCROLL,GRT_ARTICLE_LIST,GRT_TOPIC_LIST} from "./actionTypes";
import axios from "axios";

const changeAuthorListAction = (data) => {
  return {
    type: GRT_AUTHOR_LIST,
    data
  }
};

const changeArticleListAction = (data) => {
  return {
    type: GRT_ARTICLE_LIST,
    data
  }
};

const changeTopicListAction = (data) => {
  return {
    type: GRT_TOPIC_LIST,
    data
  }
};

export const getAuthorListAction = () => {
  return (dispatch) => {
    axios.get('authorList.json').then((res) => {
      const data = res.data.users;
      dispatch(changeAuthorListAction(data))
    }).catch((err)=>{console.log("获取AuthorList错误！！!")})
  }
};

export const getNextPageAction = () => {
  return {
    type: NEXT_PAGE,
  }
};

export const getScrollShowAction = (isShow) => {
  return {
    type: CHANGE_SHOW_SCROLL,
    isShow
  }
};

export const getArticleListAction = () => {
  return (dispatch) => {
    axios.get('articleList.json').then((res) => {
      const data = res.data;
      dispatch(changeArticleListAction(data))
    }).catch((err)=>{console.log("获取ArticleList错误！！！")})
  }
};

export const getTopicListAction = () => {
  return (dispatch) => {
    axios.get('topicList.json').then((res) => {
      const data = res.data;
      dispatch(changeTopicListAction(data))
    }).catch((err)=>{console.log("获取topicList错误！！！")})
  }
};

