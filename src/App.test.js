import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import ThemedMode from "./components/themeMode";

test("renders my name text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Winni Huang/i);
  expect(linkElement).toBeInTheDocument();
});

describe("ThemedMode component", () => {
  test("toggles dark mode on button click", () => {
    render(<ThemedMode />);
    expect(screen.queryByText("dark")).toBeNull();

    const modeBtn = screen.getByRole("button", /modeBtn/i);

    userEvent.click(modeBtn);
    expect(document.documentElement.classList.contains("dark")).toBe(true);

    userEvent.click(modeBtn);
    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });
});
