import { expect } from 'chai';
import createMockComponent from '../src/components/createMockComponent';
import React, { Text } from '../src/react-native';
import ReactDOMServer from 'react-dom/server';


describe('createMockComponent', () => {
  it ('renders component structure', () => {
    const Container = createMockComponent('Container');

    let component = <Container><Text>Hello World!</Text></Container>;
    let html = ReactDOMServer.renderToString(component);

    expect(html).to.contain('data-rn-name="Container"');
    expect(html).to.contain('data-rn-name="Text"');
    expect(html).to.contain('Hello World!');
  });
});
