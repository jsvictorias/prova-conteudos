import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

export const Header = styled.div`
  height: 8vh;
  width: 100vw;
  background-color: #101010;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgContainer = styled.div`
  height: 2.5vh;
  width: 86.15%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
  }
`;
