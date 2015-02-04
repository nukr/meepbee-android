const React = require('react');
const action = require('./actions/AppActionCreator');
const Main = React.createFactory(require('./views/Main.jsx'));
const css = require('../less/style.less');

action.init();

if (typeof cordova === 'undefined') {
  React.render(Main(), document.getElementById('react'));
} else {
  document.addEventListener('deviceready', function () {
    //StatusBar.styleDefault();
    React.render(Main(), document.getElementById('react'));
  })
}
