interface InputTextProps {
  value?: string;
  block?: boolean;
  storage?: string;
}

export const InputText: React.FC<InputTextProps> = ({
  value,
  block,
  storage,
}) => {
  return (
    <div className={value}>
      <label htmlFor={value}> {value} : </label>
      <>
        {block && storage ? (
          <input
            type="text"
            name={value}
            required
            readOnly
            value={sessionStorage.getItem(storage)!}
          ></input>
        ) : (
          <input type="text" name={value} required></input>
        )}
      </>
    </div>
  );
};
