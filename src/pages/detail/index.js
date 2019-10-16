import React, {Component} from 'react';
import {DetailWrapper,Header,Content} from './style';
import {connect} from 'react-redux';
import {getDetailDataAction} from "../detail/store/actionCreators";
import {withRouter} from 'react-router-dom';

class Detail extends Component {
  render() {
    return (
      <DetailWrapper>
        <Header>{this.props.detailData.get('title')}</Header>
        <Content>
          <img src={this.props.detailData.get('imgUrl')} alt=""/>
          <p>{this.props.detailData.get('content')}</p>
        </Content>
      </DetailWrapper>
    )
  }

  componentDidMount(){
    this.props.componentDidMount(this.props.match.params.id);
  }
}


const mapStateToProps = (state) => {
  return {
    detailData:state.get('detail').get('detailData'),

  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    componentDidMount(id){
      dispatch(getDetailDataAction(id))
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Detail));