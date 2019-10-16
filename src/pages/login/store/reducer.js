import {fromJS} from 'immutable';
import {CHANGE_LOG} from './actionTypes';

const defaultState = fromJS({
  isLogin:false,

});

export default (state = defaultState, action) => {
  if(action.type===CHANGE_LOG){
    const isLogin=state.get('isLogin');
    return state.set('isLogin',!isLogin);
  }

  return state;
}