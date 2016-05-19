import React from 'react';

function createMockComponent(displayName) {
  return React.createClass({
    displayName,
    render() {
      return <div data-rn-name={displayName}>{this.props.children}</div>;
    },
  });
}

module.exports = createMockComponent;
