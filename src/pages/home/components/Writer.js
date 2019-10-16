import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {FollowAuthor, HeadImg, WriterDesc, WriterItem, WriterWrapper} from '../style';
import {getAuthorListAction, getNextPageAction} from '../store/actionCreators';


class Writer extends PureComponent {
  render() {
    return (
      <WriterWrapper>
        <div className="clearFix">
          <p>推荐作者</p>
          <a onClick={this.props.toNextPage}>
            <span className={this.props.isRotate ? "iconfont spin rotate360" : "iconfont spin rotate0"}>&#xe60e;</span>
            换一批</a>
        </div>
        <ul>
          {this.props.authorList.map((item, index) => {
            return (
              <WriterItem key={item.get('id')}>
                <HeadImg>
                  <img src={item.get('avatar_source')} alt=""/>
                </HeadImg>
                <WriterDesc>
                  <h2>{item.get('nickname')}</h2>
                  <p>写了{item.get('total_wordage')}字&{item.get('total_likes_count')}喜欢</p>
                </WriterDesc>
                <FollowAuthor>
                  <span className="iconfont iconFont">&#xe620;</span>关注
                </FollowAuthor>
              </WriterItem>
            )
          })}
        </ul>
      </WriterWrapper>
    )
  }

  componentDidMount() {
    this.props.componentDidMount();
  }
}

const mapStateToProps = (state) => {
  return {
    isRotate: state.get('home').get('isRotate'),
    authorList: state.get('home').get('authorList'),

  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    componentDidMount() {
      dispatch(getAuthorListAction());
    },
    toNextPage() {
      dispatch(getNextPageAction());
    }


  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Writer);