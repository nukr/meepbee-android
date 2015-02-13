const React = require('react');
const action = require('../actions/AppActionCreator');
const page = require('../actions/PageAction');

let FooterBar = React.createClass({

  componentDidMount(){
  },

  componentWillUnmount(){
  },

  handleClick(action, event){
    if (action === 'camera') {
      //this.startCamera();
      page.go({page: 'process-image', data: ''});
    } else {
      page.go({page: action});
    }
  },

  startCamera(){
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
      destinationType: Camera.DestinationType.FILE_URI
    });

    function onSuccess(imageURI) {
      page.go({page: 'process-image', data: imageURI});
    }

    function onFail(message) {
      alert('Failed because: ' + message);
    }
  },

  handleLoaded(product, event){
    console.log('clicked');
  },

  render(){
    return (
      <div className="footer-bar">
        <button onClick={this.handleClick.bind(null, 'main')} href="#">
          <i className="footer-bar-icon fa fa-medium"></i>
        </button>
        <button onClick={this.handleClick.bind(null, 'camera')} href="#">
          <i className="footer-bar-icon fa fa-camera"></i>
        </button>
        <button onClick={this.handleClick.bind(null, 'message')} href="#">
          <i className="footer-bar-icon fa fa-comments"></i>
        </button>
        <button onClick={this.handleClick.bind(null, 'user')} href="#">
          <i className="footer-bar-icon fa fa-user"></i>
        </button>
      </div>
    )
  }
});

module.exports = FooterBar;

