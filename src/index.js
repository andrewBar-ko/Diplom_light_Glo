
import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
// import 'cross-browser-polyfill';
// // import 'ie11-scroll-into-view';
// import 'dom-node-polyfills';
// import 'promise-polyfill';
// import 'apply-url';

import addMore from './modules/addMore';
import togglePopUp from './modules/togglePopUp';
import sendForm from './modules/sendForm';
import calcAccord from './modules/calcAccord';
import moveAccord from './modules/moveAccord';

moveAccord();

addMore();
calcAccord();
sendForm();
togglePopUp();