import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "../../components/context/ThemeContext";
import ThemeButton from "../../components/context/ThemeButton";

describe("ThemeButton Component", () => {
  test("renders button with correct theme", () => {
    render(
      <ThemeProvider value="red">
        <ThemeButton />
      </ThemeProvider>
    );
    // expect(screen.getByRole("button")).toHaveStyle("background-color: red");
    expect(screen.getByText("Click Me")).toHaveStyle("background-color: red");
  });
});
