const expect = require('chai').expect;
const React = require('react');
const ReactDOM = require('react-dom');
const RcInputFile = require('../lib/rc-input-file.min.js');

let app;

function renderDOM({children}) {
  app = document.createElement('div');
  document.body.appendChild(app);

  const rcInputFile = React.createElement(RcInputFile, {children});

  ReactDOM.render(rcInputFile, app);

}

function removeDOM() {
  app.remove();
  app = null;
}

function createJSX() {
  return React.createElement('button', null, 'upload');
}

describe("rc-input-file", function () {
  beforeAll(function () {
    const Children = createJSX();
    renderDOM({children: Children});
  });
  afterAll(function () {
    removeDOM();
  });

  it('it must string', function () {
    expect(app.innerHTML).to.be.an('string');
  });
});