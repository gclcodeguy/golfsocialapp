import React from "react";
import renderer from "react-test-renderer";
import FlexBetween from "../src/components/FlexBetween.jsx";
//unit test for flexBetween component
describe("FlexBetween", () => {
  it("should render correctly", () => {
    const tree = renderer
      .create(<FlexBetween>Hello World</FlexBetween>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
