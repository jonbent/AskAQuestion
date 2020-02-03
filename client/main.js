import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import Root from '/imports/ui/Root';
import configureStore from "../imports/store/store";
import { loadCurrentUser } from '/imports/actions/UserActions'
Meteor.startup(() => {
  window.store = configureStore();
  render(<Root store={window.store}/>, document.getElementById('render-target'));
  window.store.dispatch(loadCurrentUser());
});