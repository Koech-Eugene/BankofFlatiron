function TransactionFilter() {
  const handleFilter = (e) => {
    searcht(e.target.value)
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Search description"
        onChange={handleFilter}
      />
    </div>
  );
}
export default TransactionFilter;
