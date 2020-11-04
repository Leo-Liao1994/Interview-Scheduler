
/*
  We are rendering `<Application />` down below, so we need React.createElement
*/
import React from "react";

/*
  We import our helper functions from the react-testing-library
  The render function allows us to render Components
*/
import { render } from "@testing-library/react";

/*
  We import the component that we are testing
*/
import Application from "components/Application";
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import Confirm from "components/Appointment/Confirm";
import Form from "components/Appointment/Form";
import Status from "components/Appointment/Status";
import Error from "components/Appointment/Error";
/*
  A test that renders a React Component
*/
describe("Appointment", () => {

it("renders without crashing", () => {
  render(<Application />);
});
it("renders without crashing", () => {
  render(<Header />);
});
it("renders without crashing", () => {
  render(<Show />);
});
it("renders without crashing", () => {
  render(<Empty />);
});
it("renders without crashing", () => {
  render(<Confirm />);
});
it("renders without crashing", () => {
  render(<Form />);
});
it("renders without crashing", () => {
  render(<Status />);
});
it("renders without crashing", () => {
  render(<Error />);
});
})