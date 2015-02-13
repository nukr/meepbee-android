const React = require('react');

let HeaderBar = React.createClass({

  render(){
    return (
      <div className="header-bar">
        <img src={require('./logo_small.png')} />
      </div>
    )
  }
});

module.exports = HeaderBar;


