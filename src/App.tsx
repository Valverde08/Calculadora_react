import { Container, Content, Row } from "./styles";
import Input from "./Components/Input/Input";
import Button from "./Components/Button/Button";
import { useState } from "react";

function App() {
  const [currentNumber, setCurrentNumber] = useState<string>("");
  const [firstNumber, setFirstNumber] = useState<string >("");
  const [ponto,setPonto] = useState<boolean>(false)
  const [result, setResult] = useState<number>();
  const [operator,setOperator] = useState<string>('')


  const addNumero = (num: string) => {
    if(currentNumber == "."){
      setCurrentNumber("0.");
      setPonto(true)
    }else{
      setCurrentNumber((prev) => `${prev}${num}`);
      setPonto(false)
    }
          
    
  };

  const clear = () => {
    setCurrentNumber('')
  };

  const handleOperation = (operator:string)=>{

        
        setFirstNumber(currentNumber),
        setOperator(operator)
        clear()
  }
 
  const handleResult = ()=>{
     Number(firstNumber) + Number(currentNumber)
      
    switch (operator){
      case"+":
        setResult(Number(firstNumber) + Number(currentNumber))
        break
      
      case"-":
        setResult(Number(firstNumber) - Number(currentNumber))
        break
      
      case"/":
        setResult(Number(firstNumber) / Number(currentNumber))
        break

      case"*":
        setResult(Number(firstNumber) * Number(currentNumber))
        break

      default:
        console.log("Não é possível fazer esse cáclulo!");
        
    }
      
      
  }

  return (
    <Container>
      <Content>
        <Input>{currentNumber}</Input>
        <Input>{firstNumber}</Input>

        
        <Input>{operator}</Input>
        <Input>{result}</Input>
        <Row>
          <Button onClick={clear}>C</Button>
          <Button onClick={()=>handleOperation("/")}>/</Button>
          <Button onClick={()=>handleOperation("*")}>*</Button>
          <Button onClick={()=>handleOperation("-")}>-</Button>
        </Row>
        <Row>
          <Button onClick={() => addNumero("7")}>7</Button>
          <Button onClick={() => addNumero("8")}>8</Button>
          <Button onClick={() => addNumero("9")}>9</Button>
          <Button onClick={()=>handleOperation("+")}>+</Button>
        </Row>
        <Row>
          <Button onClick={() => addNumero("4")}>4</Button>
          <Button onClick={() => addNumero("5")}>5</Button>
          <Button onClick={() => addNumero("6")}>6</Button>
          <Button onClick={() => addNumero(".")} disabled={ponto}>.</Button>
        </Row>
        <Row>
          <Button onClick={() => addNumero("3")}>3</Button>
          <Button onClick={() => addNumero("2")}>2</Button>
          <Button onClick={() => addNumero("1")}>1</Button>
          <Button onClick={handleResult}>=</Button>
        </Row>
        <Row>
          <Button onClick={() => addNumero("0")}>0</Button>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
