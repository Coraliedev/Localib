interface InputNumberProps {
  value?: string;
}

export const InputNumber: React.FC<InputNumberProps> = ({ value }) => {
  return (
    <div className={value}>
      <label htmlFor={value}> {value} : </label>
      <input type="number" name={value} required></input>
    </div>
  );
};
