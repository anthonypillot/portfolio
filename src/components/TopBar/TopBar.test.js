import { render, screen } from "@testing-library/react";
import moment from "moment";
import TopBar from "./TopBar";

test("should renders anthonypillotOS in the TopBar", () => {
  render(<TopBar />);
  const linkElement = screen.getByText(/anthonypillotOS/i);
  expect(linkElement).toBeInTheDocument();
});

test("should renders about section in the TopBar", () => {
  render(<TopBar />);
  const linkElement = screen.getByText(/about/i);
  expect(linkElement).toBeInTheDocument();
});

test("should renders date in the TopBar", () => {
  render(<TopBar />);
  const linkElement = screen.getByText(
    moment().format("LL") + " " + moment().format("LTS")
  );
  expect(linkElement).toBeInTheDocument();
});
