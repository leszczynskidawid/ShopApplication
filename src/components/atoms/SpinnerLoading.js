import styled, { keyframes } from "styled-components";
import Colors from "theme/Colors";

const Spin = keyframes`
 0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  border: 12px solid ${Colors.ORANGE};
  transform: translate(-50%, -50%);
  border-top: 10px solid ${Colors.BLACK};
  border-radius: 50%;
  width: 80px;
  text-align: center;
  height: 80px;
  animation: ${Spin} 1s linear infinite;
`;

function SpinerLoading() {
  return <StyledSpinner />;
}

export default SpinerLoading;
