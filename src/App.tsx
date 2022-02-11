import Dashboard from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';
import { useState } from 'react';

export function App() {
  
  const [isNewTransactionModalOpen,setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModalOpen(){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModalOpen(){
    setIsNewTransactionModalOpen(false);
  }
  
  return (
    <>
      <Header   onOpenNewTransactionModal={handleOpenNewTransactionModalOpen}/>
      
      <Dashboard/>
      
      <Modal 
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModalOpen}>
        <h2>Cadastrar transação</h2>
      </Modal>
      
      <GlobalStyle />
    </>
  );
}