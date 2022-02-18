# 유투브 리액트 강의

1:32 부분 듣는 중

## 배운내용

#### REACT

- react-reveal (설치하는 과정에서 issue) -> https://stackoverflow.com/questions/68016188/problem-to-install-react-reveal-animation-on-terminal-visual-studio-code
  but why..?

#### CSS

- justify-content: space-between 으로 동일한 간격으로 펼쳐져 있는 요소 3개 중 2개의 거리를 더 좁히고 싶을때 -> 두 개의 요소를 하나의
  container로 묶어주면 됨(해당 컨테이너가 나머지 한 개의 요소와 동일한 간격을 가지게 됨)

- creating animations using keyframes(@keyframes)

- props를 styled-component 로 전달해서 template literal로 속성값 표현에 사용할 수 있다.
  ex) 같은 요소에 변경되는 이미지를 적용시, 이미지 경로를 표현시에 활용

- animation 적용 연습

- rightButton이 업었던 accessories 섹션의 경우, rightBtnText가 존재할 때만 컴포넌트를 렌더링 하도록 코드를 짜서 필요없을때는
  보이지 않도록 해결

  - z-index로 overlapping? 구현함 -> BurgerNav가 다른 페이지 내용 위에 오도록.

  - TIP: to align something, WRAP IT
    -> 사이드바에서 닫는 버튼 만들고, 버튼을 우측에 붙이고 싶을 때, 해당 버튼을 div로 감싸고 그 안에서 display flex 활용해서
    배치하면 됨, to align something u need a parent wrapper

#### 기타

- vscode에서 ctrl+p 단축키를 통해 검색해서 컴포넌트 파일이나 기타 필요 경로에 접근하는게 가능
