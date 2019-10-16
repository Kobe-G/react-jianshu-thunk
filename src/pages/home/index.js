import React, {PureComponent} from 'react';
import {BackTop, HomeLeft, HomeRight, HomeWrapper} from './style';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
import {connect} from "react-redux";
import {getScrollShowAction} from './store/actionCreators';


class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            src="//upload.jianshu.io/admin_banners/web_images/4741/240c3b01ebd63e7a7129976df20c5e10bd43d799.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt="" className="banner-img"/>
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
        {this.props.showScroll ? <BackTop onClick={this.props.toTop}>回到顶部</BackTop> : null}
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.bindEvents();
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.props.changeShowScroll);
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeShowScroll);
  }

}

const mapStateToProps = (state) => {
  return {
    showScroll: state.get('home').get('showScroll'),

  }
};

const mapDispatchToProps = (dispatch) => {
  return {

    toTop() {
      window.scrollTo(0, 0);
    },

    changeShowScroll(e) {
      if (document.documentElement.scrollTop > 100) {
        dispatch(getScrollShowAction(true));
      }
      else {
        dispatch(getScrollShowAction(false));
      }
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);