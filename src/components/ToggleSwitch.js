import { useContext } from "react";
import "../blocks/ToggleSwitch.css";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";

const ToggleSwitch = () => {
  const { currentTempUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  console.log(currentTempUnit);

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
        <p className={`toggle__switch-f ${currentTempUnit === "F"}`}>F</p>
        <p className={`toggle__switch-c ${currentTempUnit === "C"}`}>C</p>
      </label>
    </>
  );
};

export default ToggleSwitch;
