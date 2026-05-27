import { Container, Content, Row } from "./styles";
import Input from "./Components/Input/Input";
import Button from "./Components/Button/Button";
import { useState } from "react";

function App() {
  const [numero, setNumero] = useState<string>("");

  const addNumero = (num: string) => {
    setNumero((prev) => `${prev}${num}`);
  };

  const erase = () => {};

  return (
    <Container>
      <Content>
        <Input>{numero}</Input>
        <Row>
          <Button onClick={() => addNumero("**")}>**</Button>
          <Button onClick={() => addNumero("/")}>/</Button>
          <Button onClick={() => addNumero("*")}>*</Button>
          <Button onClick={() => addNumero("-")}>-</Button>
        </Row>
        <Row>
          <Button onClick={() => addNumero("7")}>7</Button>
          <Button onClick={() => addNumero("8")}>8</Button>
          <Button onClick={() => addNumero("9")}>9</Button>
          <Button onClick={() => addNumero("+")}>+</Button>
        </Row>
        <Row>
          <Button onClick={() => addNumero("4")}>4</Button>
          <Button onClick={() => addNumero("5")}>5</Button>
          <Button onClick={() => addNumero("6")}>6</Button>
          <Button onClick={() => addNumero(".")}>.</Button>
        </Row>
        <Row>
          <Button onClick={() => addNumero("*3")}>3</Button>
          <Button onClick={() => addNumero("*2")}>2</Button>
          <Button onClick={() => addNumero("1")}>1</Button>
          <Button onClick={() => addNumero("**")}>=</Button>
        </Row>
        <Row>
          <Button onClick={() => addNumero("0")}>0</Button>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
