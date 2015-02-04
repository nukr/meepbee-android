const React = require('react');
const action = require('../actions/AppActionCreator');

let FooterBar = React.createClass({

  componentDidMount(){
  },

  componentWillUnmount(){
  },

  handleClick(product, event){
    console.log('clicked');
  },

  handleLoaded(product, event){
    console.log('clicked');
  },

  render(){
    return (
      <div className="footer-bar">
        <i className="footer-bar-icon fa fa-bed"></i>
      </div>
    )
  }
});

module.exports = FooterBar;

