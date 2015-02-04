const React = require('react');
const cx = require('classnames');

let Image = React.createClass({
  getDefaultProps(){
  },

  componentDidMount(){
  },

  componentWillUnmount(){
  },

  render(){
    let imgClass = cx({
      hide: this.props.product.hide,
      transition: this.props.product.transition,
      fadeIn: this.props.product.fadeIn
    });

    let imgWrapperClass = cx({
    })
    return (
      <div className={imgWrapperClass}>
        <img
          className={imgClass}
          onLoad={this.props.onLoad.bind(null, this.props.product)}
          onClick={this.props.onClick.bind(null, this.props.product)}
          src={this.props.product.thumbnailImages[0].url}
          width={window.innerWidth}
        />
        <p>{this.props.product.title}</p>
      </div>
    )
  },
})

module.exports = Image;
