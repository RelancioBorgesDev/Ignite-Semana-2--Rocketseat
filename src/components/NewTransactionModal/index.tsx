import React from 'react';
import closeImg from '../../assets/close.svg'
import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { Container, TransactionTypeContainer } from './styles';

Modal.setAppElement('#root');

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
  }

export function NewTransactionModal({isOpen, onRequestClose}:NewTransactionModalProps){
    
  
    return(
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="Fechar modal" />
            </button>
        <Container>
                <h2>Cadastrar Transação</h2>

                <input 
                type="text" 
                placeholder="Título"
                />

                <input 
                type="number" 
                placeholder="Valor"
                />

                <TransactionTypeContainer>
                    <button type="button">
                        <img src={incomeImg} alt=""/>
                        <span>Entrada</span>
                    </button>

                    <button type="button">
                        <img src={outcomeImg} alt=""/>
                        <span>Saída</span>
                    </button>
                </TransactionTypeContainer>

                <input 
                type="number" 
                placeholder="Categoria"
                />

                <button type="submit">
                    Cadastrar
                </button>

        </Container>

        </Modal>
    );

}