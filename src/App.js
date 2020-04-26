import React, { Fragment, useState } from "react";

import {
  GlobalStyle,
  Container,
  Header,
  Form,
  FormGroup,
  Label,
  Input,
  Select,
  Button,
  Result,
  ResultContainer,
  ResultContent,
} from "./assets/styles";

import Logo from "./assets/images/logo.svg";

const App = () => {
  const [genero, setGenero] = useState("");
  const [idade, setIdade] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [nivel, setNivel] = useState("");
  const [tmb, setTmb] = useState("");
  const [maintenance, setMaintenance] = useState("");
  const [loseWeight, setLoseWeight] = useState("");
  const [gainWeight, setGainWeight] = useState("");
  const [toggle, setToggle] = useState(false);

  const calcular = (e) => {
    e.preventDefault();

    const tmb =
      genero === "female"
        ? 655 + 9.6 * Number(peso) + 1.8 * Number(altura) - 4.7 * Number(idade)
        : 66 + 13.7 * Number(peso) + 5 * Number(altura) - 6.8 * Number(idade);

    const maintenance = tmb * Number(nivel);

    setTmb(Math.round(tmb));
    setMaintenance(Math.round(maintenance));
    setLoseWeight(Math.round(maintenance - 450));
    setGainWeight(Math.round(maintenance + 450));

    setToggle(true);
  };

  return (
    <Fragment>
      <GlobalStyle />
      <Header>
        <img src={Logo} alt="KcalCal Logo" />
      </Header>
      <Container>
        <Form id="form" onSubmit={calcular}>
          <FormGroup>
            <Label htmlFor="gender">Seu gênero</Label>
            <Select
              id="gender"
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
            >
              <option value="">Selecione</option>
              <option value="male">Masculino</option>
              <option value="female">Feminino</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="age">Sua idade</Label>
            <Input
              type="number"
              id="age"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="weight">Seu peso</Label>
            <Input
              type="number"
              id="weight"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="height">Sua altura</Label>
            <Input
              type="number"
              id="height"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="activity_level">
              Seu nível de atividade física
            </Label>
            <Select
              id="activity_level"
              value={nivel}
              onChange={(e) => setNivel(e.target.value)}
            >
              <option value="">Selecione</option>
              <option value="1.2">Sedentário</option>
              <option value="1.375">Pouca atividade</option>
              <option value="1.55">Atividade moderada</option>
              <option value="1.725">Atividade intensa</option>
              <option value="1.9">Atividade muito intensa</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Button type="submit">Calcular!</Button>
          </FormGroup>
        </Form>

        {toggle && (
          <Result>
            <ResultContainer>
              <h2>Aqui está o resultado:</h2>

              <ResultContent>
                <ul>
                  <li>
                    Seu metabolismo basal é de <strong>{tmb} calorias</strong>.
                  </li>
                  <li>
                    Para manter o seu peso você precisa consumir em média{" "}
                    <strong>{maintenance} calorias</strong>.
                  </li>
                  <li>
                    Para perder peso você precisa consumir em média{" "}
                    <strong>{loseWeight} calorias</strong>.
                  </li>
                  <li>
                    Para ganhar peso você precisa consumir em média{" "}
                    <strong>{gainWeight} calorias</strong>.
                  </li>
                </ul>
              </ResultContent>
            </ResultContainer>
          </Result>
        )}
      </Container>
    </Fragment>
  );
};

export default App;
