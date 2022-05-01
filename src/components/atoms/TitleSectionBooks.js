import styled from "styled-components";
const StyledTitleCategorySection = styled.h1`
  border-bottom: 1px solid black;
  width: 90%;
  padding: 30px;
  margin: auto;
`;


function TitleSectionBooks({title}) {
    return (
        <StyledTitleCategorySection >{title}</StyledTitleCategorySection>
      );
}

export default TitleSectionBooks;