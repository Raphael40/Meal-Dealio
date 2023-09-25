import React from 'react';
import renderer from 'react-test-renderer';
import App from '../../App';

// const { XMLHttpRequest } = require('xhr2'); 
// global.XMLHttpRequest = XMLHttpRequest; 

describe('<App />', () => {

  it('has 1 child', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});
