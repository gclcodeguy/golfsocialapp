import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import LoginPage from "../src/scenes/LoginPage/index.jsx";
import { createStore } from "redux";
import authReducer from "../src/state/index.js";

// Mock the useNavigate hook
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("LoginPage", () => {
  let store;

  beforeEach(() => {
    store = createStore(authReducer);
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    console.error.mockRestore();
  });

  it("should render correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <LoginPage />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
