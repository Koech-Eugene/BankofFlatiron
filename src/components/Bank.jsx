import { useEffect, useState } from "react";
import TransactionList from "./TransactionList";
import TransactionFilter from "./TransactionFilter";

function Bank() {
  const [transactions, setTransactions] = useState([]);

  const URL = "http://localhost:8080/transactions";
  useEffect(() => {
    async function fetchTransactions() {
      try {
        const response = await fetch(URL);
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    }

    fetchTransactions();
  }, []);

  return (
    <>
      <h2>Search</h2>
      <TransactionFilter />
      <TransactionList transactions={transactions} />
    </>
  );
}
export default Bank;
