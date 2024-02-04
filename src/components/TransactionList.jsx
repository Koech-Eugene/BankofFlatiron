function TransactionList() {
  return (
    <>
      <h3>Transactions</h3>
      <table className="transaction">
        <tr>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
        <tr>
          <td>Payment for food</td>
          <td>Food</td>
          <td>1000</td>
          <td>1/2/2024</td>
        </tr>
      </table>
    </>
  );
}

export default TransactionList;
