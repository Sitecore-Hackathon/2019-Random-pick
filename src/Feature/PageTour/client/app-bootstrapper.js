import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App';

var elem = document.createElement('div');
elem.id = 'root';
document.body.prepend(elem);

export const render = () => {
  ReactDOM.render(<App />, elem);
};