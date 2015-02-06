const AppDispatcher = require('../dispatcher/AppDispatcher');
const AppConstants = require('../constants/AppConstants');

let PageAction = {
  go(page){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.GO,
      items: page
    })
  },
};

module.exports = PageAction;
