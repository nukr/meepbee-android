const React = require('react');
const cx = require('classnames');
const action = require('../actions/AppActionCreator');
const store = require('../stores/SimpleStore');
const ImageBox = require('./ImageBox.jsx');
const FooterBar = require('./FooterBar.jsx');
const pageStore = require('../stores/PageStore');
const Message = require('../views/Message');
const HeaderBar = require('../views/HeaderBar.jsx')

function getTruth() {
  return {
    store: store.getTruth(),
    page: pageStore.getState()
  }
}

let Main = React.createClass({
  getInitialState(){
    return getTruth();
  },

  componentDidMount(){
    store.addChangeListener(this.change);
    pageStore.addChangeListener(this.change);
  },

  componentWillUnmount(){
    store.removeChangeListener(this.change);
    pageStore.removeChangeListener(this.change);
  },

  change() {
    this.setState(getTruth());
  },

  render() {
    let productView = () => {
      return (
        <div>
          <ImageBox products={this.state.store.products} />
        </div>
      );
    }

    let view;

    if (this.state.page === "message") {
      view = <Message />
    }

    if (this.state.page === "main") {
      view = productView();
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
