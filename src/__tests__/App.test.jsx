import React from "react";
// render is for simulating the component
// screen is for querying the component
// fireEvent is for simulating events
import { render, screen, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom"; // for toBeInTheDocument
import App from "../App";

describe("App Component", () => {
  test("vite logo is in the document", () => {
    render(<App />); // render the component
    const viteLogo = screen.getByAltText("Vite logo");
    expect(viteLogo).toBeInTheDocument(); // check if the logo is in the document
  });

  test("react logo is in the document", () => {
    render(<App />);
    const reactLogo = screen.getByAltText("React logo");
    expect(reactLogo).toBeInTheDocument();
  });

  test("display count is 0", () => {
    render(<App />);
    const count = screen.getByText("count is 0");
    expect(count).toBeInTheDocument();
  });

  test("increment count", () => {
    render(<App />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    const count = screen.getByText("count is 1");
    expect(count).toBeInTheDocument();
  });

  test("Click learn more", () => {
    render(<App />);
    const clickLearnMore = screen.getByText(
      "Click on the Vite and React logos to learn more"
    );
    expect(clickLearnMore).toBeInTheDocument();
  });
});
