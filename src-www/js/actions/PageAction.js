const AppDispatcher = require('../dispatcher/AppDispatcher');
const AppConstants = require('../constants/AppConstants');

let PageAction = {
  go(data){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.GO,
      items: data
    })
  },
};

module.exports = PageAction;
