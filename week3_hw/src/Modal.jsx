import styled from "styled-components";
const StyledModal = styled.aside`
  position: absolute;
  background-color: #abcae4;
  padding: 15px;
  border-radius: 15px;
`;

function IsCorrect({ score, setScore, setIsright }) {
  return (
    <StyledModal>
      <h3>맞았습니당 🎉</h3>
      <button
        onClick={() => {
          setScore(score + 1);
          setIsright(false);
        }}
      >
        닫기
      </button>
    </StyledModal>
  );
}
function IsWrong({ setIsright }) {
  return (
    <StyledModal>
      <h3>틀렸어요... 너 무 해 🥺</h3>
      <button
        onClick={() => {
          setIsright(false);
        }}
      >
        닫기
      </button>
    </StyledModal>
  );
}
export { IsCorrect, IsWrong };
