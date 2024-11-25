import { render, screen } from "@testing-library/react";
import Button from "../../components/Button";

describe("Button Component", () => {
  test("Button is in the document", () => {
    render(<Button label="Click Me" />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    expect(button).toHaveTextContent("Click Me");
  });
});
