import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import { test, vi } from "vitest";
import userEvent from "@testing-library/user-event";

const mockOnClick = vi.fn();

const Component = () => {
  const [state, setState] = useState(false);

  return (
    <button
      onClick={() => {
        mockOnClick();
        setState((prev) => !prev);
      }}
    >
      {state}
    </button>
  );
};

test("renders learn react link", async () => {
  render(<Component />);
  const user = userEvent.setup();

  const button = screen.getByRole("button");
  await user.click(button);

  expect(mockOnClick).toHaveBeenCalled();
});
