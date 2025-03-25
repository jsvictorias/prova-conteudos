import styled from 'styled-components';

export const CapaContainer = styled.div`
  height: 600vh; /* Aumentado temporariamente para testar */
  padding-top: 8vh;
  width: 100%;
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative; 

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
    display: block; 
  }


  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right, #000000 0%,    
      transparent 100% 
    );
    pointer-events: none; 
  }
`;