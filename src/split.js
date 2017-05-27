import React from 'react';
import { render } from 'react-dom';

require.ensure([], require => {
  const { default: Child } = require('./Child');
  render(<Child />, document.getElementById('root'));
});
