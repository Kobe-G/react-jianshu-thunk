import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {getLoginAction} from './store/actionCreators';
import {Button, Input, LoginBox, LoginWrapper} from './style';
import {Redirect} from 'react-router-dom';


class Login extends PureComponent {
  render() {
    if (this.props.isLogin) {
      return <Redirect to='/' />
    }
    else {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='账号' ref={(e) => {
              this.account = e
            }}/>
            <Input placeholder='密码' type="password" ref={(e) => {
              this.password = e
            }}/>
            <Button onClick={() => {
              this.props.Login(this.account, this.password)
            }}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )

    }
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.get('login').get('isLogin'),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    Login(account, password) {
      dispatch(getLoginAction(account.value, password.value));
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);