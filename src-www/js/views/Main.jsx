const React = require('react');
const cx = require('classnames');
const action = require('../actions/AppActionCreator');
const ProductStore = require('../stores/ProductStore');
const ImageBox = require('./ImageBox.jsx');
const FooterBar = require('./FooterBar.jsx');
const PageStore = require('../stores/PageStore');
const Message = require('../views/Message');
const HeaderBar = require('../views/HeaderBar.jsx')
const ProcessImage = require('../views/ProcessImage.jsx');

function getTruth() {
  return {
    ProductStore: ProductStore.getTruth(),
    PageStore: PageStore.getState()
  }
}

let Main = React.createClass({
  getInitialState(){
    return getTruth();
  },

  componentDidMount(){
    ProductStore.addChangeListener(this.change);
    PageStore.addChangeListener(this.change);
  },

  componentWillUnmount(){
    ProductStore.removeChangeListener(this.change);
    PageStore.removeChangeListener(this.change);
  },

  change() {
    this.setState(getTruth());
  },

  render() {
    let productView = () => {
      return (
        <div>
          <ImageBox products={this.state.ProductStore.products} />
        </div>
      );
    }

    let view;

    if (this.state.PageStore.view === "message") {
      view = <Message />
    }

    if (this.state.PageStore.view === "main") {
      view = productView();
    }

    if (this.state.PageStore.view === "process-image") {
      view = <ProcessImage />
    }

    return(
      <div className="main">
        <HeaderBar />
        <div className="view">
          {view}
        </div>
        <FooterBar />
      </div>
    )
  }
})

module.exports = Main;
