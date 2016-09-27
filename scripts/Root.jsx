import React, { Component } from 'react';
import { render } from 'react-dom';

/**
 * This is the root component for the react code
 */

const Root = (
  <p>This is the Root component</p>
);

render(<Root/>, document.querySelector('#app'));
