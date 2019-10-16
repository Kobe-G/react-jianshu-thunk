import styled from 'styled-components';
import logoSrc from '../../statics/logo.png';


export const HeaderWrapper = styled.div`
  position:relative;
  height:58px;
  border-bottom:1px solid #f0f0f0;
  z-index: 10;
`;

export const Logo = styled.div`
  position:absolute;
  top:0;
  left:40px;
  width:100px;
  height:58px;
  background:url(${logoSrc}) no-repeat ;
  background-size:cover;
`;

export const Nav = styled.div`
  width:960px;
  height:58px;
  padding-left:70px;
  box-sizing:border-box;
  margin: 0 auto;
`;

export const NavItem = styled.div`
  line-height:56px;
  padding:0 15px;
  font-size:17px;
  color:#333;
  
  &.left{
    float:left;
  }
  &.right{
    float:right;
  color:#969696;
  }
  &.active{
    color:#ea6f5a;
  }
  &.searchBar{
    position:relative;
    
  }
  &.searchBar .fangdajing{
    position:absolute;
    width:30px;
    height:30px;
    line-height:30px;
    text-align:center
    border-radius:15px;
    right:18px;
    bottom:11px;
    
  }
  
  &.searchBar input.focused{
     width:240px;
  }
  &.searchBar span.focused{
    background:#777;
    color:#fff;
  }
  
  &.searchBar .slide-enter{
    width:160px;
    transition:all .2s ease-out;
  }
  &.searchBar .slide-enter-active{
    width:240px;
  }
  &.searchBar .slide-exit{
    width:240px;
    transition:all .2s ease-out;
  }
  &.searchBar .slide-exit-active{
    width:160px;
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width:160px;
  height:38px;
  padding:0 20px;
  margin:9px 0 0 0;
  box-sizing:border-box;
  border:none;
  outline:none;
  border-radius:19px;
  background:#eee;
  font-size:14px;
  &::placeholder{
  color:#999;
  }
`;

export const Addition = styled.div`
  position:absolute;
  right:0;
  top:0;
  height:56px;
  .iconfont{
    padding-right:2px;
  }
`;

export const Button = styled.div`
  float:right;
  margin-top:9px;
  margin-right:20px;
  padding:0 20px;
  line-height:38px;
  border-radius:19px;
  border:1px solid #ec6149;
  font-size:14px;
  &.reg{
    color:#ec6149;
  }
  &.writing{
    color:#fff;
    background:#ec6149;
  }
`;

export const SearchInfo = styled.div`
  &.show{
    display:block;
  }
  &.hide{
    display:none;
  }
  background:#fff;
  opacity: 1;
  position:absolute;
  left:18px;
  top:56px;
  width:240px;
  padding:0 20px;
  box-shadow:0 0 8px rgba(0,0,0,0.2);
  .clearFix{
    overflow:hidden;
  }
`;

export const SearchInfoTitle = styled.span`
  margin:20px 0 10px 0;
  line-height:20px;
  font-size:14px;
  color:#969696;
  float:left;
`;

export const SearchInfoSwitch = styled.a`
  height:20px;
  margin:20px 0 0 0;
  line-height:20px;
  font-size:13px;
  color:#969696;
  float:right;
  background-color: transparent;
  text-align:center;
  cursor:pointer;
  
  .spin{
    display:block;
    float:left;
    font-size:12px;
    margin-right:3px;
    transition:all .15s ease-in;
    transform-origin:center center;
  }
  
  .rotate0{
      transform:rotate(0deg);
  }
  .rotate360{
      transform:rotate(360deg);
  }
`;

export const SearchInfoItem = styled.a`
  margin:0 20px 10px 0 ;
  float:left;
  line-height:20px;
  padding:0 5px;
  font-size:12px;
  border:1px solid #ddd;
  color:#787878;
  background-color: transparent;
  border-radius:5px;
`;