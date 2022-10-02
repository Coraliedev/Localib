import "./filterBar.css";

interface FilterBarProps {
  modifyDates: (value: number[]) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ modifyDates }) => {
  const submitFilterDates = (e: any) => {
    e.preventDefault();
    let startdate = new Date(e.target[0].value).getTime();
    let enddate = new Date(e.target[1].value).getTime();
    modifyDates([startdate, enddate]);
  };
  return (
    <form onSubmit={submitFilterDates} className="filter_bar">
      <label htmlFor="startdate">Du :</label>
      <input type="date" name="startdate" />
      <label htmlFor="enddate">Au :</label>
      <input type="date" name="enddate" />
      <input type="submit" value="Valider" />
    </form>
  );
};
