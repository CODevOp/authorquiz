import React from 'react';
import ReactDOM from 'react-dom';
import App from './AuthorQuiz';
describe("AuthorQuiz Load Main Page", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  // it("returns a value", () => {
  //   expect(result).not.toBeNull();
  // });
  // it('renders AuthorQuiz', () => {
  //   ReactDOM.GetElementById('root')
  // });
})