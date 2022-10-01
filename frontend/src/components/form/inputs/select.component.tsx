import { Etat } from "../../../enums/etat.enum";
import { Type } from "../../../enums/type.enum";

interface SelectProps {
  value?: string;
}

export const Select: React.FC<SelectProps> = ({ value }) => {
  return (
    <div className={value}>
      <label htmlFor={value}>{value}:</label>
      <select name={value} id={value}>
        {value === "Etat" &&
          Object.values(Etat).map((etat, index) => (
            <option key={index} value={etat}>
              {etat}
            </option>
          ))}
        {value === "Type" &&
          Object.values(Type).map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
      </select>
    </div>
  );
};
