import { render, screen } from "@testing-library/react";
import App from "./App";

test("should renders a title", () => {
  render(<App />);
  const linkElement = screen.getByText(/welcome to/i);
  expect(linkElement).toBeInTheDocument();
});

test("should renders a subtitle", () => {
  render(<App />);
  const linkElement = screen.getByText(/{ this.application }/i);
  expect(linkElement).toBeInTheDocument();
});
