import { useState } from "react";
import Header from "./Header.jsx";
import Content from "./Content.jsx";
import styled from "styled-components";
const StyledApp = styled.main`
  background-color: #e9f2f9;
  text-align: center;
`;
function App() {
  const [Isover, setIsover] = useState(false);
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <StyledApp>
        <Header></Header>
        <Content
          Isover={Isover}
          score={score}
          setScore={setScore}
          setIsover={setIsover}
        ></Content>
      </StyledApp>
    </div>
  );
}

export default App;
