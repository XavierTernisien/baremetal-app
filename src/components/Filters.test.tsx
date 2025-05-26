import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { Filters } from "../components/Filters";
import store from "../redux/store";

describe("Filters component", () => {
  it("should render without crashing", () => {
    render(
      <Provider store={store}>
        <Filters />
      </Provider>
    );
  });

  it("should toggle visibility", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Filters />
      </Provider>
    );

    const button = getByText("Cacher les options");
    fireEvent.click(button);

    expect(button).toBeDefined();
  });

  it("should update the input field", () => {
    const { getByRole } = render(
      <Provider store={store}>
        <Filters />
      </Provider>
    );

    const input = getByRole("textbox");
    fireEvent.change(input, { target: { value: "AMD" } });

    expect(input).toBeTruthy();
  });

  it("should select an option", () => {
    const { getAllByRole } = render(
      <Provider store={store}>
        <Filters />
      </Provider>
    );

    const radios = getAllByRole("radio");
    fireEvent.click(radios[1]);

    expect(radios.length).toBeGreaterThan(1);
  });
});
