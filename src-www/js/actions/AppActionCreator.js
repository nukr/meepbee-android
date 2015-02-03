const AppDispatcher = require('../dispatcher/AppDispatcher');
const AppConstants = require('../constants/AppConstants');

let AppActionCreators = {

  init(){
    util.getData();
    AppDispatcher.handleViewAction({
      actionType: AppConstants.INIT
    })
  },

  load(data){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.DATA_LOAD,
      items: data
    })
  },

  saveToStore(data){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SAVE,
      items: data
    })
  },

  animation(animation){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ANIMATION,
      items: animation
    })
  }

};

module.exports = AppActionCreators;
const util = require('../util');
