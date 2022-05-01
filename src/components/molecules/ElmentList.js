import styled from "styled-components";

const StyledDiv = styled.div`
  line-height: 30px;
  word-spacing: 2px;
  & > label {
    font-weight: 600;
  }
`;
function ElementList({ labeltxt, bookInfo }) {
  return (
    <StyledDiv>
      <label>{labeltxt} : </label>
      <span>{bookInfo}</span>
    </StyledDiv>
  );
}

export default ElementList;
