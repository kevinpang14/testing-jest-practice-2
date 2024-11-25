import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // MemoryRouter is a React Router component that allows you to test your components in isolation, without the need for a full browser environment.
import NavLink from "../../components/NavLink";

describe("NavLink Component", () => {
  test("render link with correct href", () => {
    render(
      <MemoryRouter>
        <NavLink />
      </MemoryRouter>
    );
    // expect(screen.getByRole("link")).toBeInTheDocument();

    const linkElement = screen.getByText("About");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.closest("a")).toHaveAttribute("href", "/about");
  });
});
