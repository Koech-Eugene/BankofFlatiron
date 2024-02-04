
function TransactionList( {transactions} ) {
  return (
    <>
      <h3>Transactions</h3>
      <table className="transaction">
        <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
        </thead>
        {/* <tr>
          <td>Payment for food</td>
          <td>Food</td>
          <td>1000</td>
          <td>1/2/2024</td>
        </tr> */}
       <tbody>
        {transactions.map((transactions) => (
          <tr key={transactions.id}>
            <td>{transactions.date}</td>
            <td>{transactions.description}</td>
            <td>{transactions.category}</td>
            <td>{transactions.amount}</td>
          </tr>
        ))}
       </tbody>
      </table>
    </>
  );
}

export default TransactionList;
