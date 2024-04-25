import { useContext } from "react";
import "../blocks/ToggleSwitch.css";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";

const ToggleSwitch = () => {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <>
      <input
        className="toggle__switch-checkbox"
        id={"switch-new"}
        type="checkbox"
        onChange={handleToggleSwitchChange}
      />
      <label className="toggle__switch-label" htmlFor={"switch-new"}>
        <span className={"toggle__switch-button"} />
        <p className={`toggle__switch-f ${currentTemperatureUnit === "F"}`}>
          F
        </p>
        <p className={`toggle__switch-c ${currentTemperatureUnit === "C"}`}>
          C
        </p>
      </label>
    </>
  );
};

export default ToggleSwitch;
