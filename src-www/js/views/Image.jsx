const React = require('react');
const cx = require('classnames');

let Image = React.createClass({
  getDefaultProps(){
  },

  componentDidMount(){
  },

  componentWillUnmount(){
  },

  handleLoaded(product, event) {
    event.target.className = 'fadeIn';
  },

  handleClick(event) {
    console.log('click');
    event.target.className = cx({
      [event.target.className]: true,
      transition: true
    });
  },

  render(){
    let imgClass = cx({
      hide: true
    });

    let imgWrapperClass = cx({
    })
    return (
      <div className={imgWrapperClass}>
        <img
          className={imgClass}
          onLoad={this.handleLoaded.bind(null, this.props.product)}
          onClick={this.handleClick}
          src={this.props.product.thumbnailImages[0].url}
          width="250"
          height="250"
        />
        <p>{this.props.product.title}</p>
      </div>
    )
  },
})

module.exports = Image;
