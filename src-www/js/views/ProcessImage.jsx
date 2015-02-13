const React = require('react');
const ImageStore = require('../stores/ImageStore');

function getState() {
  return ImageStore.getState();
}
let ProcessImage = React.createClass({
  getInitialState(){
    return getState()
  },

  componentDidMount(){
    ImageStore.addChangeListener(this.change);
  },

  componentWillUnmount(){
    ImageStore.removeChangeListener(this.change);
  },

  handleClick(){
  },

  change(){
    this.setState(getState());
  },

  render(){
    return (
      <div>
        <img src={this.state.uri} alt="taked picture" />
      </div>
    );
  }
});

module.exports = ProcessImage;
