import renderer from "react-test-renderer";
import app from "./index.js";

describe("Server index.js", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(app).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
