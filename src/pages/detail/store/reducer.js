import {fromJS} from 'immutable';
import {CHANGE_DETAIL_DATA} from './actionTypes';


const defaultState = fromJS({
  detailData:{},

});

export default (state = defaultState, action) => {
  if(action.type===CHANGE_DETAIL_DATA){
    return state.set('detailData',fromJS(action.data));
  }

  return state;
}