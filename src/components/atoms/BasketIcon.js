import { ICON_BASKET } from "../icons/icons";
import styled from "styled-components";

// const StyledWrapper = styled.div`
//   line-height: 50px;
// `;
const StyledIconWrapper = styled.div`
  float: left;
  position: relative;
  cursor: pointer;
`;
const StyledIcon = styled.div`
  text-align: center;
  vertical-align: middle;
  margin-right: 24px;
  font-size: 1.5rem;
`;
const StyledBadgeIcon = styled.span`
  position: absolute;
  bottom: 4px;
  left: -13px;
  font-size: 15px;
  background-color: #e20000;
  line-height: normal;
  border-radius: 20px;
  padding: 0 5px;
`;

function BasketIcon() {
  return (
    <StyledIconWrapper style={{ color: "white" }}>
      <StyledIcon>
        {ICON_BASKET}
        <StyledBadgeIcon>99</StyledBadgeIcon>
      </StyledIcon>
    </StyledIconWrapper>
  );
}

export default BasketIcon;
