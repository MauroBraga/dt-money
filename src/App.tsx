import Dashboard from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionContext } from './TransactionContext';


export function App() {
  
  const [isNewTransactionModalOpen,setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModalOpen(){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModalOpen(){
    setIsNewTransactionModalOpen(false);
  }
  
  return (
    <TransactionContext.Provider value={[]}>
      <Header   onOpenNewTransactionModal={handleOpenNewTransactionModalOpen}/>
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModalOpen}/>
      <Dashboard/>
      <GlobalStyle />
    </TransactionContext.Provider>
  );
}