import { render, screen } from "@testing-library/react";
import Country from "./components/Country/Country";

test("renders country components", () => {
  render(<Country />);
});
