export const SearchInput = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      className="border rounded border-green-800 mr-4 p-1"
      type="text"
      placeholder="Search for a country..."
      value={searchQuery}
      onChange={(event) => setSearchQuery(event.target.value)}
    />
  );
};
