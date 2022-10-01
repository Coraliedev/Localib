interface InputDateProps {
  value?: string;
}

export const InputDate: React.FC<InputDateProps> = ({ value }) => {
  return (
    <div className={value}>
      <label htmlFor={value}> {value} : </label>
      <input type="date" name={value} required></input>
    </div>
  );
};
