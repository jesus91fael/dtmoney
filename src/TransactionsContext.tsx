import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

interface Transaction{
  id: number
  title: string
  amount: number
  type: string
  category: string
  createdAt: string
}

interface TransactionsProvidersProps{
  children: ReactNode
}

// interface TransactionsInput{
//     title: string
//     value: number
//     category: string
//     type: string
// }

//type TransactionsInput = Pick<Transaction, 'title' | 'amount' | 'type' | category'>

type TransactionsInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsContextDate{
  transactions: Transaction[]
  createTransaction: (transaction: TransactionsInput) => Promise<void>
}

export const TransactionsContext = createContext<TransactionsContextDate>({} as TransactionsContextDate);

export function TransactionsProviders({ children }: TransactionsProvidersProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  
  useEffect(() => {
    api.get('transactions')
    .then(response => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(transactionInput: TransactionsInput){
    const response = await api.post('/transactions', {...transactionInput, createdAt: new Date()})
    const { transaction } = response.data

    setTransactions([
      ...transactions,
      transaction
    ])
  }

  return(
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}
