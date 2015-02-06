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
    let imgClass = cx({
      hide: product.hide,
      transition: product.transition,
      fadeIn: product.fadeIn
    });

    let imgWrapperClass = cx({
      'product-wrapper': true
    })
    let avatarImage = (function () {
      let img = product.seller.avatarImage
      if (typeof img === 'undefined') {
        return 'img/img_avatar_nophoto.png';
      } else {
        return img.url;
      }
    })();
    return (
      <div className={imgWrapperClass}>
        <img
          className={imgClass}
          onLoad={this.props.onLoad.bind(null, product)}
          onClick={this.props.onClick.bind(null, product)}
          src={product.thumbnailImages[0].url}
          width={window.innerWidth}
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
