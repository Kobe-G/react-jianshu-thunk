import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Write extends PureComponent {
  render() {

    if (this.props.isLogin) {
      return (
        <div>写文章页面</div>
      )
    }else {
      return <Redirect to='/login' />
    }
  }
}

const mapState = (state) => ({
  isLogin: state.getIn(['login', 'isLogin']),

});

export default connect(mapState, null)(Write);