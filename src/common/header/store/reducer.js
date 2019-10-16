import {CHANGE_LIST, INPUT_BLUR, INPUT_FOCUS, Mouse_In, Mouse_Out, NEXT_PAGE} from './actionTypes';
import {fromJS} from 'immutable';


const defaultState = fromJS({
  focused: false,
  list: [],
  isMouseIn: false,
  page: 0,
  totalPage: 1,
  showNumbers: 10,
  currentList: [],
  isRotate: false,

});

export default (state = defaultState, action) => {

  if (action.type === INPUT_FOCUS) {
    return state.set('focused', true);
  }

  if (action.type === INPUT_BLUR) {
    return state.set('focused', false);
  }

  if (action.type === CHANGE_LIST) {
    const list = action.data.toJS();
    const page = state.get('page') - 1;
    const showNumbers = state.get('showNumbers');
    const totalPage = list.length / showNumbers;
    const currentList = [];
    for (let i = page + 1; i < showNumbers; i++) {
      currentList.push(list[i]);
    }

    return state.merge({
      currentList: fromJS(currentList),
      list: action.data,
      totalPage: totalPage,
    });

  }

  if (action.type === Mouse_In) {
    return state.set('isMouseIn', true);
  }

  if (action.type === Mouse_Out) {
    return state.set('isMouseIn', false);
  }

  if (action.type === NEXT_PAGE) {

    const list = state.get('list').toJS();
    const totalPage = state.get('totalPage');
    let page = state.get('page') + 1;
    if (page >= totalPage) {
      page = 0;
    }
    const showNumbers = state.get('showNumbers');
    const startNumber = showNumbers * page;
    const endNumber = startNumber + showNumbers;
    const currentList = [];
    for (let i = startNumber; i < endNumber; i++) {
      currentList.push(list[i]);
    }

    const isRotate = state.get('isRotate');

    return state.merge({
      currentList: fromJS(currentList),
      page: page,
      isRotate: !isRotate,
    });

  }

  return state;
}