import { useState, useEffect } from "react";
import styled from "styled-components";
import { imgs, webPpl } from "./Data.js";
import { IsCorrect, IsWrong } from "./Modal.jsx";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
	${reset}

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
  }
`;

const StyledScore = styled.section`
  color: #86c2f6;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
`;

const StyledSelectedImg = styled.article`
  height: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  height: 400px;
`;

const StyledRedo = styled.button`
  cursor: pointer;
  font-size: 20px;
  background-color: #8eb9de;
  color: #11436f;
  border-radius: 12px;
  border: none;
`;

const StyledUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  padding-top: 15px;
  cursor: pointer;
  font-size: 20px;
`;
function Content({ score, Isover, setScore, setIsover }) {
  const [Isright, setIsright] = useState(false);
  return (
    <main>
      <StyledScore>
        <Score score={score}></Score>
      </StyledScore>
      {score === 5 ? (
        <div>끄읕</div>
      ) : (
        <SelectImg
          score={score}
          Isright={Isright}
          setIsright={setIsright}
          setScore={setScore}
        ></SelectImg>
      )}
      <Redo setScore={setScore}></Redo>
    </main>
  );
}

function Score({ score }) {
  return <div>{score}</div>;
}

function SelectImg({ score, setIsright, setScore, Isright }) {
  return (
    <StyledSelectedImg>
      <Img src={imgs[score].src}></Img>
      <h3>🫶누군지 맞춰보세요!🫶</h3>
      {Isright === "right" && (
        <IsCorrect
          score={score}
          setScore={setScore}
          setIsright={setIsright}
        ></IsCorrect>
      )}
      {Isright === "wrong" && <IsWrong setIsright={setIsright}></IsWrong>}
      <SelectItems
        score={score}
        setIsright={setIsright}
        setScore={setScore}
      ></SelectItems>
    </StyledSelectedImg>
  );
}

function Redo({ setScore }) {
  return (
    <StyledRedo
      onClick={() => {
        setScore(0);
      }}
    >
      다시 해보기
    </StyledRedo>
  );
}

function SelectItems({ score, setIsright, setScore }) {
  let [names, setNames] = useState([...setRandomNames(imgs[score].name)]);
  useEffect(() => {
    setNames([...setRandomNames(imgs[score].name)]);
  }, [score]);
  return (
    <StyledUl>
      {names.map((item, i) => {
        return (
          <li
            onClick={() => {
              if (item === imgs[score].name) {
                setIsright("right");
              } else {
                setIsright("wrong");
              }
            }}
          >
            {i + 1 + ". " + item}
          </li>
        );
      })}
    </StyledUl>
  );
}

//답 이름을 포함하여 랜덤으로 이름을 섞어 리턴하는 함수
function setRandomNames(essentialName) {
  let temp = [essentialName];
  while (temp.length < 5) {
    const randomPpl = webPpl[Math.floor(Math.random() * webPpl.length)];
    if (!temp.includes(randomPpl)) {
      temp.push(randomPpl);
    }
  }
  temp.sort(() => Math.random() - 0.5);
  return temp;
}

export default Content;
