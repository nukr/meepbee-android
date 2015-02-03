const sa = require('superagent');
const action = require('../actions/AppActionCreator');

let appid = 'DHPbawPXsk9VM697XtD0UNuYAuaxuxc8tEXoIquY';
let jskey = 'nzM6oFs11Dh2RroQIUyiJQpgZ6ZLIieC7ts6UlhC';
let restapikey = 'RtmDHDn6h1ehzn9sclbyky5IeWa6Sw5aOJTVKYTt';
let url = 'https://api.parse.com/1/classes/Products'

exports.getData = () => {
  sa.get(url)
    .set('X-Parse-Application-Id', appid)
    .set('X-Parse-REST-API-Key', restapikey)
    .end(function (res) {
      action.load(res.body.results)
    });
}
