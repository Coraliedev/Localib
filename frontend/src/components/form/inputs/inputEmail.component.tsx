interface InputEmailProps {
  value?: string;
}

export const InputEmail: React.FC<InputEmailProps> = ({ value }) => {
  return (
    <div className={value}>
      <label htmlFor={value}> {value} : </label>
      <input type="email" name={value} required></input>
    </div>
  );
};
