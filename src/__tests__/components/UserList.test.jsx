import { render, screen } from "@testing-library/react";
import UserList from "../../components/UserList";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          id: 1,
          name: "John Doe",
        },
      ]),
  });
});

describe("UserList Component", () => {
  test("renders user list", async () => {
    render(<UserList />);
    const userList = await screen.findByText("John Doe");
    expect(userList).toBeInTheDocument();
  });
});
