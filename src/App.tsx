import React from 'react';
import Modal from 'react-modal'
import { useState } from "react";
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './global';
import { NewTransactionModal } from './components/NewTransactionModal';


Modal.setAppElement('#root')

export function App() {

  const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false)

  function handleOpenNewTransactionModal(){
    setIsNewTransactionOpen(true)
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />      
      <NewTransactionModal 
        isOpen={isNewTransactionOpen}
        onRequestClose={handleCloseNewTransactionModal}
        />
      <GlobalStyle />
    </>
  );
}
