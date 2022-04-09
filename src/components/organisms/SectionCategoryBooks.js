import SpinerLoading from "components/atoms/SpinnerLoading";
import styled from "styled-components";
import TitleSectionBooks from "components/atoms/TitleSectionBooks";

const StyledConteinerBooksList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px 50px;
`;

function SectionCategoryBooks({ data, isloadingData, title }) {
  return (
    <section>
      <TitleSectionBooks title={title} />
      <StyledConteinerBooksList>
        {isloadingData ? <SpinerLoading /> : data}
      </StyledConteinerBooksList>
    </section>
  );
}

export default SectionCategoryBooks;
