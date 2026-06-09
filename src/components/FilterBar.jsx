export default function FilterBar({ type, setType }) {
  return (
    <select
      value={type}
      onChange={(e) => setType(e.target.value)}
    >
      <option value="">All</option>
      <option value="Placement">Placement</option>
      <option value="Result">Result</option>
      <option value="Event">Event</option>
    </select>
  );
}