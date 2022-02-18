import React from "react";
import styled from "styled-components";
import Fade from "react-reveal";

function Section({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg,
}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>

      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("./images/model-s.jpg");
  display: flex;

  // flex는 원래 왼쪽에서 오른쪽으로 요소들이 차례로 정렬되는데, column 으로 설정해주게 되면 위에서 아래로 설정됨
  //
  flex-direction: column;
  justify-content: space-between; // 원래는 horizontal 배치에 관여하는 속성이지만, 지금은 방향이 바뀌어있으므로 vertical 속성에 해당됨
  align-items: center; // horizontal alignment
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  // props로 전달받은 backgroundImage를 Wrap 컴포넌트에 전달 -> 템플릿 리터럴로 js작성하듯이 작성해서 링크 설정하는게 가능함
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`;

const Buttons = styled.div``;
