const React = require('react');
const action = require('../actions/AppActionCreator');
const page = require('../actions/PageAction');

let FooterBar = React.createClass({

  componentDidMount(){
  },

  componentWillUnmount(){
  },

  render(){
    return (
      <div className="user">
        <div className="element"></div>
        <div className="element"></div>
        <div className="element"></div>
        <div className="element"></div>
        <div className="element"></div>
      </div>
    )
  }
});

module.exports = FooterBar;


