const React = require('react');
const Image = require('./Image.jsx');

let ImageBox = React.createClass({

  componentDidMount(){
  },

  componentWillUnmount(){
  },

  render(){
    return (
      <div>
        {this.props.products.map(function (product, index) {
          return (<Image key={index} product={product} />)
        })}
      </div>
    )
  }
});

module.exports = ImageBox;
