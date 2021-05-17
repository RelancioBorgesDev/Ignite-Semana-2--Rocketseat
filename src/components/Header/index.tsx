import logo from '../../assets/logo.svg';
import { Container, Content } from './styles';


interface HeaderProps{
    onOpenNewTransactionModal: () => void;
}

export default function Header ({ onOpenNewTransactionModal }: HeaderProps){

    return(
        <Container>
            <Content> 
                <img src={logo} alt="" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova Transação
                </button>
            </Content>   
        </Container>
    )
}

