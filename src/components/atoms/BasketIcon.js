import { ICON_BASKET } from "../icons/icons";
import styled from "styled-components";

import Colors from "theme/Colors";
import { FontTheme } from "theme/fonts";


const StyledIconWrapper = styled.div`
  float: left;
  position: relative;
  cursor: pointer;
`;
const StyledIcon = styled.div`
  text-align: center;
  vertical-align: middle;
  margin-right: 24px;
  font-size: ${FontTheme.h4};
  color:${Colors.GREY};
`;
const StyledBadgeIcon = styled.span`
  position: absolute;
  bottom: 4px;
  left: -13px;
  font-size: ${FontTheme.h6};

  background-color: ${Colors.RED};
  line-height: normal;
  border-radius: 20px;
  padding: 0 5px;
`;

function BasketIcon() {


  return (
    <StyledIconWrapper>
      <StyledIcon>
        {ICON_BASKET}
        <StyledBadgeIcon>99</StyledBadgeIcon>
      </StyledIcon>
    </StyledIconWrapper>
  );
}

export default BasketIcon;
