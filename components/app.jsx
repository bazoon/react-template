import React from 'react';
import { connect } from 'react-redux';
let injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

var App = React.createClass({

  getInitialState() {
    return {};
  },


  render() {

    return (
      <div>
        App
      </div>
    )

  }


});

function select (state) {
  return state;
}

export default connect(select)(App)
