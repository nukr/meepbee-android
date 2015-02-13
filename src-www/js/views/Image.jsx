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
    let product = this.props.product;
    let productClass = cx({
      'product-wrapper': true,
      hide: product.hide,
      transition: product.transition,
      fadeIn: product.fadeIn
    });

    let avatarImage = (function () {
      let img = product.seller.avatarImage
      if (typeof img === 'undefined') {
        return require('./img_avatar_nophoto.png')
      } else {
        return img.url;
      }
    })();
    return (
      <div
        onClick={this.props.onClick.bind(null, product)}
        onLoad={this.props.onLoad.bind(null, product)}
        className={productClass}>
        <img
          className="product-img"
          src={product.thumbnailImages[0].url}
        />
        <div className="avatar">
          <img
            className="avatar-image"
            src={avatarImage}
            alt="avatarImage"
          />
          <span className="seller-name">
            {product.seller.name}
          </span>
        </div>
        <span className="product-price">{product.price}</span>
        {product.title}
      </div>
    )
  },
})

module.exports = Image;
