const React = require('react');
const action = require('./actions/AppActionCreator');
const Main = React.createFactory(require('./views/Main.jsx'));
require('normalize.css/normalize.css');
require('../less/style.less');

action.init();

if (typeof cordova === 'undefined') {
  React.render(Main(), document.getElementById('react'));
} else {
  document.addEventListener('deviceready', function () {
    React.render(Main(), document.getElementById('react'));
  });
}
