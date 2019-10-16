import React, {PureComponent} from 'react';
import {ListBottom, ListInfo, ListItem, LoadMore} from "../style";
import {connect} from 'react-redux';
import {getArticleListAction} from '../store/actionCreators';
import {Link} from 'react-router-dom';


class List extends PureComponent {
  render() {
    return (
      <div>
        {this.props.articleList.map((item, index) => {
          return (
            <Link to={'/detail/' + item.get('id')} key={index}>
              <ListItem>
                <img
                  src={item.get('imgUrl')}
                  alt=""/>
                <ListInfo>
                  <h3>{item.get('title')}</h3>
                  <p>{item.get('describe')}</p>
                </ListInfo>
                <ListBottom className="clearFix">
                  <span className="profit"><i className="iconfont">&#xe655;</i>{item.get('profit')}</span>
                  <span>{item.get('author')}</span>
                  <span><i className="iconfont rev">&#xe642;</i>{item.get('rev')}</span>
                  <span><i className="iconfont">&#xe85c;</i>{item.get('love')}</span>
                </ListBottom>
              </ListItem>
            </Link>
          )
        })}
        <LoadMore onClick={this.props.loadMore}>加载更多</LoadMore>
      </div>
    )
  }

  componentDidMount() {
    if(this.props.articleList.size===0){
      this.props.componentDidMount();
    }
  }
}


const mapStateToProps = (state) => {
  return {
    articleList: state.get('home').get('articleList'),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadMore() {
      dispatch(getArticleListAction());
    },

    componentDidMount() {
      dispatch(getArticleListAction());
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(List);