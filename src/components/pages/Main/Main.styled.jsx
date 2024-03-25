
import styled from 'styled-components';


export const StyledDiv = styled.div`
  padding: 20px;
  background-color: #283747;
  color: white;
  font-family: 'Goldman', sans-serif;

  h1 {
    font-size: 36px;
    margin-bottom: 20px;
  }

  form {
    margin-bottom: 20px;

    input[type="text"] {
      padding: 8px;
      border: none;
      border-radius: 4px;
      margin-right: 10px;
      font-size: 16px;
    }

    button {
      padding: 8px 20px;
      border: none;
      border-radius: 4px;
      background-color: #1ABC9C;
      color: white;
      cursor: pointer;
      font-size: 16px;
    }
  }
`;