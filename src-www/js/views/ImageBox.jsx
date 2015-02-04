const React = require('react');
const Image = require('./Image.jsx');
const action = require('../actions/AppActionCreator');

let ImageBox = React.createClass({

  componentDidMount(){
  },

  componentWillUnmount(){
  },

  handleClick(product, event){
    action.transition(product);
  },

  handleLoaded(product, event){
    action.fadeIn(product);
  },

  render(){
    return (
      <div>
        {this.props.products.map(function (product, index) {
          return (
            <Image
              onClick={this.handleClick}
              onLoad={this.handleLoaded}
              key={index}
              product={product}
            />
          )
        }.bind(this))}
      </div>
    )
  }
});

module.exports = ImageBox;
