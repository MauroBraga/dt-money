import Dashboard from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionProvider } from './hooks/useTransaction';


export function App() {
  
  const [isNewTransactionModalOpen,setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModalOpen(){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModalOpen(){
    setIsNewTransactionModalOpen(false);
  }
  
  return (
    <TransactionProvider>
      <Header   onOpenNewTransactionModal={handleOpenNewTransactionModalOpen}/>
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModalOpen}/>
      <Dashboard/>
      <GlobalStyle />
    </TransactionProvider>
  );
}