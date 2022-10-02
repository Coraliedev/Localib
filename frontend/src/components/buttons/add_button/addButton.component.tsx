import "./addButton.css";

interface UpdateButtonProps {
  value: string;
  onClick: () => void;
  className?: string;
}

export const AddButton: React.FC<UpdateButtonProps> = ({
  value,
  onClick,
  className,
}) => {
  return (
    <input
      type="button"
      className={className}
      value={value}
      onClick={() => onClick()}
    ></input>
  );
};
