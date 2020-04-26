import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;

    background: #282828;
    font-family: 'Montserrat', sans-serif;
    color: white;
  }
`;

export const Form = styled.form`
  box-sizing: content-box;
`;

export const Container = styled.div`
  width: 550px;
  margin: 0 auto;
`;

export const Header = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-family: "Montserrat Semibold", sans-serif;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  background: #1a1a1a;
  width: 94%;
  height: 45px;
  border: 1px solid transparent;
  border-radius: 5px;
  font-family: "Montserrat", sans-serif;
  color: white;
  font-size: 14px;
  padding: 0 15px;
  outline: none;
  transition: border-color 0.2s ease-in;

  &:focus {
    border-color: #ff7373;
  }
`;

export const Select = styled.select`
  background: #1a1a1a;
  width: 100%;
  height: 45px;
  border: 1px solid transparent;
  border-radius: 5px;
  font-family: "Montserrat", sans-serif;
  color: white;
  font-size: 14px;
  padding: 0 15px;
  outline: none;
  transition: border-color 0.2s ease-in;

  &:focus {
    border-color: #ff7373;
  }
`;

export const Button = styled.button`
  background-image: linear-gradient(-90deg, #ff7373 0%, #fddb33 100%);
  border-radius: 5px;
  border: 0;
  height: 45px;
  color: #1a1a1a;
  font-size: 16px;
  font-family: "Montserrat Bold", sans-serif;
  cursor: pointer;
  outline: none;
`;

export const Result = styled.div`
  margin-bottom: 20px;
`;

export const ResultContainer = styled.div`
  margin-top: 50px;
`;

export const ResultContent = styled.div`
  margin-top: 10px;
  background: #1a1a1a;
  border-radius: 5px;
  padding: 10px;

  ul {
    list-style: none;
  }

  ul li {
    font-size: 14px;
    font-weight: bold;
    font-family: "Montserrat Bold", sans-serif;
    line-height: 30px;
  }

  ul li strong {
    color: #ff7373;
  }
`;
