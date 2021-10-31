import styled from "styled-components";

export const LoadingWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(5, 5, 5, 0.3);
  img {
    width: 50px;
    height: 50px;
  }
`;
