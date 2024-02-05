import { useEffect, useState } from "react";
import TransactionList from "./TransactionList";
import TransactionFilter from "./TransactionFilter";

function Bank() {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState('')


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


  const filteredTransactions = transactions.filter(item=>{
    if(search) {
        return item.description.toLowerCase().includes(search.toLowerCase())
    }
    return transactions
})

  return (
    <>
      <h2>Search</h2>
      <TransactionFilter search={setSearch}/>
      <TransactionList transactions={filteredTransactions} />
    </>
  );
}
export default Bank;
