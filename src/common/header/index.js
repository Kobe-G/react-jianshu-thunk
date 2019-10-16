import React, {PureComponent} from 'react';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import {getChangeLogAction} from '../../pages/login/store/actionCreators';
import {
  getList,
  getMouseInAction,
  getMouseOutAction,
  getNextPageAction,
  getSearchBlurAction,
  getSearchFocusAction
} from './store/actionCreators';
import {
  Addition,
  Button,
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchInfo,
  SearchInfoItem,
  SearchInfoSwitch,
  SearchInfoTitle,
} from './style';


class Header extends PureComponent{

  render() {
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo/>
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>

          <NavItem className="left searchBar">
            <CSSTransition
              in={this.props.focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch className={this.props.focused ? 'focused' : ''}
                         onFocus={() => {
                           this.props.inputFocus(this.props.list)
                         }}
                         onBlur={this.props.inputBlur}
              />
            </CSSTransition>
            <span
              className={this.props.focused ? 'focused iconfont fangdajing' : 'iconfont fangdajing'}>&#xe614;</span>
            <SearchInfo className={this.props.focused ? 'show' : this.props.isMouseIn ? 'show' : 'hide'}
                        onMouseEnter={this.props.mouseIn}
                        onMouseLeave={this.props.mouseOut}
            >
              <div className="clearFix">
                <SearchInfoTitle>热门搜索</SearchInfoTitle>
                <SearchInfoSwitch onClick={this.props.toNextPage}>
                    <span
                      className={this.props.isRotate ? "iconfont spin rotate360" : "iconfont spin rotate0"}>&#xe60e;</span>
                  换一批</SearchInfoSwitch>
              </div>
              <ul>
                {this.props.currentList.map((item, index) => {
                  return <SearchInfoItem key={index}>{item}</SearchInfoItem>
                })}
              </ul>
            </SearchInfo>
          </NavItem>

          <NavItem className="right" onClick={() => {
            this.props.LogInOrOut(this.props)
          }}>{this.props.isLogin ? '退出' : '登录'}</NavItem>
          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>
        </Nav>
        <Addition>
          <Link to='/write'><Button className="writing"><span className="iconfont">&#xe678;</span>写文章</Button></Link>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }


}


const mapStateToProps = (state) => {
  return {
    focused: state.get('header').get('focused'),
    list: state.get('header').get('list'),
    isMouseIn: state.get('header').get('isMouseIn'),
    currentList: state.get('header').get('currentList'),
    isRotate: state.get('header').get('isRotate'),
    isLogin: state.get('login').get('isLogin'),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

    inputFocus(list) {
      dispatch(getSearchFocusAction());
      (list.size === 0) && dispatch(getList())
    },

    inputBlur() {
      dispatch(getSearchBlurAction());
    },

    mouseIn() {
      dispatch(getMouseInAction());
    },

    mouseOut() {
      dispatch(getMouseOutAction());
    },

    toNextPage() {
      dispatch(getNextPageAction());
    },

    LogInOrOut(props) {
      if (props.isLogin) {
        props.history.push('/');
        dispatch(getChangeLogAction());
      }
      else {
        props.history.push('/login');
      }
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));