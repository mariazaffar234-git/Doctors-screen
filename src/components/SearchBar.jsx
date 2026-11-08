
import '../cssfiles/SearchBar.css';

function SearchBar({ onSearch }) {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };        
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." onChange={handleInputChange} />
    </div>
  );
}
export default SearchBar;