import React from 'react';
import renderer from 'react-test-renderer';
import App from '../../App';

// This is a workaround for a bug in react-native-maps but still in progresss
// const { XMLHttpRequest } = require('xhr2'); 
// global.XMLHttpRequest = XMLHttpRequest; 

describe('<App />', () => {

  // it('renders correctly', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});
