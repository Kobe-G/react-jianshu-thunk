import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width:960px;
  margin:0 auto;
  overflow:hidden;
`;

export const HomeLeft = styled.div`
  float:left;
  margin-left:15px;
  padding-top:30px;
  width:625px;
  .banner-img{
    border-radius: 10px;
    width:625px;
    height:270px;
  }
`;

export const HomeRight = styled.div`
  padding-top:30px;
  width:280px;
  float:right;
`;


export const TopicWrapper = styled.div`
  padding:20px 0 10px 0;
  overflow:hidden;
  margin:10px 0 0 0;
  border-bottom:1px solid #dcdcdc;
`;

export const TopicItem = styled.a`
  float: left;
  height: 32px;
  line-height: 32px;
  text-align:center;
  background-color: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding: 0 20px;
  margin: 0px 18px 15px 0px;
  cursor: pointer;
 `;

export const ListItem = styled.div`
  
  padding: 20px 0;
  border-bottom:1px solid #dcdcdc;
  overflow:hidden;
  img{
    display:block;
    float:right;
    width:150px;
    height:100px;
    border-radius:10px;
    border: 1px solid #f0f0f0;
  }
 `;

export const ListInfo = styled.div`
  width:470px;
  float:left;
  max-height:100px;
  h3{
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom:5px;
  }
  
  p{
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
  
 `;

export const ListBottom = styled.div`
  padding-right: 0!important;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  span{
    margin-right:15px;
    color: #b4b4b4;
  }
  span.profit{
    color: #ea6f5a!important;
  }
  &.clearFix{
    clear:both;
  }
  .iconfont.rev{
    font-size:13px;
    margin-right:2px;
  }
 `;

export const RecommendItem = styled.a`
  display: block;
  width: 280px;
  height: 50px;
  margin-bottom: 10px;
  img{
    width:100%;
    height:100%;
  }
 `;

export const WriterWrapper = styled.div`
  width: 280px;
  margin-top:50px;
  .clearFix{
    overflow:hidden;
  }
  .clearFix p{
    float:left;
    line-height: 20px;
    font-size: 16px;
    color: #969696;
  }
  .clearFix a{
    height: 20px;
    line-height: 20px;
    font-size: 16px;
    color: #969696;
    float: right;
    background-color: transparent;
    text-align: center;
    cursor: pointer;
  }
  .clearFix a .spin{
    display: block;
    float: left;
    font-size: 16px;
    margin-right: 3px;
    transition: all .15s ease-in;
    transform-origin: center center;
  }
  .rotate0{
      transform:rotate(0deg);
  }
  .rotate360{
      transform:rotate(360deg);
  }
 `;

export const WriterItem = styled.li`
  width: 280px;
  height: 50px;
  margin-top: 15px;
  line-height: 20px
 `;

export const HeadImg = styled.a`
  width: 48px;
  height: 48px;
  margin-right: 10px;
  float:left;
  img{
    width:100%;
    height:100%;
    border-radius:50%;
  }
 `;

export const WriterDesc = styled.div`
  height: 50px;
  float:left;
  h2{
    padding:5px 0 0 0;
    font-size: 14px;
    color: #2f2f2f;
  }
  p{
    font-size: 12px;
    color: #969696;
    margin-top: 5px;
  }
 `;

export const FollowAuthor = styled.a`
    float: right;
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
    cursor: pointer;
    .iconFont{
      font-size:13px;
      margin-right:2px;
    }
 `;

export const LoadMore = styled.div`
  width:100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
 `;

export const BackTop = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 50px;
  height: 50px;
  border: 1px solid #dcdcdc;
  text-align:center;
  cursor: pointer;
  font:700 18px/25px 楷体;
 `;