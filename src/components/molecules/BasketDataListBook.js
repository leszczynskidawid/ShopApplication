import styled from "styled-components";

const Wraper = styled.li`
  display: flex;
  border-bottom: 1px solid black;
  padding: 8px;
  font-size: 12px;
  justify-content: space-between;
`;
const StyledImg = styled.img`
  width: 50px;
  height: 90px;
`;
const TextContainer = styled.div`
  align-self: center;
`;

function BasketDataListBook({ book }) {
  const { formats, title } = book;
  return (
    <Wraper>
      <div>
        <StyledImg src={formats["image/jpeg"]} alt="" />
      </div>
      <TextContainer>{title}</TextContainer>
    </Wraper>
  );
}

export default BasketDataListBook;
