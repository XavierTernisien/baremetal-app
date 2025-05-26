import { useEffect, useState } from "react";
import { setFilter } from "../redux/filterSlice";
import { useDispatch } from "react-redux";

const filtersOptions = ["Intel", "AMD", "ARM"];
const renderCount = { count: 0 };

export const Filters = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedOption) {
      dispatch(setFilter(selectedOption));
    }
  }, [selectedOption]);

  return (
    <>
      <h2 style={{ color: "red", fontSize: "32px", paddingLeft: "10%" }}>
        Filtres 🔍
      </h2>

      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Cacher" : "Afficher"} les options
      </button>

      {isVisible &&
        filtersOptions.map((option, i) => {
          return (
            <div key={Math.random()}>
              <input
                type="radio"
                name="filterOption"
                value={option}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              {option}
            </div>
          );
        })}

      <input
        type="text"
        onChange={(e) => {
          setInputValue(e.target.value);
          setSelectedOption(e.target.value);
        }}
        value={inputValue}
      />
    </>
  );
};
