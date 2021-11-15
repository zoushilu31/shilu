import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';



afterEach(cleanup);
describe('About component', () => {
    //renders About test
    it('renders', () => {
        render(<About />);
    }
    );
    //first test
    //second test
    
it('mathes snapshot DOM nod structure', () => {

})
  })
  const { asFragment } = render(<About />);
  expect(asFragment()).toMatchSnapshot();
