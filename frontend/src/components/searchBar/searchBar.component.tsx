import { useQueryClient } from "react-query";
import "./searchBar.css";

interface SearchBarProps {
  modifySearchValue: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ modifySearchValue }) => {
  const queryClient = useQueryClient();
  return (
    <div className="search_bar">
      <input
        type="text"
        className="search"
        placeholder="Recherche..."
        onInput={(e:any) => modifySearchValue(e.target.value.toLowerCase())}
      />
    </div>
  );
};
