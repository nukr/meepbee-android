const React = require('react');
const cx = require('classnames');
const action = require('../actions/AppActionCreator');
const store = require('../stores/SimpleStore');
const ImageBox = require('./ImageBox.jsx');

function getTruth() {
  return store.getTruth();
}

let Main = React.createClass({
  getInitialState(){
    return getTruth();
  },

  componentDidMount(){
    store.addChangeListener(this.change);
  },

  componentWillUnmount(){
    store.removeChangeListener(this.change);
  },

  render() {
    console.log(this.state);
    let classString = cx({
      'blink': this.state.animation.blink,
      'transition': this.state.animation.transition
    });

    return(
      <div className="main">
        <div className={classString}>
          <h1>Hi there! Hello React</h1>
          <h2>its cool</h2>
        </div>
        <div>
          <button onClick={ this.handleClick.bind(null, 'blink') } >Blink</button>
          <button onClick={ this.handleClick.bind(null, 'transition') } >Transition</button>
          <button onClick={ this.handleClick.bind(null, 'stop') } >Stop</button>
        </div>
        <ImageBox products={this.state.products}/>
      </div>
    )
  },

  handleClick(animation, e) {
    e.preventDefault();
    action.animation(animation);
  },

  change() {
    this.setState(getTruth());
  }
})

module.exports = Main;
