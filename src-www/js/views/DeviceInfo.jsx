import React from 'react';

let DeviceInfo = React.createClass({
  render(){
    if (typeof this.props.global.device !== 'undefined') {
      let device = this.props.global.device;
      return (
        <div>
          <ul>
            <li>Cordova:{device.cordova}</li>
            <li>Model:{device.model}</li>
            <li>Platform:{device.platform}</li>
            <li>UUID:{device.uuid}</li>
            <li>Version:{device.version}</li>
          </ul>
        </div>
      )
    } else {
      return <div></div>
    }
  }
});

export default DeviceInfo;

