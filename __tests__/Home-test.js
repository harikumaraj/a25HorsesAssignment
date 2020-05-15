import 'react-native';
import React from 'react';
import Home from '../src/containers/Home';
// import Login from "../src/containers/Login";
import renderer from 'react-test-renderer';

test("Home Test", () => {
    const snap = renderer.create(<Home />).toJSON();
    expect(snap).toMatchSnapshot();
});
