import React, {PureComponent} from 'react';
import {TopicWrapper,TopicItem} from '../style';
import {connect} from "react-redux";
import {getTopicListAction} from '../store/actionCreators';

class Topic extends PureComponent {
  render() {
    return (
      <TopicWrapper>
        {this.props.TopicList.map((item,index)=>{
          return <TopicItem key={item}>{item}</TopicItem>
        })}
      </TopicWrapper>
    )
  }
  componentDidMount(){
    this.props.componentDidMount();
  }
}

const mapStateToProps = (state) => {
  return {
    TopicList:state.get('home').get('TopicList'),

  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    componentDidMount(){
      dispatch(getTopicListAction());
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Topic);