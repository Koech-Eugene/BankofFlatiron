import { useEffect, useState } from "react";
import TransactionList from "./TransactionList";

function Bank() {
  const [transactions, setTransactions] = useState([]);

  const URL = "http://localhost:9999/transactions";
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

  return <TransactionList transactions = {transactions}/>;
}
export default Bank;
