import {fromJS} from 'immutable';
import {NEXT_PAGE,GRT_AUTHOR_LIST,CHANGE_SHOW_SCROLL,GRT_ARTICLE_LIST,GRT_TOPIC_LIST} from './actionTypes';

const defaultState = fromJS({
  TopicList: [],
  articleList: [],
  authorList:[],
  isRotate:false,
  showScroll:false,

});

export default (state = defaultState, action) => {

  if(action.type===NEXT_PAGE){
    const isRotate=state.get('isRotate');
    return state.set('isRotate',!isRotate);
  }

  if(action.type===GRT_AUTHOR_LIST){
    const list=action.data;
    return state.set('authorList',fromJS(list));
  }

  if(action.type===CHANGE_SHOW_SCROLL){
    return state.set('showScroll',action.isShow);
  }

  if(action.type===GRT_ARTICLE_LIST){
    return state.set('articleList',fromJS(state.get('articleList').concat(fromJS(action.data))));
  }

  if(action.type===GRT_TOPIC_LIST){
    return state.set('TopicList',fromJS(action.data));
  }

  return state;
}