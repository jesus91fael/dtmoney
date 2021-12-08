import { Container } from "./styles";
import InComeImg from '../../assets/income.svg'
import outComeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

export function Summary(){
  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={InComeImg} alt="Entrada" />
        </header>
        <strong>R$ 1,00</strong>
      </div>
      <div>
        <header>
          <p>Sáidas</p>
          <img src={outComeImg} alt="Saídas" />
        </header>
        <strong>R$500,0</strong>
      </div>
      <div className='hightLight-background'>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$500,0</strong>
      </div>
    </Container>
  )
}