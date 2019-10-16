import {createGlobalStyle} from 'styled-components';

export const GlobalFontStyle=createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1570799830596'); /* IE9 */
  src: url('iconfont.eot?t=1570799830596#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('iconfont.woff?t=1570799830596') format('woff'),
  url('iconfont.ttf?t=1570799830596') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1570799830596#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconfangdajing:before {
  content: "\\e614";
}

.iconAa:before {
  content: "\\e636";
}

.iconpan_icon:before {
  content: "\\e678";
}

.iconpinglun:before {
  content: "\\e642";
}

.iconweiraogoujianxuanzhuan:before {
  content: "\\e60e";
}

.iconaixin:before {
  content: "\\e85c";
}

.iconguanzhu:before {
  content: "\\e620";
}

.iconzuanshi:before {
  content: "\\e655";
}

`;
