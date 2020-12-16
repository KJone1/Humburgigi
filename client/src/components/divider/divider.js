import styled from "styled-components";

const StyledDivider = styled.span`
  height: 2px;
  margin: 0 auto;
  display: block;
  width: 50%;
  background: black;
  margin-bottom: 20px;
`;

const Divider = () => {
  return <StyledDivider />;
};
export default Divider;
