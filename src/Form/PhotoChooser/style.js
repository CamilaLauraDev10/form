import styled from "styled-components";

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  marginLeft: 50px;
`;

const StyledImg = styled.img`
    minWidth: 90%;
    maxHeight: 300px;
    maxWidth: 300px;
    minHeight: 200px;
    width: 300px;
    height: 300px;
    border: 5px solid #30475E;
`;

export { StyledBox, StyledImg };