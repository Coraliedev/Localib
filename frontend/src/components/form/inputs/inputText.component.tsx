interface InputTextProps {
  value?: string;
}

export const InputText: React.FC<InputTextProps> = ({ value }) => {
  return (
    <div className={value}>
      <label htmlFor={value}> {value} : </label>
      <input type="text" name={value} required></input>
    </div>
  );
};
